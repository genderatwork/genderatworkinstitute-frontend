function alternateOrderOfCourses() {
  $('article.course a').each(function(index) {
    $(this).addClass(index % 2 == 0 ? 'even' : 'odd');
  });
}

function initSearch() {
  var navlist = $('.container-navbar-links ul.navbar-links')[1]
  var navsearch = $('#navbar-search-form')[0]
  navlist.appendChild(navsearch);
  navsearch.style.display = 'inline-block'
}

function initPage() {
  initSearch();
  alternateOrderOfCourses();
}

$(document).ready(initPage);
