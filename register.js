class RegisterScreen {
    constructor() {
        this.firstname = document.getElementById('exampleFormControlInput3')
        this.lastname = document.getElementById('exampleFormControlInput4')
        this.email = document.getElementById('exampleFormControlInput5')
        this.password = document.getElementById('exampleFormControlInput6')
        this.confirmPassword = document.getElementById('exampleFormControlInput7')
        this.form = document.getElementById('register-form')
        this.form.addEventListener('submit', this.signup.bind(this))

        this.db = new DB()
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

    signup(e) {
        e.preventDefault()

        const user = new Register(this.firstname.value, this.lastname.value, this.email.value,this.password.value,this.confirmPassword.value)
        console.log(user)

        const result = Util.checkFieldsEmpty(user.firstname, user.lastname, user.email,user.password,user.confirmPassword)
        const checkEmailValidty = Util.checkEmailValidty(this.email.value)

        console.log(`Elektron poct ucun netice : ${checkEmailValidty}`)


        if(result) {
            if(!checkEmailValidty || this.db.isUserExists) {
                this.createNotification('Elektron poct duzgun deyil və ya bu elektron poçtla qeydiyyatdan keçilib', false)
                return
            }

            // if(this.db.isUserExists) {
            //     this.createNotification('Bu elektron poctla bazada istifadeci movcuddur', false)
                
            //     return
                
            // }

            else {
                const result = this.db.registerPerson(user)

                if(result) {
                    this.createNotification('Qeydiyyat ugurla tamamlandi', true)
                    window.location = '/index.html';

                }

                else {
                    this.createNotification('Bu mail istifadedir', false)
                }
            }
        }

           

        else {
            this.createNotification('Bos saheleri doldurun', false)
        }

    }


    cleanAllFields() {
        this.firstname.value = '';
        this.lastname.value = '';
        this.email.value = '';
        this.password.value = '';
        this.confirmPassword.value = '';
    }


  

    
}


class Register {
    constructor(firstname, lastname, email,password,confirmPassword) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.password = password
        this.confirmPassword = confirmPassword
    }
}

class Util {
    static checkFieldsEmpty(...fields) {
        let result = true
        fields.forEach(field=> {
            if(field.trim().length===0){
                result=false
                return false
            }
        })

        return result
    }

    static checkEmailValidty(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }
}


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
            localStorage.setItem('allPersons', JSON.stringify(this.allPersons))
            return true
        }
        else {
            return false
        }
        
    }

}



// document.addEventListener('load', function(){
//     const registerScreen = new RegisterScreen();
   
// })

window.onload = function() {
    const registerScreen = new RegisterScreen();
}