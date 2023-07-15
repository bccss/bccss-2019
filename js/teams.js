$(document).ready(function() {
    $("#button-core").click();
});

$("#button-core").click(function() {
    $(".team-group").hide();
    $(".team-button").removeClass("selected");
    $("#button-core").addClass("selected");
    $("#team-core").css('display', 'flex');
});
