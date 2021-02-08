content = {
  "#landing-page-banner-text":{
    "en": 'Welcome to Gender at Work Institute',
    "fr": 'Bienvenue à l\'Institut Gender at Work'
    },
  "#landing-page-sub-heading":{
    "en": "Join Our Community",
    "fr": "Rejoignez Notre Communauté"
    },
  "#landing-page-description": {
    "en": "Gender at Work is an international feminist knowledge network that works to end discrimination against women and build cultures of inclusion. Gender at Work Institute is our online knowledge and learning hub. We invite you to be a part of this learning community to meet fellow feminist activists, change makers, practitioners, movement builders and explore how we can bring about transformative change on gender equality.",
    "fr": "Gender at Work est un réseau international de connaissances féministes qui œuvre pour mettre fin à la discrimination à l'égard des femmes et bâtir des cultures d'inclusion. Gender at Work Institute est notre centre de connaissances et d'apprentissage en ligne. Nous vous invitons à faire partie de cette communauté d'apprentissage pour rencontrer d'autres militantes féministes, des artisans du changement, des praticiens, des bâtisseurs de mouvements et explorer comment nous pouvons apporter un changement transformateur sur l'égalité des sexes.",
    },
  "#landing-page-course-heading":{
    "en": "View Courses",
    "fr": "Voir les cours"
    },
  "#landing-page-course-sub-heading":{
    "en": "Explore our newest online courses",
    "fr": "Découvrez nos derniers cours en ligne"
    },    
  ".page-footer-description":{
    "en": "Gender at Work is an international feminist knowledge network that works to end discrimination against women and build cultures of inclusion. Gender at Work Institute is our online knowledge and learning hub.",
    "fr": "Gender at Work est un réseau international de connaissances féministes qui s'efforce de mettre fin à la discrimination à l'égard des femmes et de créer des cultures d'inclusion. L'institut Gender at Work est notre centre de connaissances et d'apprentissage en ligne."
    },
}


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
  lang = document.documentElement.lang;
  searchStrings = {
      "en": "Search course catalogue",
      "fr": "Recherche de cours"
  }
  $("input[name=search_query]").attr('placeholder',
    lang in searchStrings ? searchStrings[lang] : "Search course catalogue");
}

function initNavbar(){
  initSearch();
  var registerbutton =  $('a[href^="/register"]');
  registerbutton.removeClass('px-4 py-2');
  registerbutton.addClass('px-2');
  
}

function loadStaticContent(){
  lang = document.documentElement.lang
  for (var elementName in content) {
    $(elementName).each(function(){    
      $(this).html(content[elementName][lang]);
    });        
  }
}

function initPage() {
  loadStaticContent();
  initNavbar();
  initBanners();
  alternateOrderOfCourses();
}

$(document).ready(initPage);