// $(document).ready(function(){


//     function equateWidth(){
//         console.log($("#portfolio a > img").width());
//         $('#portfolio a').width(12px);
//         console.log($('#portfolio a').width());
//     }
//     equateWidth();
//     $(window).resize(equateWidth);


// });
$(document).ready(function(){
    
        //giving smooth scroll effect for navbar and landing button
        $('.nav').localScroll();
        $('.mobilenav').localScroll();
        $('.background-fixer').height($('#contact').height());
        //Navbar scroll effect
        $(window).scroll(function() {//Gets fired when the user scrolls
            if($(document).scrollTop() > 50) {
                /* ScrollTop()>50 becomes true once an user scrolls to a certain extent.The navbar-fade class gives a 
                opaque black background and decreases the size of navbar. So we have to add the navbar-fade class
                and remove navbar-custom class which gives a transaparent navbar*/
                $('nav').addClass('navbar-fade');//adding navbar-fade class to nav
                $('.navbar-brand').addClass('brand-shrink');
                $('nav').removeClass('navbar-custom');//removing navbar-custom class to nav
                $('.nav').removeClass('navbar-nav-custom');
            }
            else {
                /*When the user comes to the top of the page then we add the transparency to navbar. Also the size of
                 the branding in the navbar. The navbar-custom has all those CSS properties so we just have to add
                 it. Also, the navbar-fade class has to be removed just in case to prevent overriding of properties.*/
                $('nav').removeClass('navbar-fade');//removing navbar-fade class to nav
                $('.navbar-brand').removeClass('brand-shrink');
                $('nav').addClass('navbar-custom');//adding navbar-custom class to nav
            }
        });

        


    });
    function toggleMenu(){
        $('.mobile-nav').toggleClass('toggle');
    }
    function navclose(){
        $('.mobile-nav').toggleClass('toggle');
    }