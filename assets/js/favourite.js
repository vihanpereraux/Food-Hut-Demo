// Displaying home cards
buidCards();
var dataValue = 0;

function buidCards() 
{  
    var cards = document.getElementById("favourites");
    var retrievedData = localStorage.getItem("favFoods");
    var alreadyFavs = JSON.parse(retrievedData);

    fetch('./data.json')
    .then( function (response)
    {
    return response.json();
    })
    .then( function (data) 
    {
        for (let i = 0; i < data.length; i++) 
        {
            for (let j = i; j < alreadyFavs.length; j++)
            {
                if ( data[i].foodId == alreadyFavs[j] ) 
                {
                    var card = 
                    `<div class="row food-card">

                        <div class="col-4 my-auto">
                            <img class="mx-auto d-block card-img" src="${data[i].imgUrl}" alt="">
                        </div>

                        <div class="col-8 food-details">
                            <p id="food-title">${data[i].foodTitle}</p>
                            <p id="food-description">${data[i].foodDescription}</p>
                            <p id="food-ratings">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                                    <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                                    <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                                    <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                                </svg>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.361" height="13.657" viewBox="0 0 14.361 13.657">
                                    <path id="Icon_feather-star" data-name="Icon feather-star" d="M10.181,3,12.4,7.5l4.962.725-3.59,3.5.847,4.94-4.438-2.334L5.743,16.657l.847-4.94L3,8.22,7.962,7.5Z" transform="translate(-3 -3)" fill="#feba27"/>
                                </svg>
                            </p>
                            <p id="food-price">Rs ${data[i].foodSmallPrice}.00</p>
                        </div>
                    </div>`
                    cards.innerHTML += card
                }
            }
        }
        dataValue = data.length;
    });
}


const itemNames = [];
function sendEmails(recieverEmail)
{
    sendEmail(recieverEmail);
    $("#email-input-modal").modal('hide');
}
function sendEmail(recieverEmail) 
{   
    var retrievedData = localStorage.getItem("favFoods");
    var alreadyFavs = JSON.parse(retrievedData);
    alert(alreadyFavs);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(recieverEmail))
    {
        fetch('./data.json')
        .then( function (response)
        {
        return response.json();
        })
        .then( function (data) 
        {
            for (let i = 0; i < data.length; i++) 
            {
                for (let j = 0; j < alreadyFavs.length; j++) 
                {
                    if (data[i].foodId == alreadyFavs[j]) 
                    {
                        itemNames.push(data[i].foodTitle + ' ');
                    }   
                }   
            }
            //alert(itemNames);
            //alert(recieverEmail);

            Email.send
            ({
                Host : "smtp.gmail.com",
                Username : "slcollagearts.vp",
                Password : "Pereravihan9",
                To : recieverEmail,
                From : "slcollagearts.vp@gmai.com",
                Subject : "This is the subject",
                Body : itemNames
            }).
            then(
            message => alert(message)
            );
        });
    }
    else
    {
        $('#email-validation-modal').modal('show');
    }    
}
