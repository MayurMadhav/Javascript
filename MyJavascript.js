

function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
}

function validateForm(event) {
    var phone = document.getElementById('myform_phone').value;
    if (!validatePhoneNumber(phone)) {
        document.getElementById('phone_error').classList.remove('hidden');
    } else {
        document.getElementById('phone_error').classList.add('hidden');
    }
    event.preventDefault();
}

function validateName(_event){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        document.getElementById('name_error').classList.remove('hidden');
        return false;
    }else{
        document.getElementById('name_error').classList.add('hidden');
        return true;
    }
}

function test(name) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
    alert('Invalid name given.');
    }
    else{
    alert('Valid name given.');
    }
    }
document.getElementById('myform').addEventListener('submit', validateName);
document.getElementById('myform').addEventListener('submit', validateForm);



