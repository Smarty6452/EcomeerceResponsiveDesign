
        // Product data
        const all_products = [
            {
                id: 1,
                category: 'Men, T-Shirt',
                title: 'Men\'s Basic T-Shirt',
                description: 'This basic t-shirt is made of soft cotton fabric for everyday wear. Available in multiple colors.',
                price: 30.99,
                orginal_price: 20.00,
                badge: 'New',
                image: 'assets/images/tshirt1.jpg',   //Photo by Kaushal Amrutiya: https://www.pexels.com/photo/casual-outdoor-portrait-in-sunny-garden-29641270/
                size: ['S', 'M', 'L']
            },
            {
                id: 2,
                category: 'Women, Dress',
                title: 'Floral Summer Dress',
                description: 'This floral dress is perfect for summer outings, with a comfortable fit and stylish design.',
                price: 75.99,
                orginal_price: 49.00,
                badge: 'Sale',
                image: 'assets/images/summerdress1.jpg', //Photo by Lorena Villarreal: https://www.pexels.com/photo/en-algun-lugar-del-mar-mediterraneo-28380016/
                size: ['S', 'M']
            },
            {
                id: 3,
                category: 'Men, Jacket',
                title: 'Leather Jacket',
                description: 'This stylish leather jacket is perfect for colder weather. It\'s designed to keep you warm and fashionable.',
                price: 150.99,
                orginal_price: 110.00,
                badge: 'Hot',
                image: 'assets/images/mensjacket1.jpg', //Photo by Nazar Aslan: https://www.pexels.com/photo/casual-portrait-of-smiling-man-on-stairs-29656480/
                size: ['M', 'L']
            },
            {
                id: 4,
                category: 'Women, Hoodie',
                title: 'Cozy Hoodie',
                description: 'This cozy hoodie is made from a soft blend of cotton and polyester. Perfect for relaxing or casual outings.',
                price: 60.99,
                orginal_price: 40.00,
                badge: 'New',
                image: 'assets/images/womencozyhoodie1.jpg', //Photo by ALINA MATVEYCHEVA : https://www.pexels.com/photo/casual-portrait-of-woman-in-hoodie-by-window-light-29636603/
                size: ['S', 'L']
            },
            {
                id: 5,
                category: 'Men, Jeans',
                title: 'Slim Fit Jeans',
                description: 'Comfortable and stylish, these slim-fit jeans are perfect for everyday wear or casual events.',
                price: 45.99,
                orginal_price: 35.00,
                badge: 'Sale',
                image: 'assets/images/mensjeans1.jpg', //Photo by Ali  Drabo: https://www.pexels.com/photo/african-man-posing-in-denim-outfit-20715516/
                size: ['S', 'M', 'L']
            },
            {
                id: 6,
                category: 'Women, Jacket',
                title: 'Denim Jacket',
                description: 'This classic denim jacket is versatile and pairs well with a variety of outfits for any season.',
                price: 75.99,
                orginal_price: 55.00,
                badge: 'New',
                image: 'assets/images/womenjacket.jpg', //Photo by Alireza Heidarpour: https://www.pexels.com/photo/stylish-woman-in-a-trench-coat-indoors-29598142/
                size: ['M','L']
            },
            {
                id: 7,
                category: 'Women, Tshirt',
                title: 'Womens basic Tshirt',
                description: 'Go to Tshirt of yours.',
                price: 75.99,
                orginal_price: 55.00,
                badge: 'New',
                image: 'assets/images/womentshirt.jpg', //Photo by Lorence Lozano: https://www.pexels.com/photo/woman-wearing-black-framed-sunglasses-3053824/
                size: ['L','M','S']
            },
            {
                id: 8,
                category: 'Women, Shirt',
                title: 'Casual Shirt',
                description: 'This classic denim Shirt is versatile and pairs well with a variety of outfits for any season.',
                price: 75.99,
                orginal_price: 55.00,
                badge: 'New',
                image: 'assets/images/Womensshirt1.jpg',//Photo by Mihman Duğanlı: https://www.pexels.com/photo/woman-in-shirt-photographing-with-digital-camera-27893233/
                size: ['S','M']
            } , 
            {
                id: 9,
                category: 'Women, Fromals',
                title: 'Formals',
                description: 'This classic Formals  for women is versatile and pairs well with a variety of outfits for any season.',
                price: 75.99,
                orginal_price: 55.00,
                badge: 'New',
                image: 'assets/images/womensformals1.jpg ',//Photo by Arturo EG: https://www.pexels.com/photo/a-woman-in-a-suit-and-tie-posing-27874700/
                size: ['M','L','S']
            }  ,
            {
                id: 10,
                category: 'Women,  Jacket',
                title: 'Warmer Jacket',
                description: 'This classic Warmer jacket is versatile and pairs well with a variety of outfits for any Winter season.',
                price: 75.99,
                orginal_price: 55.00,
                badge: 'New',
                image: ' assets/images/womensjacket2.jpg ',//Photo by Manny Rodriguez: https://www.pexels.com/photo/stylish-woman-seated-on-outdoor-staircase-29652205/
                size: ['M','L','S']
            } ,
            {
                id: 11,
                category: 'Men, Pants',
                title: 'Pants',
                description: 'This classic Pants is versatile and pairs well with a variety of outfits for warm season.',
                price: 75.99,
                orginal_price: 55.00,
                badge: 'New',
                image: 'assets/images/menspants1.jpg ', //Photo by Amar  Preciado: https://www.pexels.com/photo/man-in-jacket-and-t-shirt-20508967/
                size: ['L']
            }  ,
            {
                id: 12,
                category: 'Men, Nightwear',
                title: 'Nightwear ',
                description: 'This cozy Nightwear is versatile and pairs well with a variety of outfits for any season.',
                price: 75.99,
                orginal_price: 55.00,
                badge: 'New',
                image: 'assets/images/menssummer1.jpg', //Photo by SHVETS production: https://www.pexels.com/photo/a-man-in-yellow-pajamas-sleeping-while-lying-down-on-pillows-8416315/
                size: ['S']
            } ,
            {
                id: 13,
                category: 'Men, T-Shirt',
                title: 'Men\'s Graphic Tee',
                description: 'A trendy t-shirt featuring unique graphic designs, perfect for casual outings and streetwear fashion.',
                price: 25.99,
                orginal_price: 20.00,
                badge: 'Popular',
                image: 'assets/images/menstshirt2.jpg',  //Photo by Ulkar Batista: https://www.pexels.com/photo/portrait-of-a-man-wearing-a-t-shirt-26892209/
                size: ['S', 'M', 'L', 'XL']
            },
            {
                id: 14,
                category: 'Men, Jacket',
                title: 'Men\'s Leather Jacket',
                description: 'Crafted with premium faux leather, this jacket adds a bold and stylish layer to your wardrobe.',
                price: 129.99,
                orginal_price: 100.00,
                badge: 'Hot',
                image: 'assets/images/mensjacket2.jpg',//Photo by Ivan Babydov: https://www.pexels.com/photo/man-in-black-leather-jacket-wearing-sunglasses-standing-outside-an-establishment-while-looking-afar-7823919/ 
                size: ['M', 'L', 'XL']
            },
            {
                id: 15,
                category: 'Men, Shorts',
                title: 'Men\'s Athletic Shorts',
                description: 'Lightweight and breathable, these shorts are ideal for workouts and warm-weather comfort.',
                price: 19.99,
                orginal_price: 15.00,
                badge: 'Sale',
                image: 'assets/images/menshorts1.jpg', //Photo by Artem Balashevsky: https://www.pexels.com/photo/portrait-of-a-young-boy-with-a-shadowy-silhouette-against-the-wall-18394309/
                size: ['M', 'L', 'XL']
            },
            {
                id: 16,
                category: 'Women, Jacket',
                title: 'Women\'s Cropped Denim Jacket',
                description: 'A modern take on the classic denim jacket with a cropped design, perfect for layering.',
                price: 85.99,
                orginal_price: 70.00,
                badge: 'New',
                image: 'assets/images/womensjacket3.jpg', // Photo by ALINA MATVEYCHEVA : https://www.pexels.com/photo/woman-in-relaxed-pose-at-minimalist-interior-29636564/
                size: ['S', 'M', 'L']
            },
            {
                id: 17,
                category: 'Women, Dress',
                title: 'Floral Maxi Dress',
                description: 'This flowy maxi dress features a beautiful floral print, ideal for summer events and vacations.',
                price: 49.99,
                orginal_price: 40.00,
                badge: 'Trending',
                image: 'assets/images/womensdress2.jpg', // Photo by Masoud Mostafaei: https://www.pexels.com/photo/young-woman-posing-by-a-waterfall-in-nature-29619409/
                size: ['S', 'M', 'L']
            },
            {
                id: 18,
                category: 'Women, Pants',
                title: 'High-Waisted Wide-Leg Pants',
                description: 'Chic and comfortable wide-leg pants with a flattering high waist and stylish fit.',
                price: 39.99,
                orginal_price: 30.00,
                badge: 'Hot',
                image: 'assets/images/widepantswomen.jpg', // Photo by Hamza Uran: https://www.pexels.com/photo/blonde-woman-in-black-leaning-on-wall-20188063/
                size: ['M', 'L']
            },
            {
                id: 19,
                category: 'Men, T-Shirt',
                title: 'Men\'s Striped Polo',
                description: 'A stylish striped polo shirt made from breathable cotton, perfect for casual or semi-formal occasions.',
                price: 32.99,
                orginal_price: 25.00,
                badge: 'New',
                image: 'assets/images/polo.jpg', // Photo by Mikhail Nilov: https://www.pexels.com/photo/man-holding-a-box-with-his-things-9301908/
                size: ['S', 'M', 'L', 'XL']
            },
            {
                id: 20,
                category: 'Men, Jacket',
                title: 'Men\'s Bomber Jacket',
                description: 'Lightweight and versatile, this bomber jacket pairs well with jeans for a sleek urban look.',
                price: 89.99,
                orginal_price: 75.00,
                badge: 'Trending',
                image: 'assets/images/bjacket.jpg', // Photo by Tony Schnagl: https://www.pexels.com/photo/a-stylish-man-sitting-on-a-window-sill-5592271/
                size: ['M', 'L', 'XL']
            },
            {
                id: 21,
                category: 'Men, Jeans',
                title: 'Slim-Fit Distressed Jeans',
                description: 'Durable denim with a modern distressed finish, offering style and comfort in one package.',
                price: 59.99,
                orginal_price: 50.00,
                badge: 'Popular',
                image: 'assets/images/slim.jpg', // Photo by cottonbro studio: https://www.pexels.com/photo/a-boy-dribbling-a-ball-10397634/
                size: ['M', 'L', 'XL']
            },
            {
                id: 22,
                category: 'Men, Accessories',
                title: 'Classic Aviator Sunglasses',
                description: 'Timeless aviator sunglasses with UV protection to elevate your style and protect your eyes.',
                price: 29.99,
                orginal_price: 20.00,
                badge: 'Best Seller',
                image: 'assets/images/mensunglass.jpg', //Photo by Sajad. isz: https://www.pexels.com/photo/2023-styles-20143358/
                size: [] // Not size-specific
            },
            {
                id: 23,
                category: 'Women, Top',
                title: 'Ruffled Blouse',
                description: 'Elegant ruffled blouse with delicate detailing, perfect for both office wear and evening outings.',
                price: 45.99,
                orginal_price: 35.00,
                badge: 'New',
                image: 'assets/images/blousewomen.jpg', // Photo by Taha Samet Arslan: https://www.pexels.com/photo/girl-in-head-cover-and-sunglasses-10774228/
                size: ['S', 'M', 'L']
            },
            {
                id: 24,
                category: 'Women, Skirt',
                title: 'Pleated Midi Skirt',
                description: 'A flowing midi skirt with pleats, offering a chic look that transitions seamlessly from day to night.',
                price: 55.99,
                orginal_price: 45.00,
                badge: 'Trending',
                image: 'assets/images/skirt.jpg', //Photo by Moy   Caro | Photographer : https://www.pexels.com/photo/smiling-woman-in-brown-over-knee-boots-is-sitting-on-bench-19809535/
                size: ['S', 'M', 'L']
            },
 
        ];

const product_grid = document.querySelector('#product-grid');
const category_filter = document.querySelector('#category-filter');
const size_filter = document.querySelector('#size-filter');
const load_more_button = document.querySelector('#load-more-btn');

let displayed_product_count = 12; // Reduced initial display to demonstrate load more functionality
const productsPerLoad = 6; // Number of products to load each time

function create_product_card(product) {
    return `
       <div class="product-card" data-category="${product.category}" data-size="${product.size.join(',')}"><a href="../singleproduct/singleProduct.html">
            <div class="badge">${product.badge}</div>
            <div class="product-tumb">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h4><a href="singleProduct.html">${product.title}</a></h4>
                <p>${product.description}</p>
                <div class="product-bottom-details">
                    <div class="product-price">
                        <small>$${product.orginal_price.toFixed(2)}</small>
                        $${product.price.toFixed(2)}
                    </div>
                    <div class="product-links">
                        <a href="../singleproduct/singleProduct.html" class="wishlist-btn"><i class="fa fa-heart"></i></a>
                        <a href="../singleproduct/singleProduct.html" class="cart-btn"><i class="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div></a>
        </div>
    `;
}

function filter_products() {
    const selected_category = category_filter.value;
    const selected_size = size_filter.value;

    const filtered_products = all_products.filter(product => {
        const category_match = !selected_category || product.category.includes(selected_category);
        const size_match = !selected_size || product.size.includes(selected_size);
        return category_match && size_match;
    });

    // If no products match the filter, show a message
    if (filtered_products.length === 0) {
        product_grid.innerHTML = `
            <div class="no-products-message">
                No products found matching your selected filters.
            </div>
        `;
        load_more_button.style.display = 'none';
        return;
    }

    // Display initial set of products
    product_grid.innerHTML = filtered_products
        .slice(0, displayed_product_count)
        .map(create_product_card)
        .join('');

    // Update load more button visibility
    update_load_more_button_visibility(filtered_products);
}

function update_load_more_button_visibility(filtered_products) {
    if (displayed_product_count >= filtered_products.length) {
        load_more_button.style.display = 'none';
    } else {
        load_more_button.style.display = 'block';
    }
}

// Load more products event listener
load_more_button.addEventListener('click', () => {
    const selected_category = category_filter.value;
    const selected_size = size_filter.value;

    // Re-apply current filters
    const filtered_products = all_products.filter(product => {
        const category_match = !selected_category || product.category.includes(selected_category);
        const size_match = !selected_size || product.size.includes(selected_size);
        return category_match && size_match;
    });

    // Increase displayed product count
    displayed_product_count += productsPerLoad;

    // Display updated set of products
    product_grid.innerHTML = filtered_products
        .slice(0, displayed_product_count)
        .map(create_product_card)
        .join('');

    // Update load more button visibility
    update_load_more_button_visibility(filtered_products);
});

// Event listeners for filtering
category_filter.addEventListener('change', () => {
    displayed_product_count = 12;
    filter_products();
});

size_filter.addEventListener('change', () => {
    displayed_product_count = 12; 
    filter_products();
});

// Initial display
filter_products();
