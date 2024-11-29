document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobileMenu';
    mobileMenu.classList.add('mobile-menu');

    // Categorías de productos
    const categories = [
        {name: 'Proteínas', href: 'proteinas.html', emoji: '🏋️', color: '#3B82F6'},
        {name: 'Termogénicos', href: 'termogenicos.html', emoji: '🔥', color: '#EF4444'},
        {name: 'Creatinas', href: 'creatinas.html', emoji: '💪', color: '#10B981'},
        {name: 'Ganadores de Peso', href: 'ganadores-peso.html', emoji: '📈', color: '#F59E0B'},
        {name: 'Esenciales', href: 'esenciales.html', emoji: '🌟', color: '#8B5CF6'},
        {name: 'Pre-Entreno', href: 'pre-entreno.html', emoji: '⚡', color: '#6366F1'},
        {name: 'Veganos', href: 'veganos.html', emoji: '🌱', color: '#22C55E'},
        {name: 'Snacks Saludables', href: 'snacks.html', emoji: '🍎', color: '#F43F5E'},
        {name: 'Energéticos', href: 'energeticos.html', emoji: '💥', color: '#FF6B6B'},
        // Nueva categoría añadida
        {name: 'Accesorios y Ropa', href: 'accesorios-ropa.html', emoji: '👕', color: '#34D399'}
    ];

    // Construir menú móvil dinámico
    mobileMenu.innerHTML = `
        <div class="mobile-menu-content">
            ${categories.map(cat => `
                <a href="${cat.href}" class="mobile-menu-item ${cat.name.replace(/\s/g, '').toLowerCase()}" style="border-left: 5px solid ${cat.color}">
                    ${cat.emoji} ${cat.name}
                </a>
            `).join('')}
        </div>
    `;
    document.body.appendChild(mobileMenu);

    // Toggle menú móvil con animaciones
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Animación de menú
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.style.animation = 'slideIn 0.3s forwards';
            } else {
                mobileMenu.style.animation = 'slideOut 0.3s forwards';
            }
        });
    }

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (event) => {
        if (mobileMenu.classList.contains('active') && 
            !menuToggle.contains(event.target) && 
            !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            mobileMenu.style.animation = 'slideOut 0.3s forwards';
        }
    });

    // Animaciones interactivas de categorías
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach((item, index) => {
        // Efecto de vibración
        item.addEventListener('mouseenter', () => {
            item.style.transform = `scale(1.05) rotate(${Math.random() * 4 - 2}deg)`;
            item.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
            item.style.zIndex = '1';
        });

        // Animación de entrada escalonada
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });

    // Función adicional para interactividad de categorías
    function showProductAlert(category) {
        alert(`Categoría seleccionada: ${category}`);
    }

    // Conectar interactividad de categorías con alertas
    document.querySelectorAll('.mobile-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const category = item.textContent.trim(); // Obtener nombre de la categoría
            showProductAlert(category);
        });
    });

    // Animaciones CSS adicionales para el menú
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        @keyframes slideIn {
            from { left: -100%; }
            to { left: 0; }
        }
        @keyframes slideOut {
            from { left: 0; }
            to { left: -100%; }
        }
    `;
    document.head.appendChild(styleElement);
});
