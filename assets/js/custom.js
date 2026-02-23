
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("sidebarOverlay");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", function () {

    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");

});


/* ===============================
   TAB SYSTEM
=============================== */

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // remove active from all tabs
        tabs.forEach((t) => t.classList.remove("active"));

        // remove active from all panels
        panels.forEach((panel) => panel.classList.remove("active"));

        // add active to clicked tab
        tab.classList.add("active");

        // get target panel id
        const target = tab.getAttribute("data-tab");

        // show target panel
        document.getElementById(target).classList.add("active");

    });

});
