// Image Citation: All the images are used from below url: 
// https://www.uhaul.com/
// https://www.globalindustrial.ca/

const settings = {
    imgpath: '/img/'
}

const shoppingCart = [
    {
        productId: 100, qty: 1
    }
];

const allProducts = [
    {
        id: 100,
        name: `Cargo Box Small`,
        image: `small-box.jpg`,
        description: `Small sized cargo boxes are ideal for moving, storing or shipping your smaller household items.`,
        price: 1.99,
        quantity: 0,
        available: { online: true, store: true },
        shipping: { free: false, standard: true},
        category: `Box`,
        size: `Small`,
        weight: 0.5
    },{
        id: 101,
        name: `Cargo Box Medium`,
        image: `medium-box.jpg`,
        description: `Medium sized cargo boxes are ideal for moving, storing or shipping your medium household items.`,
        price: 2.99,
        quantity: 150,
        available: { online: true, store: true },
        shipping: { free: false, standard: true},
        category: `Box`,
        size: `Medium`,
        weight: 0.7
    },{
        id: 102,
        name: `Cargo Box Large`,
        image: `large-box.jpg`,
        description: `Large sized cargo boxes are ideal for moving, storing or shipping your larger household items.`,
        price: 3.99,
        quantity: 125,
        available: { online: true, store: true },
        shipping: { free: false, standard: true},
        category: `Box`,
        size: `Large`,
        weight: 0.8
    },{
        id: 103,
        name: `Cargo Box Extra Large`,
        image: `extra-large-box.jpg`,
        description: `Extra large sized cargo boxes are ideal for moving, storing or shipping your extra larger household items.`,
        price: 4.99,
        quantity: 100,
        available: { online: true, store: true },
        shipping: { free: false, standard: true},
        category: `Box`,
        size: `Extra Large`,
        weight: 0.9
    },{
        id: 104,
        name: `Packaging Paper Tape Small`,
        image: `paper-tape-small.jpg`,
        description: `Packaging Paper Tape is ideal for moving and storage. It easily tears by hand and is self-sticking.`,
        price: 2.99,
        quantity: 200,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `27 Metre`,
        weight: 0.2
    },{
        id: 105,
        name: `Packaging Paper Tape Medium`,
        image: `paper-tape-medium.jpg`,
        description: `Packaging Paper Tape is ideal for moving and storage. It easily tears by hand and is self-sticking.`,
        price: 3.99,
        quantity: 150,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `40 Metre`,
        weight: 0.3
    },{
        id: 106,
        name: `Packaging Paper Tape Large`,
        image: `paper-tape-large.jpg`,
        description: `Packaging Paper Tape is ideal for moving and storage. It easily tears by hand and is self-sticking.`,
        price: 4.99,
        quantity: 120,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `60 Metre`,
        weight: 0.4
    },{
        id: 107,
        name: `Packaging Paper Tape Extra Large`,
        image: `paper-tape-extra-large.jpg`,
        description: `Packaging Paper Tape is ideal for moving and storage. It easily tears by hand and is self-sticking.`,
        price: 5.99,
        quantity: 100,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `100 Metre`,
        weight: 0.5
    },{
        id: 108,
        name: `Duct Tape Small`,
        image: `duct-tape-small.jpg`,
        description: `A moisture resistance tape with easy tear and conformability.`,
        price: 10.99,
        quantity: 100,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `100 Metre`,
        weight: 0.5
    },{
        id: 109,
        name: `Duct Tape Large`,
        image: `duct-tape-large.jpg`,
        description: `A moisture resistance tape with easy tear and conformability.`,
        price: 18.99,
        quantity: 100,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `200 Metre`,
        weight: 1
    },{
        id: 110,
        name: `Electrical Tape Small`,
        image: `electrical-tape-small.jpg`,
        description: `High temperature conformable elastic thick tape.`,
        price: 14.99,
        quantity: 100,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `200 Metre`,
        weight: 0.5
    },{
        id: 111,
        name: `Electrical Tape Large`,
        image: `electrical-tape-large.jpg`,
        description: `High temperature conformable elastic thick tape.`,
        price: 19.99,
        quantity: 100,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `150 Metre`,
        weight: 0.7
    },{
        id: 112,
        name: `White Tape`,
        image: `white-tape.jpg`,
        description: `Great for assembling moving and cargo boxes. No blades or knives required.`,
        price: 9.99,
        quantity: 50,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Tape`,
        size: `100 Metre`,
        weight: 0.4
    },{
        id: 113,
        name: `Luggage Box`,
        image: `luggage-box.jpg`,
        description: `Box handle makes it easy to use as a suitcase for travel or for shipping.`,
        price: 6.99,
        quantity: 50,
        available: { online: false, store: true },
        shipping: { free: false, standard: true},
        category: `Box`,
        size: `Large`,
        weight: 0.7
    },{
        id: 114,
        name: `Matress Bag Twin`,
        image: `matress-bag-twin.jpg`,
        description: `Matress bags will keep your mattresses or box springs protected against dust, soil, and light.`,
        price: 4.99,
        quantity: 75,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Bag`,
        size: `Twin`,
        weight: 0.7
    },{
        id: 115,
        name: `Matress Bag Queen`,
        image: `matress-bag-queen.jpg`,
        description: `Matress bags will keep your mattresses or box springs protected against dust, soil, and light.`,
        price: 5.99,
        quantity: 75,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Bag`,
        size: `Queen`,
        weight: 0.7
    },{
        id: 116,
        name: `Matress Bag King`,
        image: `matress-bag-king.jpg`,
        description: `Matress bags will keep your mattresses or box springs protected against dust, soil, and light.`,
        price: 6.99,
        quantity: 75,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Bag`,
        size: `King`,
        weight: 0.8
    },{
        id: 117,
        name: `Sofa Cover`,
        image: `sofa-cover.jpg`,
        description: `Sofa Cover is great for protecting sofas, couches and other furniture from debris`,
        price: 7.99,
        quantity: 75,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Cover`,
        size: `Large`,
        weight: 0.3
    },{
        id: 118,
        name: `Chair Cover`,
        image: `chair-cover.jpg`,
        description: `Chair Cover is great for protecting chairs, stools and other furniture from debris`,
        price: 7.99,
        quantity: 75,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Cover`,
        size: `Medium`,
        weight: 0.3
    },{
        id: 119,
        name: `Bubble Wrap Small`,
        image: `bubble-wrap-small.jpg`,
        description: `Bubble wrap is efficient way to protect and wrap fragile items such as glassware, electronics, artwork, home decor and more.`,
        price: 17.99,
        quantity: 75,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Wrap`,
        size: `Small`,
        weight: 0.5
    },{
        id: 120,
        name: `Bubble Wrap Medium`,
        image: `bubble-wrap-medium.jpg`,
        description: `Bubble wrap is efficient way to protect and wrap fragile items such as glassware, electronics, artwork, home decor and more.`,
        price: 29.99,
        quantity: 75,
        available: { online: true, store: true },
        shipping: { free: true, standard: false},
        category: `Wrap`,
        size: `Medium`,
        weight: 0.9
    },{
        id: 121,
        name: `Bubble Wrap Large`,
        image: `bubble-wrap-large.jpg`,
        description: `Bubble wrap is efficient way to protect and wrap fragile items such as glassware, electronics, artwork, home decor and more.`,
        price: 35.99,
        quantity: 75,
        available: { online: false, store: true },
        shipping: { free: false, standard: true},
        category: `Wrap`,
        size: `Large`,
        weight: 0.9
    },
];


// Declaring global variable here
let productQuantity = 0;
let qty;

let addQuantityButton = document.getElementById("addQtyButton");
let subQuantityButton = document.getElementById("substractQtyButton");
let addToCartButton = document.getElementById("cartButton");
let addToFavItem = document.getElementById("favouriteItem");

document.getElementById(`productQuantityLabel`).innerHTML = `${productQuantity}`;

/*  Function: getProductAsHtmlString
    Parameters: product, varname: NA, Type: NA
    Return: HTML String
    Description: return all product details as HTML */
function getProductAsHtmlString(product) {
    let promotionalItem = ``;
    let productStock = ``;
    let addToCart = `<button data-productid="${product.id}" id="cartButton" type="button" class="cart-btn">Add to Cart</button>`
    if (product.quantity <= 0) {
        promotionalItem = `<small class="promotionalItem">Sold out</small>`;
        productStock = `outofstock`;
    } else if (product.quantity > 100) {
        promotionalItem = `<small class="promotionalItem urgent">10% OFF</small>`;
    }

    return `
    <article class="product ${(product.category) ? `cat-${product.category}` : ''} ${productStock}">
        <header>
            <img src="${settings.imgpath + product.image}" alt="${product.name}">
        </header>
        <a href="#"><h3 id="name">${product.name} ${promotionalItem}</h3></a>
        <p>${product.description}</p>
        <form>
            <ul>
                <li><label><input type="radio" name="size" value="o"> <span>Ship to home</span></label></li>
                <li><label><input type="radio" name="size" value="s"> <span>Pick up in store</span></label></li>
            </ul>
            <footer class="footer-product">
                <data value="${product.price}" class="price"><label>$${product.price}</label></data>
                <ul>
                    <li><button id="addQtyButton" type="button" class="qtyButton qtyButton-add">+</button></li>
                    <li><button id="substractQtyButton" type="button" class="qtyButton qtyButton-sub">-</button></li>
                </ul>
                <label id="productQuantityLabel" class="quantity"></label>
                ${addToCart}
                <button id="favouriteItem" type="button" class="fav-item"><span class="material-icons">favorite</span></button>
            </footer>
        </form>
    </article>`;
}

const renderProductsFromArray = arr => {
    const sortBy = document.getElementById('sortOrder').value;
    arr = loadProductsByOrder(arr, sortBy);

    if (arr.length > 0) {
        document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('\n'); 
    } else {
      document.getElementById('products').innerHTML = 'Sorry, No matching results, try fewer keywords, or try different keywords.'
    }
    document.getElementById('numResults').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`;

}

const submitFilterForm = event => {
    runFilterTool(event.target.form);
}

const sortProducts = event => {
    runFilterTool(document.getElementById('searchArea'));
}

// Sorting Products by alphabet
const loadProductsByOrder = (arrToSort, criteria) => {
    const sortedProducts = arrToSort.slice();
    if (criteria == 'nameAsc') {
      // A to Z
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria == 'nameDesc') {
      // Z to A
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortedProducts;
}

const runFilterTool = theForm => {
    const productNameToSearch = theForm.elements.productName.value;
    const productCategoryToSearch = theForm.elements.categoryName.value;  
    const filteredProducts = allProducts
      .filter(p => p.name.toLowerCase().includes( productNameToSearch.trim().toLowerCase() ))
      .filter(p => p.category == productCategoryToSearch || productCategoryToSearch == "All");
    
    renderProductsFromArray(filteredProducts);
}

/*  Function: addQty
    Parameters: quantity, varname: NA, Type: int
    Return: ++quantity
    Description: return added quantity */
const addQty = quantity => {
    return(++quantity);
}

/*  Function: subQty
    Parameters: quantity, varname: NA, Type: int
    Return: 0 if quantity is less than 0 or subtracted quantity
    Description: return substracted quantity */
const subQty = quantity => {
    if (quantity <= 0){
        return 0;
    }
    else{
        return(--quantity);
    }
}

/*  Function: addProductQty
    Parameters: NA, varname: qty, Type: int
    Return: NA
    Description: display added quantity to productQuantityLabel */
function addProductQty(){
    qty = addQty(document.getElementById(`productQuantityLabel`).innerHTML);
    document.getElementById(`productQuantityLabel`).innerHTML = `${qty}`;
}

/*  Function: subProductQty
    Parameters: NA, varname: qty, Type: int
    Return: NA
    Description: display substracted quantity to productQuantityLabel */
function subProductQty(){
    qty = subQty(document.getElementById(`productQuantityLabel`).innerHTML);
    document.getElementById(`productQuantityLabel`).innerHTML = `${qty}`;
}

/*  Function: addItemToCart
    Parameters: productId:Object
    Return: productId, qty
    Description: Add productId and quantity to cart */
const addItemToCart = productId => {
    const cartItem = shoppingCart.find(item => item.productId == productId);
    if (cartItem) {
        cartItem.qty++;
    } else {
        shoppingCart.push({productId: productId, qty: 1});
        alert(`You added item with product id ${productId} to your shopping cart.`);
    }  
}

const handleClickOfProducts = event => {
    if (!event.target.matches('button.cart-btn')) {
        return;
    }
    const productid = parseInt(event.target.dataset.productid);
    addItemToCart(productid);
}

function addItemAsFavourite(){
    let favItem = document.getElementById(`favouriteItem`).style.color;
    if(favItem == `red`){
        document.getElementById(`favouriteItem`).style.color = "rgb(167, 204, 247)";
        alert(`You removed your favourite item.`);
    }else{
        document.getElementById(`favouriteItem`).style.color = "red";
        alert(`You added this item as a favourite.`);
    }
}

// --------------------------------------------
// Click Event Listener
subQuantityButton.addEventListener("click",subProductQty)
addToFavItem.addEventListener("click",addItemAsFavourite)

// Load Event Listener
window.addEventListener('load', () => {
    //Rendering all products on page load
    renderProductsFromArray(allProducts);

    //Searching product by product name
    document.getElementById('productName').addEventListener('input', submitFilterForm);
    //Searching product by product category
    document.getElementById('categoryName').addEventListener('change', submitFilterForm);

    //Sorting
    document.getElementById('sortOrder').addEventListener('change', sortProducts);

    document.getElementById('products').addEventListener('click', handleClickOfProducts);
});