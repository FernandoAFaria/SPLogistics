
function check(form){
    if(form.username.value == "splogistics" && form.password.value == "1234")
        {
            window.g('welcome.html')
        }
    else {
            alert('User name and password are incorrect')
        }
}