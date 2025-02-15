---
layout: page
title: sketches
permalink: /sketches/
description: Small pieces of output from my learning/practice endeavors.
nav: true
nav_order: 4
display_categories: 
horizontal: false
---

{% if site.sketch_search %}
{% include card_search.liquid %}
{% endif %}

<!-- pages/sketches.md -->
<div class="sketches">
{% if site.enable_sketch_categories %}
  {% if page.display_categories %}
    {% assign categories = page.display_categories %}
  {% else %}
    {% assign categories = site.sketches | map: "category" | uniq %}
  {% endif %}
  <!-- Display categorized sketches -->
  {% for category in categories %}
    <a id="{{ category }}" href=".#{{ category }}" class="card-container">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign categorized_sketches = site.sketches | where: "category", category %}
    <!-- Generate cards for each sketch -->
    {% if page.horizontal %}
      <div class="row row-cols-1 row-cols-md-2 card-container">
        {% for sketch in categorized_sketches %}
          {% include sketches_horizontal.liquid %}
        {% endfor %}
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-3 card-container">
        {% for sketch in categorized_sketches %}
          {% include sketches.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}

{% else %}

  <!-- Display sketches without categories -->
  {% if page.horizontal %}
    <div class="projects">
      <div class="row row-cols-1 row-cols-md-2 card-container">
      {% for sketch in site.sketches %}
        {% include sketches_horizontal.liquid %}
      {% endfor %}
      </div>
    </div>
    {% else %}
    <div class="row row-cols-1 row-cols-md-3 card-container">
      {% for sketch in site.sketches %}
        {% include sketches.liquid %}
      {% endfor %}
    </div>
    {% endif %}
{% endif %}
</div>
