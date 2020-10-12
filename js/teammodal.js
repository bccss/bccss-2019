$(".member").click(function () {
  $("#team-modal").show();
  let memberID = $(this).attr("member-id");
  console.log(memberID);
  switch (memberID) {
    case "1":
      $("#modal-name").html("Jolene Lozano");
      $("#modal-subtitle").html("Senior studying Computer Science");
      $("#modal-img").attr("src", "img/people/jolene.png");
      $("#modal-text").html("Jolene's text");

      break;
    case "7":
      $("#modal-name").html("Nathan Rankin");
      $("#modal-subtitle").html("Junior studying Computer Science from Milwaukee, WI");
      $("#modal-img").attr("src", "img/people/nathan.png");
      $("#modal-text").html("Nathan's text");

      $('#modal-email').attr('href', 'mailto:rankinna@bc.edu');
      $('#modal-email').css('display', 'flex');+
      +
      $('#modal-website').attr('href', 'https://www.nathan-rankin.com');
      $('#modal-website').css('display', 'flex');

      $('#modal-linkedin').attr('href', 'https://www.linkedin.com/in/nathanrankin/');
      $('#modal-linkedin').css('display', 'flex');

      $('#modal-facebook').attr('href', 'https://www.facebook.com/nathan.rankin.908');
      $('#modal-facebook').css('display', 'flex');

      $('#modal-instagram').attr('href', 'https://www.instagram.com/rankin_n/');
      $('#modal-instagram').css('display', 'flex');
      
      $('#modal-twitter').css('display', 'none');

      $('#modal-github').attr('href', 'https://github.com/nrankin18');
      $('#modal-github').css('display', 'flex');
      break;
  }
});

$("#team-modal").click(function (event) {
  if (
    !$(event.target).closest(".modal-content").length &&
    !$(event.target).is(".modal-content")
  ) {
    $("#team-modal").hide();
  }
});

$(".close").click(function () {
  $("#team-modal").hide();
});
