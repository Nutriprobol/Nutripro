document.addEventListener('DOMContentLoaded', () => {
    const sizeButtons = document.querySelectorAll('.size-btn');
    const productDetails = document.getElementById('product-details');
    const productImg = document.getElementById('product-img');
    const productPrice = document.getElementById('product-price');

    const productImages = {
        '1.2kg': 'imgproteina/darkwhey.PNG',
        '2.3kg': 'imgproteina/darkwhey-2.3kg.PNG'
    };

    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Get size and price from data attributes
            const size = button.dataset.size;
            const price = button.dataset.price;

            // Update product details
            productImg.src = productImages[size];
            productPrice.textContent = `Precio: ${price} Bs`;
            
            // Show product details
            productDetails.classList.remove('hidden');
        });
    });
});
