$("document").ready(function(){
    console.log("Hello world");
});

// selecting elements in jquery
$("h1") // can be written in js as - document.querySelector("h1")
$("button") // can be written in js as - document.querySelectorAll("button")

// manipulating style in jquery
$("h1").css("color","red");
// chechking current property in jQuery
console.log($("h1").css("font-size","7rem"));
//adding classes into an existing element(eg h1)
$("h1").addClass("bigtitle"); // can be removed by usig removeclass("classname")
// adding muultiple classes 
$("h1").addClass("bigtitle margin-50");

//manipulating texts in jQuery
$("h1").text("hello hey"); //innertext
$("button").html("<em>Hello hey</em>"); //innerHTML

//manipulating attributes in jQuery
console.log($("img").attr("src"));
//setting value
$("a").attr("href","https://search.yahoo.com/");

//adding event listener using jQuery
// document.querySelector("h1").addEventListener("click", function () {
//    alert("Hello world"); 
// });
//using jQuery
// $("h1").click(function () {
//     $("h1").css("color","purple");
// });
// for buttons
for (let i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function () {
      document.querySelector("h1").style.color="green"  
    })
}

//challenge #01
$(document).keydown(function(event){
$("h1").text(event.key);
});
