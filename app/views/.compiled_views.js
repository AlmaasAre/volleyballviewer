angular.module('studentportalenApp').run(['$templateCache', function($templateCache) {

  $templateCache.put('views/main.html',
    "<div class=\"container\">\n" +
    "\n" +
    "\t<div class=\"page-header\">\n" +
    "\t\t<h1>Bootstrap grid examples</h1>\n" +
    "\t\t<p class=\"lead\">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-4\">.col-md-4</div>\n" +
    "\t\t<div class=\"col-md-4\">.col-md-4</div>\n" +
    "\t\t<div class=\"col-md-4\">.col-md-4</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>"
  );

}]);
