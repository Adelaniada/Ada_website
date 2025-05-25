

//Контекстное меню
document.getElementById('id_bmenu').addEventListener('click', func_style)
let fix = 0
function func_style(){
    if (fix == 0) {
    document.getElementById('id_listsback').style.display = 'none'
    return fix = 1
    }
    else if (fix == 1) {
    document.getElementById('id_listsback').style.display = 'block'
    return fix = 0
    }
}

//Дата и время
function update(){
    let date = new Date()
    let year = date.getFullYear();
    let arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = arrMonth[date.getMonth()]
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
        if(hours < 10) hours = '0' + hours
        if(minutes < 10) minutes = '0' + minutes
        if(seconds < 10) seconds = '0' + seconds
    clock.textContent = `${year}, ${month} ${day}, ${hours}:${minutes}:${seconds}`; // разобраться почему не работает
    }
    setInterval(update, 1000)
//Рандомайзер
function rnd() {
    document.getElementById('random').innerHTML  = Math.floor(Math.random() * 100)
     }
    document.getElementById('rand_btn').addEventListener('click', rnd)
// setInterval(rnd)

// Калькулятор
