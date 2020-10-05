var disableNavUpdates = false;

$("#nav-home").click(function () {
  disableNavUpdates = true;

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800,
    "swing",
    function () {
      disableNavUpdates = false;
      $(".navitem").removeClass("nav-selected");
      $("#nav-home").addClass("nav-selected");
    }
  );
});

$("#nav-about").click(function () {
  disableNavUpdates = true;
  $("html, body").animate(
    {
      scrollTop:
        $("#about").offset().top - $(".navigation-container").height() - 30,
    },
    800,
    "swing",
    function () {
      disableNavUpdates = false;
      $(".navitem").removeClass("nav-selected");
      $("#nav-about").addClass("nav-selected");
    }
  );
});

$("#nav-team").click(function () {
  disableNavUpdates = true;

  $("html, body").animate(
    {
      scrollTop:
        $("#team").offset().top - $(".navigation-container").height() - 30,
    },
    800,
    "swing",
    function () {
      disableNavUpdates = false;
      $(".navitem").removeClass("nav-selected");
      $("#nav-team").addClass("nav-selected");
    }
  );
});

$("#nav-events").click(function () {
  disableNavUpdates = true;

  $("html, body").animate(
    {
      scrollTop:
        $("#events").offset().top - $(".navigation-container").height() - 30,
    },
    800,
    "swing",
    function () {
      disableNavUpdates = false;
      $(".navitem").removeClass("nav-selected");
      $("#nav-events").addClass("nav-selected");
    }
  );
});

$(window)
  .scroll(function () {
    if (!disableNavUpdates) {
      var scrollLocation = $(window).scrollTop();
      var aboutHeight = $("#about-section").height();
      var teamHeight = $("#team-section").height() + aboutHeight;
      var eventsHeight = $("#events-section").height() + teamHeight;

      if (scrollLocation < aboutHeight) {
        $(".navitem").removeClass("nav-selected");
        $("#nav-home").addClass("nav-selected");
      } else if (scrollLocation < teamHeight) {
        $(".navitem").removeClass("nav-selected");
        $("#nav-about").addClass("nav-selected");
      } else if (scrollLocation < eventsHeight) {
        $(".navitem").removeClass("nav-selected");
        $("#nav-team").addClass("nav-selected");
      } else {
        $(".navitem").removeClass("nav-selected");
        $("#nav-events").addClass("nav-selected");
      }
    }
  })
  .scroll();
