document.addEventListener('DOMContentLoaded', function () {
    const aufdeckungen = document.querySelectorAll('.js-aufdeckung');

    aufdeckungen.forEach(function (element) {
        const wrapper = element.querySelector('.aufdeckung-image-wrapper');

        if (!wrapper) {
            return;
        }

        function updatePosition(clientX, clientY) {
            const rect = wrapper.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            wrapper.style.setProperty('--x', x + 'px');
            wrapper.style.setProperty('--y', y + 'px');
        }

        function hideSpotlight() {
            wrapper.style.setProperty('--x', '-9999px');
            wrapper.style.setProperty('--y', '-9999px');
        }

        wrapper.addEventListener('mouseenter', function (event) {
            updatePosition(event.clientX, event.clientY);
        });

        wrapper.addEventListener('mousemove', function (event) {
            updatePosition(event.clientX, event.clientY);
        });

        wrapper.addEventListener('mouseleave', hideSpotlight);

        wrapper.addEventListener('touchstart', function (event) {
            if (!event.touches.length) {
                return;
            }
            updatePosition(event.touches[0].clientX, event.touches[0].clientY);
        }, { passive: true });

        wrapper.addEventListener('touchmove', function (event) {
            if (!event.touches.length) {
                return;
            }
            updatePosition(event.touches[0].clientX, event.touches[0].clientY);
        }, { passive: true });

        wrapper.addEventListener('touchend', hideSpotlight);
    });
});
