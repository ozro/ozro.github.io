---
layout: project_page
title: Novel Subsystem Prototype
description: De-risking a key robotic subsystem by building a feedback controlled prototype that can simulate clinical trials.
img: assets/img/albums/spool/buckling.jpg
date: 2020-07-01
team_size: 2
duration: 8 months
category: work
tags: [medical, extrusions, feedback controls, data analysis]
published: true
---

# The Problem

The client came to PA Consulting to de-risk a concept for a complex subsystem that essentially needed to push a flexible wire through a tube. The client had two competing concepts and they wanted us to mature the riskier idea so it can be evaluated fairly. The riskier idea involved storing the tube in a spool to save space, with the trade-off of making the tube curved. I worked with another engineer to mature the concept from just an idea to a fully automated proof of principle prototype that could simulate movements based on data recorded in clinical trials.

# The Project

The problem was quite poorly defined. Though the concept involved a spooled tube, there were several paths forward in terms of how the tube was spooled, the tube's profile and material, and actuators responsible for straightening the tube and pushing the wire. Additionally, we didn't fully understand the mechanics of the wire and how it behaved inside the tube. We tackled these problems with many cycles of iterative prototyping, research, and analysis.

### Wire bending

The main interaction in the system was between the wire and the tube. We needed to understand how a semi-rigid wire constrained in a tube would behave as the system pushed upon it, and one of the main things to consider was the friction experienced by the wire. Through empirical experiments, I soon found out that the wire could curl into a helix within the volume of the support structure, contacting it in many points along its length. Pushing in this state can cause the device to dig into the walls of the tube, making it impossible to advance.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/spool/buckling.jpg" title="a diagram showing different buckling modes of a cylinder constrained in a tube." class="img-fluid rounded z-depth-1" %}
    <div class="caption">A diagram showing different buckling modes of a cylinder constrained in a tube. The helical buckling mode can enter a self-locking state. </div>
  </div>
</div>

The mechanics of the wire was difficult to model, but I ended up finding the solution in an unexpected place: oil rig drill strings. Oil rigs use steel pipes to transmit both drilling fluid and torque to the drill bit. A full drill string may have hundreds of pipe segments joined together, forming a kilometres long string that behaves not too differently than our wire. Though the drill string papers I was reading dealt with kilonewtons and kilometres, I found that the analytical models could be adapted to the millimetre scale I was working at. I was able to determine the maximum push force that avoids helical buckling, and determine the other key parameters affecting the wire's behaviour.

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

### Straightening the tube

One of the riskiest parts of the concept was straightening the tube. The tube has residual bending due to the way its stored, but straightness was critical for the system's accuracy. Storage conditions also introduce creep, further exacerbating the problem. The tube can be straightened with force, but can we do it with the available actuators? I worked with suppliers to understand the materials available for medical grade extrusions, honing in on Pebax, a high-performance thermoplastic elastomer (TPE) offering a balance of low friction and high flexibility. I also explored composite structures to leverage the advantages of different materials.

Another factor was the way the tube was spooled. I initially explored helical spooling, which would take up less footprint than a spiral spool. However, helical spooling introduces torsional stresses on the material that causes an additional residual deflection that needs to be corrected by force. These stresses can resolve as helical twists that increase in frequency when pulled on. I had to settle for a spiral spool design which had its own challenges.

<div class="row justify-content-sm-center">
  <div class="col mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/spool/torsion.jpg" title="a diagram showing a tube twisting more when pulled." class="img-fluid rounded z-depth-1" %}
    <div class="caption">A helically spooled tube gains more twists when stretched. </div>
  </div>
</div>

### Enveloping the wire

Another complication is the way the tube needs to envelop the wire. The system cannot function unless the wire is fully surrounded by the tube, but due to the system architecture, the wire must also exit partway through the tube. A clever design was needed to allow the device to pass through the tube at an exit location fixed relative to the spool, but moving relative to the end of the tube.

I did several brainstorms and concept development sessions to identify potential solutions. I settled on a split tube, which could be split open at a specific location to allow the wire to exit. This design required carefully selecting the tube material to be elastic enough to close itself after being split open. The wire can potentially squeeze through any residual gap along the main length of the tube. This also meant any plastic deformation during splitting was unacceptable.

I explored more complex tube profiles, such as ones with wings that could be bent to reduce the splitting force. I also looked into composite extrusions, where materials with different properties are extruded together so we can leverage the unique advantages of each material. Because the extruded materials took 3+ weeks to procure, I had to balance analytical methods with rapid prototyping.

### Test Bed

The work culminated in a robotic test bed that would prove the viability of the design. The test bed contained multiple force gauges to evaluate friction losses along the tube, and several actuators matching the expected degrees of freedom on the full system. I selected all sensors, all actuators, and developed all the controls electronics and firmware for the system. The test bed was capable of dynamically compensating for friction losses based on an analytical model I developed. I also built a software interface that allowed the test bed to read from CSV data recorded during clinical trials. This way the test bed could simulate being driven by a surgeon.

<div class="row justify-content-sm-center">
  <div class="col mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/spool/pop-architecture.png" title="a system block diagram of the test bed." class="img-fluid rounded z-depth-1" %}
    <div class="caption">The test bed system block diagram. The blue blocks are firmware elements, the green are OTS electronics, and the yellow are electromechanical elements with sensors. </div>
  </div>
</div>

# Results

The subsystem performed well in the test bed, fully demonstrating all required functionality. The spooled concept proved to be a viable path, though with several key risks, mainly around the creep introduced by long term storage of the tubes. The client ended up moving forward with the other less risky concept, but our work provided great confidence that they made the correct choice.
