---
layout: page
title: curvepong
description: Pong with a twist... 
img: /assets/img/curvepong_preview.webp
source_code: "curvepong_code.js"
importance: 2
category: games
tags: ["p5.js", "multiplayer"]
giscus_comments: true
---
Try hitting the ball with the paddle in motion!

{% include p5_canvas.liquid %}

<div class="row mt-3">
<div class="col-sm mt-3 mt-md-0" markdown="1">
Keyboard
- Use `w` and `s` to move the paddle up and down. 
- For player 2, use `i` and `k`. Player 2 will be controlled by the computer if no input is detected.
- Press `enter` to reset the game.
</div>
<div class="col-sm mt-3 mt-md-0" markdown="1">
Mouse or Touch
- Use your finger or your mouse to move the paddle up and down.
- Use another finger on the right side of the screen to control player 2. Player 2 will be controlled by the computer if no input is detected.
- Tap with three fingers to reset the game.
</div>
</div>

{% include collapse_code.liquid file_path=page.source_code %}