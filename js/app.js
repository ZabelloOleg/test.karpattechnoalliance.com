function initAnchors(){new SmoothScroll({anchorLinks:"a.anchor-link",extraOffset:35,wheelBehavior:"none"})}function initAccordion(){ResponsiveHelper.addRange({"..767":{on:function(){jQuery(".accordion-tab-list").slideAccordion({opener:".opener",slider:".slide",animSpeed:300})},off:function(){jQuery(".accordion-tab-list").slideAccordion("destroy")}}})}function initTabs(){ResponsiveHelper.addRange({"768..":{on:function(){jQuery(".tabset").tabset({tabLinks:".opener",defaultTab:!0})},off:function(){jQuery(".tabset").tabset("destroy")}}})}function initCounterUp(){jQuery(".counter-fact").counterUp({delay:10,time:2e3})}function initOpenClose(){ResponsiveHelper.addRange({"..767":{on:function(){jQuery(".menu > li").openClose({activeClass:"active-slide",opener:".opener",slider:".drop-menu",animSpeed:400,effect:"slide"})}}})}function initMobileNav(){jQuery("body").mobileNav({menuActiveClass:"nav-active",menuOpener:".nav-opener"})}jQuery((function(){initMobileNav(),initOpenClose(),initCounterUp(),initAccordion(),initTabs(),initAnchors()})),$(document).ready((function(){var t=$("header")[0];new Headroom(t,{offset:50,classes:{initial:"headroom",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom"}}).init()}));var swiper=new Swiper(".experience-slider",{pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'">'+(t<9?"0":"")+(t+1)+"</span>"}}});!function(t,e){var i,o,n,s=t(window),a="onwheel"in document||document.documentMode>=9?"wheel":"mousewheel DOMMouseScroll";function r(e,s,r){var l;document.body&&(s="number"==typeof s?{duration:s}:s||{},i=i||t("html, body"),l=s.container||i,"number"==typeof e&&(e={top:e}),o&&n&&o.off(a,n),s.wheelBehavior&&"none"!==s.wheelBehavior&&(n=function(t){"stop"===s.wheelBehavior?(l.off(a,n),l.stop()):"ignore"===s.wheelBehavior&&t.preventDefault()},o=l.on(a,n)),l.stop().animate({scrollLeft:e.left,scrollTop:e.top},s.duration,(function(){n&&l.off(a,n),t.isFunction(r)&&r()})))}function l(e){this.options=t.extend({anchorLinks:'a[href^="#"]',container:null,extraOffset:null,activeClasses:null,easing:"swing",animMode:"duration",animDuration:800,animSpeed:1500,anchorActiveClass:"anchor-active",sectionActiveClass:"section-active",wheelBehavior:"stop",useNativeAnchorScrolling:!1},e),this.init()}l.prototype={init:function(){this.initStructure(),this.attachEvents(),this.isInit=!0},initStructure:function(){var e=this;this.container=this.options.container?t(this.options.container):t("html,body"),this.scrollContainer=this.options.container?this.container:s,this.anchorLinks=jQuery(this.options.anchorLinks).filter((function(){return jQuery(e.getAnchorTarget(jQuery(this))).length}))},getId:function(t){try{return"#"+t.replace(/^.*?(#|$)/,"")}catch(t){return null}},getAnchorTarget:function(e){var i=this.getId(t(e).attr("href"));return t(i.length>1?i:"html")},getTargetOffset:function(t){var e=t.offset().top;return this.options.container&&(e-=this.container.offset().top-this.container.prop("scrollTop")),"number"==typeof this.options.extraOffset?e-=this.options.extraOffset:"function"==typeof this.options.extraOffset&&(e-=this.options.extraOffset(t)),{top:e}},attachEvents:function(){var e=this;if(this.options.activeClasses&&this.anchorLinks.length){this.anchorData=[];for(var i=0;i<this.anchorLinks.length;i++){var o=jQuery(this.anchorLinks[i]),n=e.getAnchorTarget(o),a=null;t.each(e.anchorData,(function(t,e){e.block[0]===n[0]&&(a=e)})),a?a.link=a.link.add(o):e.anchorData.push({link:o,block:n})}this.resizeHandler=function(){e.isInit&&e.recalculateOffsets()},this.scrollHandler=function(){e.refreshActiveClass()},this.recalculateOffsets(),this.scrollContainer.on("scroll",this.scrollHandler),s.on("resize.SmoothScroll load.SmoothScroll orientationchange.SmoothScroll refreshAnchor.SmoothScroll",this.resizeHandler)}this.clickHandler=function(t){e.onClick(t)},this.options.useNativeAnchorScrolling||this.anchorLinks.on("click",this.clickHandler)},recalculateOffsets:function(){var e=this;t.each(this.anchorData,(function(t,i){i.offset=e.getTargetOffset(i.block),i.height=i.block.outerHeight()})),this.refreshActiveClass()},toggleActiveClass:function(t,e,i){t.toggleClass(this.options.anchorActiveClass,i),e.toggleClass(this.options.sectionActiveClass,i)},refreshActiveClass:function(){var e=this,i=!1,o=this.container.prop("scrollHeight"),n=this.scrollContainer.height(),a=this.options.container?this.container.prop("scrollTop"):s.scrollTop();this.options.customScrollHandler?this.options.customScrollHandler.call(this,a,this.anchorData):(this.anchorData.sort((function(t,e){return t.offset.top-e.offset.top})),t.each(this.anchorData,(function(t){var s=e.anchorData.length-t-1,r=e.anchorData[s],l="parent"===e.options.activeClasses?r.link.parent():r.link;a>=o-n?s===e.anchorData.length-1?e.toggleActiveClass(l,r.block,!0):e.toggleActiveClass(l,r.block,!1):!i&&(a>=r.offset.top-1||0===s)?(i=!0,e.toggleActiveClass(l,r.block,!0)):e.toggleActiveClass(l,r.block,!1)})))},calculateScrollDuration:function(t){return"speed"===this.options.animMode?Math.abs(this.scrollContainer.scrollTop()-t.top)/this.options.animSpeed*1e3:this.options.animDuration},onClick:function(t){var e=this.getAnchorTarget(t.currentTarget),i=this.getTargetOffset(e);t.preventDefault(),r(i,{container:this.container,wheelBehavior:this.options.wheelBehavior,duration:this.calculateScrollDuration(i)}),this.makeCallback("onBeforeScroll",t.currentTarget)},makeCallback:function(t){if("function"==typeof this.options[t]){var e=Array.prototype.slice.call(arguments);e.shift(),this.options[t].apply(this,e)}},destroy:function(){var e=this;this.isInit=!1,this.options.activeClasses&&(s.off("resize.SmoothScroll load.SmoothScroll orientationchange.SmoothScroll refreshAnchor.SmoothScroll",this.resizeHandler),this.scrollContainer.off("scroll",this.scrollHandler),t.each(this.anchorData,(function(t){var i=e.anchorData.length-t-1,o=e.anchorData[i],n="parent"===e.options.activeClasses?o.link.parent():o.link;e.toggleActiveClass(n,o.block,!1)}))),this.anchorLinks.off("click",this.clickHandler)}},t.extend(l,{scrollTo:function(t,e,i){r(t,e,i)}}),e.SmoothScroll=l}(jQuery,window),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.SlideAccordion=e(jQuery)}(window,(function(t){"use strict";var e="js-acc-hidden";function i(e){this.options=t.extend(!0,{allowClickWhenExpanded:!1,activeClass:"active",opener:".opener",slider:".slide",animSpeed:300,collapsible:!0,event:"click",scrollToActiveItem:{enable:!1,breakpoint:767,animSpeed:600,extraOffset:null}},e),this.init()}return i.prototype={init:function(){this.options.holder&&(this.findElements(),this.setStateOnInit(),this.attachEvents(),this.makeCallback("onInit"))},findElements:function(){this.$holder=t(this.options.holder).data("SlideAccordion",this),this.$items=this.$holder.find(":has("+this.options.slider+")")},setStateOnInit:function(){var i=this;this.$items.each((function(){t(this).hasClass(i.options.activeClass)||t(this).find(i.options.slider).addClass(e)}))},attachEvents:function(){var t=this;this.accordionToggle=function(e){var i=jQuery(this).closest(t.$items),o=t.getActiveItem(i);t.options.allowClickWhenExpanded&&i.hasClass(t.options.activeClass)||(e.preventDefault(),t.toggle(i,o))},this.$items.on(this.options.event,this.options.opener,this.accordionToggle)},toggle:function(t,e){t.hasClass(this.options.activeClass)?this.options.collapsible&&this.hide(t):this.show(t),!t.is(e)&&e.length&&this.hide(e),this.makeCallback("beforeToggle")},show:function(t){var i=t.find(this.options.slider);t.addClass(this.options.activeClass),i.stop().hide().removeClass(e).slideDown({duration:this.options.animSpeed,complete:function(){i.removeAttr("style"),this.options.scrollToActiveItem.enable&&window.innerWidth<=this.options.scrollToActiveItem.breakpoint&&this.goToItem(t),this.makeCallback("onShow",t)}.bind(this)}),this.makeCallback("beforeShow",t)},hide:function(t){var i=t.find(this.options.slider);t.removeClass(this.options.activeClass),i.stop().show().slideUp({duration:this.options.animSpeed,complete:function(){i.addClass(e),i.removeAttr("style"),this.makeCallback("onHide",t)}.bind(this)}),this.makeCallback("beforeHide",t)},goToItem:function(e){var i=e.offset().top;i<t(window).scrollTop()&&("number"==typeof this.options.scrollToActiveItem.extraOffset?i-=this.options.scrollToActiveItem.extraOffset:"function"==typeof this.options.scrollToActiveItem.extraOffset&&(i-=this.options.scrollToActiveItem.extraOffset()),t("body, html").animate({scrollTop:i},this.options.scrollToActiveItem.animSpeed))},getActiveItem:function(t){return t.siblings().filter("."+this.options.activeClass)},makeCallback:function(t){if("function"==typeof this.options[t]){var e=Array.prototype.slice.call(arguments);e.shift(),this.options[t].apply(this,e)}},destroy:function(){this.$holder.removeData("SlideAccordion"),this.$items.off(this.options.event,this.options.opener,this.accordionToggle),this.$items.removeClass(this.options.activeClass).each(function(i,o){t(o).find(this.options.slider).removeAttr("style").removeClass(e)}.bind(this)),this.makeCallback("onDestroy")}},t.fn.slideAccordion=function(e){var o=Array.prototype.slice.call(arguments),n=o[0];return this.each((function(){var s=jQuery(this).data("SlideAccordion");"object"==typeof e||void 0===e?new i(t.extend(!0,{holder:this},e)):"string"==typeof n&&s&&"function"==typeof s[n]&&(o.shift(),s[n].apply(s,o))}))},function(){var i=t('<style type="text/css">')[0],o="."+e;o+="{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important; width: 100% !important;}",i.styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),t("head").append(i)}(),i})),function(t){"use strict";function e(t,e){this.$holder=t,this.options=e,this.init()}e.prototype={init:function(){this.$tabLinks=this.$holder.find(this.options.tabLinks),this.setStartActiveIndex(),this.setActiveTab(),this.options.autoHeight&&(this.$tabHolder=t(this.$tabLinks.eq(0).attr(this.options.attrib)).parent()),this.makeCallback("onInit",this)},setStartActiveIndex:function(){var t,e=this.getClassTarget(this.$tabLinks),i=e.filter("."+this.options.activeClass),o=this.$tabLinks.filter("["+this.options.attrib+'="'+location.hash+'"]');this.options.checkHash&&o.length&&(i=o),t=e.index(i),this.activeTabIndex=this.prevTabIndex=-1===t?this.options.defaultTab?0:null:t},setActiveTab:function(){var e=this;this.$tabLinks.each((function(i,o){var n=t(o),s=e.getClassTarget(n),a=t(n.attr(e.options.attrib));i!==e.activeTabIndex?(s.removeClass(e.options.activeClass),a.addClass(e.options.tabHiddenClass).removeClass(e.options.activeClass)):(s.addClass(e.options.activeClass),a.removeClass(e.options.tabHiddenClass).addClass(e.options.activeClass)),e.attachTabLink(n,i)}))},attachTabLink:function(t,e){var i=this;t.on(this.options.event+".tabset",(function(t){t.preventDefault(),i.activeTabIndex===i.prevTabIndex&&i.activeTabIndex!==e&&(i.activeTabIndex=e,i.switchTabs()),i.options.checkHash&&(location.hash=jQuery(this).attr("href").split("#")[1])}))},resizeHolder:function(t){var e=this;t?(this.$tabHolder.height(t),setTimeout((function(){e.$tabHolder.addClass("transition")}),10)):e.$tabHolder.removeClass("transition").height("")},switchTabs:function(){var t=this,e=this.$tabLinks.eq(this.prevTabIndex),i=this.$tabLinks.eq(this.activeTabIndex),o=this.getTab(e),n=this.getTab(i);o.removeClass(this.options.activeClass),t.haveTabHolder()&&this.resizeHolder(o.outerHeight()),setTimeout((function(){t.getClassTarget(e).removeClass(t.options.activeClass),o.addClass(t.options.tabHiddenClass),n.removeClass(t.options.tabHiddenClass).addClass(t.options.activeClass),t.getClassTarget(i).addClass(t.options.activeClass),t.haveTabHolder()?(t.resizeHolder(n.outerHeight()),setTimeout((function(){t.resizeHolder(),t.prevTabIndex=t.activeTabIndex,t.makeCallback("onChange",t)}),t.options.animSpeed)):t.prevTabIndex=t.activeTabIndex}),this.options.autoHeight?this.options.animSpeed:1)},getClassTarget:function(t){return this.options.addToParent?t.parent():t},getActiveTab:function(){return this.getTab(this.$tabLinks.eq(this.activeTabIndex))},getTab:function(e){return t(e.attr(this.options.attrib))},haveTabHolder:function(){return this.$tabHolder&&this.$tabHolder.length},destroy:function(){var e=this;this.$tabLinks.off(".tabset").each((function(){var i=t(this);e.getClassTarget(i).removeClass(e.options.activeClass),t(i.attr(e.options.attrib)).removeClass(e.options.activeClass+" "+e.options.tabHiddenClass)})),this.$holder.removeData("Tabset")},makeCallback:function(t){if("function"==typeof this.options[t]){var e=Array.prototype.slice.call(arguments);e.shift(),this.options[t].apply(this,e)}}},t.fn.tabset=function(i){var o=Array.prototype.slice.call(arguments),n=o[0],s=t.extend({activeClass:"active",addToParent:!1,autoHeight:!1,checkHash:!1,defaultTab:!0,animSpeed:500,tabLinks:"a",attrib:"href",event:"click",tabHiddenClass:"js-tab-hidden"},i);return s.autoHeight=s.autoHeight,this.each((function(){var t=jQuery(this),a=t.data("Tabset");"object"==typeof i||void 0===i?t.data("Tabset",new e(t,s)):"string"==typeof n&&a&&"function"==typeof a[n]&&(o.shift(),a[n].apply(a,o))}))}}(jQuery,jQuery(window)),ResponsiveHelper=function(t){var e,i=[],o=t(window),n=!1;function s(){var n=o.width();n!==e&&(e=n,t.each(i,(function(e,i){t.each(i.data,(function(t,e){e.currentActive&&!a(e.range[0],e.range[1])&&(e.currentActive=!1,"function"==typeof e.disableCallback&&e.disableCallback())})),t.each(i.data,(function(t,e){!e.currentActive&&a(e.range[0],e.range[1])&&(e.currentActive=!0,"function"==typeof e.enableCallback&&e.enableCallback())}))})))}function a(t,i){var o="";return t>0&&(o+="(min-width: "+t+"px)"),i<1/0&&(o+=(o?" and ":"")+"(max-width: "+i+"px)"),function(t,i,o){return window.matchMedia&&n?matchMedia(t).matches:window.styleMedia?styleMedia.matchMedium(t):window.media?media.matchMedium(t):e>=i&&e<=o}(o,t,i)}function r(t){var e=t.split("..");return[parseInt(e[0],10)||-1/0,parseInt(e[1],10)||1/0].sort((function(t,e){return t-e}))}return window.matchMedia&&(window.Window&&window.matchMedia===Window.prototype.matchMedia||window.matchMedia.toString().indexOf("native")>-1)&&(n=!0),o.bind("load resize orientationchange",s),{addRange:function(o){var n={data:{}};t.each(o,(function(t,e){n.data[t]={range:r(t),enableCallback:e.on,disableCallback:e.off}})),i.push(n),e=null,s()}}}(jQuery),function(t){function e(e){this.options=t.extend({addClassBeforeAnimation:!0,hideOnClickOutside:!1,activeClass:"active",opener:".opener",slider:".slide",animSpeed:400,effect:"fade",event:"click"},e),this.init()}e.prototype={init:function(){this.options.holder&&(this.findElements(),this.attachEvents(),this.makeCallback("onInit",this))},findElements:function(){this.holder=t(this.options.holder),this.opener=this.holder.find(this.options.opener),this.slider=this.holder.find(this.options.slider)},attachEvents:function(){var e=this;this.eventHandler=function(t){t.preventDefault(),e.slider.hasClass(i)?e.showSlide():e.hideSlide()},e.slider.attr("aria-hidden","true"),e.opener.attr("aria-expanded","false"),e.opener.on(e.options.event,this.eventHandler),"hover"===e.options.event&&(e.opener.on("mouseenter",(function(){e.holder.hasClass(e.options.activeClass)||e.showSlide()})),e.holder.on("mouseleave",(function(){e.hideSlide()}))),e.outsideClickHandler=function(i){if(e.options.hideOnClickOutside){var o=t(i.target);o.is(e.holder)||o.closest(e.holder).length||e.hideSlide()}},this.holder.hasClass(this.options.activeClass)?t(document).on("click touchstart",e.outsideClickHandler):this.slider.addClass(i)},showSlide:function(){var e=this;e.options.addClassBeforeAnimation&&e.holder.addClass(e.options.activeClass),e.slider.attr("aria-hidden","false"),e.opener.attr("aria-expanded","true"),e.slider.removeClass(i),t(document).on("click touchstart",e.outsideClickHandler),e.makeCallback("animStart",!0),o[e.options.effect].show({box:e.slider,speed:e.options.animSpeed,complete:function(){e.options.addClassBeforeAnimation||e.holder.addClass(e.options.activeClass),e.makeCallback("animEnd",!0)}})},hideSlide:function(){var e=this;e.options.addClassBeforeAnimation&&e.holder.removeClass(e.options.activeClass),t(document).off("click touchstart",e.outsideClickHandler),e.makeCallback("animStart",!1),o[e.options.effect].hide({box:e.slider,speed:e.options.animSpeed,complete:function(){e.options.addClassBeforeAnimation||e.holder.removeClass(e.options.activeClass),e.slider.addClass(i),e.slider.attr("aria-hidden","true"),e.opener.attr("aria-expanded","false"),e.makeCallback("animEnd",!1)}})},destroy:function(){this.slider.removeClass(i).css({display:""}),this.opener.off(this.options.event,this.eventHandler),this.holder.removeClass(this.options.activeClass).removeData("OpenClose"),t(document).off("click touchstart",this.outsideClickHandler)},makeCallback:function(t){if("function"==typeof this.options[t]){var e=Array.prototype.slice.call(arguments);e.shift(),this.options[t].apply(this,e)}}};var i="js-slide-hidden";!function(){var e=t('<style type="text/css">')[0],o="."+i;o+="{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}",e.styleSheet?e.styleSheet.cssText=o:e.appendChild(document.createTextNode(o)),t("head").append(e)}();var o={slide:{show:function(t){t.box.stop(!0).hide().slideDown(t.speed,t.complete)},hide:function(t){t.box.stop(!0).slideUp(t.speed,t.complete)}},fade:{show:function(t){t.box.stop(!0).hide().fadeIn(t.speed,t.complete)},hide:function(t){t.box.stop(!0).fadeOut(t.speed,t.complete)}},none:{show:function(t){t.box.hide().show(0,t.complete)},hide:function(t){t.box.hide(0,t.complete)}}};t.fn.openClose=function(i){var o=Array.prototype.slice.call(arguments),n=o[0];return this.each((function(){var s=jQuery(this),a=s.data("OpenClose");"object"==typeof i||void 0===i?s.data("OpenClose",new e(t.extend({holder:this},i))):"string"==typeof n&&a&&"function"==typeof a[n]&&(o.shift(),a[n].apply(a,o))}))}}(jQuery),function(t){function e(e){this.options=t.extend({container:null,hideOnClickOutside:!1,menuActiveClass:"nav-active",menuOpener:".nav-opener",menuDrop:".nav-drop",toggleEvent:"click",outsideClickEvent:"click touchstart pointerdown MSPointerDown"},e),this.initStructure(),this.attachEvents()}e.prototype={initStructure:function(){this.page=t("html"),this.container=t(this.options.container),this.opener=this.container.find(this.options.menuOpener),this.drop=this.container.find(this.options.menuDrop)},attachEvents:function(){var e=this;i&&(i(),i=null),this.outsideClickHandler=function(i){if(e.isOpened()){var o=t(i.target);o.closest(e.opener).length||o.closest(e.drop).length||e.hide()}},this.openerClickHandler=function(t){t.preventDefault(),e.toggle()},this.opener.on(this.options.toggleEvent,this.openerClickHandler)},isOpened:function(){return this.container.hasClass(this.options.menuActiveClass)},show:function(){this.container.addClass(this.options.menuActiveClass),this.options.hideOnClickOutside&&this.page.on(this.options.outsideClickEvent,this.outsideClickHandler)},hide:function(){this.container.removeClass(this.options.menuActiveClass),this.options.hideOnClickOutside&&this.page.off(this.options.outsideClickEvent,this.outsideClickHandler)},toggle:function(){this.isOpened()?this.hide():this.show()},destroy:function(){this.container.removeClass(this.options.menuActiveClass),this.opener.off(this.options.toggleEvent,this.clickHandler),this.page.off(this.options.outsideClickEvent,this.outsideClickHandler)}};var i=function(){var e,i,o=t(window),n=t("html"),s="resize-active",a=function(){e=!1,n.removeClass(s)};o.on("resize orientationchange",(function(){e||(e=!0,n.addClass(s)),clearTimeout(i),i=setTimeout(a,500)}))};t.fn.mobileNav=function(i){var o=Array.prototype.slice.call(arguments),n=o[0];return this.each((function(){var s=jQuery(this),a=s.data("MobileNav");"object"==typeof i||void 0===i?s.data("MobileNav",new e(t.extend({container:this},i))):"string"==typeof n&&a&&"function"==typeof a[n]&&(o.shift(),a[n].apply(a,o))}))}}(jQuery),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Headroom=e()}(this,(function(){"use strict";function t(){return"undefined"!=typeof window}function e(t){return function(t){return t&&t.document&&function(t){return 9===t.nodeType}(t.document)}(t)?function(t){var e=t.document,i=e.body,o=e.documentElement;return{scrollHeight:function(){return Math.max(i.scrollHeight,o.scrollHeight,i.offsetHeight,o.offsetHeight,i.clientHeight,o.clientHeight)},height:function(){return t.innerHeight||o.clientHeight||i.clientHeight},scrollY:function(){return void 0!==t.pageYOffset?t.pageYOffset:(o||i.parentNode||i).scrollTop}}}(t):function(t){return{scrollHeight:function(){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},height:function(){return Math.max(t.offsetHeight,t.clientHeight)},scrollY:function(){return t.scrollTop}}}(t)}function i(t,i,o){var n,s=function(){var t=!1;try{var e={get passive(){t=!0}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){t=!1}return t}(),a=!1,r=e(t),l=r.scrollY(),c={};function h(){var t=Math.round(r.scrollY()),e=r.height(),n=r.scrollHeight();c.scrollY=t,c.lastScrollY=l,c.direction=t>l?"down":"up",c.distance=Math.abs(t-l),c.isOutOfBounds=t<0||t+e>n,c.top=t<=i.offset[c.direction],c.bottom=t+e>=n,c.toleranceExceeded=c.distance>i.tolerance[c.direction],o(c),l=t,a=!1}function d(){a||(a=!0,n=requestAnimationFrame(h))}var p=!!s&&{passive:!0,capture:!1};return t.addEventListener("scroll",d,p),h(),{destroy:function(){cancelAnimationFrame(n),t.removeEventListener("scroll",d,p)}}}function o(t){return t===Object(t)?t:{down:t,up:t}}function n(t,e){e=e||{},Object.assign(this,n.options,e),this.classes=Object.assign({},n.options.classes,e.classes),this.elem=t,this.tolerance=o(this.tolerance),this.offset=o(this.offset),this.initialised=!1,this.frozen=!1}return n.prototype={constructor:n,init:function(){return n.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout((function(t){t.scrollTracker=i(t.scroller,{offset:t.offset,tolerance:t.tolerance},t.update.bind(t))}),100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){!this.hasClass("pinned")&&this.hasClass("unpinned")||(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(t){return"down"===t.direction&&!t.top&&t.toleranceExceeded},shouldPin:function(t){return"up"===t.direction&&t.toleranceExceeded||t.top},addClass:function(t){this.elem.classList.add.apply(this.elem.classList,this.classes[t].split(" "))},removeClass:function(t){this.elem.classList.remove.apply(this.elem.classList,this.classes[t].split(" "))},hasClass:function(t){return this.classes[t].split(" ").every((function(t){return this.classList.contains(t)}),this.elem)},update:function(t){t.isOutOfBounds||!0!==this.frozen&&(t.top?this.top():this.notTop(),t.bottom?this.bottom():this.notBottom(),this.shouldUnpin(t)?this.unpin():this.shouldPin(t)&&this.pin())}},n.options={tolerance:{up:0,down:0},offset:0,scroller:t()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},n.cutsTheMustard=function(){return!!(t()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame)}(),n})),function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,s=e.length;s>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){for(var e in t.Context.refreshAll(),i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,s=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",(function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))}))},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",(function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))}))},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var r=o.oldScroll<a.triggerPoint,l=o.newScroll>=a.triggerPoint;(r&&l||!r&&!l)&&(a.queueTrigger(n),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};for(var s in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var a=t[s];for(var r in this.waypoints[s]){var l,c,h,d,p=this.waypoints[s][r],u=p.options.offset,f=p.triggerPoint,m=0,v=null==f;p.element!==p.element.window&&(m=p.adapter.offset()[a.offsetProp]),"function"==typeof u?u=u.apply(p):"string"==typeof u&&(u=parseFloat(u),p.options.offset.indexOf("%")>-1&&(u=Math.ceil(a.contextDimension*u/100))),l=a.contextScroll-a.contextOffset,p.triggerPoint=Math.floor(m+l-u),c=f<a.oldScroll,h=p.triggerPoint>=a.oldScroll,d=!c&&!h,!v&&(c&&h)?(p.queueTrigger(a.backward),o[p.group.id]=p.group):(!v&&d||v&&a.oldScroll>=p.triggerPoint)&&(p.queueTrigger(a.forward),o[p.group.id]=p.group)}}return n.requestAnimationFrame((function(){for(var t in o)o[t].flushTriggers()})),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){s&&s(),e.refreshAll()},n.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var s=0,a=o.length;a>s;s+=1){var r=o[s];(r.options.continuous||s===o.length-1)&&r.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i===this.waypoints.length-1?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],(function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}})),e.each(["extend","inArray","isEmptyObject"],(function(i,o){t[o]=e[o]})),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&((o=t.extend({},arguments[1])).handler=arguments[0]),this.each((function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))})),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),function(t){"use strict";t.fn.counterUp=function(e){var i,o=t.extend({time:400,delay:10,offset:100,beginAt:0,formatter:!1,context:"window",callback:function(){}},e);return this.each((function(){var e=t(this),n={time:t(this).data("counterup-time")||o.time,delay:t(this).data("counterup-delay")||o.delay,offset:t(this).data("counterup-offset")||o.offset,beginAt:t(this).data("counterup-beginat")||o.beginAt,context:t(this).data("counterup-context")||o.context};e.waypoint((function(s){!function(){var s=[],a=n.time/n.delay,r=t(this).attr("data-num")?t(this).attr("data-num"):e.text(),l=/[0-9]+,[0-9]+/.test(r),c=((r=r.replace(/,/g,"")).split(".")[1]||[]).length;n.beginAt>r&&(n.beginAt=r);var h=/[0-9]+:[0-9]+:[0-9]+/.test(r);if(h){var d=r.split(":"),p=1;for(i=0;d.length>0;)i+=p*parseInt(d.pop(),10),p*=60}for(var u=a;u>=n.beginAt/r*a;u--){var f=parseFloat(r/a*u).toFixed(c);if(h){f=parseInt(i/a*u);var m=parseInt(f/3600)%24,v=parseInt(f/60)%60,g=parseInt(f%60,10);f=(m<10?"0"+m:m)+":"+(v<10?"0"+v:v)+":"+(g<10?"0"+g:g)}if(l)for(;/(\d+)(\d{3})/.test(f.toString());)f=f.toString().replace(/(\d+)(\d{3})/,"$1,$2");o.formatter&&(f=o.formatter.call(this,f)),s.unshift(f)}e.data("counterup-nums",s),e.text(n.beginAt),e.data("counterup-func",(function(){e.data("counterup-nums")?(e.html(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),n.delay):(e.data("counterup-nums",null),e.data("counterup-func",null),o.callback.call(this))):o.callback.call(this)})),setTimeout(e.data("counterup-func"),n.delay)}(),this.destroy()}),{offset:n.offset+"%",context:n.context})}))}}(jQuery);