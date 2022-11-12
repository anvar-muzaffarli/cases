
const input = document.getElementsByClassName('form-control')[1]
const small = document.querySelector('small')
const monkeyIcon = document.querySelector('.monkeyiswathcing')
input.addEventListener('input', function(){
    monkeyIcon.innerText = '🙈'

    if(input.value.trim().length===0) {
        monkeyIcon.innerText = '🐵'
    }
    if(input.value.trim().length < 8) {
        input.style.border="1px solid red"
    }
    else {
        input.style.border="1px solid green"

    }


})

input.addEventListener('focus', function() {
    input.style.transform="rotate(360deg)"
    input.style.transition=".8s ease"
})

input.addEventListener('blur', function() {
    input.style.transform = "scale(0.5)"
})


const myPosts = document.getElementById('posts')

function getAllPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts"


    try {
        const data = 
       fetch(url)
        .then(response=>response.json())
        .then(melumatlar => sagTerefdeYerleshdir(melumatlar))

    }
    catch(e) {
        console.log(e)
    }
}

function sagTerefdeYerleshdir(data){
    data.forEach(melumat => {
        myPosts.innerHTML += `<div class="alert alert-info"> ${melumat.body} </div>`
    });
}


window.onload = getAllPosts

























// class LoginScreen {
//     constructor() {
//         this.email = document.getElementById('exampleFormControlInput1')
//         this.password = document.getElementById('exampleFormControlInput2')
//         this.form = document.getElementById('login-form')
//         this.form.addEventListener('submit', this.signin.bind(this))
//     }

//     signin(e) {
//         e.preventDefault()

//         const storedData = JSON.parse(localStorage.getItem('allPersons'))
//         console.log(storedData)

//         this.storedEmail = storedData[0].email
//         console.log(this.storedEmail)

//         this.storedPassword = storedData[0].password
//         console.log(this.storedPassword)

//         if(this.email.value !== this.storedEmail && this.password.value !== this.storedPassword) {
//             this.createNotification('Melumatlar duzgun daxil edilmeyib', false)
//             return
//         } 

//         if(this.email.value === this.storedEmail && this.password.value == this.storedPassword) {
//             this.createNotification('Melumatlar duzgundur', true)
//             window.location = '/index.html';


//         }
       
        
//     }

//     createNotification(message,status) {
//         const infoDiv = document.querySelector('.alert')
//         infoDiv.innerText = message

//         infoDiv.classList.add(status ? 'alert-success' : 'alert-danger')

//         setTimeout(function() {
//             infoDiv.classList.add('info')
//         },3000)
//     }
// }

// class RegisterScreen {
//     constructor() {
//         this.firstname = document.getElementById('exampleFormControlInput3')
//         this.lastname = document.getElementById('exampleFormControlInput4')
//         this.email = document.getElementById('exampleFormControlInput5')
//         this.password = document.getElementById('exampleFormControlInput6')
//         this.confirmPassword = document.getElementById('exampleFormControlInput7')
//         this.form = document.getElementById('register-form')
//         this.form.addEventListener('submit', this.signup.bind(this))

//         this.db = new DB()
//     }

//     createNotification(message,status) {
//         const infoDiv = document.querySelector('.alert')
//         infoDiv.innerText = message

//         infoDiv.classList.add(status ? 'alert-success' : 'alert-danger')

//         setTimeout(function(e) {
//             e.preventDefault()
//             infoDiv.classList.add('info')
//         },3000)
//     }

//     signup(e) {
//         e.preventDefault()

//         const user = new Register(this.firstname.value, this.lastname.value, this.email.value,this.password.value,this.confirmPassword.value)
//         console.log(user)

//         const result = Util.checkFieldsEmpty(user.firstname, user.lastname, user.email,user.password,user.confirmPassword)
//         const checkEmailValidty = Util.checkEmailValidty(this.email.value)

//         console.log(`Elektron poct ucun netice : ${checkEmailValidty}`)


//         if(result) {
//             if(!checkEmailValidty) {
//                 this.createNotification('Elektron poct duzgun deyil', false)
//                 return
//             }

//             if(this.db.isUserExists) {
//                 this.createNotification('Bu elektron poctla bazada istifadeci movcuddur', false)
                
//                 return 
                
//             }

//             else {
//                 const result = this.db.registerPerson(user)

//                 if(result) {
//                     this.createNotification('Qeydiyyat ugurla tamamlandi', true)
//                     window.location = '/index.html';

//                 }

//                 else {
//                     this.createNotification('Bu mail istifadedir', false)
//                 }
//             }
//         }

//         else {
//             this.createNotification('Bos saheleri doldurun', false)
//         }

//     }


//     cleanAllFields() {
//         this.firstname.value = '';
//         this.lastname.value = '';
//         this.email.value = '';
//         this.password.value = '';
//         this.confirmPassword.value = '';
//     }


  

    
// }


// class Register {
//     constructor(firstname, lastname, email,password,confirmPassword) {
//         this.firstname = firstname
//         this.lastname = lastname
//         this.email = email
//         this.password = password
//         this.confirmPassword = confirmPassword
//     }
// }

// class Util {
//     static checkFieldsEmpty(...fields) {
//         let result = true
//         fields.forEach(field=> {
//             if(field.trim().length===0){
//                 result=false
//                 return false
//             }
//         })

//         return result
//     }

//     static checkEmailValidty(email) {
//         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         return re.test(String(email).toLowerCase())
//     }
// }


// class DB {
//     constructor() {
//         this.allPersons = []

//     }

//     isUserExists(email) {
//         const result = this.allPersons.find(person => {
//             return person.email === email
//         })

//         return result
//     }

//     registerPerson(person) {
//         if(!this.isUserExists(person.email)) {
//             this.allPersons.push(person)
//             localStorage.setItem('allPersons', JSON.stringify(this.allPersons))
//             return true
//         }
//         else {
//             return false
//         }
//     }

// }

// document.addEventListener('DOMContentLoaded', function(){
//     const loginscreen = new LoginScreen();
   
// })

// document.addEventListener('DOMContentLoaded', function(){
//     const registerScreen = new RegisterScreen();
   
// })