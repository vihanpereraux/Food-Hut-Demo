function loginfunc ()
{
    //const valid_username = 'vihanperera';
    const valid_password = 1234;

    var username = document.getElementById('InputUsername').value;
    var password = document.getElementById('InputPassword').value;

    if ((username == "vihanperera" || username == "rohanlekamge" || username == "sandaru" 
        || username == "sasanka") && password == valid_password) 
    { 
        //alert('username is maching !');
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        var dummyData = 
        [
            {
                "dummyId1": "dummyVal1",
                "dummyId2": "dummyVal2",
                "dummyId3": "dummyVal3"
            }
        ];
        localStorage.setItem("cartItems", JSON.stringify(dummyData));

        var favFoods = [] ;
        favFoods.push(-1);
        localStorage.setItem("favFoods", JSON.stringify(favFoods));

        localStorage.setItem('isAuthorized', 'authorized');

        window.location.href = "stu01_home.html";
    }
    else
    {
        //alert('username not maching, Try again !');
        $('#login-validation-modal').modal('show');
    }
}


function storageClear()
{
    localStorage.removeItem('username');
    localStorage.removeItem('favFoods');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('password');
    localStorage.removeItem('isAuthorized');
    window.location.href = "stu01_login.html";
}