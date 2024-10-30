
let closeEye = document.getElementById("closeEye") as HTMLButtonElement;
let openEye = document.getElementById("openEye") as HTMLButtonElement;
let closeEye1 = document.getElementById("closeEye1") as HTMLButtonElement;
let openEye1 = document.getElementById("openEye1") as HTMLButtonElement;
// 
let LoginForm = document.getElementById("LoginForm") as HTMLFormElement;
let SignUpForm = document.getElementById("SignUpForm") as HTMLFormElement;

//
let UserPassword = document.getElementById("userPassword") as HTMLInputElement;
let SureUserPassword = document.getElementById("SureUserPassword") as HTMLInputElement;
//

//////////show password////////////////////////
const toggleShowPassword = (show: string, openEl: HTMLButtonElement, closeEl: HTMLButtonElement, selectInput: HTMLInputElement) => {
    let IsShow = show === 'open';
    if (IsShow) {
        closeEl.classList.add("d-none");
        openEl.classList.remove("d-none");
        selectInput.type = "text";
    } else {
        closeEl.classList.remove("d-none");
        openEl.classList.add("d-none");
        selectInput.type = "password";
    }
}
/////////////Check inputs  //////////////////////
/// input empty/////
const inputEmpty = (selectInput: HTMLInputElement): boolean => {
    if (selectInput.value === "" || selectInput.value === null) {
        return true;

    }
    return false;
}
const CreateMassage = (massage: string, selectEl: Element | any) => {
    let Massage = document.createElement("p");
    Massage.classList.add("errorMassageInput");
    Massage.textContent = massage;
    if (selectEl.type === "password") {
        if (selectEl.parentElement?.parentElement?.querySelector(".errorMassageInput")) {
            return;
        }
        const passwordContainer = selectEl.closest('.IsPassword');

        passwordContainer !== null ? passwordContainer?.insertAdjacentElement('afterend', Massage) : ""
    } else {
        if (selectEl.parentElement?.querySelector(".errorMassageInput")) {
            return;
        }
        selectEl.insertAdjacentElement('afterend', Massage); // اضافة العنصر بعد العنصر الحالي
    }
}
const RemoveMassage = (selectEl: Element | any) => {
    // Remove the error message if it exists
    if (selectEl.type === "password") {
        const existingMassage = selectEl.parentElement?.parentElement?.querySelector(".errorMassageInput");
        if (existingMassage) {
            existingMassage.remove();
        }
    } else {
        const existingMassage = selectEl.parentElement?.querySelector(".errorMassageInput");
        if (existingMassage) {
            existingMassage.remove();
        }
    }

}
// check input validity
const InputValid = (value: string | number, pattern: any) => {
    let inputPattern = pattern;
    return inputPattern.test(value)
}
const SelectInputError = (selectEl: Element | HTMLInputElement | any) => {
    let hasError = inputEmpty(selectEl);

    if (selectEl.type === 'password') {
        if (hasError) {
            selectEl.parentElement?.parentElement?.classList.add("errorForm");
            CreateMassage("يجب ادخال كلمة المرور", selectEl)

        } else if (!InputValid(selectEl.value, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            selectEl.parentElement?.parentElement?.classList.add("errorForm");
            CreateMassage("يجب أن تتكون كلمة المرور من ثمانية أحرف على الأقل وتحتوي على حرف واحد كبير، حرف صغير، رقم، ورمز خاص.", selectEl);
        } else {
            selectEl.parentElement?.parentElement?.classList.remove("errorForm");
            RemoveMassage(selectEl)
        }
    }
    if (selectEl.type === 'email') {


        if (!InputValid(selectEl.value, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i) || hasError) {
            selectEl.parentElement?.classList.add("errorForm");
            CreateMassage("يرجى استخدام عنوان بريد إلكتروني صالح، مثل user@example.com", selectEl)
        } else {
            selectEl.parentElement?.classList.remove("errorForm");
            RemoveMassage(selectEl)
        }
    }
    if (selectEl.type === 'text') {
        if (hasError || !InputValid(selectEl.value, /^[\p{L}' -]{5,}$/u)) {
            selectEl.parentElement?.classList.add("errorForm");
            CreateMassage(" يرجي كتابة اسم صالح ", selectEl)
        } else {
            selectEl.parentElement?.classList.remove("errorForm");
            RemoveMassage(selectEl)
        }
    }
    if (selectEl.type === 'number') {
        if (hasError || !InputValid(selectEl.value, /^\d{10,}$/)) {
            selectEl.parentElement?.classList.add("errorForm");
            CreateMassage("يرجى إدخال رقم هاتف صالح     .", selectEl);
        } else {
            selectEl.parentElement?.classList.remove("errorForm");
            RemoveMassage(selectEl)
        }
    }
}
const ShowErrorInput = (SelectEl: HTMLFormElement, selectInputs: string) => {
    const inputs = SelectEl.querySelectorAll(selectInputs);
    inputs.forEach((input: Element | HTMLInputElement | any) => {
        SelectInputError(input)

    })

}
//////////////check password === confirm password
const CheckPasswordConfirm = () => {
    if (UserPassword.value !== SureUserPassword.value) {
        SureUserPassword.parentElement?.parentElement?.classList.add("errorForm");
        CreateMassage(" كلمة المرور غير متطابقة ", SureUserPassword)
    } else {
        SureUserPassword.parentElement?.classList.remove("errorForm");
        RemoveMassage(SureUserPassword)
    }
}
//////////////redirect function////////////////
 const redirectToPage = (page: string) => {
    window.location.href = page;
}




closeEye?.addEventListener("click", () => toggleShowPassword('open', openEye, closeEye, UserPassword));
openEye?.addEventListener("click", () => toggleShowPassword('close', openEye, closeEye, UserPassword));
closeEye1?.addEventListener("click", () => toggleShowPassword('open', openEye1, closeEye1, SureUserPassword));
openEye1?.addEventListener("click", () => toggleShowPassword('close', openEye1, closeEye1, SureUserPassword));
LoginForm?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    toggleShowPassword('close', openEye, closeEye, UserPassword);
    ShowErrorInput(LoginForm, 'input[type="password"], input[type="email"]')


    const errorElements = LoginForm.querySelectorAll('.errorForm');


    if (errorElements.length === 0) {
        redirectToPage('index.html');
        LoginForm.reset();

    }
})
SignUpForm?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    toggleShowPassword('close', openEye, closeEye, UserPassword);
    toggleShowPassword('close', openEye1, closeEye1, SureUserPassword);
    ShowErrorInput(SignUpForm, 'input[type="password"], input[type="email"], input[type="text"] , input[type="number"]');
    CheckPasswordConfirm()

    const errorElements = SignUpForm.querySelectorAll('.errorForm');
    if (errorElements.length === 0) {
        redirectToPage('Login.html');
        SignUpForm.reset()
    }

});
