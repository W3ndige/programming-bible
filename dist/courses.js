!function(n){var e={};function s(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=n,s.c=e,s.d=function(n,e,a){s.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:a})},s.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="",s(s.s=12)}({12:function(n,e,s){"use strict";var a=$(".courses"),r=encodeURIComponent(a.attr("data-language")),i="ZUt4dk1EZG1wOEt6Y3g5OTJzVkNwQTFjM2NneTJPeDBlZklybnZYSDphaVozeUJBMlpIaXMyanNBMXp6MEFFTEo5OUhmOHh4T1lpZWtCSmtkYTZ3YUJrUlBxektEOGRZMXFIS01MRUdCZm1OcHZNcHh6c3pIUEc5SDdCMjg4UUJMb1JxTlhXOW55a1VlQVVORUJJYkRETkFhTnBRcDRxeHdNUmFPYmVSRg==";function c(n){$.ajax({url:"https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses?search="+r+"&category=Development&language="+n+"&ordering=relevance&ratings=4&page_size=8&fields[course]=@default,headline,content_info,num_subscribers,instructional_level,avg_rating,num_reviews,discount_price",headers:{Authorization:"Basic "+i},success:function(e){e.results.sort(function(n,e){return e.num_reviews-n.num_reviews}),e.results.slice(0,4).forEach(function(e){!function(n,e){var s=Math.round(100*n.avg_rating)/100,r='<div class="stars">',i=void 0;for(i=s;i>1;i--)r+='<div><i class="fa fa-star"></i><i class="fa fa-star filled"></i></div>';r+='<div><i class="fa fa-star"></i><i class="fa fa-star filled not-full" style="width: '+17.66*i+'px"></i></div></div>';var c="https://click.linksynergy.com/deeplink?id=0Bz3A2CPbI4&mid=39197&murl=https%3A%2F%2Fwww.udemy.com"+encodeURIComponent(n.url),t=null!=n.discount_price?'<span class="course-discount">'+n.discount_price.price_string+"</span>":"",o=""!==t?"discount":"";a.append('\n          <a class="course" href="'+c+'" target="_blank">\n            <img class="lang" src=\'/img/'+e+".png'/>\n            <img src=\""+n.image_240x135+'"/>\n            <div class="course-header">\n              <p class="course-title">'+n.title+'</p>\n              <p class="course-headline">'+n.headline+'</p>\n              <span><i class="fa fa-clock-o"></i> '+n.content_info+'</span>\n              <span><i class="fa fa-user"></i> '+n.num_subscribers+' uczestników</span>\n              <span><i class="fa fa-graduation-cap"></i> '+n.instructional_level+'</span>\n            </div>\n            <div class="details">\n              '+t+'\n              <span class="course-price '+o+'">'+n.price+'</span>\n              <span class="course-rating">'+r+" "+s+' / 5</span>\n              <span class="course-reviews">Ocen: '+n.num_reviews+"</span>\n            </div>\n          </a>\n          <hr>\n        ")}(e,n)})},error:function(n){a.css("display","none"),$("#courses-link").css("display","none"),console.log(n)}})}c("pl"),c("en")}});