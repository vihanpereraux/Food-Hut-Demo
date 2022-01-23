var fullAmount = 0;

// Displaying home cards
buildList();
function buildList() 
{  
    var itemList = document.getElementById("your-itemsz");
    
    var favorites = [];
    favorites = JSON.parse(localStorage.getItem('cartItems'));
    
  fetch('./data.json')
  .then( function (response)
  {
    return response.json();
  })
  .then( function (data) {
    for (let i = 0; i < data.length; i++) 
    {
        for (let j = 1; j < favorites.length; j++) 
        {
            if ( data[i].foodId == favorites[j].foodId )
            {
                fullAmount = (favorites[j].itemQty * favorites[j].portionPrice) + fullAmount;
                var item = 
                `
                <!-- Item list -->
                <div class="row">
                    <div class="col-1">
                        <p id="your-items-qty">${favorites[j].itemQty}</p>
                    </div>

                    <div class="col-8">
                        <p id="your-items-title">${data[i].foodTitle}</p>

                        <p id="your-items-description">
                            ${data[i].foodDescription}
                        </p>
                    </div>

                    <div class="col-3">
                        <p id="your-items-price">${favorites[j].itemQty * favorites[j].portionPrice}</p>
                    </div>
                </div>

                <!-- Devider -->
                <span id="your-items-devider"><hr></span>
                `
                itemList.innerHTML += item
            }
        }
    }
    document.getElementById('your-items-sub-total-price').innerHTML = fullAmount;
  })
}


jQuery(function($) 
{
    purchaseAmount = 0;
    var favorites = [];
    favorites = JSON.parse(localStorage.getItem('cartItems'));


    fetch('./data.json')
    .then( function (response)
    {
        return response.json();
    })
    .then( function (data) {
        for (let i = 0; i < data.length; i++) 
        {
            for (let j = 1; j < favorites.length; j++) 
            {
                if ( data[i].foodId == favorites[j].foodId )
                {
                    purchaseAmount = (favorites[j].itemQty * favorites[j].portionPrice) + purchaseAmount;
                }
            }
        }
        document.getElementById("total_value").value = purchaseAmount;
    });


    var $form = $('#frmBooking');
    var handler = StripeCheckout.configure(
    {
        key: 'pk_test_cp21BcECf4kMMUbSlRlZlsMo',
        token: function(token) 
        {
            if(token.id)
            {
                localStorage.removeItem('cartItems');
                var dummyData = 
                [
                    {
                        "dummyId1": "dummyVal1",
                        "dummyId2": "dummyVal2",
                        "dummyId3": "dummyVal3"
                    }
                ];
                localStorage.setItem("cartItems", JSON.stringify(dummyData));
                $("#thankyouPayment").html("Thank you, your payment was successful!");    
            }
        }
    });
    

    $('#customButton').on('click', function(e) 
    {
      // Code Section B  Open Checkout with further options
        handler.open(
        {
            name: 'Food Hut Order',
            currency: 'LKR',
            description: $('#item_name').val(),
            amount: $('#total_value').val() * 100
        });
        e.preventDefault();
    });

    // Code Section C  Close Checkout on page navigation
    $(window).on('popstate', function() 
    {
        handler.close();
    });
});