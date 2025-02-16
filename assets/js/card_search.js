import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  // actual search logic
  const filterItemsAll = (searchTerms) => {
    // Unhighlight
    highlightSearchTerm({ search: searchTerms, selector: ".card-container > div", clearHighlights: true});
    if(searchTerms == ""){
      // Show all elements if no search terms
      document.querySelectorAll(".card-container, .unloaded").forEach((element) => element.classList.remove("unloaded"));
      return;
    }
    // Add unloaded to all elements
    document.querySelectorAll(".card-container, .unloaded").forEach((element) => element.classList.add("unloaded"));

    searchTerms.split(",").forEach(searchTerm => {
      filterItem(searchTerm.trim());
    });

    document.querySelectorAll("a.card-container").forEach(function (element) {
      let iterator = element.nextElementSibling; // get next sibling element after h2, which can be h3 or ol
      let showFirstGroupingElement = false;
      // iterate until next group element (h2), which is already selected by the querySelectorAll(-).forEach(-)
      while (iterator
            && (iterator.tagName !== "a"
                || (iterator.classList == null
                    || !iterator.classList.contains("card-container")))) {
        if (iterator.tagName === "DIV") {
          const div = iterator;
          const unloadedSiblings = div.querySelectorAll(":scope > div.unloaded");
          const totalSiblings = div.querySelectorAll(":scope > div");

          if (unloadedSiblings.length === totalSiblings.length) {
            div.previousElementSibling.classList.add("unloaded"); // Add the '.unloaded' class to the previous grouping element (e.g. year)
            div.classList.add("unloaded"); // Add the '.unloaded' class to the div itself
          } else {
            showFirstGroupingElement = true; // there is at least some visible entry, don't hide the first grouping element
            div.classList.remove("unloaded"); // Add the '.unloaded' class to the div itself
          }
        }
        iterator = iterator.nextElementSibling;
      }
      // Add unloaded class to first grouping element (e.g. year) if no item left in this group
      if (showFirstGroupingElement) {
        element.classList.remove("unloaded");
      }
    });
  };

  const filterItem = (searchTerm) => {
    // highlight-search-term
    if (CSS.highlights) {
      const {matchingElements, nonMatchingElements} = highlightSearchTerm({ search: searchTerm, selector: ".card-container > div", clearHighlights: false });
      if (matchingElements == null) {
        return;
      }
      // Remove unloaded from all matched elements
      matchingElements.forEach((element) => {
        element.classList.remove("unloaded");
      });
    } else {
      // Simply remove unloaded class from all matching items if Browser does not support CSS highlights
      document.querySelectorAll(".card-container > div").forEach((element, index) => {
        const text = element.innerText.toLowerCase();
        if (text.indexOf(searchTerm) != -1) {
          element.classList.remove("unloaded");
        }
      });
    }
  };

  const updateInputField = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1)); // Remove the '#' character
    document.getElementById("card_search").value = hashValue;
    filterItemsAll(hashValue.toLowerCase());
  };

  // Sensitive search. Only start searching if there's been no input for 300 ms
  let timeoutId;
  document.getElementById("card_search").addEventListener("input", function () {
    clearTimeout(timeoutId); // Clear the previous timeout
    const searchTerms = this.value.toLowerCase();
    window.location.hash = "#" + searchTerms;  // Update hash value
    timeoutId = setTimeout(filterItemsAll(searchTerms), 300);
  });

  window.addEventListener("hashchange", updateInputField); // Update the filter when the hash changes

  updateInputField(); // Update filter when page loads
});
