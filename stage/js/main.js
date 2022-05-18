$(document).ready(function() {
    'use strict';
    $('.toggle-sidebar').on('click', function(){
        $('.content-area, .sidebar').toggleClass("no-sidebar")
    });
    //show and hide submenu
    $(".toggle-submenu").on("click", function(){
        // incase if you will use toggle-class with i tag
        // $(this).toggleClass("fa-arrow-circle-right fa-arrow-circle-down")
        // $(this).parent("a").next(".child-links").slideToggle();
        $(this)
        .find(".fa-arrow-circle-right")
        .toggleClass("down")
        $(this).next(".child-links").slideToggle();
        console.log("working")
    });
    //Toggle setting box, hide and show setting box
    $(".toggle-setting").on("click", function(){
        $(this).find("i").toggleClass("fa-spin")//if you find icon make it spin on click
        $(this).parent().toggleClass("hide-setting-box")
        console.log("class have been removed")
    });

    //Switch color theme 
   // create array to include all color themes
    var themeClasses = [];
    //loop through color
    $(".color-option li").each(function(){
        themeClasses.push($(this).data("theme"))
    })
    console.log(themeClasses)
    $(".color-option li").on("click", function(){
        //Add class active on active theme
        $(this).addClass("active").siblings().removeClass("active");
        //print the attribute data-theme 
        console.log($(this).data("theme"));
        //change body color to the selected color
        $("body").removeClass(themeClasses.join(" ")).addClass($(this).data("theme")) 
    })
    //Switch font option 
    var fontClasses = [];
    //loop through color
    $(".font-option select option").each(function(){
        fontClasses.push($(this).val())
    })
    console.log(fontClasses)
    $(".font-option select").on("change", function(){
        //Add class active on active theme
        $("body").addClass($(this).find("option:selected").val()); 
        //print the attribute data-theme 
        console.log($(this).find("option:selected").val());
        $("body").removeClass(fontClasses.join(" ")).addClass($(this).find("option:selected").val()); 
    })


    // open and close fullscreen
    $(".toggle-fullscreen").on("click", function(){
        $(this).toggleClass("full-screen");
        if(!$(this).hasClass("full-screen")){
            openFullscreen();
            console.log("Fullscreen")
        }else{
            closeFullscreen();
        }

    })
});
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    }

    /* Close fullscreen */
    function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    }