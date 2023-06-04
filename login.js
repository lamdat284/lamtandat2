const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const singUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click",()=>{
        pwFields.forEach(pwFields =>{
            if(pwFields.type === "password"){
                pwFields.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye-slash","fa-eye")
                })
            }else
            {
                pwFields.type = "password";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye","fa-eye-slash")
                })
            }
        })
    })
})

singUp.addEventListener("click", ()=>{
    container.classList.add("active");
});

login.addEventListener("click", ()=>{
    container.classList.remove("active");
});

