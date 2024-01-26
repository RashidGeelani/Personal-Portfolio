//toggle icon navbar


//scroll sections
window.onscroll = ()=> {
  //sticky header
  let head = document.querySelector('header');
  head.classList.toggle('sticky', window.scrollY > 100);
}