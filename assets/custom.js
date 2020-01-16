/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */

// var height = $('.Header').height();

// function resizeSlideshow (){
// 	$('.template-index #section-slideshow .flickity-viewport').css({ 'height': 'calc(100vh - ' + height + 'px) !important' });
// }

// resizeSlideshow();

// $(window).scroll(function(){
// 	resizeSlideshow();
// })

// $(window).resize(function(){
// 	resizeSlideshow();
// })

// $(function(){
//   console.log("hello hugo")
// })

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    //console.log(scroll)
    if (scroll < 130) {
      $(".is-active").removeClass("is-active");
      $( ".FaqSummary li:nth-child(1)").addClass("is-active");
    }
    if (scroll > 130) {
      $(".is-active").removeClass("is-active");
      $( ".FaqSummary li:nth-child(2)").addClass("is-active");
    }
    if (scroll > 300) {
      $(".is-active").removeClass("is-active");
      $( ".FaqSummary li:nth-child(3)").addClass("is-active");
    }
    if (scroll > 400) {
      $(".is-active").removeClass("is-active");
      $( ".FaqSummary li:nth-child(4)").addClass("is-active");
    }
});

$("#second_collection_filter").click(function() {
  console.log("second")
  $("#second_collection_filter").addClass("is-selected")

  $("#touslesproduits_filter").removeClass("is-selected")
  $("#third_collection_filter").removeClass("is-selected")
  $("#fourth_collection_filter").removeClass("is-selected")
  $("#fifth_collection_filter").removeClass("is-selected")

  $("#first_collection").fadeOut(10)
  $("#third_collection").fadeOut(10)
  $("#fourth_collection").fadeOut(10)
  $("#fifth_collection").fadeOut(10)

  $("#second_collection").fadeIn(1200)

})

$("#third_collection_filter").click(function() {
  console.log("click")
  $("#third_collection_filter").addClass("is-selected")

  $("#touslesproduits_filter").removeClass("is-selected")
  $("#second_collection_filter").removeClass("is-selected")
  $("#fourth_collection_filter").removeClass("is-selected")
  $("#fifth_collection_filter").removeClass("is-selected")


  $("#first_collection").fadeOut(10)
  $("#second_collection").fadeOut(10)
  $("#fourth_collection").fadeOut(10)
  $("#fifth_collection").fadeOut(10)

  $("#third_collection").fadeIn(1200)
})

$("#fourth_collection_filter").click(function() {
  console.log("click")
  $("#fourth_collection_filter").addClass("is-selected")

  $("#touslesproduits_filter").removeClass("is-selected")
  $("#second_collection_filter").removeClass("is-selected")
  $("#third_collection_filter").removeClass("is-selected")
  $("#fifth_collection_filter").removeClass("is-selected")


  $("#first_collection").fadeOut(10)
  $("#second_collection").fadeOut(10)
  $("#third_collection").fadeOut(10)
  $("#fifth_collection").fadeOut(10)

  $("#fourth_collection").fadeIn(1200)

})

$("#fifth_collection_filter").click(function() {
  console.log("click")
  $("#fifth_collection_filter").addClass("is-selected")

  $("#touslesproduits_filter").removeClass("is-selected")
  $("#second_collection_filter").removeClass("is-selected")
  $("#third_collection_filter").removeClass("is-selected")
  $("#fourth_collection_filter").removeClass("is-selected")

  $("#first_collection").fadeOut(10)
  $("#second_collection").fadeOut(10)
  $("#third_collection").fadeOut(10)
  $("#fourth_collection").fadeOut(10)

  $("#fifth_collection").fadeIn(1200)

})

$("#touslesproduits_filter").click(function() {
  console.log("click")
  $("#touslesproduits_filter").addClass("is-selected")

  $("#fourth_collection_filter").removeClass("is-selected")
  $("#second_collection_filter").removeClass("is-selected")
  $("#third_collection_filter").removeClass("is-selected")
  $("#fifth_collection_filter").removeClass("is-selected")

  $("#fourth_collection").fadeOut(10)
  $("#second_collection").fadeOut(10)
  $("#third_collection").fadeOut(10)
  $("#fifth_collection").fadeOut(10)

  $("#first_collection").fadeIn(1200)

})


// $(".wgcurrent").click(function(e) {
//   console.log(this)
//   $(".wgcurrent").toggle("no_show")
// })








