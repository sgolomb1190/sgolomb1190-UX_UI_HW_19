$( ".toggle" ).click(function(){
    $(".toggleContainer").css("background-color", "white");
    $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });