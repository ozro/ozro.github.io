---
layout: page
title: projects
permalink: /projects/
description: A growing collection of your cool projects.
nav: true
nav_order: 2
display_categories: #[work, fun]
horizontal: false
---

{% if site.project_search %}
{% include card_search.liquid %}
{% endif %}

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories %}
  {% if page.display_categories %}
    {% assign categories = page.display_categories %}
  {% else %}
    {% assign categories = site.projects | map: "category" | uniq %}
  {% endif %}
  <!-- Display categorized projects -->
  {% for category in categories %}
    <a id="{{ category }}" href=".#{{ category }}" class="card-container">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="row row-cols-1 row-cols-md-2 card-container">
      {% for project in sorted_projects %}
        {% include projects_horizontal.liquid %}
      {% endfor %}
      </div>
      {% else %}
      <div class="row row-cols-1 row-cols-md-3 card-container">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

<!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="projects">
    <div class="row row-cols-1 row-cols-md-2 card-container">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3 card-container">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
