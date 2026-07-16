/* ==========================================
   UKPay Website

   Animation JS

   Version: 1.0

   ========================================== */


"use strict";





document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        initScrollAnimation();


        initCounter();


        initNetworkAnimation();



    }
);









/*
==============================================
    Scroll Reveal

    滚动进入动画

==============================================
*/


function initScrollAnimation(){



    const elements =

        document.querySelectorAll(
            ".feature-card,"
            +".product-card,"
            +".technology-item,"
            +".solution-card,"
            +".story-card,"
            +".news-card,"
            +".step-item"
        );



    if(
        elements.length===0
    ){

        return;

    }





    elements.forEach(
        item=>{


            item.classList.add(
                "reveal"
            );



        }
    );







    const observer =

        new IntersectionObserver(
            entries=>{


                entries.forEach(
                    entry=>{


                        if(
                            entry.isIntersecting
                        ){



                            entry.target.classList.add(
                                "show"
                            );



                            observer.unobserve(
                                entry.target
                            );


                        }



                    }
                );



            },
            {

                threshold:.15

            }
        );







    elements.forEach(
        item=>{


            observer.observe(
                item
            );


        }
    );



}









/*
==============================================
    Number Counter

    首页数据增长

==============================================
*/


function initCounter(){



    const counters =

        document.querySelectorAll(
            "[data-counter]"
        );



    if(
        counters.length===0
    ){

        return;

    }







    const observer =

        new IntersectionObserver(
            entries=>{


                entries.forEach(
                    entry=>{


                        if(
                            entry.isIntersecting
                        ){



                            animateNumber(
                                entry.target
                            );



                            observer.unobserve(
                                entry.target
                            );



                        }



                    }
                );


            },
            {

                threshold:.7

            }
        );







    counters.forEach(
        item=>{


            observer.observe(
                item
            );


        }
    );



}







function animateNumber(
    element
){



    const target =

        Number(
            element.dataset.counter
        );



    let current = 0;



    const duration =

        1800;



    const step =

        target /
        (
            duration /
            16
        );







    function update(){



        current += step;



        if(
            current < target
        ){



            element.innerText =

                Math.floor(
                    current
                );



            requestAnimationFrame(
                update
            );



        }else{



            element.innerText =

                target;



        }



    }




    update();



}









/*
==============================================
    Payment Network Animation

    支付网络呼吸效果

==============================================
*/


function initNetworkAnimation(){



    const network =

        document.querySelector(
            ".payment-network"
        );



    if(
        !network
    ){

        return;

    }






    let direction = 1;



    setInterval(
        ()=>{


            network.style.transform =

                `translateY(${direction*8}px)`;



            direction *= -1;



        },
        1800
    );



}