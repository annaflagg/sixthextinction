var clip = document.getElementById("cliprect");
var maxloadingwidth = document.getElementById("loadinglizardbackground").getBBox().width;
var minloadingwidth = 40;
//clip.setAttribute("x", (window.innerWidth-maxwidth)/2.0);
var progress = { p:0}; 
var totalprogress = 39; 

//var total = 2; 





function incrementProgress() {
	progress.p=progress.p+1;
	//console.log(progress.p);
	
}

function getProgress() {
	return progress.p;
}

function fractionProgress(val) {
	//console.log(progress.p)
	//return (progress.p/total)*100;
	return (val)/totalprogress;
}

/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
 
// object.watch
if (!Object.prototype.watch) {
	Object.defineProperty(Object.prototype, "watch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop, handler) {
			var
			  oldval = this[prop]
			, newval = oldval
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
				return newval = handler.call(this, prop, oldval, val);
			}
			;
			
			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}
 
// object.unwatch
if (!Object.prototype.unwatch) {
	Object.defineProperty(Object.prototype, "unwatch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop) {
			var val = this[prop];
			delete this[prop]; // remove accessors
			this[prop] = val;
		}
	});
}

progress.watch("p", function (id, oldval, newval) {
	//console.log(progress.p)
	document.getElementById("cliprect").setAttribute("width", Math.max(minloadingwidth,fractionProgress(newval)*maxloadingwidth));

	if ((((progress.p>=totalprogress) && (!startedeverything)))) {
		startedeverything = true;
		// console.log("OK EVERYTHING HAS LOADED")
		document.getElementById("froggydiv").style.display="block";
		document.getElementById("bodyid").style.overflow="visible";
		document.getElementById("loadingid").style.opacity=0;
		document.getElementById("scrollcommandid").style.opacity=1;
		//document.getElementById("loadingid").style.opacity=0;
		document.getElementById("scrollingid").style.opacity=1;
		
		//document.getElementById("froggydiv").style.opacity=1;
		
		if (playerready) {
		resetFrog();
			
		}
		
		
		$('.scrolling').animate({'margin-top':'680px'}, 'slow');
		
		
		 
		//document.getElementById("froggydiv").style.display="block";
	}

	return newval;  
});





