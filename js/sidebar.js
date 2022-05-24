$(document).ready(function(){
	$('.closebtn').on('click', function(){
    	$('.menu').toggle();
    });
});

$(document).ready(function(){
	$('.openbtn').on('click', function(){
    	$('.menu').toggle();
    });
});

function openNav() {
  document.querySelector("#Sidebar").style.width = "200px";
  document.querySelector("#global").style.marginLeft = "200px";
}

function closeNav() {
  document.querySelector("#Sidebar").style.width = "0";
  document.querySelector("#global").style.marginLeft = "0";
}