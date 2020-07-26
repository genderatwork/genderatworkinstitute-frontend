function alternateOrderOfCourses() {
  $('article.course a').each(function(index) {
    $(this).addClass(index % 2 == 0 ? 'even' : 'odd');
  });
}

function initSearch() {
  var navlist = $('.container-navbar-links ul.navbar-links')[1]
  if (navlist) {
    var navsearch = $('#navbar-search-form')[0]
    navlist.appendChild(navsearch);
    navsearch.style.display = 'inline-block'
  }
}

function initNavbar(){
  initSearch();
  var registerbutton =  $('a[href^="/register"]')
  registerbutton.removeClass('px-4 py-2')
  registerbutton.addClass('px-2')
}

function initPage() {
  initNavbar();
  alternateOrderOfCourses();
}

$(document).ready(initPage);
