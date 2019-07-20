
Vue.component("stat-circle", {
  template: "#stat-circle",
  props: ["percentage"]
});

new Vue(
{
  el: "#app",
  mounted: function() {
    var $statCircle = document.querySelectorAll(".stat-circle circle");
    for (var i = 0; i < $statCircle.length; i++) {
      var p = parseFloat($statCircle[i].dataset.percentage);
      var off = -51 -((51 / 100) * p);
      new TweenMax.to($statCircle[i], .8, {
        strokeDashoffset: off
      });
    }
  }
});
