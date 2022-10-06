document.addEventListener("DOMContentLoaded", function() {

    const url = window.location.hash;

    if (window.location.href.indexOf(url) > -1) {

        const path = document.getElementById(url.substring(url.indexOf('#')+1));

        const mobileModal = new bootstrap.Modal(path);
        mobileModal.show();

    }
});

function btnclick() {

    const btn = document.getElementById("idbtn");
    const btnAttribute = btn.getAttribute("data-bs-target");

    window.location.hash = btnAttribute;

    console.log(btnAttribute);
    
}
