$(window).load(function(){
	NProgress.done();
});

NProgress.start();
NProgress.configure({ ease: 'ease', speed: 500 });


// -------------------------------------------------------------------------
// Document Ready ----------------------------------------------------------
// -------------------------------------------------------------------------
$(document).ready(function() {

    document.createElement('header');
      document.createElement('nav');
      document.createElement('section');
      document.createElement('article');
      document.createElement('aside');
      document.createElement('footer');
      document.createElement('i');

// -------------------------------------------------------------------------
// START: Text string hacks ------------------------------------------------
// -------------------------------------------------------------------------

$('#.loginbox h2').text('Log In');

// -------------------------------------------------------------------------
// END: string hacks -------------------------------------------------------
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// START: Backstretch ------------------------------------------------
// -------------------------------------------------------------------------
/*
 * Here is an example of how to use Backstretch as a slideshow.
 * Just pass in an array of images, and optionally a duration and fade value.
 */

  // Duration is the amount of time in between slides,
  // and fade is value that determines how quickly the next image will fade in
  $('.login-page').backstretch([
      "../theme/learningspace/img/monster_2-wallpaper-1920x1200.jpg", 
      "../theme/learningspace/img/rough_wood_boards-wallpaper-1920x1200.jpg", 
      "../theme/learningspace/img/wave_7-wallpaper-1920x1200.jpg",
      "../theme/learningspace/img/wet_maple_leaf_close_up-wallpaper-1920x1200.jpg"
  ], {duration: 5000, fade: 750});
// -------------------------------------------------------------------------
// END: Backstretch ------------------------------------------------
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// START: Intro.JS Overlays ------------------------------------------------
// http://usablica.github.io/intro.js/ -------------------------------------
// -------------------------------------------------------------------------
  var orientationOverlays = function(){

    // My courses link in navbar
    var myCourses = $('.navbar-fixed-top').find('.menu-item-my-courses');

    // Resources link in navbar
    var resources = $('.navbar-fixed-top').find('.menu-item-resources');

    // The breadcrumb
    var breadcrumb = $('#page-header').find('.breadcrumb');

    // User context menu
    var userMenu = $('.navbar-fixed-top').find('.nav.pull-right');

    // The list/menu of sections in a module
    var sectionMenu = $('#region-pre').find('.block_course_menu');

    // The nav buttons for the module
    var moduleNav = $('#region-pre').find('.block_html');

    // Next and previous sections
    var sectionNav = $('#region-main').find('.section-navigation.mdl-bottom');

    // The main content
    var moduleContent = $('#region-main').find('.course-content');

    // Add the data attributes needed by Intro.JS
    myCourses.attr("step", 1);
    myCourses.attr("intro", "My Courses will take you to a list of all the modules you have subscribed to.");

    resources.attr("step", 2);
    resources.attr("intro", "Quick links to services available to support your learning.");

    userMenu.attr("step", 3);
    userMenu.attr("intro", "My menu is where you can edit your Profile, get Help with the Learning Space and Log out.");

    breadcrumb.attr("step", 4);
    breadcrumb.attr("intro", "The Breadcrumb is to let you know where you are. All breadcrumb items are links.");

    sectionMenu.attr("step", 5);
    sectionMenu.attr("intro", "The Section menu will take you straight to a relevant topic or week in the current module. It can also show you all sections on one page.");

    moduleContent.attr("step", 6);
    moduleContent.attr("intro", "This is where your Learning Material will appear."); 

    sectionNav.attr("step", 7);
    sectionNav.attr("intro", "Click these to navigate through your Learning."); 

    moduleNav.attr("step", 8);
    moduleNav.attr("intro", "These contextual links are relevant to the current page. e.g. taking you from a module to the relevant course or to other modules on that course."); 

    // Load the Intro.JS Script
    $.getScript( "../theme/learningspace/javascript/intro.js", function( data, textStatus, jqxhr ) {
      //console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "Load was performed." );
    });

  };

  // If we are on the orientation page, run the orientation overlay
  if ($("body").hasClass("course-661")) {
    orientationOverlays();

    $("body").on("click", ".btn", function(){ 
      //alert("triggered the event");
      introJs().start();
    });
  }
// -------------------------------------------------------------------------
// END: Intro.JS Overlays ---------------------------------------------------
// -------------------------------------------------------------------------

	//new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );

	var placeholder = $('.editing h2.main').text()
                                         .replace('Summary of ','');
	$("#id_name").attr("placeholder", placeholder);

	// call fitvids
	//$("#player").fitVids();

  //var bodyID = document.body.id;

  //alert(bodyID);

  //if(bodyID == "page-course-editsection"){
   // alert('hey');

	//if( $('#id_name').val().toString.length == 0 ) {
  //  alert('there');
   // 	$("input:text:visible:first").focus();
  //	} else {
  //		$("input:text:visible:first").blur();
   //   alert('there');
  //	}
//}

  	// create the chevron
    //var chevron = $("<i class=\"icon-chevron-down\"></i>");


// Countdown until next update ---------------------------------------------
if($("#page-login-index").length != 0) {

        var timeDifference = function() {
            
            // add 3 0's

            // Today 15:19
            var next = 1393329600000;

            // Midnight 16th Oct, 2013
            var now = new Date().getTime();

            var prev = 1392620400000;

              var msPerMinute = 60 * 1000;
              var msPerHour = msPerMinute * 60;
              var msPerDay = msPerHour * 24;
              var msPerMonth = msPerDay * 30;
              var msPerYear = msPerDay * 365;
              
              var difference =  now - next;
              difference = Math.abs(difference);

              var howLong = "";
              
              if (difference < msPerMinute) {
                   timeToGo = Math.round(difference/1000) + ' seconds until the next update';  
              }
              
              else if (difference < msPerHour) {
                   timeToGo = Math.round(difference/msPerMinute) + ' minutes until the next update';   
              }
              
              else if (difference < msPerDay ) {
                   timeToGo = Math.round(difference/msPerHour ) + ' hours until the next update';  
              }

              else if (difference < msPerMonth) {
                   timeToGo = Math.round(difference/msPerDay) + ' days until the next update';  
              }
              
              else if (difference < msPerYear) {
                   timeToGo = Math.round(difference/msPerMonth) + ' months until the next update';  
              }
              
              else {
                   timeToGo = Math.round(difference/msPerYear ) + ' years until the next update'; 
              }

              $('#LSUpdateDisplays').append('<p class="timeToGo">'+timeToGo+'</p>');


              var amount = (now - prev) / (next - prev) * 100;
              console.log(amount);

              var archtype = Raphael("updates-clock-canvas", 30, 30);
              archtype.customAttributes.arc = function (xloc, yloc, value, total, R) {
              var alpha = 360 / total * value,
                a = (90 - alpha) * Math.PI / 180,
                x = xloc + R * Math.cos(a),
                y = yloc - R * Math.sin(a),
                path;
            if (total == value) {
                path = [
                    ["M", xloc, yloc - R],
                    ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
                ];
            } else {
                path = [
                    ["M", xloc, yloc - R],
                    ["A", R, R, 0, +(alpha > 180), 1, x, y]
                ];
            }
            return {
                path: path
            };
        };

        //make an arc at 50,50 with a radius of 30 that grows from 0 to 40 of 100 with a bounce
        var my_arc = archtype.path().attr({
            "stroke": "#b7beb6",
            "stroke-width": 7,
            arc: [15, 15, 0, 100, 10]
        });

        my_arc.animate({
        arc: [15, 15, amount, 100, 10]
        }, 1500, "bounce");

    }();
}

// LS Updates Tooltips -----------------------------------------------------  
$('#updates-clock-canvas').tooltip({title: $('.timeToGo').html(), animation: 'true'});








// ---------------------------------------------------------------------------
// "About this module" Dropdown ----------------------------------------------
// ---------------------------------------------------------------------------
// This uses block_section to render section0 as a block.
// We then grab the rendered section, and add it to a dynamically created 
// dropdown. The dropdown itself is added via an HTML block. Further 
// instrustions on doing that here: https://gist.github.com/aaronmarruk/6606770
  
    
        var dd = $("<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu\"></ul>");

        //alert("one");
  
        // Grab the module dropdown div (as per: https://gist.github.com/aaronmarruk/6606770), 
        // append the dropdown
        $('.module-dropdown').append(dd);

        //alert("two");

        // Grab the hidden block section block, get the HTML from inside
        var blockSection = $(".topics > #section-0 > .content > ul.section").html();

        //alert("three");

        // Grab the edit menu button
        var blockSectionEdit = $('<a href="#" class="blockSectionEdit">Add a menu item</a>');

        //alert("four");

        // Add the HTML from block section to the dropdown
        //$('.module-dropdown').find(".dropdown-menu")
          //                   .html(blockSection); 

          $('.module-dropdown').on('click', '.blockSectionEdit', function() {
            $( "#section-0 .section-modchooser-text" ).trigger( "click" );
          });

          //alert("five");

        // Add the dropdown                
        $('.module-dropdown').find(".dropdown-menu")
                             .append(blockSection);

                             //alert("six");

        // If is editing, add the edit button    
        if ( $( "body" ).hasClass( "editing" ) ) {          
          $('.module-dropdown').find(".dropdown-menu")
                               .append(blockSectionEdit);
        }

        //alert("seven");

    
  
// ---------------------------------------------------------------------------
// END "About this module" Dropdown ------------------------------------------
// ---------------------------------------------------------------------------


// -------------------------------------------------------------------------
// Linking from module list page to single section -------------------------
// -------------------------------------------------------------------------
  $('.path-course.pagelayout-coursecategory #region-main .courseboxes>ul>li').each(function(){
      var btnViewModule = $('<a href=\"\" class=\"btn\"></a>');
      btnViewModule.html('View this module <i class=\"icon-external-link icon-right\"></i>');
      var btnViewModuleHref = $(this).find('.name')
                                     .find('a')
                                     .attr('href')+"&section=1";

      $(this).find('.name')
             .find('a')
             .attr('href',  btnViewModuleHref);

   btnViewModule.attr('href', btnViewModuleHref);

    $(this).append(btnViewModule);
  });
// -------------------------------------------------------------------------
// END Linking from module list page to single section ---------------------
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
// START: Breadcrumb Hackery ------------------------------------------------------
// -------------------------------------------------------------------------
  // Breadcrumb
  var breadcrumb = $('.breadcrumb');

  // Second to last breadcrumb item. i.e. The current page's parent.  
  var pageParent = breadcrumb.find('li')
                                       .last()
                                       .prev()
                                       .find('a');

  // check if the parent was found and assign href if it was
  if (pageParent.length){
    pageParent = pageParent.attr('href');
  } else {
    // grab the grand parent instead
    pageParent = breadcrumb.find('li')
                                       .last()
                                       .prev()
                                       .prev()
                                       .find('a')
                                       .attr('href');
  }                                
// -------------------------------------------------------------------------
// END: Breadcrumb Hackery -------------------------------------------------
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
// START: "Back to module button" ------------------------------------------
// -------------------------------------------------------------------------    
  $('.pagelayout-incourse').find('.back-to-mod')
                           .attr('href', pageParent);
// -------------------------------------------------------------------------
// END: "Back to module button" --------------------------------------------
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
// START: Append links with "&section=1" -----------------------------------
// -------------------------------------------------------------------------    
  $('.unlist').find('.name > a').each(function(){
    var url = $(this).attr('href') + '&section=1';
    $(this).attr('href', url);
  });
// -------------------------------------------------------------------------
// END: Append links with "&section=1" -------------------------------------
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
// START: Turn It In Tooltips ----------------------------------------------
// -------------------------------------------------------------------------    
$('#id_dtstart_day').tooltip({title: 'Day', animation: 'true'});
$('#id_dtstart_month').tooltip({title: 'Month', animation: 'true'});
$('#id_dtstart_year').tooltip({title: 'Year', animation: 'true'});
$('#id_dtstart_hour').tooltip({title: 'Hour', animation: 'true'});
$('#id_dtstart_minute').tooltip({title: 'Minute', animation: 'true'});
$('#id_dtdue_day').tooltip({title: 'Day', animation: 'true'});
$('#id_dtdue_month').tooltip({title: 'Month', animation: 'true'});
$('#id_dtdue_year').tooltip({title: 'Year', animation: 'true'});
$('#id_dtdue_hour').tooltip({title: 'Hour', animation: 'true'});
$('#id_dtdue_minute').tooltip({title: 'Minute', animation: 'true'});
$('#id_dtpost_day').tooltip({title: 'Day', animation: 'true'});
$('#id_dtpost_month').tooltip({title: 'Month', animation: 'true'});
$('#id_dtpost_year').tooltip({title: 'Year', animation: 'true'});
$('#id_dtpost_hour').tooltip({title: 'Hour', animation: 'true'});
$('#id_dtpost_minute').tooltip({title: 'Minute', animation: 'true'});
// -------------------------------------------------------------------------
// END: Turn It In Tooltips ------------------------------------------------
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
// START: Off canvas memu --------------------------------------------------
// -------------------------------------------------------------------------  
   $('#responsive-menu-button').sidr({
      name: 'sidr-main',
      speed: 200,
      body: '#page-footer, #responsive-menu-button',
      source: '.block_course_menu, #user-context-menu'
    });   

   // Stop the link-click jumping the content to top
   $('#responsive-menu-button').click(function(event){
    $(".icon-reorder").toggle();
    $(".icon-remove-circle").toggle();
    $(".brand").fadeToggle();
    event.preventDefault();
  });
// -------------------------------------------------------------------------
// END: Off canvas menu ----------------------------------------------------
// -------------------------------------------------------------------------


  	// Grab the edit menu button
  	//var blockSectionEdit = $(".block_section").find(".btn-block");

  	// Module page, single section
  	var singleSection = $('.pagelayout-course .single-section');

  	

  	//var breadcrumbLast = breadcrumb.find('li').last();

  	//alert(blockSection);

  //	$(".module-documents").append(blockSection);
NProgress.set(0.4);
  	//breadcrumbLast.addClass("breadcrumb-current-location");

  	/*if (blockSection != null) {

  	// if on course single view
  	/*if ( singleSection.length != 0) {

	  	// Find the second to last item in the breadcrumb
	  	// and find the .divider within.
	  	// Add hacky-hider
	  	breadcrumbSecondLast.find(".divider")
	  	                	.hide();
  		
  		// Find the third to last item in the breadcrumb
	  	// and find the .divider within.
	  	// Add hacky-hider
	  	breadcrumbSecondLast.prev()
	  	                	.find(".divider")
	  	                	.hide();

	  	                

	  	// Find the second to last item in the breadcrumb
	  	// and find the .divider within.
	  	// Add Breadcrumb-current-location class
	  	breadcrumbSecondLast.addClass("breadcrumb-current-location").append(dd);

	  	// Find and hide the last item in the breadcrumb               
	  	breadcrumb.find('li')      
	  	                .last()
	  	                .hide();

	  	

	    

	    // Add the drop-down icon to the breadcrumb
	    breadcrumbSecondLast.find("a")
	  	        			.addClass("dropdown-toggle");
	  	            

	  	         
	  	            
	  	breadcrumbSecondLast.find("a")
	  						.append(chevron)
	  	            		.attr("data-toggle", "dropdown");     

  	    }*/

  	// if on course list view
  	/*else if ( singleSection.length == 0 && $('.pagelayout-course').length == 1 ) {

  		// Find the last item in the breadcrumb
	  	// and find the .divider within.
	  	// Hide
	  	breadcrumb.find('li')      
	  	                .last()
	  	                .prev()
	  	                .find(".divider")
	  	                .hide();


	  	// Find the last item in the breadcrumb
	  	// Add Breadcrumb-current-location class
	  	breadcrumb.find('li')      
	  	                .last()
	  	                .addClass("breadcrumb-current-location").append(dd);


	  	                $('.breadcrumb').find('li')
	  					.last()
	 
	  	            	.find("a").append(chevron)
	  	            	.attr("data-toggle", "dropdown"); 

  	} else {
  		breadcrumb.find('li')      
	  	                .last()
	  	                .addClass("breadcrumb-current-location");
  	}

}*/
// End if blockSection != null

//  if (blockSection == null) {

//	breadcrumb.find('li')      
	  	  //              .last()
	  	//                .addClass("breadcrumb-current-location");

	  //	        $('.breadcrumb a').find('li>a').bind('click',function(e){
  //    e.preventDefault();
         
//});   
	  	               
//}




if($('.section-navigation.header.headingblock>a.mdl-right').length != 0){
var showAll = $('.section-navigation.header.headingblock>a.mdl-right');
showAll.text('View all sections');
} else showAll = "";


if (showAll.length != 0) {

  $('.block_course_menu .block_tree').append(showAll);
  $('.section_link.active_tree_node').prepend(" <i class=\"icon-check-sign icon-right\"></i>")
} else if (showAll.length == 0) {

  var bodyID = document.body.id;
  if(bodyID != "page-mod-page-view"){
  $('.block_course_menu .block_tree').append("<a href=\"#\" class=\"show-all-active\">View all sections <i class=\"icon-check-sign icon-right\"></i><a/>");
}else{}
}



//$("#dr-menu>.menu").html(blockSection);

// Get dropdown menu links
var dropLink = $('.dropdown-menu').find('a');

NProgress.set(0.7);

	// For each dropLink
  $( dropLink ).each(function() {
  // If dropdown menu link is div, remove the div
if ( $(this).parent().is("div")  ) {
    $(this).unwrap();
  }
});

  // Loop through each of the alerts
  $(".content").find(".alert").each(function(){

  	
  	// Its its a warning, add the warning icon
  	if($(this).hasClass("alert-error")){
  		var icon = "<i class=\"icon-exclamation-sign\"></i> ";
  		$(this).prepend(icon);
  	}

  	// Its its a success, add the calendar icon
  	if($(this).hasClass("alert-success")){
  		var icon = "<i class=\"icon-calendar\"></i> ";
  		$(this).prepend(icon);
  	}

  	// Its its a info, add the speech bubble icon
  	if($(this).hasClass("alert-info")){
  		var icon = "<i class=\"icon-comment\"></i> ";
  		$(this).prepend(icon);
  	}

  });

	$(".content").find("blockquote").each(function(){
		var icon = "<i class=\"icon-quote-left\"></i> ";
	  	$(this).prepend(icon);
	});

$(".section-navigation.mdl-bottom").find(".mdl-left").prepend("<i class=\"icon-chevron-left\"></i> ");

$(".section-navigation.mdl-bottom").find(".mdl-right").append(" <i class=\"icon-chevron-right\"></i>");

NProgress.set(0.9);



  	// On DOM Ready, show the breadcrumb
  	//$(".breadcrumb").show();

  	// On DOM Ready, show the breadcrumb
  	//$("body").show();


//$.get('http://localhost:8888/moodle24/moodle', function(data) {
//$('#page-content').html(data);
 // console.log('Load was performed.');
//});

//$('#page-content').load("http://localhost:8888/moodle24/moodle #region-main", function() {
  // stuff to do when content is ready
 // alert('it loaded');
// });

//var parCat = breadcrumb.find('li').last().prev().find('a').attr('href');
//alert(parCat);
//$('#other-mods').attr('href',parCat);

//alert(parCat);

});

