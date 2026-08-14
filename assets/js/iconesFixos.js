let navContatoEstaVisivel = true;
const navContato = document.getElementById("nav-contato");
const navPrincipal = document.getElementById("nav-principal");
const iconeTopo = document.getElementById("icone-topo");
const iconeWhatsapp = document.getElementById("icone-whatsapp");

iconeTopo.classList.add("animate__animated");
iconeWhatsapp.classList.add("animate__animated", "animate__fadeIn");

// Observador das navbars
const observadorNavbars = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navContatoEstaVisivel = true;
            navPrincipal.classList.remove("sticky-top");

            iconeTopo.classList.remove("animate__fadeIn");
            iconeTopo.classList.add("animate__fadeOut");
        } else {
            navContatoEstaVisivel = false;
            navPrincipal.classList.add("sticky-top");

            iconeTopo.style.display = "flex";
            iconeTopo.classList.remove("animate__fadeOut");
            iconeTopo.classList.add("animate__fadeIn");
        }
    });
}, {
    root: null,
    threshold: 0
});

// Iniciando observador
observadorNavbars.observe(navContato);