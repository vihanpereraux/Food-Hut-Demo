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
        for (let j = 0; j < favorites.length; j++) 
        {
            if ( data[i].foodId == favorites[j].foodId )
            {
                fullAmount = (favorites[j].itemQty * favorites[j].portianPrice) + fullAmount;
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
                        <p id="your-items-price">${favorites[j].itemQty * favorites[j].portianPrice}</p>
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