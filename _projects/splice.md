---
layout: project_page
title: Novel Cable Splicing Machine
description: Developing an underground cable splicing machine that automates a complex process typically done by a trained technician.
img: assets/img/albums/splice/splice-preview.jpg
date: 2024-08-01
duration: 1 year+
team_size: 5+
category: work
tags: [systems engineering, prototyping, mechanism design]
---
# The Problem

Prysmian manufactures high voltage cable splices used in underground manholes. When dealing with voltages in the range of tens of thousands of volts, just soldering two cables together doesn't cut it. A high-voltage splice contains many layers of different materials to avoid sharp transitions in the electric field which could lead to potentially catastrophic partial discharges.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/splice/Cold-Shrink-Joints.webp" title="a diagram indicating the many components of a high voltage cold shrink joint." class="img-fluid rounded z-depth-1" %}
    <div class="caption">High voltage joints contain many features to deal with high voltage conditions. </div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/splice/partial-discharge.avif" title="a cable that has undergone partial discharge, showing burn marks resembling lightning." class="img-fluid rounded z-depth-1" %}
    <div class="caption">This cable has undergone partial discharge, causing a breakdown of the insulator. </div>
  </div>
</div>

Installing these joints is not straightforward, and cable splicers have to undergo extensive training.

<div class="row justify-content-sm-center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2eehlMpqCeM?si=438EgfEJV8dWQU5D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div class="caption">A video showing the involved steps to installing a cable splice.</div>
</div>

Many of the steps during installation remains highly manual, leading to improper installation which can reduce the life of the splice or cause permanent damage to the cable.

PA Consulting collaborated with Prysmian and the Advanced Research Projects Agency (ARPA-E, part of the United States Department of Energy) to obtain [a grant to develop an Error-Free Splicing Machine for Underground Power Cables](https://arpa-e.energy.gov/programs-and-initiatives/search-all-projects/error-free-splicing-machine-underground-power-cables). The machine would automate all of the splicing steps which will reduce error rates and improve splice quality.

## Systems Engineering
On the project, I initially served as a systems engineer, developing a complex set of system requirements drawn from multiple different stakeholders. Though Prysmian was PA Consulting's primary client, also involved were utility companies in Chicago and New York City who were the intended end users of the splicing machine. I defined architecture of the machine, addressing the key risks of the system and building user and system workflows. I coordinated a highly cross-disciplinary team of mechanical, electrical, and firmware engineers.

<div class="row justify-content-sm-center">
    <div class="col-sm-6">
      {% include figure.liquid path="assets/img/albums/splice/splice-workflow.jpg" title="a screenshot of a workflow diagram." class="img-fluid rounded z-depth-1" %}
      <div class="caption">One of the workflow diagrams I made focusing on the unique characteristics of each work step.</div>
    </div>
</div>

## Mechanism Design
Beyond systems engineering I also took on the design of a taping subsystem responsible for applying tape of all kinds: mastic, copper, and PVC. After going through several brainstorms and teardowns of existing technology, I built lots of quick prototypes to develop intuition and deeper understanding.

<div class="row justify-content-sm-center">
    <div class="col-sm-6">
      {% include figure.liquid path="assets/img/albums/splice/splice-tape-prototype.jpg" title="a picture of a taper prototype." class="img-fluid rounded z-depth-1" %}
      <div class="caption">A quick prototype built from scavenged OTS tape dispenser parts and a laser-cut base.</div>
    </div>
</div>

My final design operated in a similar way as the prototype, but incorporated a sprung tape cutter that used existing degrees of freedom on the machine. This avoided adding in additional sensing, actuation and cable management. The subsystem was tested on a manual lathe to simulate the motions available in the machine.

## The Results
I was pulled onto another project before this one was complete. The team continues to develop the system, and recently passed a milestone proving the system can carry out the necessary functions within the required system envelope. Excited to see where it ends up!
