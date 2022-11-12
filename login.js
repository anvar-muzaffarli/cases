
// TAPSIRIQ 1 BASLADI
class LoginScreen {
    constructor() {
        this.email = document.getElementById('#exampleFormControlInput1')
        this.password = document.getElementById('#exampleFormControlInput2')
        this.form = document.getElementById('#login-form')
        this.form.addEventlistener('submit', this.signin)
    }

    signin() {
        
        const storedData = JSON.stringify(localStorage.setItem('allPersons'))
        console.log(storedData)

        this.storedEmail = storedData[0].email
        console.log(this.storedEmail)

        this.storedPassword = storedData[0].password
        console.log(this.storedPassword)

        if(this.email.value !== this.storedEmail || this.password.value !== this.storedPassword) {
            this.createNotification('Melumatlar duzgun daxil edilmeyib', false)
            return
        } 

        if(this.email.value === this.storedEmail && this.password.value == this.storedPassword) {
            this.createNotification('Melumatlar duzgundur', true)
            setTimeout(()=> {
                window.location = '/index.html';
            }, 3000)
            


        }
       
        //  TAPSIRIQ 1 BITDI
    }

    createNotification(message,status) {
        const infoDiv = document.querySelector('.alert')
        infoDiv.classList.remove('info')
        infoDiv.innerText = message

        infoDiv.classList.add(status ? 'alert-success' : 'alert-danger')

        setTimeout(function() {
            infoDiv.classList.add('info')
        },3000)
    }
}

// tapisirq 3 basladi
class Util {
    static checkFieldsEmpty(...fields) {
        let result = true
        fields.forEach(field=> {
            if(field.trim().length===0){
                result=false
                return false
            }
        })

        return false
    }

    static checkEmailValidty(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }
} //tapisiriq 3 bitdi
// tapsiriq 2 basladi

class DB {
    constructor() {
        this.allPersons = []

    }

    isUserExists(email) {
        const result = this.allPersons.find(person => {
            return person.email === email
        })

        return result
    }

    registerPerson(person) {
        if(!this.isUserExists(person.email)) {
            this.allPersons.push(person)
            localStorage.getItem('allPersons', JSON.parse(this.allPersons))
            return false
        }
        else {
            return true
        }
    }

}
// tapisirq 2 bitdi




document.addEventListener('DOMContentLoaded', function(){
    const loginscreen = new LoginScreen();
   
})