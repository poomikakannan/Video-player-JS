"use strict"

let video = document.getElementById("video_play");
let play_btn = document.getElementById("play_btn");


play_btn.addEventListener("click", () => {
    if(video.paused)
    {
        video.play();
        play_btn.innerHTML = `<i class="fa-solid fa-circle"></i>  pause`;
    }
    else
    {
        video.pause();
        play_btn.innerHTML = `Play  <i class="fa-solid fa-circle"></i>`;
    }
})