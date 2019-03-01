// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

var server_url = "transtats.devlab.redhat.com";
$("#applink").click(function() {
    $.ajax({
        url: "http://" + server_url + "/api/ping",
        dataType: 'jsonp',
        success: function(response) {
            window.location.href = "http://" + server_url
        },
        error: function(r, s, e) {
            //document.getElementById("id_server_url").innerHTML = server_url;
            //$("#serverNotReachable").modal()
            window.location.href = "https://transtats.fedoraproject.org/"
        },
        timeout: 4000 // sets timeout to 4 seconds
    })
})
