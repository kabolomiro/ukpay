/* ==========================================
   UKPay Website

   Main Application JS

   Version: 1.0

   ========================================== */



"use strict";





/*
==============================================
    DOM Ready
==============================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {


        initUKPay();



    }
);







/*
==============================================
    Main Init
==============================================
*/


function initUKPay(){



    initHeaderScroll();


    initBackTop();


    initLazyLoading();


}









/*
==============================================
    Header Scroll Effect

    滚动改变导航状态

==============================================
*/


function initHeaderScroll(){



    const header =

        document.querySelector(
            ".site-header"
        );



    if(!header){

        return;

    }





    const handleScroll = () => {



        if(
            window.scrollY > 50
        ){


            header.classList.add(
                "scrolled"
            );


        }else{


            header.classList.remove(
                "scrolled"
            );


        }


    };





    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive:true
        }
    );



}








/*
==============================================
    Back To Top

    返回顶部

==============================================
*/


function initBackTop(){



    const button =

        document.querySelector(
            ".back-top"
        );



    if(!button){

        return;

    }





    button.addEventListener(
        "click",
        ()=>{


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });



        }
    );






    window.addEventListener(
        "scroll",
        ()=>{


            if(
                window.scrollY > 500
            ){


                button.style.opacity="1";


                button.style.visibility="visible";



            }else{


                button.style.opacity="0";


                button.style.visibility="hidden";



            }



        },
        {
            passive:true
        }
    );



}









/*
==============================================
    Lazy Loading

    图片性能优化

==============================================
*/


function initLazyLoading(){



    const images =

        document.querySelectorAll(
            "img[data-src]"
        );



    if(
        images.length === 0
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


                            const img =

                                entry.target;



                            img.src =

                                img.dataset.src;



                            img.removeAttribute(
                                "data-src"
                            );



                            observer.unobserve(
                                img
                            );


                        }



                    }
                );


            }
        );





    images.forEach(
        img=>{


            observer.observe(
                img
            );


        }
    );



}






/*
==============================================
    Utility

    防抖函数

    后续搜索、表单使用

==============================================
*/


function debounce(
    fn,
    delay=300
){



    let timer;



    return function(...args){



        clearTimeout(
            timer
        );



        timer = setTimeout(
            ()=>{


                fn.apply(
                    this,
                    args
                );


            },
            delay
        );



    };



}






/*
==============================================
    Utility

    节流函数

==============================================
*/


function throttle(
    fn,
    limit=200
){



    let waiting=false;



    return function(...args){



        if(
            waiting
        ){

            return;

        }



        fn.apply(
            this,
            args
        );



        waiting=true;



        setTimeout(
            ()=>{


                waiting=false;


            },
            limit
        );



    };



}