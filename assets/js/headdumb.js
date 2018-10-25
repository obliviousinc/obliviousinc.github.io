(function($) {
  $.fn.headdumb = function() {
    // replace the far-too-clever-for-my-good "headsmart" included in the merlot theme (mucks with header levels)
    var contentElement = $(this)
    setHeaders()
    function setHeaders() {
      contentElement.find("h1").addClass("header-level-1")
      contentElement.find("h2").addClass("header-level-2")
      contentElement.find("h3").addClass("header-level-3")
      contentElement.find("h4").addClass("header-level-4")
      contentElement.find("h5").addClass("header-level-5")
      contentElement.find("h6").addClass("header-level-6")
    }
  }
})(jQuery)
