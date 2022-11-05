$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;
        console.log("blockOffset");

    $("#menu a").removeClass("active");
    
    $this.addClass("active");

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 500);
});