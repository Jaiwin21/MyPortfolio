let mouseCursor = document.querySelector(".cursor");
let containerli = document.querySelectorAll(".container li");

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";

}

containerli.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-alter');
    

    });

    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-alter');
    
    });
});