$(function() {

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {
    // grab the values from the input boxes, then append them to the DOM
    $(".noun").empty().append($("input.noun").val());
    $(".noun2").empty().append($("input.noun2").val());
    $(".noun3").empty().append($("input.noun3").val());
    $(".verb").empty().append($("input.verb").val());
    $(".verb2").empty().append($("input.verb2").val());
    $(".verb3").empty().append($("input.verb3").val());
    $(".person").empty().append($("input.person").val());
    $(".date").empty().append($("input.date").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".drink").empty().append($("input.drink").val());
    $(".drink2").empty().append($("input.drink2").val());
    $(".place").empty().append($("input.place").val());
    $(".car").empty().append($("input.car").val());
  });

});