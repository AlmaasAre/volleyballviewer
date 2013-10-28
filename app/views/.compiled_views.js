angular.module('volleyballviewerApp').run(['$templateCache', function($templateCache) {

  $templateCache.put('views/about.html',
    "<div>\n" +
    "\n" +
    "\t<div class=\"content-wrapper\">\n" +
    "\n" +
    "\t\t<!-- <div ng-include src='\"/views/partials/nav.html\"'></div> -->\n" +
    "\t\t<div class=\"navbar navbar-inverse navbar-custom\">\n" +
    "\t\t\t<div class=\"container\">\n" +
    "\t\t\t\t<div class=\"navbar-header\">\n" +
    "\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t\t</button>\n" +
    "\t\t\t\t\t<a class=\"navbar-brand\" href=\"#\">Volleykronike</a>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"collapse navbar-collapse\">\n" +
    "\t\t\t\t\t<ul class=\"nav navbar-nav\">\n" +
    "\t\t\t\t\t\t<li ng-class=\"root\"><a href=\"/\">Søk i arkivet</a></li>\n" +
    "\t\t\t\t\t\t<!-- <li ng-class=\"timeline\"><a href=\"/#/tidslinje\">Tidslinje</a></li> -->\n" +
    "\t\t\t\t\t\t<li ng-class=\"about\"><a href=\"/#/om\">Om</a></li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<header class=\"hero\">\n" +
    "\t\t\t<div class=\"container\">\n" +
    "\t\t\t\t<div class=\"portrait\"></div>\n" +
    "\t\t\t\t<h1><small>Magne Hornnes</small><br>Volleyball krønike</h1>\n" +
    "\t\t\t</div>\n" +
    "\t\t</header>\n" +
    "\t\t\n" +
    "\t\t<div class=\"container content\">\n" +
    "\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t\t<img src=\"/images/magne.jpg\" alt=\"\" style=\"width:100%; height: auto\">\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-md-8\">\n" +
    "\t\t\t\t\t<h2>Magne Hornnes</h2>\n" +
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
    "\t<!-- <div ng-include src='\"views/partials/footer.html\"'></div> -->\n" +
    "\t<footer class=\"page-footer\">\n" +
    "\t  \t<div class=\"container\">\n" +
    "\t    \t<div class=\"row\">\n" +
    "\t        \t<div class=\"col-md-6\">\n" +
    "\t        \t\t<h5>Tittel</h5>\n" +
    "\t          \t\t<p>Lorem ipsum</p>\n" +
    "\t        \t</div>\n" +
    "\t        \t<div class=\"col-md-6\">\n" +
    "\t        \t\t<h5>Tittel</h5>\n" +
    "\t        \t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, sit, quas, eos non obcaecati expedita incidunt magnam minima soluta nam corporis repellendus deleniti dolor fuga facere maxime dolorum iusto odit!</p>\n" +
    "\t        \t</div>\n" +
    "\t    \t</div>\n" +
    "\t  \t</div>\n" +
    "\t</footer>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/detail.html',
    "<pdf-viewer pdf-url=\"{{pdf.linkUrl}}\">\n" +
    "\n" +
    "</pdf-viewer>"
  );


  $templateCache.put('views/directives/pdf-viewer.html',
    "<div id=\"outerContainer\" class=\"loadingInProgress\">\n" +
    "\n" +
    "<div id=\"sidebarContainer\">\n" +
    "    <div id=\"toolbarSidebar\">\n" +
    "        <div class=\"splitToolbarButton toggled\">\n" +
    "            <button id=\"viewThumbnail\" class=\"toolbarButton group toggled\" title=\"Show Thumbnails\" tabindex=\"2\" data-l10n-id=\"thumbs\">\n" +
    "                <span data-l10n-id=\"thumbs_label\">Thumbnails</span>\n" +
    "            </button>\n" +
    "            <button id=\"viewOutline\" class=\"toolbarButton group\" title=\"Show Document Outline\" tabindex=\"3\" data-l10n-id=\"outline\">\n" +
    "                <span data-l10n-id=\"outline_label\">Document Outline</span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"sidebarContent\">\n" +
    "        <div id=\"thumbnailView\">\n" +
    "        </div>\n" +
    "        <div id=\"outlineView\" class=\"hidden\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>  <!-- sidebarContainer -->\n" +
    "\n" +
    "<div id=\"mainContainer\">\n" +
    "    <div class=\"findbar hidden doorHanger hiddenSmallView\" id=\"findbar\">\n" +
    "        <label for=\"findInput\" class=\"toolbarLabel\" data-l10n-id=\"find_label\">Find:</label>\n" +
    "        <input id=\"findInput\" class=\"toolbarField\" tabindex=\"41\">\n" +
    "        <div class=\"splitToolbarButton\">\n" +
    "            <button class=\"toolbarButton findPrevious\" title=\"\" id=\"findPrevious\" tabindex=\"42\" data-l10n-id=\"find_previous\">\n" +
    "                <span data-l10n-id=\"find_previous_label\">Previous</span>\n" +
    "            </button>\n" +
    "            <div class=\"splitToolbarButtonSeparator\"></div>\n" +
    "            <button class=\"toolbarButton findNext\" title=\"\" id=\"findNext\" tabindex=\"43\" data-l10n-id=\"find_next\">\n" +
    "                <span data-l10n-id=\"find_next_label\">Next</span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <input type=\"checkbox\" id=\"findHighlightAll\" class=\"toolbarField\">\n" +
    "        <label for=\"findHighlightAll\" class=\"toolbarLabel\" tabindex=\"44\" data-l10n-id=\"find_highlight\">Highlight all</label>\n" +
    "        <input type=\"checkbox\" id=\"findMatchCase\" class=\"toolbarField\">\n" +
    "        <label for=\"findMatchCase\" class=\"toolbarLabel\" tabindex=\"45\" data-l10n-id=\"find_match_case_label\">Match case</label>\n" +
    "        <span id=\"findMsg\" class=\"toolbarLabel\"></span>\n" +
    "    </div>  <!-- findbar -->\n" +
    "\n" +
    "    <div id=\"secondaryToolbar\" class=\"secondaryToolbar hidden doorHangerRight\">\n" +
    "        <div id=\"secondaryToolbarButtonContainer\">\n" +
    "            <button id=\"secondaryPresentationMode\" class=\"secondaryToolbarButton presentationMode visibleLargeView\" title=\"Switch to Presentation Mode\" tabindex=\"18\" data-l10n-id=\"presentation_mode\">\n" +
    "                <span data-l10n-id=\"presentation_mode_label\">Presentation Mode</span>\n" +
    "            </button>\n" +
    "\n" +
    "            <button id=\"secondaryOpenFile\" class=\"secondaryToolbarButton openFile visibleLargeView\" title=\"Open File\" tabindex=\"19\" data-l10n-id=\"open_file\">\n" +
    "                <span data-l10n-id=\"open_file_label\">Open</span>\n" +
    "            </button>\n" +
    "\n" +
    "            <button id=\"secondaryPrint\" class=\"secondaryToolbarButton print visibleMediumView\" title=\"Print\" tabindex=\"20\" data-l10n-id=\"print\">\n" +
    "                <span data-l10n-id=\"print_label\">Print</span>\n" +
    "            </button>\n" +
    "\n" +
    "            <button id=\"secondaryDownload\" class=\"secondaryToolbarButton download visibleMediumView\" title=\"Download\" tabindex=\"21\" data-l10n-id=\"download\">\n" +
    "                <span data-l10n-id=\"download_label\">Download</span>\n" +
    "            </button>\n" +
    "\n" +
    "            <a href=\"#\" id=\"secondaryViewBookmark\" class=\"secondaryToolbarButton bookmark visibleSmallView\" title=\"Current view (copy or open in new window)\" tabindex=\"22\" data-l10n-id=\"bookmark\">\n" +
    "                <span data-l10n-id=\"bookmark_label\">Current View</span>\n" +
    "            </a>\n" +
    "\n" +
    "            <div class=\"horizontalToolbarSeparator visibleLargeView\"></div>\n" +
    "\n" +
    "            <button id=\"firstPage\" class=\"secondaryToolbarButton firstPage\" title=\"Go to First Page\" tabindex=\"23\" data-l10n-id=\"first_page\">\n" +
    "                <span data-l10n-id=\"first_page_label\">Go to First Page</span>\n" +
    "            </button>\n" +
    "            <button id=\"lastPage\" class=\"secondaryToolbarButton lastPage\" title=\"Go to Last Page\" tabindex=\"24\" data-l10n-id=\"last_page\">\n" +
    "                <span data-l10n-id=\"last_page_label\">Go to Last Page</span>\n" +
    "            </button>\n" +
    "\n" +
    "            <div class=\"horizontalToolbarSeparator\"></div>\n" +
    "\n" +
    "            <button id=\"pageRotateCw\" class=\"secondaryToolbarButton rotateCw\" title=\"Rotate Clockwise\" tabindex=\"25\" data-l10n-id=\"page_rotate_cw\">\n" +
    "                <span data-l10n-id=\"page_rotate_cw_label\">Rotate Clockwise</span>\n" +
    "            </button>\n" +
    "            <button id=\"pageRotateCcw\" class=\"secondaryToolbarButton rotateCcw\" title=\"Rotate Counterclockwise\" tabindex=\"26\" data-l10n-id=\"page_rotate_ccw\">\n" +
    "                <span data-l10n-id=\"page_rotate_ccw_label\">Rotate Counterclockwise</span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>  <!-- secondaryToolbar -->\n" +
    "\n" +
    "    <div class=\"toolbar\">\n" +
    "        <div id=\"toolbarContainer\">\n" +
    "            <div id=\"toolbarViewer\">\n" +
    "                <div id=\"toolbarViewerLeft\">\n" +
    "                    <button id=\"sidebarToggle\" class=\"toolbarButton\" title=\"Toggle Sidebar\" tabindex=\"4\" data-l10n-id=\"toggle_sidebar\">\n" +
    "                        <span data-l10n-id=\"toggle_sidebar_label\">Toggle Sidebar</span>\n" +
    "                    </button>\n" +
    "                    <div class=\"toolbarButtonSpacer\"></div>\n" +
    "                    <button id=\"viewFind\" class=\"toolbarButton group hiddenSmallView\" title=\"Find in Document\" tabindex=\"5\" data-l10n-id=\"findbar\">\n" +
    "                        <span data-l10n-id=\"findbar_label\">Find</span>\n" +
    "                    </button>\n" +
    "                    <div class=\"splitToolbarButton\">\n" +
    "                        <button class=\"toolbarButton pageUp\" title=\"Previous Page\" id=\"previous\" tabindex=\"6\" data-l10n-id=\"previous\">\n" +
    "                            <span data-l10n-id=\"previous_label\">Previous</span>\n" +
    "                        </button>\n" +
    "                        <div class=\"splitToolbarButtonSeparator\"></div>\n" +
    "                        <button class=\"toolbarButton pageDown\" title=\"Next Page\" id=\"next\" tabindex=\"7\" data-l10n-id=\"next\">\n" +
    "                            <span data-l10n-id=\"next_label\">Next</span>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                    <label id=\"pageNumberLabel\" class=\"toolbarLabel\" for=\"pageNumber\" data-l10n-id=\"page_label\">Page: </label>\n" +
    "                    <input type=\"number\" id=\"pageNumber\" class=\"toolbarField pageNumber\" value=\"1\" size=\"4\" min=\"1\" tabindex=\"8\">\n" +
    "                    \n" +
    "                    <span id=\"numPages\" class=\"toolbarLabel\"></span>\n" +
    "                </div>\n" +
    "                <div id=\"toolbarViewerRight\">\n" +
    "                    <button id=\"presentationMode\" class=\"toolbarButton presentationMode hiddenLargeView\" title=\"Switch to Presentation Mode\" tabindex=\"12\" data-l10n-id=\"presentation_mode\">\n" +
    "                        <span data-l10n-id=\"presentation_mode_label\">Presentation Mode</span>\n" +
    "                    </button>\n" +
    "\n" +
    "                    <button id=\"openFile\" class=\"toolbarButton openFile hiddenLargeView\" title=\"Open File\" tabindex=\"13\" data-l10n-id=\"open_file\">\n" +
    "                        <span data-l10n-id=\"open_file_label\">Open</span>\n" +
    "                    </button>\n" +
    "\n" +
    "                    <button id=\"print\" class=\"toolbarButton print hiddenMediumView\" title=\"Print\" tabindex=\"14\" data-l10n-id=\"print\">\n" +
    "                        <span data-l10n-id=\"print_label\">Print</span>\n" +
    "                    </button>\n" +
    "\n" +
    "                    <button id=\"download\" class=\"toolbarButton download hiddenMediumView\" title=\"Download\" tabindex=\"15\" data-l10n-id=\"download\">\n" +
    "                        <span data-l10n-id=\"download_label\">Download</span>\n" +
    "                    </button>\n" +
    "                    <!-- <div class=\"toolbarButtonSpacer\"></div> -->\n" +
    "                    <a href=\"#\" id=\"viewBookmark\" class=\"toolbarButton bookmark hiddenSmallView\" title=\"Current view (copy or open in new window)\" tabindex=\"16\" data-l10n-id=\"bookmark\">\n" +
    "                        <span data-l10n-id=\"bookmark_label\">Current View</span>\n" +
    "                    </a>\n" +
    "\n" +
    "                    <div class=\"verticalToolbarSeparator hiddenSmallView\"></div>\n" +
    "\n" +
    "                    <button id=\"secondaryToolbarToggle\" class=\"toolbarButton\" title=\"Tools\" tabindex=\"17\" data-l10n-id=\"tools\">\n" +
    "                        <span data-l10n-id=\"tools_label\">Tools</span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "                <div class=\"outerCenter\">\n" +
    "                    <div class=\"innerCenter\" id=\"toolbarViewerMiddle\">\n" +
    "                        <div class=\"splitToolbarButton\">\n" +
    "                            <button id=\"zoomOut\" class=\"toolbarButton zoomOut\" title=\"Zoom Out\" tabindex=\"9\" data-l10n-id=\"zoom_out\">\n" +
    "                                <span data-l10n-id=\"zoom_out_label\">Zoom Out</span>\n" +
    "                            </button>\n" +
    "                            <div class=\"splitToolbarButtonSeparator\"></div>\n" +
    "                            <button id=\"zoomIn\" class=\"toolbarButton zoomIn\" title=\"Zoom In\" tabindex=\"10\" data-l10n-id=\"zoom_in\">\n" +
    "                                <span data-l10n-id=\"zoom_in_label\">Zoom In</span>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                  <span id=\"scaleSelectContainer\" class=\"dropdownToolbarButton\">\n" +
    "                     <select id=\"scaleSelect\" title=\"Zoom\" tabindex=\"11\" data-l10n-id=\"zoom\">\n" +
    "                         <option id=\"pageAutoOption\" value=\"auto\" selected=\"selected\" data-l10n-id=\"page_scale_auto\">Automatic Zoom</option>\n" +
    "                         <option id=\"pageActualOption\" value=\"page-actual\" data-l10n-id=\"page_scale_actual\">Actual Size</option>\n" +
    "                         <option id=\"pageFitOption\" value=\"page-fit\" data-l10n-id=\"page_scale_fit\">Fit Page</option>\n" +
    "                         <option id=\"pageWidthOption\" value=\"page-width\" data-l10n-id=\"page_scale_width\">Full Width</option>\n" +
    "                         <option id=\"customScaleOption\" value=\"custom\"></option>\n" +
    "                         <option value=\"0.5\">50%</option>\n" +
    "                         <option value=\"0.75\">75%</option>\n" +
    "                         <option value=\"1\">100%</option>\n" +
    "                         <option value=\"1.25\">125%</option>\n" +
    "                         <option value=\"1.5\">150%</option>\n" +
    "                         <option value=\"2\">200%</option>\n" +
    "                     </select>\n" +
    "                  </span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div id=\"loadingBar\">\n" +
    "                <div class=\"progress\">\n" +
    "                    <div class=\"glimmer\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <menu type=\"context\" id=\"viewerContextMenu\">\n" +
    "        <menuitem id=\"contextFirstPage\" label=\"First Page\" data-l10n-id=\"first_page\"></menuitem>\n" +
    "        <menuitem id=\"contextLastPage\" label=\"Last Page\" data-l10n-id=\"last_page\"></menuitem>\n" +
    "        <menuitem id=\"contextPageRotateCw\" label=\"Rotate Clockwise\" data-l10n-id=\"page_rotate_cw\"></menuitem>\n" +
    "        <menuitem id=\"contextPageRotateCcw\" label=\"Rotate Counter-Clockwise\" data-l10n-id=\"page_rotate_ccw\"></menuitem>\n" +
    "    </menu>\n" +
    "\n" +
    "    <div id=\"viewerContainer\" tabindex=\"0\">\n" +
    "        <div id=\"viewer\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"errorWrapper\" hidden=\"true\">\n" +
    "        <div id=\"errorMessageLeft\">\n" +
    "            <span id=\"errorMessage\"></span>\n" +
    "            <button id=\"errorShowMore\" data-l10n-id=\"error_more_info\">\n" +
    "                More Information\n" +
    "            </button>\n" +
    "            <button id=\"errorShowLess\" data-l10n-id=\"error_less_info\" hidden=\"true\">\n" +
    "                Less Information\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div id=\"errorMessageRight\">\n" +
    "            <button id=\"errorClose\" data-l10n-id=\"error_close\">\n" +
    "                Close\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"clearBoth\"></div>\n" +
    "        <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\n" +
    "    </div>\n" +
    "</div> <!-- mainContainer -->\n" +
    "\n" +
    "<div id=\"overlayContainer\" class=\"hidden\">\n" +
    "    <div id=\"promptContainer\">\n" +
    "        <div id=\"passwordContainer\" class=\"prompt doorHanger\">\n" +
    "            <div class=\"row\">\n" +
    "                <p id=\"passwordText\" data-l10n-id=\"password_label\">Enter the password to open this PDF file:</p>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <input type=\"password\" id=\"password\" class=\"toolbarField\">\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <button id=\"passwordCancel\" class=\"promptButton\"><span data-l10n-id=\"password_cancel\">Cancel</span></button>\n" +
    "                <button id=\"passwordSubmit\" class=\"promptButton\"><span data-l10n-id=\"password_ok\">OK</span></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "</div> <!-- outerContainer -->\n" +
    "<div id=\"printContainer\"></div>\n" +
    "<div id=\"mozPrintCallback-shim\" hidden=\"\">\n" +
    "    <style scoped=\"\">\n" +
    "        #mozPrintCallback-shim {\n" +
    "            position: fixed;\n" +
    "            top: 0;\n" +
    "            left: 0;\n" +
    "            height: 100%;\n" +
    "            width: 100%;\n" +
    "            z-index: 9999999;\n" +
    "\n" +
    "            display: block;\n" +
    "            text-align: center;\n" +
    "            background-color: rgba(0, 0, 0, 0.5);\n" +
    "        }\n" +
    "        #mozPrintCallback-shim[hidden] {\n" +
    "            display: none;\n" +
    "        }\n" +
    "        @media print {\n" +
    "            #mozPrintCallback-shim {\n" +
    "                display: none;\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        #mozPrintCallback-shim .mozPrintCallback-dialog-box {\n" +
    "            display: inline-block;\n" +
    "            margin: -50px auto 0;\n" +
    "            position: relative;\n" +
    "            top: 45%;\n" +
    "            left: 0;\n" +
    "            min-width: 220px;\n" +
    "            max-width: 400px;\n" +
    "\n" +
    "            padding: 9px;\n" +
    "\n" +
    "            border: 1px solid hsla(0, 0%, 0%, .5);\n" +
    "            border-radius: 2px;\n" +
    "            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n" +
    "\n" +
    "            background-color: #474747;\n" +
    "\n" +
    "            color: hsl(0, 0%, 85%);\n" +
    "            font-size: 16px;\n" +
    "            line-height: 20px;\n" +
    "        }\n" +
    "        #mozPrintCallback-shim .progress-row {\n" +
    "            clear: both;\n" +
    "            padding: 1em 0;\n" +
    "        }\n" +
    "        #mozPrintCallback-shim progress {\n" +
    "            width: 100%;\n" +
    "        }\n" +
    "        #mozPrintCallback-shim .relative-progress {\n" +
    "            clear: both;\n" +
    "            float: right;\n" +
    "        }\n" +
    "        #mozPrintCallback-shim .progress-actions {\n" +
    "            clear: both;\n" +
    "        }\n" +
    "    </style>\n" +
    "    <div class=\"mozPrintCallback-dialog-box\">\n" +
    "        <!-- TODO: Localise the following strings -->\n" +
    "        Preparing document for printing...\n" +
    "        <div class=\"progress-row\">\n" +
    "            <progress value=\"0\" max=\"100\"></progress>\n" +
    "            <span class=\"relative-progress\">0%</span>\n" +
    "        </div>\n" +
    "        <div class=\"progress-actions\">\n" +
    "            <input type=\"button\" value=\"Cancel\" class=\"mozPrintCallback-cancel\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/main.html',
    "<div>\n" +
    "\n" +
    "\t<div class=\"content-wrapper\">\n" +
    "\t\t\n" +
    "\t\t<!-- <div ng-include src='\"/views/partials/nav.html\"'></div> -->\n" +
    "\t\t<div class=\"navbar navbar-inverse navbar-custom\">\n" +
    "\t\t\t<div class=\"container\">\n" +
    "\t\t\t\t<div class=\"navbar-header\">\n" +
    "\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t\t</button>\n" +
    "\t\t\t\t\t<a class=\"navbar-brand\" href=\"#\">Volleykronike</a>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"collapse navbar-collapse\">\n" +
    "\t\t\t\t\t<ul class=\"nav navbar-nav\">\n" +
    "\t\t\t\t\t\t<li ng-class=\"root\"><a href=\"/\">Søk i arkivet</a></li>\n" +
    "\t\t\t\t\t\t<!-- <li ng-class=\"timeline\"><a href=\"/#/tidslinje\">Tidslinje</a></li> -->\n" +
    "\t\t\t\t\t\t<li ng-class=\"about\"><a href=\"/#/om\">Om</a></li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<header class=\"hero\">\n" +
    "\t\t\t<div class=\"container\">\n" +
    "\t\t\t\t<div class=\"portrait\"></div>\n" +
    "\t\t\t\t<h1><small>Magne Hornnes</small><br>Volleyball krønike</h1>\n" +
    "\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t\t<input type=\"search\" class=\"form-control\" placeholder=\"Søk etter årstall ..\" ng-model=\"search\">\n" +
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
    "\n" +
    "\t\t\t\t\t\t<span class=\"ordering-wrapper\">\n" +
    "\t\t\t\t\t\t\t<span>\n" +
    "\t\t\t\t\t\t\t\t<a ng-click=\"setElementOrdering('-year')\">\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-down\"></span>\n" +
    "\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t\t\t<span>\n" +
    "\t\t\t\t\t\t\t\t<a ng-click=\"setElementOrdering('year')\">\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-up\"></span>\n" +
    "\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</p>\n" +
    "\t\t\t\t\t<hr>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-md-12\" ng-show=\"(articles | filter:search).length < 1\">\n" +
    "\t\t\t\t\t<p>Ditt søk ga dessverre ingen resultater.</p>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"col-md-3 col-sm-6 scale-fade\" ng-repeat=\"article in articles | filter:{'year':search} | orderBy:orderElements\">\n" +
    "\t\t\t\t\t<!-- <a href=\"/#/detail/{{article.id}}\" target=\"_blank\"> -->\n" +
    "\t\t\t\t\t<a href=\"/#/artikkel/{{article._id}}\" style=\"text-decoration: none\">\n" +
    "\t\t\t\t\t\t<div class=\"element\" style=\"background: #ddd url('/images/element-background-{{article._id}}.jpg') no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover\">\n" +
    "\t\t\t\t\t\t\t<h3>{{article.year}}<br>\n" +
    "\t\t\t\t\t\t\t\t<!-- <small ng-show=\"search\">x treff</small> -->\n" +
    "\t\t\t\t\t\t\t</h3>\n" +
    "\t\t\t\t\t\t\t<!-- <img ng-src=\"{{article.image_url}}\" style=\"width: 100%; height: 300px;\" alt=\"\"> -->\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</a>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t</div>\n" +
    "\n" +
    "\t<!-- <div ng-include src='\"views/partials/footer.html\"'></div> -->\n" +
    "\t<footer class=\"page-footer\">\n" +
    "\t  \t<div class=\"container\">\n" +
    "\t    \t<div class=\"row\">\n" +
    "\t        \t<div class=\"col-md-6\">\n" +
    "\t        \t\t<h5>Tittel</h5>\n" +
    "\t          \t\t<p>Lorem ipsum</p>\n" +
    "\t        \t</div>\n" +
    "\t        \t<div class=\"col-md-6\">\n" +
    "\t        \t\t<h5>Tittel</h5>\n" +
    "\t        \t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, sit, quas, eos non obcaecati expedita incidunt magnam minima soluta nam corporis repellendus deleniti dolor fuga facere maxime dolorum iusto odit!</p>\n" +
    "\t        \t</div>\n" +
    "\t    \t</div>\n" +
    "\t  \t</div>\n" +
    "\t</footer>\n" +
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
    "\t\t\t<a class=\"navbar-brand\" href=\"#\">Volleykronike</a>\n" +
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
    "\t\t\t\t<h1><small>Magne Hornnes</small><br>Volleyball krønike</h1>\n" +
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
