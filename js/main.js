window.addEventListener('load', function(){

});

// resise header
window.onscroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.querySelectorAll('.navbar-brand, header, .nav-link').forEach(e=>
        e.classList.add('fixedNavbar'));
    } else {
        document.querySelectorAll('.navbar-brand, header, .nav-link').forEach(e=>
        e.classList.remove('fixedNavbar'));
    }
  }

  //progress bar animation
  const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('progress__ani');
      }
    });
  });
  
  document.querySelectorAll('.progress__itemBar').forEach(function(e){
    observer.observe(e);
  });


  // isotope
  var $grid = $('.portfolio__content .row').isotope({
    // options
    layoutMode: 'fitRows'
  });

// filter items on button click
$('#nav-filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  console.log(filterValue);
  $grid.isotope({ filter: filterValue+":not(.transition)" });
});
