$(function () {
  $(".galery .left img").each(function () {
    $(this).mouseover(changeImage);
  });

  function changeImage() {
    $(".galery .left img").each(function () {
      $(this).removeClass("active");
    });

    $(".main").attr("src", $(this).attr("src"));
    $(this).addClass("active");
  }
});
