"use strict";function closingPopup(){$("body").removeClass("hidden"),$(".news__popup").removeClass("active"),setTimeout(function(){$(".news__popup-content").html()},800)}$(".news__popup-close").on("click",function(){closingPopup()}),$(".news__popup").on("click",function(o){o.target==$(this)[0]&&closingPopup()}),$(".button").on("click",function(o){o.preventDefault(),closingPopup()});