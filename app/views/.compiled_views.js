angular.module('studentportalenApp').run(['$templateCache', function($templateCache) {

  $templateCache.put('views/about.html',
    "<div>\n" +
    "\n" +
    "\t<div class=\"content-wrapper\">\n" +
    "\n" +
    "\t\t<div ng-include=\"\" src=\"\\\"/views/partials/nav.html\\\"\"></div>\n" +
    "\n" +
    "\t\t<header class=\"hero\">\n" +
    "\t\t\t<div class=\"container\">\n" +
    "\t\t\t\t<div class=\"portrait\"></div>\n" +
    "\t\t\t\t<h1><small>Magne Hornes</small><br>Volleyball krønike</h1>\n" +
    "\t\t\t</div>\n" +
    "\t\t</header>\n" +
    "\t\t\n" +
    "\t\t<div class=\"container content\">\n" +
    "\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t\t<img src=\"#\" alt=\"\" style=\"width:100%; height: 300px\">\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-md-8\">\n" +
    "\t\t\t\t\t<h2>Magne Hornes</h2>\n" +
    "\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, sunt, dicta! In, sunt aut dolor rerum inventore laboriosam tenetur autem.</p>\n" +
    "\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, necessitatibus, magni, accusamus vitae quisquam tenetur doloremque voluptatibus nesciunt ipsum libero dolores culpa ipsa iusto architecto asperiores. Enim, provident, officiis, amet quasi assumenda sint ullam similique iste perferendis recusandae sequi velit labore ex aliquam neque doloribus numquam necessitatibus dignissimos quae delectus odio saepe repellendus minus ad aperiam magnam consequatur quidem quisquam quam id. Deleniti, minus, facilis, eveniet porro esse voluptatum eos impedit dolor saepe officiis quis ad cupiditate ea quam tempore. Numquam, odio, similique distinctio nesciunt quae facere quidem voluptatibus unde ipsum dolore ullam atque voluptates ea placeat aut perferendis illo.</p>\n" +
    "\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, rem, veritatis, labore vel voluptate ipsa magni odio sequi natus ullam nisi illum fugit delectus est consequuntur unde at eaque cumque!</p>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-include=\"\" src=\"\\\"views/partials/footer.html\\\"\"></div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/detail.html',
    "<div class=\"pdf-wrapper\">\n" +
    "\n" +
    "\tVIS PDF {{id}}\t\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/main.html',
    "<div>\n" +
    "\n" +
    "\t<div class=\"content-wrapper\">\n" +
    "\t\t\n" +
    "\t\t<div ng-include=\"\" src=\"\\\"/views/partials/nav.html\\\"\"></div>\n" +
    "\n" +
    "\t\t<header class=\"hero\">\n" +
    "\t\t\t<div class=\"container\">\n" +
    "\t\t\t\t<div class=\"portrait\"></div>\n" +
    "\t\t\t\t<h1><small>Magne Hornes</small><br>Volleyball krønike</h1>\n" +
    "\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t<input type=\"search\" class=\"form-control\" placeholder=\"Søk etter navn, overskrifter eller innholdstekst ..\" ng-model=\"search\">\n" +
    "\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n" +
    "\t\t\t\t\t\t        <button class=\"btn btn-primary\" type=\"button\">Søk</button>\n" +
    "\t\t\t\t\t      \t</span>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</header>\n" +
    "\n" +
    "\t\t<div class=\"container content\">\n" +
    "\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t<hr>\n" +
    "\t\t\t\t\t<p>\n" +
    "\t\t\t\t\t\t<strong>Resultat: </strong>\n" +
    "\t\t\t\t\t\t{{(articles | filter:search).length}} elementer i listen\n" +
    "\t\t\t\t\t\t<small ng-show=\"search\"> - (\"{{search}}\")</small>\n" +
    "\t\t\t\t\t</p>\n" +
    "\t\t\t\t\t<hr>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-md-12\" ng-show=\"(articles | filter:search).length < 1\">\n" +
    "\t\t\t\t\t<p>Ditt søk ga dessverre ingen resultater.</p>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-md-3 col-sm-6 fade-in\" ng-repeat=\"article in articles | filter:search\">\n" +
    "\t\t\t\t\t<!-- <a href=\"/#/detail/{{article.id}}\" target=\"_blank\"> -->\n" +
    "\t\t\t\t\t<a href=\"/#/artikkel/{{article.id}}\" style=\"text-decoration: none\">\n" +
    "\t\t\t\t\t\t<div class=\"element\">\n" +
    "\t\t\t\t\t\t\t<h3>{{article.year}}<br>\n" +
    "\t\t\t\t\t\t\t\t<!-- <small ng-show=\"search\">x treff</small> -->\n" +
    "\t\t\t\t\t\t\t</h3>\n" +
    "\t\t\t\t\t\t\t<img ng-src=\"{{article.image_url}}\" style=\"width: 100%; height: 300px\" alt=\"\">\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</a>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-include=\"\" src=\"\\\"views/partials/footer.html\\\"\"></div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/partials/footer.html',
    "<footer class=\"page-footer\">\n" +
    "  \t<div class=\"container\">\n" +
    "    \t<div class=\"row\">\n" +
    "        \t<div class=\"col-md-6\">\n" +
    "        \t\t<h5>Tittel</h5>\n" +
    "          \t\t<p>Lorem ipsum</p>\n" +
    "        \t</div>\n" +
    "        \t<div class=\"col-md-6\">\n" +
    "        \t\t<h5>Tittel</h5>\n" +
    "        \t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, sit, quas, eos non obcaecati expedita incidunt magnam minima soluta nam corporis repellendus deleniti dolor fuga facere maxime dolorum iusto odit!</p>\n" +
    "        \t</div>\n" +
    "    \t</div>\n" +
    "  \t</div>\n" +
    "</footer>"
  );


  $templateCache.put('views/partials/nav.html',
    "<div class=\"navbar navbar-inverse navbar-custom\">\n" +
    "\t<div class=\"container\">\n" +
    "\t\t<div class=\"navbar-header\">\n" +
    "\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t</button>\n" +
    "\t\t\t<a class=\"navbar-brand\" href=\"#\">Magne Hornes</a>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"collapse navbar-collapse\">\n" +
    "\t\t\t<ul class=\"nav navbar-nav\">\n" +
    "\t\t\t\t<li ng-class=\"root\"><a href=\"/\">Søk i arkivet</a></li>\n" +
    "\t\t\t\t<!-- <li ng-class=\"timeline\"><a href=\"/#/tidslinje\">Tidslinje</a></li> -->\n" +
    "\t\t\t\t<li ng-class=\"about\"><a href=\"/#/om\">Om</a></li>\n" +
    "\t\t\t</ul>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('views/timeline.html',
    "<div>\n" +
    "\n" +
    "\t<div class=\"content-wrapper\">\n" +
    "\n" +
    "\t\t<div ng-include=\"\" src=\"\\\"/views/partials/nav.html\\\"\"></div>\n" +
    "\n" +
    "\t\t<header class=\"hero\">\n" +
    "\t\t\t<div class=\"container\">\n" +
    "\t\t\t\t<div class=\"portrait\"></div>\n" +
    "\t\t\t\t<h1><small>Magne Hornes</small><br>Volleyball krønike</h1>\n" +
    "\t\t\t</div>\n" +
    "\t\t</header>\n" +
    "\t\t\n" +
    "\t\t<div class=\"container content\">\n" +
    "\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t<h2>Tidslinje</h2>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div ng-include=\"\" src=\"\\\"views/partials/footer.html\\\"\"></div>\n" +
    "\t\n" +
    "</div>"
  );

}]);
