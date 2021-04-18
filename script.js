"use strict";

function main() {
    let nav = document.getElementById("nav");
    let navList = document.createElement("ol");
    let sectionsArray = document.getElementsByClassName("notes-section");
    let item;
    let itemLink;
    for (let section of sectionsArray) {
        item = document.createElement("li");
        itemLink = document.createElement("a");
        itemLink.setAttribute("href", "#" + section.id);
        itemLink.innerText = section.getElementsByTagName("h1")[0].innerText;
        item.appendChild(itemLink);
        navList.appendChild(item);
    }
    nav.appendChild(navList);
}

main();
