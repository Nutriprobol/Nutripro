document.addEventListener('DOMContentLoaded', () => {
    const flavorButtons = document.querySelectorAll('.flavor-btn');
    const productDetails = document.getElementById('product-details');
    const productImg = document.getElementById('product-img');

    const productImages = {
        'vainilla': 'imgproteina/cleanzero-vainilla.png',
        'chocolate': 'imgproteina/cleanzero-chocolate.png',
        'capuccino': 'imgproteina/cleanzero-capuccino.png'
    };

    flavorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            flavorButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Get flavor from data attribute
            const flavor = button.dataset.flavor;

            // Update product details
            productImg.src = productImages[flavor];
            
            // Show product details
            productDetails.classList.remove('hidden');
        });
    });
});
