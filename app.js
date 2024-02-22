const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')
const sections = document.querySelectorAll('section')
const navLink = document.querySelectorAll('header nav a')



window.onscroll = () =>{
    sections.ForEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLink.ForEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}