const slide = [
    {
        'id': 1,
        'smallImg': './images/mobile-image-hero-1.jpg',
        'bigImg': './images/desktop-image-hero-1.jpg',
        'h1': 'Discover innovative ways to decorate',
        'p': "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        'id': 2,
        'smallImg': './images/mobile-image-hero-2.jpg',
        'bigImg': './images/desktop-image-hero-2.jpg',
        'h1': 'We are available all across the globe',
        'p': "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        'id': 3,
        'smallImg': './images/mobile-image-hero-3.jpg',
        'bigImg': './images/desktop-image-hero-3.jpg',
        'h1': 'Manufactured with the best materials',
        'p': "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

const hamBtn = document.querySelector('.ham-btn');
const navbar = document.querySelector('#navbar-wrap');
const clsBtn = document.querySelector('.close-btn');
const slider = document.querySelector('.img-slider')
const body =  document.getElementsByTagName('body');
const leftAngle = document.querySelector('.left-angle');
const rightAngle = document.querySelector('.right-angle');
const headOne = document.querySelector('.slider-header');
const paragraph = document.querySelector('.slider-para');
const minImageSlide = document.querySelector('.slider__image')
const bigImageSlide = document.querySelector('.slider__picture source')


let counter = 1

rightAngle.addEventListener('click', ()=>{

    counter++
    if (counter > slide.length-1){
        counter =0;
    }
    bigImageSlide.srcset = slide[counter].bigImg;
    minImageSlide.src = slide[counter].smallImg;
    headOne.textContent = slide[counter].h1;
    paragraph.textContent = slide[counter].p;
    
    console.log(slide[counter].smallImg)
    console.log(counter)
    
})

leftAngle.addEventListener('click', ()=>{
    counter--
    if (counter<0){
        counter =slide.length-1;
    }

    bigImageSlide.srcset = slide[counter].bigImg;
    minImageSlide.src = slide[counter].smallImg;
    headOne.textContent = slide[counter].h1;
    paragraph.textContent = slide[counter].p;
    
    console.log(counter)
    
})

hamBtn.addEventListener('click',()=>{
    navbar.classList.add('fixed')
    body[0].style.position = 'fixed'
    slider.style.filter='brightness(50%)'
    
})


clsBtn.addEventListener('click',()=>{
    navbar.classList.remove('fixed')
    body[0].style.position = 'static'
    slider.style.filter='brightness(100%)'
})


