function darkMode() {
    let  element = document.body;
    element.classList.toggle("dark-mode");
}


let theme = localStorage.getItem('dark-mode');
const changeThemeToDark = () => {
    document.documentElement.setAttribute("dark-mode")
    localStorage.setItem("dark-mode")
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("light-background", "light-color", "light-color-2", "light-color-3")
    localStorage.setItem("light-background", "light-color", "light-color-2", "light-color-3")
}