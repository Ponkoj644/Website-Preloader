window.onload = function () {
  const preloaderArea = document.getElementById("prelodder-area");
  preloaderArea.className = "page-loaded";

  setTimeout(function () {
    preloaderArea.style.display = "none";
  }, 500);
};
