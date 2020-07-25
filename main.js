function initPage() {
  var navlist = $('.container-navbar-links ul.navbar-links')[1]
  console.log(navlist);
  var navsearch = $('#navbar-search-form')[0]
  console.log(navsearch);
  // navlist.insertBefore(navsearch, navlist.firstChild)
  navlist.appendChild(navsearch);
  navsearch.style.display = 'inline-block'
}

$(document).ready(initPage);
