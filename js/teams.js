$(document).ready(function() {
    $("#button-core").click();
});

$("#button-core").click(function() {
    $(".team-group").hide();
    $(".team-button").removeClass("selected");
    $("#button-core").addClass("selected");
    $("#team-core").css('display', 'flex');
});
$("#button-hackathon").click(function() {
    $(".team-group").hide();
    $(".team-button").removeClass("selected");
    $("#button-hackathon").addClass("selected");
    $("#team-hackathon").css('display', 'flex');
});
$("#button-tech").click(function() {
    $(".team-group").hide();
    $(".team-button").removeClass("selected");
    $("#button-tech").addClass("selected");
    $("#team-tech").css('display', 'flex');
});
$("#button-community").click(function() {
    $(".team-group").hide();
    $(".team-button").removeClass("selected");
    $("#button-community").addClass("selected");
    $("#team-community").css('display', 'flex');
});
$("#button-career").click(function() {
    $(".team-group").hide();
    $(".team-button").removeClass("selected");
    $("#button-career").addClass("selected");
    $("#team-career").css('display', 'flex');
});
$("#button-design").click(function() {
    $(".team-group").hide();
    $(".team-button").removeClass("selected");
    $("#button-design").addClass("selected");
    $("#team-design").css('display', 'flex');
});