const rightBtn = document.querySelector('.rightBtn');
const leftBtn = document.querySelector('.leftBtn');
const slide = document.querySelectorAll('.slide-img');
let cnt = 0;

slide.forEach(
    (slide,index) =>{
        slide.style.left = `${index*100}%`;
    }
)

const sliderimage = ()=>{
    slide.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${cnt*100}%)`;
        }
    )
}

leftBtn.addEventListener('click', ()=>{
    cnt--;
    checkLeft();
    sliderimage();
});

rightBtn.addEventListener('click', ()=>{
    cnt++;
    checkRight();
    sliderimage();
});

function checkLeft(){
    if(cnt < 0){
        cnt = slide.length-1;
    }
}

function checkRight(){
    if(cnt >= slide.length){
        cnt = 0;
    }
}