const submitForm = document.querySelector("#news");
submitForm.addEventListener('submit', SubmitHandler);

const nightCheckbox = document.querySelector('[name="Night mode"]');
nightCheckbox.addEventListener("click", NightCheckboxHandler);

function SubmitHandler(event){
    const usernameTextbox = document.querySelector("#username-textbox");
    const username = usernameTextbox.value;
    const passwordTextbox = document.querySelector("#password-textbox");
    const password = passwordTextbox.value;
    
    if(username.length < 3 && !usernameTextbox.classList.contains("red"))
    {
        usernameTextbox.classList.add("red")
    }
    else if (username.length >= 3 && usernameTextbox.classList.contains("red"))
    {
        usernameTextbox.classList.remove("red");
    }

    const numberOfPasswordDigits = password.replace(/\D/g, '').length;
    if((password.length < 3 || numberOfPasswordDigits < 3) && !passwordTextbox.classList.contains("red"))
    {
        passwordTextbox.classList.add("red");
    }
    else if(password.length >= 3 && numberOfPasswordDigits >= 3 && passwordTextbox.classList.contains("red"))
    {
        passwordTextbox.classList.remove("red");
    }

    if(username.length >= 3 && password.length >= 3 && numberOfPasswordDigits >= 3)
        return true;
    event.preventDefault(); 
    return false;
};

function NightCheckboxHandler(){
    const body = document.querySelector("body");
    const fitMain = document.querySelector(".fit-main");

    if(nightCheckbox.checked)
    {
        body.classList.add("night-body");
        fitMain.classList.add("night-main");
    }
    else if(!nightCheckbox.checked)
    {
        body.classList.remove("night-body");
        fitMain.classList.remove("night-main");
    }

};

