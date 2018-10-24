(function($) {
  $.fn.headdumb = function() {
    var contentElement = $(this)
    setHeaders()
    function setHeaders() {
      contentElement.children("h1").addClass("header-level-1")
      contentElement.children("h2").addClass("header-level-2")
      contentElement.children("h3").addClass("header-level-3")
      contentElement.children("h4").addClass("header-level-4")
      contentElement.children("h5").addClass("header-level-5")
      contentElement.children("h6").addClass("header-level-6")
    }
  }
})(jQuery)
