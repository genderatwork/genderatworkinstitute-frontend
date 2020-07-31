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

function initBanners() {
  var dashboard_banner = $(".dashboard-intro");
  if (dashboard_banner) {
    dashboard_banner.css("background-img", "");
  }

  if (window.location.href.includes("https://www.genderatworkinstitute.org/courses")) {
      var course_banner = $(".home-intro");
      if (course_banner) {
        course_banner.removeClass("home-intro");
        course_banner.addClass("courses-intro");
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
  initBanners();
  alternateOrderOfCourses();
}

$(document).ready(initPage);