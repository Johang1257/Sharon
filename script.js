document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');

    const createHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duración aleatoria entre 3 y 5 segundos
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remueve el corazón después de 5 segundos
    };

    setInterval(createHeart, 300); // Crea un nuevo corazón cada 300ms
});
