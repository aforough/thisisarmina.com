//sticking to bottom

// $('[id$=-section]').waypoint({
//   handler: function(direction) {
//     var relatedLinkId = '#' + this.element.id.replace('section', 'link');
//     if (direction == 'down') {
//       var elemHeight = $(this.element).position().top;
//       $(relatedLinkId).addClass('sticky').css('top', elemHeight);
//     } else {
//       $(relatedLinkId).removeClass('sticky').removeClass('top').css('top', '');
//     }
//   },
//   offset: function() {
//     var relatedLinkId = '#' + this.element.id.replace('section', 'link');
//     var t = ($(relatedLinkId).position().top)- 70;
//     return t;
//   }
// });



// $(document).ready(function(){
//     $('[id$=-section]').waypoint(function(direction) {
//       var sectionId = $(this).attr('id');
//       $('a').each(function(){
//         var linkClass = $(this).attr('class');
//         if  ( linkClass == sectionId )
//             {
//               // $('a').removeClass('active');
//                 $(this).addClass('active');
//             }
//       });
//   },{offset: '0'}); 
// }); 



// $(document).ready(function(){
//         $('[id$=-section]').waypoint(function(direction) {
//           var relatedLinkId = '#' + this.element.id.replace('section', 'link');
//           $('a').each(function(){
//             // var elemHeight = $('[id$=-section]').position().top;
//             $('a').removeClass('active');
//             $(relatedLinkId).addClass('active');
//                   });
//           },{offset: '0'});   
// }); 




// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//         || location.hostname == this.hostname) {

//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top
//             }, 500);
//             return false;
//         }
//     }
// });

// // sticking to top

// $('[id$=-section]').waypoint({
//   handler: function(dir) {
//     var relatedLinkId = '#' + this.element.id.replace('section', 'link');
//     if (dir == 'down') {
//       $(relatedLinkId).removeClass('sticky').addClass('top').css('top', '');
//     } else {
//       var elemHeight = $(this.element).position().top;
//       $(relatedLinkId).addClass('sticky').css('top', elemHeight);
//     }
//   },
//   offset: function() {
//     var relatedLinkId = '#' + this.element.id.replace('section', 'link');
//     var o = ($(relatedLinkId).index() + 1) ;
//     return o;
//   }
// });

var indicatorBar = $('#section_indicators').offset();


var section1 = $('#project_section-1').offset();   
var section2 = $('#project_section-2').offset();
var section3 = $('#project_section-3').offset();
var section4 = $('#project_section-4').offset();
var section5 = $('#project_section-5').offset();
// var section2 = $('#project_section-6').offset();
// var section3 = $('#app-creation').offset();

$('#section_indicator-1').css("background-color", "#76FF03");

$(window).scroll(function(){  
        if($(window).scrollTop() > indicatorBar.top){
            $('#section_indicators').css({"position" : "fixed" , "top": "0"});
            $('.project_text').css('margin-top', '7.3em');
        } else {
            $('#section_indicators').css({"position" : "static"});
            $('.project_text').css('margin-top', '2em');
        } 


        if($(window).scrollTop() > section1.top){
            $('[id*=section_indicator]').css("background-color", "#fff");
            $('#section_indicator-1').css("background-color", "#76FF03");
        } 

        if($(window).scrollTop() > section2.top){
            $('[id*=section_indicator]').css("background-color", "#fff");
            $('#section_indicator-2').css("background-color", "#76FF03");
        } 

        if($(window).scrollTop() > section3.top){
            $('[id*=section_indicator]').css("background-color", "#fff");
            $('#section_indicator-3').css("background-color", "#76FF03");
        }

        if($(window).scrollTop() > section4.top){
            $('[id*=section_indicator]').css("background-color", "#fff");
            $('#section_indicator-4').css("background-color", "#76FF03");
        }

        if($(window).scrollTop() > section5.top){
            $('[id*=section_indicator]').css("background-color", "#fff");
            $('#section_indicator-5').css("background-color", "#76FF03");
        }

        // if($(window).scrollTop() > section6.top){
        //     $('[id*=section_indicator]').css("background-color", "#fff");
        //     $('#section_indicator-6').css("background-color", "#76FF03");
        // }

});


