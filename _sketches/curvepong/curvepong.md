---
layout: page
title: curvepong
description: Pong with a twist... 
img: /assets/img/curvepong_anim.webp
source_code: "curvepong_code.js"
importance: 2
category: games
tags: ["multiplayer"]
giscus_comments: true
---

<script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/p5.capture@1.4.1/dist/p5.capture.umd.min.js"></script> -->
<script type="text/javascript" src="/_sketches/curvepong/curvepong_code.js"></script>

<div id="sketch-holder"></div>

Try hitting the ball with the paddle in motion!

<div class="row">
<div class="col-sm mt-3 mt-md-0" markdown="1">
Keyboard
- Use `w` and `s` to move the paddle up and down. 
- For player 2, use `i` and `k`. Player 2 will be controlled by the computer if no input is detected.
- Press `enter` to reset the game.
</div>
<div class="col-sm mt-3 mt-md-0" markdown="1">
Touch
- Use your finger to move the paddle up and down.
- Use another finger on the right side of the screen to control player 2. Player 2 will be controlled by the computer if no input is detected.
- Tap with three fingers to reset the game.
</div>
</div>

{% if page.source_code %}
{% include collapse_code.liquid file_path=page.source_code %}
{% endif %}