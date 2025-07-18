/* show hide view */
function english2chinese() {
    var currentshow = document.querySelectorAll(".english");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].classList.remove("show");
        currentshow[i].classList.add("hide");
    }
    var currenthide = document.querySelectorAll(".chinese");
    for (var i = 0; i < currenthide.length; i++) {
        currenthide[i].classList.remove("hide");
        currenthide[i].classList.add("show");
    }
}

function chinese2english() {
    var currentshow = document.querySelectorAll(".chinese");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].classList.remove("show");
        currentshow[i].classList.add("hide");
    }
    var currenthide = document.querySelectorAll(".english");
    for (var i = 0; i < currenthide.length; i++) {
        currenthide[i].classList.remove("hide");
        currenthide[i].classList.add("show");
    }
}


function displaymain() {
    var currentshow = document.querySelectorAll(".subpage");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].className = "subpage hide";
    }
    document.getElementById("mainpage").className = "subpage show";

    var currentshow = document.querySelectorAll(".Header_navigation_item");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].classList.remove("Header_navigation_active");
    }
    var currentshow = document.querySelectorAll(".page1linkitem");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].classList.add("Header_navigation_active");
    }

    topFunction()
  
}

function displaypage2() {
    var currentshow = document.querySelectorAll(".subpage");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].className = "subpage hide";
    }
    document.getElementById("page2").className = "subpage show";

    var currentnav = document.querySelectorAll(".Header_navigation_item");
    for (var i = 0; i < currentnav.length; i++) {
        currentnav[i].classList.remove("Header_navigation_active");
    }
    var currentnavactive = document.querySelectorAll(".page2linkitem");
    for (var i = 0; i < currentnavactive.length; i++) {
        currentnavactive[i].classList.add("Header_navigation_active");
    }

    topFunction()

}

function displaypage3() {
    var currentshow = document.querySelectorAll(".subpage");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].className = "subpage hide";
    }
    document.getElementById("page3").className = "subpage show";

    var currentnav = document.querySelectorAll(".Header_navigation_item");
    for (var i = 0; i < currentnav.length; i++) {
        currentnav[i].classList.remove("Header_navigation_active");
    }
    var currentnavactive = document.querySelectorAll(".page3linkitem");
    for (var i = 0; i < currentnavactive.length; i++) {
        currentnavactive[i].classList.add("Header_navigation_active");
    }
    topFunction()

}

function displaypage4() {
    var currentshow = document.querySelectorAll(".subpage");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].className = "subpage hide";
    }
    document.getElementById("page4").className = "subpage show";

    var currentnav = document.querySelectorAll(".Header_navigation_item");
    for (var i = 0; i < currentnav.length; i++) {
        currentnav[i].classList.remove("Header_navigation_active");
    }
    var currentnavactive = document.querySelectorAll(".page4linkitem");
    for (var i = 0; i < currentnavactive.length; i++) {
        currentnavactive[i].classList.add("Header_navigation_active");
    }

    topFunction()
}

function displaypage5() {
    var currentshow = document.querySelectorAll(".subpage");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].className = "subpage hide";
    }
    document.getElementById("page5").className = "subpage show";

    var currentnav = document.querySelectorAll(".Header_navigation_item");
    for (var i = 0; i < currentnav.length; i++) {
        currentnav[i].classList.remove("Header_navigation_active");
    }
    var currentnavactive = document.querySelectorAll(".page5linkitem");
    for (var i = 0; i < currentnavactive.length; i++) {
        currentnavactive[i].classList.add("Header_navigation_active");
    }

    topFunction()
}

function displaypage6() {
    var currentshow = document.querySelectorAll(".subpage");
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].className = "subpage hide";
    }
    document.getElementById("page6").className = "subpage show";

    var currentnav = document.querySelectorAll(".Header_navigation_item");
    for (var i = 0; i < currentnav.length; i++) {
        currentnav[i].classList.remove("Header_navigation_active");
    }
    var currentnavactive = document.querySelectorAll(".page6linkitem");
    for (var i = 0; i < currentnavactive.length; i++) {
        currentnavactive[i].classList.add("Header_navigation_active");
    }

    topFunction()
}


function displayblog(elementobj, elementobj2) {
    var currenthide = document.querySelectorAll(elementobj);
    for (var i = 0; i < currenthide.length; i++) {
        currenthide[i].classList.remove("hide");
        currenthide[i].classList.add("show");
    }

    var currentshow = document.querySelectorAll(elementobj2);
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].classList.remove("show");
        currentshow[i].classList.add("hide");
    }


}

function hideblog(elementobj,elementobj2) {
    var currentshow = document.querySelectorAll(elementobj);
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].classList.remove("show");
        currentshow[i].classList.add("hide");
    }

    var currenthide = document.querySelectorAll(elementobj2);
    for (var i = 0; i < currenthide.length; i++) {
        currenthide[i].classList.remove("hide");
        currenthide[i].classList.add("show");
    }


}

function hideallblog(elementobjbutton) {
    var blognumber= 20;
    for (var i = 0; i < blognumber; i++) {
        var elementobj = '.blog'.concat(i);
        var elementobj2 = '.button-blog'.concat(i);
        hideblog(elementobj,elementobj2);
    }

    var currenthide = document.querySelectorAll(elementobjbutton);
    for (var i = 0; i < currenthide.length; i++) {
        currenthide[i].classList.remove("hide");
        currenthide[i].classList.add("show");
    }

}

function displayallblog(elementobjbutton) {
    var blognumber= 20;
    for (var i = 0; i < blognumber; i++) {
        var elementobj = '.blog'.concat(i);
        var elementobj2 = '.button-blog'.concat(i);
        displayblog(elementobj,elementobj2);
    }

    var currentshow = document.querySelectorAll(elementobjbutton);
    for (var i = 0; i < currentshow.length; i++) {
        currentshow[i].classList.remove("show");
        currentshow[i].classList.add("hide");
    }



}




function closemenulist() {
    document.getElementById("middleNavbar").className = "middle_canvas middle_canvas_end hide";
}

function openmenulist() {
    document.getElementById("middleNavbar").className = "middle_canvas middle_canvas_end show";
}