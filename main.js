function alternateOrderOfCourses() {
  if( typeof this.counter == 'undefined' ) {
      this.counter = 0;
  }  
  console.log(this.counter);
  // Check, whether the course list is generated already
  if ( $('article.course').length === 0) {
    // Break-out condition
    this.counter++;
    if ( this.counter > 10) return;
    // Wait and try again
    setTimeout(this, 300);
  } else {
    // Change the layout
    if ($('.dashboard').length > 0) {
      // We are on the dashboard page
      $('article.course section').each(function(index) {  
        $(this).addClass(index % 2 == 0 ? 'even' : 'odd');
      });
    } else{
      $('article.course a').each(function(index) {
        $(this).addClass(index % 2 == 0 ? 'even' : 'odd');
      });    
    }
  }
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