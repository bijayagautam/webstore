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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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
        image: `add-image-url-here`,
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




function getProductAsHtmlString(product) {
    return `
    <article class="product">
        <header>
            <img src="/img/small-box.jpg" alt="Small Box">
        </header>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <form>
            <ul>
                <li><label><input type="radio" name="size" value="o"> <span>Ship to home</span></label></li>
                <li><label><input type="radio" name="size" value="s"> <span>Pick up in store</span></label></li>
            </ul>
            <footer class="footer-product">
                <data value="39"><del>$3.99</del> <ins>$1.99</ins></data>
                <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
                <button type="button"><span class="material-icons">favorite</span></button>
                <a href="#">see more</a>
            </footer>
        </form>
    </article>`;
}


const renderProductsFromArray = arr => {
    document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('\n');
   
}
  
window.addEventListener('load', () => {
    renderProductsFromArray(allProducts);
});