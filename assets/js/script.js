window.addEventListener('load', () => {
    const element = document.querySelector('.animated-element');
    element.style.opacity = 0;
    element.style.transform = 'translateY(-50px)';

    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
    }, 500);
});