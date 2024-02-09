let bagItems
onLoad();


function onLoad(){
    let bagItemsSTR = localStorage.getItem('bagItems');
    bagItems = bagItemsSTR ? JSON.parse(bagItemsSTR) : [];
    displayItemOnHome();
    displayBagIcon();



}




function displayItemOnHome(){

    let displayElement = document.querySelector(".items-container");
    if(!displayElement){
        return
    }

    let itemCont = ''
    items.forEach(item => {
    itemCont += `
    <div class="item-container">
        <img class="item-img" src=${item.image} alt="product image">
        <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-to-bag" onclick="addToBag(${item.id})">Add to Bag</button>

    </div>`
    });

    displayElement.innerHTML = itemCont;
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}


function displayBagIcon(){
    let bagIconElement = document.querySelector('.items_count');
    if(bagItems.length > 0){
        bagIconElement.style.visibility = 'visible';
        bagIconElement.innerText = bagItems.length;
    }
    else{
        bagIconElement.style.visibility = 'hidden';
    }
}




    
