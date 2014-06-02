var clip = document.getElementById("cliprect");
var maxwidth = document.getElementById("lizardicon").getBBox().width;
clip.setAttribute("x", (window.innerWidth-maxwidth)/2.0);
var progress = { p:0}; 
var total = 44; 
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
	return val/total;
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
	clip.setAttribute("width", w);
	
	if (progress.p>=total) {
		//console.log("OK, READY!")
		//if (playerwaiting) {
		//	start();
		//}
	}
	
	
	return newval;
	//console.log(newval)
	
	/**
	if (parseInt(newval)==100) {
	//	console.log("HELLLOOOOOOOOOOO")
		//console.log(document.getElementById("cliprect"))
		document.getElementById("cliprect").setAttribute("width", 150);
		
		console.log(document.getElementById("cliprect"))
	} else {
	//console.log(document.getElementById("cliprect"))
	document.getElementById("cliprect").setAttribute("width", 50);
	}
	**/
/**
	
	//document.getElementById("cliprect").setAttribute("width", w);
	if (fractionProgress(newval)==1) {
		console.log(newval)
		document.getElementById("cliprect").setAttribute("width", 10);
	}
	document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 200);
		document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 200);
		document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 200);
		document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 200);
	document.getElementById("cliprect").setAttribute("width", 10);
	return newval;**/
	/**
	if (fractionProgress(newval)==1) {
	console.log(w)
	document.getElementById("cliprect").setAttribute("width", 200);
	console.log(document.getElementById("cliprect").getAttribute("width"));
	return newval;
	} else {
	document.getElementById("cliprect").setAttribute("width", 50);
	//console.log(document.getElementById("cliprect").getAttribute("width"));
	return newval;
	}**/
	//clip.setAttribute("width", 200);
	//console.log(clippy)
	//console.log(fractionProgress(newval)*maxwidth)
	
   //console.log( "o." + id + " changed from " + oldval + " to " + newval );
    
    
    
    
});





