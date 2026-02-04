---
layout: project_page
title: Food Production Optimisation
description: Optimised an industrial food production line, nearly doubling throughput without increase in footprint.
img: assets/img/albums/food/line_preview.webp
date: 2023-11-01
team_size: 4
duration: 3 months
category: work
tags: [failure analysis, data analysis and modelling, concept development]
published: true
---

A multinational food and beverage company was experiencing a bottleneck in their production line. One process was much slower than the others, severely limiting throughput. The process was designed almost 20 years ago, with the original team long gone. Initial attempts to speed up the system led to unacceptable defect rates. They came to PA Consulting to find a solution that could be easily retrofitted across multiple production lines in various plants globally. To make things more complicated, the solution must not involve changing the line footprint.

## Understand the problem
The project began with fully understanding the problem. We began with interviews with key stakeholders and subject matter experts, such as the trainers and trainees responsible for running the production line on a day to day basis. We researched the full production process to understand the context and also identify other potential sources of improvement. 

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="/assets/img/albums/food/process-flow.png" title="block diagram showing the key processes." class="img-fluid rounded z-depth-1" %}
  </div>
</div>

The slowest process was the forming process that sat between the sheeter and the oven. The sheeter produced small, flat pieces of dough onto a conveyor belt, which then runs through the process. The forming process turns the dough flats into a complex shape prior to toasting. As the conveyor belt is sped up, the process fails to correctly make the shape, instead shredding or bunching the dough. The malformed dough does not toast correctly, and can even start fires in the oven. The defects were fairly well researched and documents, and each had an acceptable rate, somewhere between 3-7%.

| Defect      | Description                                           |
| ----------- | ----------------------------------------------------- |
| Flat        | Not formed at all                                     |
| Cluster     | Multiple pieces squashed together                     |
| Damage      | Pieces torn, pinched, dented, or mangled              |
| Size        | Pieces with the right form but too small or too large |

<p></p>

## Collecting data
What wasn't clear was the root cause, especially within the forming process. Though the client had identified other causes, such as dough formulation, but they haven't figured out why increasing belt speed increased defect rates. We rented high-speed cameras and flew to the client plant to gather data. The workers there were very accommodating, even after we started several oven fires. After two 12 hour shifts at the plant, we had a lot of information, and some guesses at the culprit, but no definitive path forward.

## Analysing data and Synthesising models
Back at the office, we extracted data from the videos. We estimated the velocities of various mechanical components and labelled defects. I analysed the data and synthesised a model that could capture the behaviour we were seeing. The root cause of the defects was that one of the mechanical components in the forming process did not have enough time to reset. As belt speed increases, the time between dough piece decreases, and the next dough piece arrives before the mechanism resets. This caused increased defect rates. The key equation in the model was essentially a reciprocal function of belt speed:

$$ t_t = t_i + \frac{c}{v_{belt}} $$

Where $$t_t$$ is the total reset time, $$t_i$$ the intrinsic reset time independent of belt speed, and $$c/v_{belt}$$ a speed-dependent term representing mechanics that are affected by belt speed. This model is quite simplistic, but matched well with our data. Below is a plot showing the total reset time as a function of belt speed.

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/food-total-time.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/food-total-time.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}
<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

We can see that as belt speed increases, the total reset time asymptotically approaches $$t_i$$. Increasing the belt speed will only diminishingly reduce total reset time, but the time between dough pieces decreases proportionally. This means to achieve the desired throughput at higher belt speeds, we must investigate methods to reduce the intrinsic reset time of the mechanisms.

The total reset time explained many of the defects we were seeing. Flats were caused by a dough piece completely missing the forming mechanisms, but surprisingly, the reset time was also the cause of clusters. I discovered that dough pieces move slower after being formed because of rolling. If a dough piece is formed too late or too early, it can end up rolling over a flat piece, entangling together as a cluster. I built an analytical model of the rolling physics and confirmed it with the data. This model gave us the minimum spacing between the dough pieces so that they would never touch.

## Exploring the concept space
Now that we understood the root cause of issues and the constraints we must work within, we generating concepts to address the problem. We performed several brainstorm sessions with different prompts and with different groups of people, culminating in a wide solution space with around 30 different concepts. After some further analysis and refinement, we presented 9 concepts, each with different trade offs between complexity, reliability, and cost. 

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/albums/food/food-concepts.jpg" title="hierarchical diagram of the solution space." class="img-fluid rounded z-depth-1" %}
    <div class="caption">Hierarchical diagram of the solution space. The legend in the bottom right shows the meaning of each block.</div>
  </div>
</div>

## Results
The client implemented one of the concepts on a pilot line and achieved 47% increase in throughput. The concept was simple, essentially just adding a spring in the right place in the mechanism, and the results exceeded our estimates. They are currently working on rolling out the solution across all their plants.