// Banner
const elementoBanner = document.querySelector("#banner");
const elementosTitulosBanner = document.querySelectorAll("#banner .container h1");
const elementoParagrafoBanner = document.querySelector("#banner .container p");
const elementosLinksBanner = document.querySelectorAll("#banner .container a button");

elementosTitulosBanner[0].style.opacity = 0;
elementosTitulosBanner[1].style.opacity = 0;
elementoParagrafoBanner.style.opacity = 0;
elementosLinksBanner[0].style.opacity = 0;
elementosLinksBanner[1].style.opacity = 0;

// Soluções
const elementoSolucoes = document.querySelector("#solucoes");
const elementoSpanSolucoes = document.querySelector("#solucoes .container span:not(.solucao span)");
const elementoTituloSolucoes = document.querySelector("#solucoes .container h2");
const elementosParagrafosSolucoes = document.querySelectorAll("#solucoes .container p:not(.solucao p)");
const elementosSolucoes = document.querySelectorAll("#solucoes .container #lista-solucoes .col");
const elementoLinkSolucoes = document.querySelector("#solucoes .container a");

elementoSpanSolucoes.style.opacity = 0;
elementoTituloSolucoes.style.opacity = 0;
elementosParagrafosSolucoes[0].style.opacity = 0;
elementosParagrafosSolucoes[1].style.opacity = 0;
elementosSolucoes.forEach((elemento) => {
    elemento.style.opacity = 0;
});
elementoLinkSolucoes.style.opacity = 0;

// Como trabalhamos
const elementoComoTrabalhamos = document.querySelector("#como-trabalhamos");
const elementoSpanComoTrabalhamos = document.querySelector("#como-trabalhamos .container span:not(.etapa span)");
const elementoTituloComoTrabalhamos = document.querySelector("#como-trabalhamos .container h2");
const elementosParagrafosComoTrabalhamos = document.querySelectorAll("#como-trabalhamos .container p:not(.etapa p)");
const elementoListaEtapasComoTrabalhamos = document.querySelector("#como-trabalhamos .container #lista-etapas");
const elementosEtapasComoTrabalhamos = document.querySelectorAll("#como-trabalhamos .container #lista-etapas .etapa");

elementoSpanComoTrabalhamos.style.opacity = 0;
elementoTituloComoTrabalhamos.style.opacity = 0;
elementosParagrafosComoTrabalhamos[0].style.opacity = 0;
elementosParagrafosComoTrabalhamos[1].style.opacity = 0;
elementoListaEtapasComoTrabalhamos.style.opacity = 0;
elementosEtapasComoTrabalhamos.forEach((elemento) => {
    elemento.style.opacity = 0;
});

// Quem somos
const elementoQuemSomos = document.querySelector("#quem-somos");
const elementoSpanQuemSomos = document.querySelector("#quem-somos .container span");
const elementoImagemQuemSomos = document.querySelector("#quem-somos .container .container-lados .lado-esquerdo img");
const elementoTituloQuemSomos = document.querySelector("#quem-somos .container .container-lados .lado-direito h2");
const elementosParagrafosQuemSomos = document.querySelectorAll("#quem-somos .container .container-lados .lado-direito p");
const elementosCaracteristicasQuemSomos = document.querySelectorAll("#quem-somos .container #lista-caracteristicas .col");

elementoSpanQuemSomos.style.opacity = 0;
elementoImagemQuemSomos.style.opacity = 0;
elementoTituloQuemSomos.style.opacity = 0;
elementosParagrafosQuemSomos[0].style.opacity = 0;
elementosParagrafosQuemSomos[1].style.opacity = 0;
elementosCaracteristicasQuemSomos.forEach((elemento) => {
    elemento.style.opacity = 0;
});

// Contato
const elementoContato = document.querySelector("#contato");
const elementoSpanContato = document.querySelector("#contato .container span");
const elementoTituloContato = document.querySelector("#contato .container h2");
const elementoParagrafoContato = document.querySelector("#contato .container p");
const elementosLinksContato = document.querySelectorAll("#contato .container .container-lados .lado-esquerdo .row");
const elementoFormularioContato = document.querySelector("#contato .container .container-lados .lado-direito");

elementoSpanContato.style.opacity = 0;
elementoTituloContato.style.opacity = 0;
elementoParagrafoContato.style.opacity = 0;
elementosLinksContato.forEach((elemento) => {
    elemento.style.opacity = 0;
});
elementoFormularioContato.style.opacity = 0;

//
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;

            // Banner
            if (target.id == "banner") {
                elementosTitulosBanner[0].classList.add("animate__fadeInUp");

                setTimeout(() => {
                    elementosTitulosBanner[1].classList.add("animate__fadeInUp");
                }, 200);
                
                setTimeout(() => {
                    elementoParagrafoBanner.classList.add("animate__fadeInUp");
                }, 400);

                setTimeout(() => {
                    elementosLinksBanner[0].classList.add("animate__fadeInRight");

                    setTimeout(() => {
                        elementosLinksBanner[0].style.opacity = 1;
                        elementosLinksBanner[0].classList.remove("animate__fadeInRight");
                    }, 900);
                }, 600);

                setTimeout(() => {
                    elementosLinksBanner[1].classList.add("animate__fadeInRight");

                    setTimeout(() => {
                        elementosLinksBanner[1].style.opacity = 1;
                        elementosLinksBanner[1].classList.remove("animate__fadeInRight");
                    }, 1100);
                }, 800);

                observador.unobserve(elementoBanner);
            }

            // Soluções
            if (target.id == "solucoes") {
                setTimeout(() => {
                    elementoSpanSolucoes.classList.add("animate__fadeIn");
                }, 300);

                setTimeout(() => {
                    elementoTituloSolucoes.classList.add("animate__fadeInUp");
                }, 500);
                
                setTimeout(() => {
                    elementosParagrafosSolucoes[0].classList.add("animate__fadeInUp");
                }, 700);

                setTimeout(() => {
                    elementosSolucoes.forEach((elemento, index) => {
                        setTimeout(() => {
                            elemento.classList.add("animate__fadeInUp");
                        }, index * 220);
                    });
                }, 800);
                
                setTimeout(() => {
                    elementosParagrafosSolucoes[1].classList.add("animate__fadeInUp");
                }, 2800);
                
                setTimeout(() => {
                    elementoLinkSolucoes.classList.add("animate__fadeInUp");
                }, 3000);

                observador.unobserve(elementoSolucoes);
            }

            // Como trabalhamos
            if (target.id == "como-trabalhamos") {
                setTimeout(() => {
                    elementoSpanComoTrabalhamos.classList.add("animate__fadeIn");
                }, 300);
                
                setTimeout(() => {
                    elementoTituloComoTrabalhamos.classList.add("animate__fadeInUp");
                }, 500);
                
                setTimeout(() => {
                    elementosParagrafosComoTrabalhamos[0].classList.add("animate__fadeInUp");
                }, 700);

                setTimeout(() => {
                    elementosParagrafosComoTrabalhamos[1].classList.add("animate__fadeInUp");
                }, 900);
                
                setTimeout(() => {
                    elementoListaEtapasComoTrabalhamos.classList.add("animate__fadeIn");
                    
                    elementosEtapasComoTrabalhamos.forEach((elemento, index) => {
                        setTimeout(() => {
                            elemento.classList.add("animate__fadeInUp");
                        }, index * 220);
                    });
                }, 1100);

                observador.unobserve(elementoComoTrabalhamos);
            }

            // Quem somos
            if (target.id == "quem-somos") {
                setTimeout(() => {
                    elementoSpanQuemSomos.classList.add("animate__fadeIn");
                }, 300);
                
                setTimeout(() => {
                    elementoImagemQuemSomos.classList.add("animate__fadeInRight");
                }, 500);
                
                setTimeout(() => {
                    elementoTituloQuemSomos.classList.add("animate__fadeInRight");
                }, 900);
                
                setTimeout(() => {
                    elementosParagrafosQuemSomos[0].classList.add("animate__fadeInUp");
                }, 1100);
                
                setTimeout(() => {
                    elementosParagrafosQuemSomos[1].classList.add("animate__fadeInUp");
                }, 1300);
                
                setTimeout(() => {
                    elementosCaracteristicasQuemSomos.forEach((elemento, index) => {
                        setTimeout(() => {
                            elemento.classList.add("animate__fadeInRight");
                        }, index * 220);
                    });
                }, 1800);

                observador.unobserve(elementoQuemSomos);
            }

            // Contato
            if (target.id == "contato") {
                setTimeout(() => {
                    elementoSpanContato.classList.add("animate__fadeIn");
                }, 300);
                
                setTimeout(() => {
                    elementoTituloContato.classList.add("animate__fadeInUp");
                }, 500);
                
                setTimeout(() => {
                    elementoParagrafoContato.classList.add("animate__fadeInUp");
                }, 700);
                
                setTimeout(() => {
                    elementoFormularioContato.classList.add("animate__fadeIn");
                }, 900);
                
                setTimeout(() => {
                    elementosLinksContato.forEach((elemento, index) => {
                        setTimeout(() => {
                            elemento.classList.add("animate__fadeInUp");
                        }, index * 280);
                    });
                }, 1300);

                observador.unobserve(elementoContato);
            }
        }
    });
}, {
    threshold: 0
});

// Iniciando observador em todas as seções
observador.observe(elementoBanner);
observador.observe(elementoSolucoes);
observador.observe(elementoComoTrabalhamos);
observador.observe(elementoQuemSomos);
observador.observe(elementoContato);