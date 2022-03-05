
// NavBar Script
var new_scroll_position=0;var last_scroll_position;var header=document.getElementById("header");window.addEventListener("scroll",function(a){last_scroll_position=window.scrollY;if(new_scroll_position<last_scroll_position&&last_scroll_position>40){header.classList.remove("slideDown");header.classList.add("slideUp")}else{if(new_scroll_position>last_scroll_position){header.classList.remove("slideUp");header.classList.add("slideDown")}}new_scroll_position=last_scroll_position});
//time
var time = new Date();
document.getElementById("time").innerHTML = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
// flash News
$(document).ready(function(){setInterval(function(){if($(".frame--3").hasClass("is-current")){$(".frame--3").removeClass("is-current");$(".frame--1").addClass("is-current")}else{if($(".frame--2").hasClass("is-current")){$(".frame--2").removeClass("is-current");$(".frame--3").addClass("is-current")}else{$(".frame--1").removeClass("is-current");$(".frame--2").addClass("is-current")}}},5000)});
