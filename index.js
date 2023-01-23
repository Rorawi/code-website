const menuBtn = document.querySelector(".menu-btn")
const navigationItems = document.querySelector(".navigation-items")
const navigation = document.querySelector(".navigation")

window.addEventListener('scroll', () => {
    const header = document.querySelector(".header")

    if (window.scrollY > 80) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})


menuBtn.addEventListener("click", () => {
    navigationItems.classList.toggle("active")
    navigation.classList.toggle("active")
    menuBtn.classList.toggle("active")

    const navLink = document.querySelectorAll(".nav-item")
    console.log(navLink);

    navLink.forEach(link => {
        link.addEventListener("click", () => {
            // link.style.color = '#F0DB4F'
            navigationItems.classList.remove("active")
            navigation.classList.remove("active")
            menuBtn.classList.remove("active")
        })
    })
})

