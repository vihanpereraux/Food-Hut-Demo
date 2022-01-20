function loginfunc ()
{

    const valid_username = 'vihanperera';
    const valid_password = 1234;

    var username = document.getElementById('InputUsername').value;
    var password = document.getElementById('InputPassword').value;

    if (username == valid_username && password == valid_password) 
    { 
        alert('username is maching !');
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = "file:///G:/Projects/Final%20Year/Mobile%20UX/CW/CW%20Build/stu01_home.html";
    }
    else
    {
        alert('username not maching, Try again !');
    }
}