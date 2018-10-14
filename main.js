document.addEventListener("DOMContentLoaded",function(){
    var dots = document.querySelectorAll(".dot");
    var slides = document.querySelectorAll('.slide');
    console.log(dots);
    for(x of dots){
        console.log(x);
        x.addEventListener('click', function(){
            let current =this;
            let number = 0;
            for(x of dots){
                x.classList.remove('active');
            }
            this.classList.add('active');
            for(x of slides){
                x.classList.remove('active')
            }
            while(current =current.previousElementSibling){
                number++;
            }
            slides[number].classList.add('active');
        });
    }
    function toNextSlide(){
        let currenSlide = document.querySelector('.slide.active');
        let currenDot = document.querySelector('.dot.active');
        console.log(currenSlide);
        currenSlide.classList.remove('active');
        currenDot.classList.remove('active');
        if(currenSlide.nextElementSibling != null){
            currenSlide.nextElementSibling.classList.add('active');
            currenDot.nextElementSibling.classList.add('active');
        }else{
            slides[0].classList.add('active');
            dots[0].classList.add('active');
        }
    }
    setInterval(toNextSlide, 4000);

}, false);