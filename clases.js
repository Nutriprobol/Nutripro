document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('.product-name').textContent;
        const productSlug = card.dataset.product;

        // Agregar animaciones y eventos de clic
        card.addEventListener('click', () => {
            // Efecto de vibración
            card.style.animation = 'shake 0.5s';
            
            // Redirigir a página específica del producto
            setTimeout(() => {
                window.location.href = `${productSlug}.html`;
            }, 300);
        });

        // Eventos de hover con efectos de audio
        const hoverSound = new Audio('audio/hover-sound.mp3');
        card.addEventListener('mouseenter', () => {
            hoverSound.play();
            
            // Crear tooltip
            const tooltip = document.createElement('div');
            tooltip.classList.add('product-tooltip');
            tooltip.textContent = `Ver ${productName}`;
            card.appendChild(tooltip);
        });

        card.addEventListener('mouseleave', () => {
            const tooltip = card.querySelector('.product-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Añadir estilos de animación y tooltip
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        .product-tooltip {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: black;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.8rem;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
        }

        .product-card:hover .product-tooltip {
            opacity: 1;
        }
    `;
    document.head.appendChild(styleElement);
});
