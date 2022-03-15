
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".toggle_btn");
const search = document.querySelector(".search");
const content = document.querySelector(".content");

btn.addEventListener("click", (e)=>{

    if (window.matchMedia("(min-width: 1024px)").matches) {
        sidebar.classList.toggle("sidebar-closed");
        btn.classList.toggle("toggle_btn_closed");
        search.classList.toggle("search-hide");
        content.classList.toggle("content-extended");
    } else {
        sidebar.classList.toggle("sidebar-opened");
        btn.classList.toggle("toggle_btn_opened");
        search.classList.toggle("search-show");
    }

});