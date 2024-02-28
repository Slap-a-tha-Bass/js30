// each key (A, S, D, F, G, H, J, K, L) is a note that brings in a audio file
// whenever each key is pressed, the sound is played and the border changes color and the whole div is scaled up larger

const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
  keys.forEach((key) => {
    key.classList.remove("highlight");
    if (key.textContent.toUpperCase() === e.key.toUpperCase()) {
      key.classList.add("highlight");
      setTimeout(() => {
        key.classList.remove("highlight");
      }, 250);
    }
  });
  switch (e.key) {
    case "a":
      console.log("A");
      const audio_a = new Audio("sounds/a.wav");
      audio_a.play();
      break;
    case "s":
      console.log("S");
      const audio_s = new Audio("sounds/s.wav");
      audio_s.play();
      break;
    case "d":
      console.log("D");
      const audio_d = new Audio("sounds/d.wav");
      audio_d.play();
      break;
    case "f":
      console.log("F");
      const audio_f = new Audio("sounds/f.wav");
      audio_f.play();
      break;
    case "g":
      console.log("G");
      const audio_g = new Audio("sounds/g.wav");
      audio_g.play();
      break;
    case "h":
      console.log("H");
      const audio_h = new Audio("sounds/h.wav");
      audio_h.play();
      break;
    case "j":
      console.log("J");
      const audio_j = new Audio("sounds/j.wav");
      audio_j.play();
      break;
    case "k":
      console.log("K");
      const audio_k = new Audio("sounds/k.wav");
      audio_k.play();
      break;
    case "l":
      console.log("L");
      const audio_l = new Audio("sounds/l.wav");
      audio_l.play();
      break;
  }
});
