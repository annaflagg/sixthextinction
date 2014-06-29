var clip = document.getElementById("cliprect");
var maxwidth = document.getElementById("loadinglizardbackground").getBBox().width;
//clip.setAttribute("x", (window.innerWidth-maxwidth)/2.0);
var progress = { p:0}; 
var total = 36; 
var started = false;
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
	return (val)/total;
}

/**
progress.watch("p", function (id, oldval, newval) {
    //console.log( "o." + id + " changed from " + oldval + " to " + newval );
    console.log("hello")
    return newval;
});**/

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












//var frogicon = document.getElementById("frogicon");
 //   console.log(frogicon)


//maxwidth = 112;
progress.watch("p", function (id, oldval, newval) {

	var w =  fractionProgress(newval)*maxwidth;
	//console.log(fractionProgress(newval))
	document.getElementById("cliprect").setAttribute("width", w);
	
	//document.getElementById("clipsvg").setAttribute("width", w);
	//console.log(document.getElementById("cliprect"))
	//clip.setAttribute("width", w);

	if ((((progress.p>=total) && (!started)))) {
		console.log("Ok, done loading")
		document.getElementById("loadingid").style.opacity=0;
		document.getElementById("scrollcommandid").style.opacity=1;
		//document.getElementById("loadingid").style.opacity=0;
		document.getElementById("scrollingid").style.opacity=1;
		started = true;
	}
	
	
	return newval;
	
	
   //console.log( "o." + id + " changed from " + oldval + " to " + newval );
    
    
    
    
});





