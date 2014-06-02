(function() {
  $(function() {

    /*  Globals
    -------------------------------------------------- */
    var PROPERTIES =               ['translateX', 'translateY', 'opacity', 'rotate', 'scale'],
        $window =                  $(window),
        $body =                    $('body'),
        wrappers =                 [],
        currentWrapper =           null,
        scrollTimeoutID =          0,
        bodyHeight =               0,
        windowHeight =             0,
        windowWidth =              0,
        prevKeyframesDurations =   0,
        scrollTop =                0,
        relativeScrollTop =        0,
        currentKeyframe =          0,
        froggy = document.getElementById("froggydiv"),
        playerready=false,
  		frogspeed = .002,
		player = videojs("frogvideo"),
        keyframes = [
          {

            'wrapper' : '#intro',
            'duration' : '250%',
            'animations' :  [{
                'selector'    : '.stats',
                'translateY'  : [0,0]
              }

            ]
          },
          {
            'wrapper' : '#intro',
            'duration' : '100%',
            'animations' :  [
              {
                'selector'    : '.stats',
                'translateY'  : -480
              }, {
                'selector'    : '.copy',
                'translateY'  : -100,
                'opacity'    : -.2
              }, {
                'selector'    : '#stat0number',
                'translateY'  : 21,
                'scale'  : .3,
               // 'opacity'     : .3,
                'translateX'     : -35
              }, {
                'selector'    : '#stat1number',
                'translateY'  : 21,
                'scale'  : .3,
               // 'opacity'     : .3,
                'translateX'     : -32
              }, {
                'selector'    : '#stat2number',
                'translateY'  : 21,
                'scale'  : .3,
               // 'opacity'     : 1,
                'translateX'     : -33
              }, {
                'selector'    : '#stat3number',
                'translateY'  : 21,
                'scale'  : .3,
               // 'opacity'     : .3,
                'translateX'     : -30
              }, {
                'selector'    : '#stat0group',
               // 'opacity'     : .15
              }, {
                'selector'    : '#stat1group',
                //'opacity'     : .15
              }, {
                'selector'    : '#stat2group',
               // 'opacity'     : 1
              }, {
                'selector'    : '#stat3group',
              //  'opacity'     : .15
              }
            ]
          } , {
           'wrapper' : '#intro',
            'duration' : '120%',
            'animations' :  [{
                'selector'    : '.stats',
                'translateY'  : [-480, -480]
              }
            ]
          }
        ]

    /*  Construction
    -------------------------------------------------- */
    init = function() {
      window.requestAnimationFrame(updatePage);
     // window.addEventListener("scroll", updatePage);
      setupValues();

    }

    setupValues = function() {
      player.on('loadeddata', function(){
      	playerready=true;
      	player.currentTime(0)
      	console.log("frog loaded")});
      scrollTop = $window.scrollTop();
      windowHeight = $window.height();
      windowWidth = $window.width();
      convertAllPropsToPx();
      buildPage();
    }

    buildPage = function() {
      var i, j, k;
      for(i=0;i<keyframes.length;i++) { // loop keyframes
          bodyHeight += keyframes[i].duration;
          if($.inArray(keyframes[i].wrapper, wrappers) == -1) {
            wrappers.push(keyframes[i].wrapper);
          }
          for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
            Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
              value = keyframes[i].animations[j][key];
              if(key !== 'selector' && value instanceof Array === false) {
                var valueSet = [];
                valueSet.push(getDefaultPropertyValue(key), value);
                value = valueSet;
              }
              keyframes[i].animations[j][key] = value;
            });
          }
      }
      $body.height(bodyHeight);
      $window.scroll(0);
      currentWrapper = wrappers[0];
      $(currentWrapper).show();
    }

    convertAllPropsToPx = function() {
      var i, j, k;
      for(i=0;i<keyframes.length;i++) { // loop keyframes
        keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y');
        for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
          Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
            value = keyframes[i].animations[j][key];
            if(key !== 'selector') {
              if(value instanceof Array) { // if its an array
                for(k=0;k<value.length;k++) { // if value in array is %
                  if(typeof value[k] === "string") {
                    if(key === 'translateY') {
                      value[k] = convertPercentToPx(value[k], 'y');
                    } else {
                      value[k] = convertPercentToPx(value[k], 'x');
                    }
                  }
                }
              } else {
                if(typeof value === "string") { // if single value is a %
                  if(key === 'translateY') {
                    value = convertPercentToPx(value, 'y');
                  } else {
                    value = convertPercentToPx(value, 'x');
                  }
                }
              }
              keyframes[i].animations[j][key] = value;
            }
          });
        }
      }
    }

    getDefaultPropertyValue = function(property) {
      switch (property) {
        case 'translateX':
          return 0;
        case 'translateY':
          return 0;
        case 'scale':
          return 1;
        case 'rotate':
          return 0;
        case 'opacity':
          return 1;
        default:
          return null;
      }
    }

    /*  Animation/Scrolling
    -------------------------------------------------- */

    updatePage = function() {
      setScrollTops();
      if(scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
        animateElements();
        setKeyframe();
        scrollpos = Math.max(0,$(window).scrollTop());
        frog(scrollpos);
        vis(scrollpos);
      }
      window.requestAnimationFrame(updatePage);
    }
  // var stat0pos = 513;
	//var stat1pos = 654;
	//var stat2pos = 803;
	//var stat3pos = 840;
	//1027
//	1313
//1604
//1734
 //var stat0pos = 1027;




// var stat0pos = 1170;
//	var stat1pos = 1473;
//	var stat2pos = 1664;
//	var stat3pos = 1700;

var stat0pos = 1170;
	var stat1pos = 1473;
	var stat2pos = 1664;
	var stat3pos = 1700;
	//var statOn = {""}
   frog = function(scrollpos) {
    	if (currentKeyframe==0) {
    		froggy.style.opacity=1;
    		if (playerready) {
				moveFrog();
				//console.log(scrollpos)

    		}
    		/**
    		$(".stats").css({
          'transform':    'translate3d(0px, 0px) scale(1) rotate(0deg)',
          'opacity' : 1, 'margin-top': "463px"})**/
    	} else {
    		froggy.style.opacity=0;
    	}
    	toggleStats(scrollpos);
    }

    moveFrog = function() {

    	player.currentTime(frogspeed*scrollpos)

    	//console.log(scrollpos)
    }

var vispos = 2800;
//var vispos = 0;
var starting = true;
vis = function(scrollpos) {
	if (scrollpos>vispos) {
		if (starting) {
			updateStatHighlights();
			//d3.selectAll(".number").classed("visnumber", true);
			//console.log("SHOW")
			showVis();
			starting=false;
		}
	} else {
		if (!starting) {
			//d3.selectAll(".number").classed("visnumber", false);
			clearStatHighlights();
			hideVis();
			//console.log("HIDE")
			starting=true;
		}
	//console.log("hidevis")
	}
}
/**
function updateStatHighlights() {
	d3.selectAll(".number").classed("visnumber", true);
	d3.selectAll(".number").classed("deselectednumber", function(d, i) {return !(i==currclassindex)});
	d3.selectAll(".group").classed("deselectedgroup", function(d, i) {return !(i==currclassindex)});

}**/

function clearStatHighlights() {
	d3.selectAll(".number").classed("visnumber", false);
	d3.selectAll(".number").classed("deselectednumber", false);
	d3.selectAll(".group").classed("deselectedgroup", false);
}

toggleStats = function(scrollpos) {
	if (scrollpos>1900) {

	document.getElementById("statsid").style.opacity=1;
		//$(".stats").style.opacity = 1;
	/**
		document.getElementById("statdiv0").style.opacity=1;
		document.getElementById("statdiv1").style.opacity=1;
		document.getElementById("statdiv2").style.opacity=1;
		document.getElementById("statdiv3").style.opacity=1;**/
	} else {
		document.getElementById("statsid").style.opacity=0;
		//$(".stats").style.opacity = 0;
	/**
	document.getElementById("statdiv0").style.opacity=0;
		document.getElementById("statdiv1").style.opacity=0;
		document.getElementById("statdiv2").style.opacity=0;
		document.getElementById("statdiv3").style.opacity=0;**/
	}
/**
	var toggleIndex;
	if (scrollpos<stat0pos) {
		toggleIndex=0;
	} else if(scrollpos<stat1pos) {
		toggleIndex=1;
	} else if (scrollpos<stat2pos) {
		toggleIndex=2;
	} else if (scrollpos<stat3pos) {
		toggleIndex=3;
	} else {
		toggleIndex=4;
	}
	var j= 0;
	/**
	if (toggleIndex>=0) {
	if (document.getElementById("statdiv"+toggleIndex).style.opacity==0) {
				document.getElementById("statdiv"+toggleIndex).style.opacity=1;
	}
	}**/
	/**
	while (j<4) {
		if (j<toggleIndex) {
			if (document.getElementById("statdiv"+j).style.opacity==0) {
				document.getElementById("statdiv"+j).style.opacity=1;
			}
		} else {
			if (document.getElementById("statdiv"+j).style.opacity==1) {
			document.getElementById("statdiv"+j).style.opacity=0;
			}
		}
		j+=1;
	}**/
}



    setScrollTops = function() {
      scrollTop = $window.scrollTop();
      relativeScrollTop = scrollTop - prevKeyframesDurations;
    }

    animateElements = function() {
      var animation, translateY, translateX, scale, rotate, opacity;
      for(var i=0;i<keyframes[currentKeyframe].animations.length;i++) {
        animation   = keyframes[currentKeyframe].animations[i];
        translateY  = calcPropValue(animation, 'translateY');
        translateX  = calcPropValue(animation, 'translateX');
        scale       = calcPropValue(animation, 'scale');
        rotate      = calcPropValue(animation, 'rotate');
        opacity     = calcPropValue(animation, 'opacity');

        $(animation.selector).css({
          'transform':    'translate3d(' + translateX +'px, ' + translateY + 'px, 0) scale('+ scale +') rotate('+ rotate +'deg)',
          'opacity' : opacity
        })
      }
    }

    calcPropValue = function(animation, property) {
      var value = animation[property];
      if(value) {
        value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
      } else {
        value = getDefaultPropertyValue(property);
      }
      // value = +value.toFixed(2)
      // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
      return value;
    }

    easeInOutQuad = function (t, b, c, d) {
      //sinusoadial in and out
      return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    setKeyframe = function() {
      if(scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
          prevKeyframesDurations += keyframes[currentKeyframe].duration;
          currentKeyframe++;
          showCurrentWrappers();
      } else if(scrollTop < prevKeyframesDurations) {
          currentKeyframe--;
          prevKeyframesDurations -= keyframes[currentKeyframe].duration;
          showCurrentWrappers();
      }

    }

    showCurrentWrappers = function() {
      var i;
      if(keyframes[currentKeyframe].wrapper != currentWrapper) {
        $(currentWrapper).hide();
        $(keyframes[currentKeyframe].wrapper).show();
        currentWrapper = keyframes[currentKeyframe].wrapper;
      }
    }

    /*  Helpers
    -------------------------------------------------- */

    convertPercentToPx = function(value, axis) {
      if(typeof value === "string" && value.match(/%/g)) {
        if(axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
        if(axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
      }
      return value;
    }

    throwError = function() {
      $body.addClass('page-error')
    }

    isTouchDevice = function() {
      return 'ontouchstart' in window // works on most browsers
      || 'onmsgesturechange' in window; // works on ie10
    }

    init();

  })
}).call(this);