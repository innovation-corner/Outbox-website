webpackJsonp([0],{"/pBF":function(e,t){},0:function(e,t,a){a("/pBF"),e.exports=a("4hXz")},"4hXz":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a("wllv"),a("J8T/"),a("Cruy"),a("OJlr"),a("LjoQ"),a("lg4B"),a("aW9W");var n=l(a("juYr"));l(a("X2yx")),l(a("zqsP")),l(a("baJ8")),l(a("rOTB")),l(a("qyFf"));(0,n.default)(document).ready(function(){(0,n.default)("body").menu(),(0,n.default)("#brands").length>0&&(0,n.default)("#brands").toggler({onSelect:function(){(0,n.default)(this).find("a").addClass("bg-white b--white").removeClass("hover-b-white-60 hover-img-children-o-60"),(0,n.default)(this).find("img").first().addClass("dn").removeClass("dib"),(0,n.default)(this).find("img").last().addClass("dib").removeClass("dn")},onDeselect:function(){(0,n.default)(this).find("a").removeClass("bg-white b--white").addClass("hover-b-white-60 hover-img-children-o-60"),(0,n.default)(this).find("img").first().addClass("dib").removeClass("dn"),(0,n.default)(this).find("img").last().addClass("dn").removeClass("dib")}}),(0,n.default)("#features").length>0&&(0,n.default)("#features").toggler({onSelect:function(){(0,n.default)(this).addClass("bg-black-20 br2"),(0,n.default)((0,n.default)(this).data("target")).get(0).currentTime=0},onDeselect:function(){(0,n.default)(this).removeClass("bg-black-20 br2")}}),(0,n.default)('a[href^="#"]').click(function(){var e=(0,n.default)(this).attr("href");return(0,n.default)("html, body").animate({scrollTop:(0,n.default)(e).offset().top-16},"slow"),!1}),(0,n.default)(document).scroll(function(){(0,n.default)(this).scrollTop()>756?(0,n.default)("#navWrap").addClass("nav-appear"):(0,n.default)("#navWrap").removeClass("nav-appear")});var e=(0,n.default)(".section");(0,n.default)(window).scroll(function(){if(!(0,n.default)("#navWrap").hasClass("nav-appear")||!(0,n.default)("#navWrap").is(":visible"))return!0;var t,a=(0,n.default)(this).scrollTop();e.each(function(){(0,n.default)(this).offset().top-17<a&&(t=(0,n.default)(this));var e=t.attr("id");(0,n.default)("a").removeClass("active"),(0,n.default)("[href='#"+e+"']").addClass("active")})}),(0,n.default)(".carousel-control").on("click",function(){var e=(0,n.default)(".carousel-image.active").closest("picture");if((0,n.default)(this).hasClass("right"))t=e.next().length>0?e.next():(0,n.default)(".newsroom-carousel-images picture:first-child");else var t=e.prev().length>0?e.prev():(0,n.default)(".newsroom-carousel-images picture:last-child");e.find(".carousel-image").removeClass("active").addClass("dn"),t.find(".carousel-image").removeClass("dn").addClass("bounce-easy active")}),(0,n.default)(".share_button_popup").on("click",function(e){var t,a,l,d,u,i;return 600,t=this.href.indexOf("twitter")>=0?253:500,a=((0,n.default)(window).width()-600)/2,d=((0,n.default)(window).height()-t)/2,u=this.href,i=this.title,l="status=1,width=600,height="+t+",top="+d+",left="+a,window.open(u,i,l),!1}),(0,n.default)("#pricing-contact-form input").on("input",function(e){var t=(0,n.default)("#pricing-contact-form").find("#pricing-contact-submit");(0,n.default)(t).hasClass("bg-red")&&((0,n.default)(t).removeClass("bg-red b--red hover-bg-red hover-b-red"),(0,n.default)(t).addClass("bg-blue b--blue hover-bg-blue hover-b-blue"),(0,n.default)(t).prop("value","Submit"))})}),window.pricingContactFormSubmit=function(e){self=(0,n.default)("form#pricing-contact-form");var t=self.find("#pricing-contact-submit"),a=self.serializeArray(),l=!0,d=!1,u=void 0;try{for(var i,o=a[Symbol.iterator]();!(l=(i=o.next()).done);l=!0){if(""===i.value.value)return(0,n.default)(t).removeClass("bg-blue b--blue"),(0,n.default)(t).addClass("bg-red b--red hover-bg-red hover-b-red"),(0,n.default)(t).html("Please fill in the form above"),!1}}catch(e){d=!0,u=e}finally{try{!l&&o.return&&o.return()}finally{if(d)throw u}}var s="&"+self.serialize();(0,n.default)(t).addClass("btn--disabled"),n.default.post({url:self.attr("action"),data:s,success:function(e){(0,n.default)(t).html("Thank you! We'll contact you shortly."),(0,n.default)(t).removeClass("bg-blue b--blue"),(0,n.default)(t).addClass("bg-green b--green")}.bind(this)})}},Cruy:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));(0,l.default)(document).ready(function(){(0,l.default)("#book").length>0&&void 0!==window.analytics&&(0,l.default)(".book-form").analyticsSubmit("Signed Up for the book",function(){(0,l.default)(this).find(".form-fields").hide(),(0,l.default)(this).find(".form-label").removeClass("dn")})})},LjoQ:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));(0,l.default)(document).ready(function(){if((0,l.default)("#audience").length>0){var e=void 0,t=void 0;(0,l.default)("#audience").toggler({onSelect:function(){(0,l.default)(this).addClass("bg-black-20 br2"),(t=(0,l.default)((0,l.default)(this).data("target")+"-bg-img")).addClass("transition-o z-1").removeClass("o-0"),t.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(t){e.addClass("o-0")})},onDeselect:function(){(0,l.default)(this).removeClass("bg-black-20 br2"),(e=(0,l.default)((0,l.default)(this).data("target")+"-bg-img")).removeClass("z-1").removeClass("transition-o")}})}})},OJlr:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));(0,l.default)(document).ready(function(){(0,l.default)("#cycling-video").length>0&&(0,l.default)("#cycling-video").click(function(){(0,l.default)(this).children("video").get(0).paused?((0,l.default)(this).children("video").get(0).play(),(0,l.default)(this).children(".btn-play-video").addClass("o-0")):((0,l.default)(this).children("video").get(0).pause(),(0,l.default)(this).children(".btn-play-video").removeClass("o-0"))})})},X2yx:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));l.default.fn.checkBox=function(e,t){var a=l.default.extend({},{onChange:function(){}},t),n=(0,l.default)(this);return n.each(function(){(0,l.default)(this).unbind("click",e),(0,l.default)(this).on("click",e,function(){var e=(0,l.default)(this),t=!1;e.hasClass("checkbox--checked")?e.removeClass("checkbox--checked"):(e.addClass("checkbox--checked"),t=!0),a.onChange.call(n,t)})})}},aW9W:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));window.salesContactFormSubmit=function(e){self=(0,l.default)("form#demo-contact-form");var t=self.find("#demo-contact-submit");(0,l.default)(t).addClass("btn--disabled"),l.default.post({url:self.attr("action"),data:self.serialize(),success:function(e){1==e.success?((0,l.default)(t).html("Thank you! We'll contact you shortly."),(0,l.default)(t).removeClass("bg-blue b--blue"),(0,l.default)(t).addClass("bg-green b--green"),dataLayer.push({event:"formSubmitted",formID:"demo-contact-form"})):((0,l.default)(t).html("There was an issue: "+e.message),(0,l.default)(t).removeClass("bg-blue b--blue"),(0,l.default)(t).addClass("bg-red b--red hover-bg-red hover-b-red"))}.bind(this)})}},baJ8:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));l.default.fn.menu=function(e){var t=(0,l.default)(this),a=(0,l.default)("#mobile-menu"),n=(0,l.default)("#products-menu"),d="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";t.delegate("*","touchmove",function(e){(e.touches.length>1||(0,l.default)(this).hasClass("overflow-y-hidden"))&&e.preventDefault()}),t.find("#menu-show-btn").on("click",function(e){e.preventDefault(),a.removeClass("dn"),a.addClass("fade-in").one(d,function(e){(0,l.default)(this).removeClass("fade-in")}),t.find("#content").addClass("overflow-y-hidden"),t.addClass("overflow-y-hidden")}),t.find("#menu-close-btn").on("click",function(e){e.preventDefault(),a.addClass("fade-out").one(d,function(e){(0,l.default)(this).removeClass("fade-out"),(0,l.default)(this).addClass("dn")}),t.removeClass("overflow-y-hidden"),t.find("#content").removeClass("overflow-y-hidden")}),t.find("#products-btn").on("click",function(e){e.preventDefault(),e.stopPropagation(),n.hasClass("dd--visible")?n.removeClass("dd--visible"):n.addClass("dd--visible")}),(0,l.default)(document).on("click",function(e){n.hasClass("dd--visible")&&0===(0,l.default)(e.target).closest("#products-menu").length&&(e.preventDefault(),n.removeClass("dd--visible"))})}},lg4B:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));(0,l.default)(document).ready(function(){(0,l.default)("#match").length>0&&void 0!==window.analytics&&(0,l.default)(".match-form").analyticsSubmit("Signed Up for the Match Beta",function(){(0,l.default)(this).find(".form-fields").hide(),(0,l.default)(this).find(".form-label").removeClass("dn")})})},qyFf:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));l.default.fn.toggler=function(e){e=l.default.extend({},{onSelect:function(){},onDeselect:function(){}},e);var t=null,a=function(a){t&&((0,l.default)(t.data("target")).addClass("dn"),e.onDeselect.call(t)),a&&(0,l.default)(a.data("target")).removeClass("dn"),e.onSelect.call(a),t=a};return(0,l.default)(this).find("[data-target]").each(function(t){(0,l.default)(this).unbind("click"),(0,l.default)(this).on("click",function(e){a((0,l.default)(this))}),0==t?a((0,l.default)(this)):e.onDeselect.call((0,l.default)(this))})}},rOTB:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));l.default.fn.radioButtonGroup=function(e){var t=l.default.extend({},{onChange:function(){}},e),a=(0,l.default)(this);return a.each(function(){(0,l.default)(this).unbind("click",".radio-button"),(0,l.default)(this).on("click",".radio-button",function(){(0,l.default)(this).hasClass("radio-button--selected")||(a.find(".radio-button--selected").removeClass("radio-button--selected"),(0,l.default)(this).addClass("radio-button--selected"),t.onChange.call(this))})})}},zqsP:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}}(a("juYr"));(0,l.default)(".book-form-top, .book-form-bottom").submit(function(e){e.preventDefault();var t=(0,l.default)(this),a=(0,l.default)(t).serialize(),n=(0,l.default)(".form-label");return l.default.ajax({type:"POST",url:(0,l.default)(t).attr("action"),data:a,success:function(e){(0,l.default)("#email_after").val(""),n.toggleClass("dn")},error:function(e,t){alert("Error")}}),!1}),(0,l.default)(".match-form-top, .match-form-bottom").submit(function(e){e.preventDefault();var t=(0,l.default)(this),a=(0,l.default)(t).serialize(),n=(0,l.default)(".form-label");return l.default.ajax({type:"POST",url:(0,l.default)(t).attr("action"),data:a,success:function(e){(0,l.default)("#email_after").val(""),n.toggleClass("dn")},error:function(e,t){alert("Error")}}),!1})}},[0]);
//# sourceMappingURL=app.6b04d18632bf8b927ed8.js.map