

let userFirstName = 'David'
let userLastName = 'Katunin'
let userDiscordId = 'Dova_k#4444'
let userSubscriptionStatus = 'VIP'

let users = [{
    username: 'David',
    email: 'davidkatunin@gmail.com',
    subscriptionStatus: 'VIP',
    password: 'david123',
    discordId: 'Dova_k#4444',
    lessonsCompleted: [0, 1]
}, {
    username: 'Mitro',
    email: 'Mitrokatunin@gmail.com',
    password: 'mitro123',
    subscriptionStatus: 'VIP',
    discordId: 'Mitro#4444',
    lessonsCompleted: [0, 1, 2, 3]
}]

function login(email, password) {
    for (let i = 0; i < users.length; i++){
        if (users[i].email === email) {
            console.log(users[i])
            if (users[i].password === password){
                console.log('log the user in - the details are correct')
            } else {
                console.log('password is incorrect - try again')
            }
            return
        }
    }
    console.log('could not find an email that matches')
}



function register(username, email, password, subscriptionStatus, discordId, lessonsCompleted) {
    user = {
        username: username,
        email:email,
        password:password,
        subscriptionStatus:subscriptionStatus,
        discordId:discordId,
        lessonsCompleted:lessonsCompleted
    }

    users.push(user)
}

// register('Zen', 'Zen@gmail.com', 'Zen123', 'VIP', 'Zen#4444', [0,1,2])










// DOM

// First way of accessing an element
//console.log(document.querySelector('#title')) // <----------- BEST

// SECOND WAY
//console.log(document.getElementById('title'))

// HOW TO CHANGE THE HTML OF ANY ELEMENT
//document.querySelector(".title").innerHTML += 'Frontend SImplified'

//HOW TO CHANGE THE CSS
//document.querySelector(".title").style.color = red


//function changeTitleToRed() {
//    if (document.querySelector('.title').style.color == 'red') {
//        document.querySelector('.title').style.color = 'black'
//    } else {
//    document.querySelector('.title').style.color = 'red'
//    }
//}

function toggleDarkMode() {
    document.querySelector('body').classList.toggle('dark-theme')
}