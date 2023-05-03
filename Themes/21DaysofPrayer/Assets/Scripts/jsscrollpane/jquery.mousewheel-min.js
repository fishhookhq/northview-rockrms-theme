/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}((function($){var e,t,i=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],o=Array.prototype.slice;if($.event.fixHooks)for(var l=i.length;l;)$.event.fixHooks[i[--l]]=$.event.mouseHooks;var s=$.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],a,!1);else this.onmousewheel=a;$.data(this,"mousewheel-line-height",s.getLineHeight(this)),$.data(this,"mousewheel-page-height",s.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],a,!1);else this.onmousewheel=null;$.removeData(this,"mousewheel-line-height"),$.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=$(e),i=t["offsetParent"in $.fn?"offsetParent":"parent"]();return i.length||(i=$("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return $(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function a(i){var n=i||window.event,l=o.call(arguments,1),a=0,u=0,f=0,d=0,c=0,m=0;if((i=$.event.fix(n)).type="mousewheel","detail"in n&&(f=-1*n.detail),"wheelDelta"in n&&(f=n.wheelDelta),"wheelDeltaY"in n&&(f=n.wheelDeltaY),"wheelDeltaX"in n&&(u=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(u=-1*f,f=0),a=0===f?u:f,"deltaY"in n&&(a=f=-1*n.deltaY),"deltaX"in n&&(u=n.deltaX,0===f&&(a=-1*u)),0!==f||0!==u){if(1===n.deltaMode){var g=$.data(this,"mousewheel-line-height");a*=g,f*=g,u*=g}else if(2===n.deltaMode){var w=$.data(this,"mousewheel-page-height");a*=w,f*=w,u*=w}if(d=Math.max(Math.abs(f),Math.abs(u)),(!t||d<t)&&(t=d,r(n,d)&&(t/=40)),r(n,d)&&(a/=40,u/=40,f/=40),a=Math[a>=1?"floor":"ceil"](a/t),u=Math[u>=1?"floor":"ceil"](u/t),f=Math[f>=1?"floor":"ceil"](f/t),s.settings.normalizeOffset&&this.getBoundingClientRect){var v=this.getBoundingClientRect();c=i.clientX-v.left,m=i.clientY-v.top}return i.deltaX=u,i.deltaY=f,i.deltaFactor=t,i.offsetX=c,i.offsetY=m,i.deltaMode=0,l.unshift(i,a,u,f),e&&clearTimeout(e),e=setTimeout(h,200),($.event.dispatch||$.event.handle).apply(this,l)}}function h(){t=null}function r(e,t){return s.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}$.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}));