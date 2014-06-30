propublica.views.overviewAreas = propublica.View.extend({
  cssClass : "copy",
  loaded : {},
  FUDGE  : 0,
  render : function() {
    var that = this;
    var jWindow = $(window);
    var windowHeight = jWindow.height();
    var slugDivs = [$('#amphibiansviddiv'), $('#mammalsviddiv'), $('#reptilesviddiv'), $('#birdsviddiv')];
    $(".overview-area-workspace").height(windowHeight);
    jWindow.scroll(function(e) {
      _(slugDivs).each(function(d, idx) {
        if (that.loaded[idx]) return;
        if (d.offset().top < (jWindow.scrollTop() + jWindow.height())) {
          that.loaded[idx] = true;
          console.log("LOADING " + idx)
          // window.bigMaps[AREAS[idx].slug] = new propublica.models.BigMap({area : AREAS[idx]});
          // window.bigMaps[AREAS[idx].slug].setMap();
        }
      });
    });
  }
});