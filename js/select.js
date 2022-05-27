(function ($) {
  //   $(document).ready(function() {
  //     $('.js-example-basic-multiple').select2();
  // });
  $("#js-example-basic-multiple").select2({
    dropdownParent: $("#exampleModal"),
  });
})(jQuery);

/*
	Dropdown with Multiple checkbox select with jQuery - May 27, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/

$(".dropdown dt div").on("click", function () {
  $(".dropdown dd ul").slideToggle("fast");
});

$(".dropdown dd ul li div").on("click", function () {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id)
    .find("dt div span.value")
    .html();
}

$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on("click", function () {
  var title = $(this)
      .closest(".mutliSelect")
      .find('input[type="checkbox"]')
      .val(),
    title = $(this).val() + ",";

  if ($(this).is(":checked")) {
    var html = '<span title="' + title + '">' + title + "</span>";
    $(".multiSel").append(html);
    $(".hida").hide();
  } else {
    $('span[title="' + title + '"]').remove();
    var ret = $(".hida");
    $(".dropdown dt div").append(ret);
  }
});
