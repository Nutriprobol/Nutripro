document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobileMenu';
    mobileMenu.classList.add('mobile-menu');

    // Crear menú móvil dinámicamente
    const categories = [
        {name: 'Proteínas', href: 'proteinas.html', emoji: '🏋️'},
        {name: 'Termogénicos', href: 'termogenicos.html', emoji: '🔥'},
        {name: 'Creatinas', href: 'creatinas.html', emoji: '💪'},
        {name: 'Ganadores de Peso', href: 'ganadores-peso.html', emoji: '📈'},
        {name: 'Esenciales', href: 'esenciales.html', emoji: '🌟'},
        {name: 'Pre-Entreno', href: 'pre-entreno.html', emoji: '⚡'},
        {name: 'Veganos', href: 'veganos.html', emoji: '🌱'},
        {name: 'Snacks Saludables', href: 'snacks.html', emoji: '🍎'},
        {name: 'Energéticos', href: 'energeticos.html', emoji: '💥'}
    ];

    // Construir menú móvil
    mobileMenu.innerHTML = `
        <div class="mobile-menu-content">
            ${categories.map(cat => `
                <a href="${cat.href}" class="mobile-menu-item">
                    ${cat.emoji} ${cat.name}
                </a>
            `).join('')}
        </div>
    `;
    document.body.appendChild(mobileMenu);

    // Toggle menú móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && 
            !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Animaciones interactivas
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05) rotate(2deg)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Insertar estilos de menú móvil
document.head.insertAdjacentHTML('beforeend', mobileMenuStyles);
