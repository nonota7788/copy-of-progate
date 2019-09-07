window.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector("header");
  new Waypoint({
    element: header,
    handler: function(direction) {
      if (direction === "down") {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    },
    offset: -1
  });
});
