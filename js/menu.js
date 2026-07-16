/* ==========================================
   UKPay Website

   Mobile Menu JS

   Version: 1.0

   ========================================== */



"use strict";





document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        initMobileMenu();



    }
);







/*
==============================================
    Mobile Menu Init
==============================================
*/


function initMobileMenu(){



    const toggle =

        document.querySelector(
            ".menu-toggle"
        );



    const nav =

        document.querySelector(
            ".main-nav"
        );



    if(
        !toggle ||
        !nav
    ){

        return;

    }





    /*
    Open / Close
    */


    toggle.addEventListener(
        "click",
        ()=>{


            toggle.classList.toggle(
                "active"
            );



            nav.classList.toggle(
                "open"
            );



            document.body.classList.toggle(
                "menu-open"
            );



        }
    );









    /*
    Click Link Close

    */


    const links =

        nav.querySelectorAll(
            "a"
        );



    links.forEach(
        link=>{


            link.addEventListener(
                "click",
                ()=>{


                    closeMenu();



                }
            );



        }
    );









    /*
    ESC Close

    */


    document.addEventListener(
        "keydown",
        e=>{


            if(
                e.key === "Escape"
            ){


                closeMenu();



            }



        }
    );








    /*
    Resize Reset

    */

    window.addEventListener(
        "resize",
        ()=>{


            if(
                window.innerWidth > 1199
            ){


                closeMenu();



            }



        }
    );








    function closeMenu(){



        toggle.classList.remove(
            "active"
        );



        nav.classList.remove(
            "open"
        );



        document.body.classList.remove(
            "menu-open"
        );



    }





}