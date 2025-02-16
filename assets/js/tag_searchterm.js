var elements = document.getElementsByClassName("tag-badge");
elements.forEach(element => {
    element.addEventListener("click", on_tag_clicked);
});

function on_tag_clicked(){
    var tag_name = this.id.substring(4);
    var tag_string_only = tag_name;
    var tag_string_first = tag_name + ", ";
    var tag_string_secondary = ", " + tag_name;

    var terms = decodeURIComponent(window.location.hash.toLowerCase().substring(1)); // Remove #
    var commasCount = (terms.match(/,/g)||[]).length;
    console.log(commasCount);
    if(commasCount == 0){
        if(terms == ""){
            window.location.hash += tag_string_only;
        }
        else if (terms == tag_string_only){
            window.location.hash = "#";
        }
        else{
            window.location.hash += tag_string_secondary;
        }
    }
    else{
        console.log(terms, tag_string_first, terms.includes(tag_string_first));
        if(terms.includes(tag_string_first)){
            window.location.hash = "#" + terms.substring(tag_string_first.length);
        }
        else if(terms.includes(tag_string_secondary)){
            window.location.hash = "#" + terms.replace(tag_string_secondary, "");
        }
        else{
            window.location.hash += tag_string_secondary;
        }
    }
}