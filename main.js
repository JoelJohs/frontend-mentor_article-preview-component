document.getElementById("button").addEventListener("click", function () {
  var shareContainer = document.getElementById("share-container");
  shareContainer.classList.toggle("active");
});

document.getElementById("button-mobile").addEventListener("click", function () {
  var shareContainer = document.getElementById("share-container-mobile");
  var finalMobile = document.getElementById("final-mobile");
  var authorInfo = document.getElementById("author-info");
  var btn = document.getElementById("button-mobile");

  shareContainer.classList.toggle("share-container-mobile-active");
  finalMobile.classList.toggle("final-mobile__active");
  authorInfo.classList.toggle("author-info-mobile__active");
  btn.classList.toggle("share-button-active");
});
