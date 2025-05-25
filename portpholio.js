//  alert('Hi')

//Дата и время
function update() {
    let date = new Date();
    let year = date.getFullYear();
    let arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = arrMonth[date.getMonth()]
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
        if(hours < 10) hours = '0' + hours
        if(minutes < 10) minutes = '0' + minutes
        if(seconds < 10) seconds = '0' + seconds
        clock.textContent = `${hours}:${minutes}:${seconds}`
        clock_day.textContent = `${month} ${day}, ${year}`;
  }
    setInterval(update, 1000)

// Меню проектов
document.getElementById("projects_menu").addEventListener('click', func_style) 
let fix = 0
function func_style(){
    if (fix == 0) {
    document.getElementById('projects_menu').style.left = '-115px'
    return fix = 1
    }
    else if (fix == 1) {
    document.getElementById('projects_menu').style.left = '0'
    return fix = 0
    }
}