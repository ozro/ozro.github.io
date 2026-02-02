---
layout: page
title: Sketch Book
description: Some of the sketches I've drawn with pen or with stylus.
img: /assets/img/previews/sketchbook_preview.png
importance: 2
category: sketching
tags: []
giscus_comments: true
album_path: /assets/img/albums/sketchbook/
album_imgs:
  - name: assem_clamp.PNG
    desc: Portion of an assembly illustration featuring a toggle clamp.
    group: assembly
  - name: assem_linkage.PNG
    desc: Illustration of how a cover is installed onto a linkage.
    group: assembly
  - name: assem_thread.PNG
    desc: Illustration of how a cover is installed onto a linkage.
    group: assembly
  - name: assem_bracket.jpg
    desc: Illustration of a bracket assembly used for gauging distances.
    group: assembly
  - name: assem_lever.jpg
    desc: Illustration of a lever assembly used for disengaging a rotary axis.

  - name: study_milk.jpg
    desc: Sketch of a milk jug.
    group: study
  - name: study_microwave.jpg
    desc: Sketch of a microwave.
  - name: study_case.jpg
    desc: Study of a pen case that can fold into a stand.
    group: study
  - name: study_engine.jpg
    desc: Sketch of a small desktop Stirling engine.
    group: study
  - name: study_flower.jpg
    desc: Sketch of a flower.
    group: study
  - name: study_punch.jpg
    desc: Study of the mechanics of a hole puncher.
    group: study
  - name: study_ruby.jpg
    desc: Quick sketch of a boat I chanced upon at the marina.
    group: study
  - name: study_sprayer.jpg
    desc: Study of a spray bottle and how the tip rotates.
    group: study
  - name: study_collar.jpg
    desc: Study of a collar attached to a cable.
    group: study
  - name: study_snap.jpg
    desc: Study of a snapping tab.
    group: study

images:
  lightbox2: true
---

<div>
{% for img in page.album_imgs %}
    {% capture filename %}{{img.name | split: '.' | first}}-200.webp{% endcapture %}
    {% capture thumbnail %}{{ page.album_path }}{{ filename }}{% endcapture %}
    {% capture filepath %}{{ page.album_path }}{{ img.name }}{% endcapture %}
    <a href="{{filepath}}" data-lightbox="sketchbook" data-title="{{img.desc}}"><img src="{{thumbnail}}" /></a>
{% endfor %}
</div>
