var playerready = false;
var speed=.033;
var mousewheelevt = "mousewheel";
setFirefoxSpecificParms();
frogplayer = videojs("frogvideo");
frogplayer.on('loadeddata', function(){ 
		scrollToTop();
      	playerready=true;
      	
      	frogplayer.play();
      	frogplayer.pause();
      	//setTimeout(function() {frogplayer.pause(); frogplayer.currentTime(0);}, 10)
      	frogplayer.currentTime(0);
      		
      	//$(window).scrollTop(0);
      	//$('html,body').scrollTop(0);
      	//$('html,body').animate({scrollTop:0}, 'slow');
      	//console.log($(window))
      	//frogplayer.play()
      	console.log("frog loaded")
		//frogplayer.play();
		incrementProgress();

		window.addEventListener(mousewheelevt, function(e) { 
      		mousewheel(e);
      	});
      	
      	
      });
      
//var speed=.029;
//var speed=0.03336670003;
//var speed=0.01;
//var speed = 0.04;
function scrollToTop() {

if (isFirefox()) {
      		$('html,body').animate({scrollTop:0}, 'slow');
      	} else {
      	$(window).scrollTop(0);
      	}

      	
}
function setFirefoxSpecificParms() {
	if (isFirefox()) {
		mousewheelevt = "DOMMouseScroll";
	
		speed = .04;
		//$('html,body').animate({scrollTop:0}, 'slow');
		
	}// else {
	//$(window).scrollTop(0);
	//}
}

function safeStopPropogation(e)
{
   
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
}
function mousewheel(e) {
	if (!playerready) {
		return;
	}
	
	var evt=window.event || e //equalize event object


    scrollpos = Math.max(0,$(window).scrollTop());
    var delta = Math.max(-1, Math.min(1, evt.detail? evt.detail*(-1) : evt.wheelDelta));
     if (frogActive(scrollpos)) {
     	
     	//document.getElementById('statsid').style.opacity = 0;
     	//document.getElementById('bodyid').style.overflow = 'hidden';
      	//document.getElementById('froggydiv').style.opacity = 1;
      	//console.log(evt.stopPropagation())
      	//safeStopPropogation(evt);
     	evt.preventDefault();
      	//console.log(delta)
      	frogplayer.currentTime(frogplayer.currentTime()+(-delta*speed))
      	//toggleScroll();
      } else {
      	//console.log("done with frog")
      }
    }
    

    
var frogscrollspan = 800;
var froglength = 3.88
var togglescrollpos =3.88;
//var froglength = 3.648
function frogActive(scrollpos) {

//console.log($(window).scrollTop())
//console.log(frogplayer.currentTime())
//scrollpos = Math.max(0,$(window).scrollTop());
	if (frogplayer.currentTime() < froglength) {
		return true;
	}
	
	var scrthresh = -1;
	if (isFirefox()) {
	//console.log("is firefox")
		//speed=.04;
		scrthresh = 0;
	}
	
	if ($(window).scrollTop()<=scrthresh) {
		return true;
	}
	return false;
}

function isFirefox() {
if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
	return true;
	}
return false;
}

function toggleScroll() {
/**
	if (frogplayer.currentTime()<togglescrollpos) {
	document.getElementById("scrollingid").style.opacity=1;
	} else {
	document.getElementById("scrollingid").style.opacity=0;
	}**/

}

/**
setTimeout(function(){
console.log("resetting scroll top")
$(window).scrollTop(0)}, 100)**/


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
 		scrollTop = 			   0,
        relativeScrollTop =        0,
        currentKeyframe =          0,
        currentButtonIndex	=		0,
        froggy = document.getElementById("froggydiv"),
  		frogspeed = .005,
		player = videojs("frogvideo"),
		keyframes = [{//0 – INTRO
			'wrapper' : '#intro',
            'duration' : '100%',
            'animations' :  [{
                'selector'    : '.copy',
                'translateY'  : -25,
                'opacity'    : [1, .2]
              },{
               'selector'    : '#froggydiv',
                'opacity'    : [1, .2]
              },{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [0,0]
              },{
                'selector'    : '.scrolling',
                'translateY'  : [0,295],
                'opacity'    : [1,1],
                'scale': 1.2
               
              }]
             },{//1 – show the vis, with mammals data and LION
              'wrapper' : '#vis',
            'duration' : '100%',
            'animations' :  [{
                'selector'    : '.copy',
                'opacity'    : [0,0]
              },{
                'selector'    : '.scrolling',
                'translateY'  : [295,295],
                'opacity'    : [1,1],
                'scale': [1.2, 1.2]
               
              },{
               'selector'    : '#froggydiv',
                'opacity'    : [0, 0]
              },{
                'selector'    : '.viscopy',
                'translateY'  : [-25,-25],
                'opacity'    : [1,1]
              },{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [1,1]
              }]
            },{//2 – continuing to show the vis w MAMMALS
             'wrapper' : '#vis',
            'duration' : '50%',
            'animations' :  [{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [1,1]
              }, {
               'selector'    : '#reptilesviddiv',
                'opacity'    : [0,0]
              }]
            },{//3 – switching to REPTILES and showing the TURTLE
            'wrapper' : '#vis',
            'duration' : '100%',
            'animations' :  [{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#reptilesviddiv',
                'opacity'    : [1,1]
              }]
             },{// 4 – continuing to show the vis w REPTILES
              'wrapper' : '#vis',
            'duration' : '50%',
            'animations' :  [{
               'selector'    : '#reptilesviddiv',
                'opacity'    : [1,1]
              }, {
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [0,0]
              }]
            },{// 5 – switching to AMPHIBIANS and showing the FROG
            'wrapper' : '#vis',
            'duration' : '100%',
            'animations' :  [{
               'selector'    : '#reptilesviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [1,1]
              }]
            },{// 6 – continuing to show the vis w AMPHIBIANS
            'wrapper' : '#vis',
            'duration' : '50%',
            'animations' :  [{
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [1,1]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [0,0]
              }]
             },{// 7 – switching to BIRDS and showing the OWL
            'wrapper' : '#vis',
            'duration' : '100%',
            'animations' :  [{
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [1,1]
              }]
            } ,{
            'duration' : '100%',
            'animations' :  []
          }
        ]
            
            
            
            
             
             
            
            
		/**
        keyframes = [{// 0
            'wrapper' : '#intro',
            'duration' : '100%',
            'animations' :  [{
                'selector'    : '.copy',
                'translateY'  : -25,
                'opacity'    : [1, 0]
              },{
               'selector'    : '#froggydiv',
                'opacity'    : [1, 1]
              },{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#reptilesviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [0,0]
              }
            ]
          } ,{//1 – show the vis, with mammals data and LION
            'wrapper' : '#vis',
            'duration' : '100%',
            'animations' :  [{
                'selector'    : '.viscopy',
                'translateY'  : [-25,-25],
                'opacity'    : [1,1]
              },{
               'selector'    : '#mammalsviddiv',
               'translateY'  : [-10,-10],
                'opacity'    : [1,1]
              }, {
               'selector'    : '#reptilesviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [0,0]
              }]
          },{//2 – continuing to show the vis w MAMMALS
            'wrapper' : '#vis',
            'duration' : '50%',
            'animations' :  [{
                'selector'    : '.viscopy',
                'translateY'  : [-25,-25],
                'opacity'    : [1,1]
              },{
               'selector'    : '#mammalsviddiv',
               'translateY'  : [-10,-10],
                'opacity'    : [1,1]
              }, {
               'selector'    : '#reptilesviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [0,0]
              }]
          },{//3 – switching to REPTILES and showing the TURTLE
            'wrapper' : '#vis',
            'duration' : '100%',
            'animations' :  [{
                'selector'    : '.viscopy',
                'translateY'  : [-25,-25],
                'opacity'    : [1,1]
              },{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#reptilesviddiv',
               'translateY'  : -3,
                'opacity'    : [1,1]
              }, {
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [0,0]
              }]
          },{// 4 – continuing to show the vis w REPTILES
            'wrapper' : '#vis',
            'duration' : '50%',
            'animations' :  [{
                'selector'    : '.viscopy',
                'translateY'  : [-25,-25],
                'opacity'    : [1,1]
              },{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#reptilesviddiv',
               'translateY'  : [-3,-3],
                'opacity'    : [1,1]
              }, {
               'selector'    : '#amphibiansviddiv',
                'opacity'    : [0,0]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [0,0]
              }]
          },{// 5 – switching to AMPHIBIANS and showing the FROG
            'wrapper' : '#vis',
            'duration' : '100%',
            'animations' :  [{
                'selector'    : '.viscopy',
                'translateY'  : [-25,-25],
                'opacity'    : [1,1]
              },{
               'selector'    : '#reptilesviddiv',
               'translateY'  : [-3, -3],
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#amphibiansviddiv',
               'translateY'  : -8,
                'opacity'    : [1,1]
              },{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [0,0]
              }]
          },{// 6 – continuing to show the vis w AMPHIBIANS
            'wrapper' : '#vis',
            'duration' : '50%',
            'animations' :  [{
                'selector'    : '.viscopy',
                'translateY'  : [-25,-25],
                'opacity'    : [1,1]
              },{
               'selector'    : '#reptilesviddiv',
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#amphibiansviddiv',
               'translateY'  : [-8,-8],
                'opacity'    : [1,1]
              },{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#birdsviddiv',
                'opacity'    : [0,0]
              }]
          },{// 7 – switching to BIRDS and showing the OWL
            'wrapper' : '#vis',
            'duration' : '100%',
            'animations' :  [{
                'selector'    : '.viscopy',
                'translateY'  : [-25,-25],
                'opacity'    : [1,1]
              },{
               'selector'    : '#amphibiansviddiv',
               'translateY'  : [-8, -8],
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#birdsviddiv',
               'translateY'  : -10,
                'opacity'    : [1,1]
              },{
               'selector'    : '#mammalsviddiv',
                'opacity'    : [0, 0]
              }, {
               'selector'    : '#reptilesviddiv',
                'opacity'    : [0,0]
              }]
          } ,{
          
            'duration' : '100%',
            'animations' :  []
          }
        ]**/

    /*  Construction
    -------------------------------------------------- */
    
    /**
    
    function checkRequestAnimationFrame() {
    var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if(!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id;
  };
  if(!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
  };
    }**/
    
    
    init = function() {
    /**
    	(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if(!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id;
  };
  if(!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
  };
}());**/
    
   // checkRequestAnimationFrame();
    
      scrollIntervalID = setInterval(updatePage, 1);
      // window.requestAnimationFrame(updatePage);
      //setInterval(updatePage, 10)
      setupValues();
     
    }
    

//var frogscrollspan = 800;
//var froglength = 3.88
/**
function frogActive(scrollpos) {
//scrollpos = Math.max(0,$(window).scrollTop());
	if (frogplayer.currentTime() < froglength) {
		return true;
	}
	if ($(window).scrollTop()<0) {
		return true;
	}
	return false;
}**/
    setupValues = function() {
    	
    /**
      player.on('loadeddata', function(){ 
      	playerready=true;
      	//player.play();
      	//setTimeout(function() {player.pause()}, 100)
      	player.currentTime(0)
      	//player.play()
      	console.log("frog loaded")
      	//window.addEventListener("scroll", function(e) {moveFrog(e)})
      	
      	window.addEventListener("mousewheel", function(e) { 
      		mousewheel(e);
      });
      	
      	
      	});**/
      scrollTop = 0; //$window.scrollTop();
      windowHeight = $window.height();
      windowWidth = $window.width();
      convertAllPropsToPx();
      buildPage();
      setupButtons();
    }
    
    var buttonIndexToPagePercent = {0:'1%', 1:'125%', 2:'325%', 3:'450%', 4:'650%'}
    var keyframeToAnimalClassIndex = {1:1, 2:1, 3:2, 4:2, 5:0, 6:0, 7:3, 8:3};
var keyframeToButtonId = {1:'mammalsbutton',2:'mammalsbutton', 3:'reptilesbutton',4:'reptilesbutton', 5:'amphibiansbutton',6:'amphibiansbutton', 7:'birdsbutton', 8:'birdsbutton'}; 
var keyframeToButtonIndex = {0:0,1:1,2:1, 3:2,4:2, 5:3,6:3, 7:4, 8:4}; 
var scrollButtonClicked = false;
var startagain = false;
    setupButtons = function() {
    	$('#titlebutton').on('click',function() {clickButton(0, d3.select(this))});
    	$('#mammalsbutton').on('click',function() {clickButton(1, d3.select(this))});
    	$('#reptilesbutton').on('click',function() {clickButton(2, d3.select(this))});
    	$('#amphibiansbutton').on('click',function() {clickButton(3, d3.select(this))});
    	$('#birdsbutton').on('click',function() {clickButton(4, d3.select(this))});
    	$('#scrollbutton').on('click',function() {
    		//console.log("hello")
    		//init=true;
    		//clickButton(1, d3.select('#mammalsbutton'))
    		//frogplayer.play();
    		scrollButtonClicked = true;
    	});
    	
    	
    	updateButtons(d3.select(document.getElementById('titlebutton'), 0));
    }
    

   // var keyframeToPagePercent = {1:buttonIndexToPagePercent[1],2:buttonIndexToPagePercent[1], 3:buttonIndexToPagePercent[2],4:buttonIndexToPagePercent[2], 5:buttonIndexToPagePercent[3],6:buttonIndexToPagePercent[3], 7:buttonIndexToPagePercent[4], 8:buttonIndexToPagePercent[4]}
    
    clickButton = function(index, element) {
    	
    	if (!playerready) {
    		return;
    	}
    	//document.getElementById("scrollingid").style.opacity=0;
    	frogplayer.currentTime(froglength);
    	//console.log(index)
    	if (index==0) {
    		startagain = true;
    		document.getElementById("ttipdiv").style["display"]= "none"
    	} else {
    	document.getElementById("ttipdiv").style["display"]="block";
    	}
    	//console.log(convertPercentToPx(buttonIndexToPagePercent[index]))
    	$window.scrollTop(convertPercentToPx(buttonIndexToPagePercent[index], 'y'))
    	//document.getElementsByClassName('classButton').addClass("classButton .selectedbutton");//.classed(".classButton .selectedbutton", true);
    	
    	updateButtons(element, index);
    	updatePage();
    	if (index==0) {
    		frogplayer.currentTime(0);
    	}
    }
    /**
convertPercentToPx = function(value, axis) {
      if(typeof value === "string" && value.match(/%/g)) {
        if(axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
        if(axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
      }
      return value;
    }**/
    
    updateButtons = function(element, buttonindexnum) {
    	//console.log(buttonindexnum)
    	d3.selectAll(".sectionButton").classed("selectedSectionButton", false)
    	element.classed("selectedSectionButton", true)
    	currentButtonIndex = buttonindexnum;
    	
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
   
   /** updatePage = function() {
    	if (frogActive()) {
    		//$(window).scrollTop(0)
    		return;
    	}
      window.requestAnimationFrame(function() {
      
        setScrollTops();
        if(scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
          animateElements();
          setKeyframe();
          scrollpos = Math.max(0,$(window).scrollTop());
          //frog(scrollpos);
          vis(scrollpos);
        }
      });
    }**/
    
    updatePage = function() {
    	
    	if (frogActive()&&(!(startagain))) {
    	
    		//$(window).scrollTop(0)
    		//checkRequestAnimationFrame();
    		if (scrollButtonClicked) {
    			scrollButtonClicked=false;
    			frogplayer.play();
    			
    			currentButtonIndex=1;
    		$window.scrollTop(convertPercentToPx(buttonIndexToPagePercent[currentButtonIndex], 'y'))
    		//clickButton(1, d3.select('#mammalsbutton'));
    			//console.log("scroll button clicked")
    		}
    		
    		
    		
    		// window.requestAnimationFrame(updatePage);
    		return;
    	}
    	if (currentButtonIndex==4) {
    		document.getElementById("scrollingid").style["display"]= "none"
    	} else {
    		document.getElementById("scrollingid").style["display"]= "block"
    	}
    	if (currentButtonIndex==0) {
    		document.getElementById("viscopyid").style["display"]= "none"
    	} else {
    		document.getElementById("viscopyid").style["display"]= "block"
    	}
    	
    	//console.log("updating")
    	 setScrollTops();
    	if (scrollButtonClicked) {
    		scrollButtonClicked=false;
    		console.log(currentButtonIndex)
    		//buttonIndexToPagePercent = {0:'1%', 1:'125%', 2:'325%', 3:'450%', 4:'650%'
    		currentButtonIndex=currentButtonIndex+1;
    		$window.scrollTop(convertPercentToPx(buttonIndexToPagePercent[currentButtonIndex], 'y'))
    		 
    		//clickButton(1, d3.select('#mammalsbutton'));
    		//console.log("scroll button clicked outside")
    		//window.requestAnimationFrame(updatePage);
    		return;
    		
    	}
/**
 	    **/
 	
     
      if(scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
        animateElements();
        setKeyframe();
        scrollpos = Math.max(0,$(window).scrollTop());
       // frog(scrollpos);
     
        vis(scrollpos);
        
      }

         //checkRequestAnimationFrame();
     // window.requestAnimationFrame(updatePage);
     
    }

 



var vispos = 1000;
//var vispos=0;
var showingvis = false;
var starting = true;
vis = function(scrollpos) {
	//console.log(currentKeyframe)
	if (currentKeyframe==0) {
		hideVis();
		showingvis=false;
		
		updateButtons(d3.select(document.getElementById('titlebutton')), keyframeToButtonIndex[currentKeyframe]);
		/**
		if (currentKeyframe==0) {
			updateButtons(d3.select(document.getElementById('titlebutton')));
		} else {
			updateButtons(d3.select(document.getElementById('mammalsbutton')));
		}**/
	} else {
		if (currentKeyframe==1) {
		//console.log("SHOWING VIS")
			if (!showingvis) {
				showVis();
				showingvis=true;
			}
		} else {
			var classindex = keyframeToAnimalClassIndex[currentKeyframe];
			//console.log("Class index: "+classindex);
			//if (classindex==undefined) {
				//return;
			//}
		if (!(classindex==currclassindex)) {
			changeClass(classindex);
			
		}
		//
		
	}
	//console.log(keyframeToButtonIndex[currentKeyframe])
	updateButtons(d3.select(document.getElementById(keyframeToButtonId[currentKeyframe])), keyframeToButtonIndex[currentKeyframe]);
	}
	
	
	/**if (currentKeyframe==2) {
		if (!(currclassindex==1)) {
			changeClass(1);
			//console.log("CHANGING CLASS TO MAMMALS")	
		}
	} else if (currentKeyframe==4) {
		if (!(currclassindex==2)) {
			changeClass(2);
			console.log("CHANGING CLASS TO REPTILES")	
		}
	} else if (currentKeyframe==6) {
		//console.log("CURRENTKEYFRAME = 3")
		if (!(currclassindex==0)) {
			changeClass(0);
			console.log("CHANGING CLASS TO AMPHIBIANS")	
		}
	} else if (currentKeyframe==8) {
		if (!(currclassindex==3)) {
			changeClass(3);
			console.log("CHANGING CLASS TO BIRDS")	
		}
	}**/
/**
	if (scrollpos>vispos) {
		if (starting) {
			//updateStatHighlights();
			//d3.selectAll(".number").classed("visnumber", true);
			//console.log("SHOW")
			//showVis();
			starting=false;
		}
	} else {
		if (!starting) {
			//d3.selectAll(".number").classed("visnumber", false);
			//clearStatHighlights();
			//hideVis();
			//console.log("HIDE")
			starting=true;
		}
	//console.log("hidevis")
	}**/
}
/**
function updateStatHighlights() {
	d3.selectAll(".number").classed("visnumber", true);
	d3.selectAll(".number").classed("deselectednumber", function(d, i) {return !(i==currclassindex)});
	d3.selectAll(".group").classed("deselectedgroup", function(d, i) {return !(i==currclassindex)});
	
}**/


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
      //console.log(currentKeyframe)
      
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