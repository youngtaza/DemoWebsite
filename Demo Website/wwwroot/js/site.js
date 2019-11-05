// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

/* To add and remove Expanded class to navbar */
function AddExpandedClass() {
    document.getElementById("navitem_2").className = "navbar-item navbar-expanded";
    document.getElementById("navitem_expcolbtnicon1").className = "fas fa-angle-up navbar-faicon";
    document.getElementById("navitem_expcolbtn1").setAttribute("onclick", "RemoveExpandedClass()");
}

function RemoveExpandedClass() {
    document.getElementById("navitem_2").className = "navbar-item navbar-collapsed";
    document.getElementById("navitem_expcolbtnicon1").className = "fas fa-angle-down navbar-faicon";
    document.getElementById("navitem_expcolbtn1").setAttribute("onclick", "AddExpandedClass()");
}


(function ($) {
    var $window = $(window),
        $html = $('html'),
        $navitem = $('#navitem_2');
        

    function resize() {
        if ($window.width() < 514) {
            $navitem.removeAttr('onmouseover');
            $navitem.removeAttr('onmouseout');
            return $html.addClass('mobile');
        }

        $html.removeClass('mobile');
        $navitem.attr('onmouseover', 'AddExpandedClass();');
        $navitem.attr('onmouseout', 'RemoveExpandedClass();');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);
