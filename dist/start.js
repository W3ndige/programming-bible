!function(n){function e(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return n[a].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:a})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=16)}({16:function(n,e){$(function(){var n=1,e=[],t=".que"+n,a=new Array(11);a[0]={answer:"odpA",nextQuestion:2,actualQuestion:1},a[1]={answer:"odpA",nextQuestion:3,actualQuestion:2},a[2]={answer:"odpC",nextQuestion:5,actualQuestion:2},a[3]={answer:"odpB",nextQuestion:12,actualQuestion:1},a[4]={answer:"odpC",nextQuestion:5,actualQuestion:12},a[5]={answer:"odpD",nextQuestion:14,actualQuestion:1},a[6]={answer:"odpB",nextQuestion:5,actualQuestion:14},a[7]={answer:"odpB",nextQuestion:6,actualQuestion:5},a[8]={answer:"odpA",nextQuestion:16,actualQuestion:6},a[9]={answer:"odpB",nextQuestion:7,actualQuestion:6},a[10]={answer:"odpA",nextQuestion:17,actualQuestion:7};var s=new Array(6);s[0]={answer:"odpA",nextQuestion:2,actualQuestion:1},s[1]={answer:"odpD",nextQuestion:8,actualQuestion:2},s[2]={answer:"odpA",nextQuestion:3,actualQuestion:8},s[3]={answer:"odpB",nextQuestion:13,actualQuestion:12},s[4]={answer:"odpC",nextQuestion:3,actualQuestion:13},s[5]={answer:"odpC",nextQuestion:3,actualQuestion:14};var o=new Array(3);o[0]={answer:"odpA",nextQuestion:3,actualQuestion:8},o[1]={answer:"odpB",nextQuestion:9,actualQuestion:8},o[2]={answer:"odpC",nextQuestion:10,actualQuestion:9};var u=new Array(2);u[0]={answer:"odpB",nextQuestion:4,actualQuestion:2},u[1]={answer:"odpC",nextQuestion:18,actualQuestion:4};var i=new Array(3);i[0]={answer:"odpB",nextQuestion:13,actualQuestion:12},i[1]={answer:"odpB",nextQuestion:19,actualQuestion:13},i[2]={answer:"odpC",nextQuestion:3,actualQuestion:13};var r={answer:"odpE",nextQuestion:11,actualQuestion:2},l={answer:"odpD",nextQuestion:20,actualQuestion:14},c={answer:"odpA",nextQuestion:15,actualQuestion:14},Q={answer:"odpD",nextQuestion:20,actualQuestion:12},d={answer:"odpD",nextQuestion:14,actualQuestion:1},p={answer:"odpE",nextQuestion:21,actualQuestion:1},w=$(".ans img, .ans p");w.click(function(){$(this).parent(".ans").addClass("slide_out"),$(t).fadeOut(),1===n&&$(".back").css("visibility","visible"),e.push(n);for(var w=$(this).parent(".ans").attr("data-answer"),x=0;x<a.length;x++)if(a[x].actualQuestion===n&&a[x].answer===w){n=a[x].nextQuestion;break}for(var h=0;h<s.length&&e[e.length-1]===n;h++)s[h].actualQuestion===n&&s[h].answer===w&&(n=s[h].nextQuestion);for(var f=0;f<o.length&&e[e.length-1]===n;f++)o[f].actualQuestion===n&&o[f].answer===w&&(n=o[f].nextQuestion);for(var g=0;g<u.length&&e[e.length-1]===n;g++)u[g].actualQuestion===n&&u[g].answer===w&&(n=u[g].nextQuestion);for(var v=0;v<i.length&&e[e.length-1]===n;v++)i[v].actualQuestion===n&&i[v].answer===w&&(n=i[v].nextQuestion);e[e.length-1]===n&&r.actualQuestion===n&&r.answer===w&&(n=r.nextQuestion),e[e.length-1]===n&&l.actualQuestion===n&&l.answer===w&&(n=l.nextQuestion),e[e.length-1]===n&&c.actualQuestion===n&&c.answer===w&&(n=c.nextQuestion),e[e.length-1]===n&&Q.actualQuestion===n&&Q.answer===w&&(n=Q.nextQuestion),e[e.length-1]===n&&d.actualQuestion===n&&d.answer===w&&(n=d.nextQuestion),e[e.length-1]===n&&p.actualQuestion===n&&p.answer===w&&(n=p.nextQuestion),t=".que"+n,window.setTimeout(function(){$(t).fadeIn(),$(t).find(".ans").fadeIn()},700)});var x=void 0;w.hover(function(){var n=$(this).parent(".ans");x=n.children("p").css("background-color"),n.children("img").addClass("jumpImg"),n.children("p").css("background-color","#0a5677"),n.children(".shade").addClass("shadeImg")},function(){var n=$(this).parent(".ans");n.children("img").removeClass("jumpImg"),n.children("p").css("background-color",x),n.children(".shade").removeClass("shadeImg")});var h=$(".ans");$(".back").click(function(){h.hasClass("slide_out")&&h.removeClass("slide_out"),$(t).fadeOut(),t=".que"+e[e.length-1],n=e[e.length-1],e.pop(),window.setTimeout(function(){$(t).fadeIn()},500),1===n&&$(".back").css("visibility","hidden")})})}});