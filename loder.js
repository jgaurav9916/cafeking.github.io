$(document).ready(function () {
 $(".modal").modal
      $('.sidenav').sidenav();
 $(".parallax").parallax();
 $(".slider").slider({ full_width:true}); 
   $('.parallax').parallax();
    $(".myreviews").carousel({
        numVisible: 7,
        shift:55,
        padding: 55,
    })
});

function toggleModal() {
    var instance = M.Model.getInstance($("#modal3"));
    instance.open();
}