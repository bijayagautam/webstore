// Image Citation: All the images are used from below url: 
// https://www.uhaul.com/
// https://www.globalindustrial.ca/

const settings = {
    imgpath: '/img/'
}

const allProducts = [
    {
        id: `100`,
        name: `Cargo Box Small`,
        image: `small-box.jpg`,
        description: `Small sized cargo boxes are ideal for moving, storing or shipping your smaller household items.`,
        price: 1.99,
        quantity: 200,
        available: { online: true, store: true },
        shipping: { free: false, standard: true},
        category: `Box`,
        size: `Small`,
        weight: 0.5
    },{
        id: `101`,
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
        id: `102`,
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
        id: `103`,
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
        id: `104`,
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
        id: `105`,
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
        id: `106`,
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
        id: `107`,
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
        id: `108`,
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
        id: `109`,
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
        id: `110`,
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
        id: `111`,
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
        id: `112`,
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
        id: `113`,
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
        id: `114`,
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
        id: `115`,
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
        id: `116`,
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
        id: `117`,
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
        id: `118`,
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
        id: `119`,
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
        id: `120`,
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
        id: `121`,
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

let addQuantityButton = document.getElementById("addQtyButton");
let subQuantityButton = document.getElementById("substractQtyButton");

document.getElementById(`productQuantityLabel`).innerHTML = `${productQuantity}`;

/*  Function: getProductAsHtmlString
    Parameters: product, varname: NA, Type: NA
    Return: HTML String
    Description: return all product details as HTML */
function getProductAsHtmlString(product) {
    return `
    <article class="product">
        <header>
            <img src="${settings.imgpath + product.image}" alt="${product.name}">
        </header>
        <a href="#"><h3>${product.name}</h3></a>
        <p>${product.description}</p>
        <form>
            <ul>
                <li><label><input type="radio" name="size" value="o"> <span>Ship to home</span></label></li>
                <li><label><input type="radio" name="size" value="s"> <span>Pick up in store</span></label></li>
            </ul>
            <footer class="footer-product">
                <data value="1.99" class="price"><label>$1.99</label></data>
                <ul>
                  <li><input type="button" value="+" id="addQtyButton" class="qtyButton"></li>
                  <li><input type="button" value="-" id="substractQtyButton" class="qtyButton"></li>
                </ul>
                <label id="productQuantityLabel" class="quantity"></label>
                <button type="button" class="cart-btn">Add to Cart</button>
                <button type="button" class="fav-item"><span class="material-icons">favorite</span></button>
            </footer>
        </form>
    </article>`;
}

const renderProductsFromArray = arr => {
    document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('\n');
   
}

/*  Function: addQty
    Parameters: quantity, varname: NA, Type: int
    Return: ++quantity
    Description: return added quantity */
function addQty(quantity){
    return(++quantity);
}

/*  Function: subQty
    Parameters: quantity, varname: NA, Type: int
    Return: 0 if quantity is less than 0 or subtracted quantity
    Description: return substracted quantity */
function subQty(quantity){
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
    let qty = addQty(document.getElementById(`productQuantityLabel`).innerHTML);
    document.getElementById(`productQuantityLabel`).innerHTML = `${qty}`;
}

/*  Function: subProductQty
    Parameters: NA, varname: qty, Type: int
    Return: NA
    Description: display substracted quantity to productQuantityLabel */
function subProductQty(){
    let qty = subQty(document.getElementById(`productQuantityLabel`).innerHTML);
    document.getElementById(`productQuantityLabel`).innerHTML = `${qty}`;
}


// --------------------------------------------
// Click Event Listener
addQuantityButton.addEventListener("click",addProductQty)
subQuantityButton.addEventListener("click",subProductQty)

// Load Event Listener
window.addEventListener('load', () => {
    renderProductsFromArray(allProducts);
});