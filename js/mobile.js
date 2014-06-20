(function() {
  $(function() {
 $(window).scrollTop(0)
 var buttons = ['mammalsbutton', 'reptilesbutton', 'amphibiansbutton', 'birdsbutton']
 var scrollTops = [0, 0, 0, 0, 0];
 var showflyer; // = 450;
 var hideflyer;

 var currentgroup = -1;
 var prevgroup = -1;
 setupButtons();
 setupScroll();
 	
 	function setupButtons() {
 		//scrolltops[0] = 0;
 		buttons.forEach(function(d, i) {
 			scrollTops[i+1] = $('#animalgroup'+i+'').offset().top-60;
 			
 			document.getElementById(d).addEventListener('touchstart', function(e){touchButton(d, i)});
 			document.getElementById(d).addEventListener('click', function(e){touchButton(d, i)});
 			
 			if (i==0) {
 				showflyer = $('#animalgroup'+i+'').offset().top-300;
 			}
 			if (i==3) {
 				hideflyer = $('#animalgroup'+i+'').offset().top;
 			}
 			
 			})


 	}
 	/**
 	
 	function setScrollTops() {
 		var scrtop = 0;
 		buttons.fo
 	
 	}**/
 	//var scrollsByIndex = {0:700, 1:200, 2:300, 3:400};
 	function touchButton(data, index) {
 		//$(window).scrollTop($('#animalgroup'+index+'').offset().top-60)
 		$(window).scrollTop(scrollTops[index+1])
 		updateButtons(data);
 	}
 	function updateButtons(data) {
 		buttons.forEach(function(d, i) {
 			if (d==data) {
 			document.getElementById(d).className += " selectedSectionButton";
 			} else {
 			document.getElementById(d).className =document.getElementById(d).className.replace( /(?:^|\s)selectedSectionButton(?!\S)/g , '' )
 			}
 		});
 		
 	}
 	function setupScroll() {
 		window.addEventListener("touchmove", function() {mobileScrollListener()}, false);
 		window.addEventListener("scroll", function() {mobileScrollListener()}, false);
 	}
 	function mobileScrollListener() {
 		prevgroup = currentgroup;
 		var scrollposition = $(window).scrollTop();
 		//console.log(scrollTops.slice(1, scrollTops.length+1))
 		if (scrollposition<(scrollTops[1]/2)) {
 			currentgroup = -1;
 		
 		} else {
 			scrollTops.slice(1, scrollTops.length+1).forEach(function(scrolltop, index){
 			//console.log(index)
 				if (scrollposition>scrolltop-((scrolltop-scrollTops[index])/2)) {
 					currentgroup = index;
 				}
 			
 			})
 		}
 		if (!(prevgroup==currentgroup)) {
 			
 			updateButtons(buttons[currentgroup])
 			prevgroup = currentgroup;
 		}
 		updateFlyer(scrollposition);
 	}
 	function updateFlyer(scrollposition) {
 		if ((scrollposition>showflyer)&&(scrollposition<hideflyer)) {
 			
 			$('#flyer').css('display','block');
 		} else {
 		$('#flyer').css('display','none');
 		}
 	}
 	
 
  })}).call(this);
