let validEmail = false;
let validPhone = false;
let validName = false;
$('#failure').hide();
$('#success').hide();


const name = document.getElementById('name');
name.addEventListener('blur', () => {
    console.log('nameArea is blurred');
    let reg = /(^[a-zA-Z]([0-9a-zA-Z]){2,15}$)/
    let s = name.value;
    console.log(reg, s);
    if (reg.test(s)) {
        console.log('name is valid');
        name.classList.remove('is-invalid')
        validName = true;
    } else {
        console.log('name is not valid');
        name.classList.add('is-invalid')

    }
})



const email = document.getElementById('email');
email.addEventListener('blur', () => {
    console.log('emailArea is blurred');
    let reg = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
    console.log(reg, s);
    if (reg.test(s)) {
        console.log(' is valid');
        email.classList.remove('is-invalid')
        validEmail = true;
    } else {
        console.log(' is not valid');
        email.classList.add('is-invalid')
    }
})



const phone = document.getElementById('phone');
phone.addEventListener('blur', () => {
    console.log('phoneArea is blurred');
    let reg = /^([0-9]){10}$/;
    let s = phone.value;
    console.log(reg, s);
    if (reg.test(s)) {
        console.log(' is valid');
        phone.classList.remove('is-invalid')
        validPhone = true;
    } else {
        console.log(' is not valid');
        phone.classList.add('is-invalid')
    }
})






const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('u clicked on submit');
    if (validEmail && validName && validPhone) {
        console.log("everything is valid , the form is submitting");
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');

        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

    } else {
        console.warn('something is not valid , the form is not submitted');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        //success.classList.remove('show');
        // $('#success').alert('close');
        $('#success').hide();
        $('#failure').show();
    }
    window.scroll({ top: 0, left: 0 });
    
    $('html, body').animate({ scrollTop: 0 }, 'fast');


})



















