import { CountUp } from './countUp.min.js';

window.onload = function() {
  var countUp = new CountUp('nutritions', 450, { onCompleteCallback: () => {
    const c  = new CountUp('nutritions', 800000, {duration: 1000000, startVal: 450000,});
    c.start();
  } , enableScrollSpy: true});
  countUp.start();

  var rdi = new CountUp('rdi', 45, { onCompleteCallback: () => {
    const c  = new CountUp('rdi', 800000, {duration: 10000000, startVal: 45,});
    c.start();
  } , enableScrollSpy: true});
  rdi.start();


  var microNutritions = new CountUp('micronutrients', 100, { onCompleteCallback: () => {
    const c  = new CountUp('micronutrients', 800000, {duration: 10000000, startVal: 100,});
    c.start();
  }, enableScrollSpy: true});
  microNutritions.start();
}


const burger = document.querySelector('#burger');
const navLinks = document.querySelector('.topbar__menu');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})


// AOS.init(); 
