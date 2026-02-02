---
layout: page
title: Novel Subsystem Prototype
description: De-risking a key robotic subsystem by building a feedback controlled prototype that can simulate clinical trials.
img: assets/img/albums/spool/buckling.jpg
date: 2020-07-01
category: work
tags: [medical, extrusions, feedback controls, data analysis]
published: true
---

The client came to PA Consulting to de-risk a complex concept which was essentially how pushing a noodle through a garden hose. I worked with another engineer to mature the concept from just an idea to a fully automated proof of principle prototype that could simulate movements recorded in clinical trials.

### Noodle bending

We needed to understand how a semi-rigid noodle would behave as the system pushed upon it, and one of the main things to consider was the friction experienced by the noodle. I soon found out that the noodle could curl into a helix within the volume of the support structure, contacting it in many points along its length. Pushing in this state can cause the device to dig deeper into the walls of the hose, making it impossible to advance.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/spool/buckling.jpg" title="a diagram showing different buckling modes of a cylinder constrained in a tube." class="img-fluid rounded z-depth-1" %}
    <div class="caption">A diagram showing different buckling modes of a cylinder constrained in a tube. The helical buckling mode can enter a self-locking state. </div>
  </div>
</div>

I ended up finding the solution in an unexpected place: oil rig drill strings. Oil rigs use steel pipes to transmit both drilling fluid and torque to the drill bit. A full drill string may have hundreds of pipe segments joined together, forming a kilometres long string that behaves not too differently than our noodle. Though the drill string papers I was reading dealt with kilonewtons and kilometres, I found that the analytical models could be adapted to the millimetre scale I was working at. I was able to determine the maximum push force that avoids helical buckling, and determine the other key parameters affecting the noodle's behaviour.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/spool/roughnecks.jpg" title="three roughnecks on a drilling rig." class="img-fluid rounded z-depth-1" %}
    <div class="caption">Three roughnecks were needed to manipulate this drill string segment. </div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/spool/oil-rig-buckling.png" title="a diagram showing helical buckling and locking of a drill string." class="img-fluid rounded z-depth-1" %}
    <div class="caption">A diagram showing a drill rig setup. The bottom right shows helical buckling and locking of the drill string. Surprisingly analogous to the problem I was facing. </div>
  </div>
</div>

### Straightening the hose

The hose has residual bending due to the way its stored. Storage conditions can also introduce creep, further exacerbating this effect. The hose can be straightened with force, but can we do it with the available actuators? I worked with suppliers to understand the materials available for medical grade extrusions, honing in on Pebax, a high-performance thermoplastic elastomer (TPE). I also explored composite structures to leverage the advantages of different materials.

Another factor was the way the hose was spooled. I initially explored helical spooling, which would take up less footprint than a spiral spool. However, it turned out that helical spooling introduces torsional stresses on the material that causes an additional residual deflection that needs to be corrected by force. These stresses can resolve as helical twists that increase in frequency when pulled on. I had to settle for a spiral spool design which had its own challenges.

<div class="row justify-content-sm-center">
  <div class="col mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/spool/torsion.jpg" title="a diagram showing a tube twisting more when pulled." class="img-fluid rounded z-depth-1" %}
    <div class="caption">A helically spooled hose gains more twists when stretched. </div>
  </div>
</div>

### Enveloping the noodle

The system cannot function unless the noodle is fully surrounded by the hose, but due to the system architecture, the noodle must also exit the hose somewhere in the middle. A clever way was needed to allow the device to pass through the hose at a exit location fixed relative to the spool, but not fixed relative to the end of the hose.

I did several brainstorms and concept development sessions to identify potential solutions. I settled on a split design, which allowed the hose to be split open to allow device exit. This path required carefully selecting the hose material to be elastic enough to close itself after being split open. The noodle can potentially squeeze through any gap along the main length of the hose. This also meant any plastic deformation was unacceptable.

## Test Bed

The work culminated in a robotic test bed that would prove the viability of the design. The test bed contained multiple force gauges to evaluate friction losses along the hose, and several actuators matching the expected degrees of freedom on the full system. I selected all sensors, all actuators, and developed all the controls electronics and firmware for the system. The test bed was capable of dynamically compensating for friction losses based on an analytical model I developed. I also built a software interface that allowed the test bed to read from CSV data recorded during clinical trials. This way the test bed could simulate being driven by a surgeon.

<div class="row justify-content-sm-center">
  <div class="col mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/spool/pop-architecture.png" title="a system block diagram of the test bed." class="img-fluid rounded z-depth-1" %}
    <div class="caption">The test bed system block diagram. The blue blocks are firmware elements, the green are OTS electronics, and the yellow are electromechanical elements with sensors. </div>
  </div>
</div>

The subsystem performed well in the test bed, fully demonstrating all required functionality.
