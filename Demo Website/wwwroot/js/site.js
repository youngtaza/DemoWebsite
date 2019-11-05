// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

/* To add and remove Expanded class to navbar */
function AddExpandedClass() {
    document.getElementById("navitem_2").className = "navbar-item navbar-expanded";
    document.getElementById("navitem_expcolbtnicon1").className = "fas fa-angle-up";
    document.getElementById("navitem_expcolbtn1").setAttribute("onclick", "RemoveExpandedClass()");
}

function RemoveExpandedClass() {
    document.getElementById("navitem_2").className = "navbar-item navbar-collapsed";
    document.getElementById("navitem_expcolbtnicon1").className = "fas fa-angle-down";
    document.getElementById("navitem_expcolbtn1").setAttribute("onclick", "AddExpandedClass()");
}

