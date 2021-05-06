

$(document).ready(function() {
    $('.accordion_box').click(function(e){
        var accordionitem = $(this).attr("data-tab");
        $("#" + accordionitem).slideToggle().parent().siblings().find(".blog_post_details").slideUp();
        $(this).toggleClass(".active_box");
        $("#" + accordionitem).parent().siblings().find(".accordion_box").removeClass("active_box");
    })
})