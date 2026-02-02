---
layout: page
title: L-system
description: A basic L-system renderer.
img: /assets/img/previews/l-system_preview.webp
source_code: l_system.js
importance: 2
category: apps
tags: ["p5.js", "procedural"]
giscus_comments: true
---

{% include p5_canvas.liquid %}

<div id="text-holder" style="position:relative;  width:100%; display:flex;flex-wrap:wrap;"></div>
<div id="ui-holder" style="position:relative;  width:100%; display:flex;flex-wrap:wrap; padding-bottom:1em;"></div>

The UI can be used to control various aspects of the rendering. From left-right, top-down:

1. Axiom
2. Step length
3. Step angle
4. Iteration count
5. Clear - remove output
6. Step - run one interation
7. Run - run iterations up to iteration count
8. Template select
9. Production rules
10. Output

Try messing with any of these fields and see how the rendering changes.

---

An [L-system](https://en.wikipedia.org/wiki/L-system) or Lindenmayer system is a type of formal grammar developed by 1968 by Aristid Lindenmayer, a Hungarian theoretical biologist and botanist. An L-system is a way to describe the growth of self-similar structures overtime, such as trees or algae.

In essence, an L-system revolves around iteratively rewriting a string consisting of a finite set of symbols called an **alphabet**.
The process begins with an **axiom**, or an initial string.
During each iteration, the string is rewritten based on **production rules**.

Finally, the output from the L-system can be parsed by a rendering system, which can produce very cool graphical results.

#### Alphabet

This sketch uses [Turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics) to interpret the output string. The alphabet is interpreted as follows:

1. `F` - move forward by the step length while drawing a line.
2. `f` - move forward by the step length without drawing.
3. `+` - rotate counter-clockwise by the step angle.
4. `-` - rotate clockwise by the step angle.
5. `[` - Push current state onto the stack.
6. `]` - Pop latest state from the stack.

Any other symbols not present here are ignored by the renderer, only used for structural purposes in the L-system.

#### Branching

The bracket symbols `[` and `]` are used for creating branches. For example, `[F][+F]` would create two lines starting from the same point, but with a step angle between them.
There should always be a `[` appearing before each `]`.

#### Randomization

L-systems are usually deterministic, so each run will always produce the same results. This can make organic shapes feel fake.
This sketch allows production rules to be assigned probabilities, increasing natural variation.
The number following the `/` symbol is the probability of the production rule executing.
For example, a rule saying `F->FF/0.5` will only be triggered 50% of the time.

#### Sources

The L-system axioms and rules in the templates are adapted from Paul Brooke's [L-System User Notes](https://paulbourke.net/fractals/lsys/).

{% include collapse_code.liquid file_path=page.source_code %}
