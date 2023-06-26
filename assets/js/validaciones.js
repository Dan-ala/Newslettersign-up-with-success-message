//PRIMERO SE HACEN LAS REGLAS DE VALIDACIÓN DEPENDIENDO SU CASO
const regex_email = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/


//SE CREAN UNAS BANDERAS
let flag


//LUEGO ACCEDO A LOS ELEMENTOS PARA VALIDARLOS
const form = document.querySelector("#form")


//SE CREAN LAS VARIABLES PARA ACCEDER A SU VALOR
const email = form.email_address.value


//ACCEDER A UN FEEDBACK
const f = document.querySelector(".field_email .feedback")


//SE HACE LA RESPECTIVA VALDACIÓN
form.email_address.addEventListener("input",e=>{

    if (regex_email.test(e.target.value)) {
        form.email_address.setAttribute("class","success")
        f.style.setProperty("display","none")
        f.style.setProperty("opacity","0")
        flag=true
    }else{
        form.email_address.setAttribute("class","error")
        f.textContent="Email not valid"
        f.style.setProperty("visibility","visible")
        f.style.setProperty("opacity","1")
        flag=false
    }
})


//SUBMIT
form.addEventListener("submit",e=>{
    e.preventDefault()

    if(form.email_address.value == null || form.email_address.value == 0 || flag == false){
        alert("Enter a valid email adress")
        form.email_address.focus()
        form.setAttribute("class","error")
    }else{
        form.submit()
    }
})