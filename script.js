document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const categoryMenu = document.getElementById('categorias');

    if (menuToggle && categoryMenu) {
        menuToggle.addEventListener('click', () => {
            categoryMenu.classList.toggle('hidden');
        });
    }

    // Animación de categorías
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
