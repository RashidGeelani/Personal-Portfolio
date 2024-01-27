//toggle icon navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(' header nav a');

//scroll sections
window.onscroll = ()=> {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset+height){
      // active navbar links
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  
  })
  //sticky header
  console.log('Scrolling...');
  let head = document.querySelector('header');
  head.classList.toggle('sticky', window.scrollY > 100);
}