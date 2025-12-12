  /*
  Script de áudio de fundo
  - Toca após clique inicial no site.
*/

  document.addEventListener("click", function() {
    document.getElementById("bgm").play();
  }, { once: true });
