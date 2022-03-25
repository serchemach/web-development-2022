const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", SubmitHandler);

function SubmitHandler(){
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
};


