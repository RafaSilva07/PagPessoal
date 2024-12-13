function toggleMenu() {
    const menu = document.getElementById('menu-lateral');
    const icon = document.getElementById('menu-icon');
    
    // Alterna a classe 'open' no menu e no ícone
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function scrollToSection(event, sectionId) {
    event.preventDefault(); // Evita a rolagem padrão
    const section = document.querySelector(sectionId);
    const offset = 80; // Ajuste a altura do seu cabeçalho fixo
    const sectionPosition = section.offsetTop - offset;

    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}