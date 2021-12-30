// START NAVBAR
    //start burger to triangle and cross animation
const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click', () => {
    if(!navbuttons.classList.contains('triangles')){
        navbuttons.classList.add('triangles');
        setTimeout(navchanges,500);
    }else{
        navbuttons.className = "navbar-toggler navbuttons";
    }
});

function navchanges(){
    navbuttons.classList.add('changes');
}
    //end burger to triangle and cross animation

    // for navbar 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const getscrolly = window.scrollY;

    if (getscrolly >= 200) {
        navbar.classList.add('navmenus');
    } else {
        navbar.classList.remove('navmenus');
    }
});
// END NAVBAR