/* ---------------- SHOW MENU ------------ */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* ---------------- REMOVE MOBILE MENU ---------------------- */

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    // When we click on each nav_link, we remove the show-menu class

    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* -------------------- SCROLL SECTIONS ACTIVE LINKS ----------------------*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*------------------- SCROLL ANIMATION ---------------*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home_data, .about_img, .skills_subtitle, .skills_text',{}); 
sr.reveal('.home_img, .about_subtitle, .about_text, .skills_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 
sr.reveal('.skills_data, .work_img, .contact_input',{interval: 200}); 

/*---------- MAIL TO -------- */ 
