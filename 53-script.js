// Entradas HTML
const navbarNavigation = document.querySelector(".navbar-navigation"); // Barra de Navegação Inteira
const navBtn = document.querySelector(".nav-btn"); // Menu de Navegação
const navbarContent = document.querySelector(".navbar-content"); //  Conteúdo da Barra de Navegação

// Evento ao Clicar no Botão de Menu
navBtn.addEventListener("click", () => {
    navbarContent.style.display = "flex"; // Flexbox
    navbarContent.style.flexDirection = "column"; // Alinha em Colunas
    navbarNavigation.style.alignItems = "center" // Alinha ao Centro
    navbarNavigation.style.justifyContent = "center" //Alinha ao Centro
    navBtn.style.display = "none"; // Esconde o Menu de Botão
});

//Adiciona Evento ao Clicar Fora do Botão de Menu
document.addEventListener("click", (event) => {
    const isClickedonMenu = navbarContent.contains(event.target); // Verifica se Clicou no Menu
    const isClickedOnMenuIcon = navBtn.contains(event.target); // Verifica se Clicou no Botão de Menu

    // Se Não Clicou no Menu ou no Botão, então reseta o Padrão Original
    if (!isClickedonMenu && !isClickedOnMenuIcon) {
        navbarContent.style.display = ""; // Reseta o Padrão Original
        navbarContent.style.flexDirection = ""; // Reseta o Padrão Original
        navbarNavigation.style.alignItems = "" // Reseta o Padrão Original
        navbarNavigation.style.justifyContent = "" // Reseta o Padrão Original
        navBtn.style.display = ""; // Reseta o Padrão Original
    }
});