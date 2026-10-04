
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});


navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

/*botoes pra escolher os cards*/ 
const btnAluno = document.getElementById('btn-aluno');
const btnCidadao = document.getElementById('btn-cidadao');
const btnEleitor = document.getElementById('btn-eleitor');

const cardAluno = document.getElementById('card-aluno');
const cardCidadao = document.getElementById('card-cidadao');
const cardEleitor = document.getElementById('card-eleitor');

const allBtns = [btnAluno, btnCidadao, btnEleitor];
const allCards = [cardAluno, cardCidadao, cardEleitor];

function switchTab(activeBtn, activeCard) {
    allBtns.forEach(btn => btn.classList.remove('active'));
    allCards.forEach(card => card.classList.remove('active'));
    activeBtn.classList.add('active');
    activeCard.classList.add('active');
}

btnAluno.addEventListener('click', () => switchTab(btnAluno, cardAluno));
btnCidadao.addEventListener('click', () => switchTab(btnCidadao, cardCidadao));
btnEleitor.addEventListener('click', () => switchTab(btnEleitor, cardEleitor));

//animação letra por letra

function animarLetras(elemento, delayInicial) {
    const texto = elemento.textContent;
    elemento.textContent = '';
    let delay = delayInicial;

    for (let i = 0; i < texto.length; i++) {
        const span = document.createElement('span');
        span.classList.add('letra');

        if (texto[i] === ' ') {
            span.classList.add('letra-espaco');
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = texto[i];
        }

        span.style.animationDelay = delay + 'ms';
        elemento.appendChild(span);
        delay += 35;
    }

    return delay;
}

// Animação do container textos
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.container-titulo h1');
    const subtitulo = document.querySelector('.container-titulo h2');
    const paragrafo = document.querySelector('.container-paragrafo p');

    let delay = 200; // delay inicial

    if (titulo) {
        delay = animarLetras(titulo, delay);
    }
    if (subtitulo) {
        delay = animarLetras(subtitulo, delay);
    }
    if (paragrafo) {
        delay = animarLetras(paragrafo, delay + 150); // pausa entre título e parágrafo
    }

    // ====== IntersectionObserver — animações ao scroll ======

    const observerOptions = { threshold: 0.15 };

    const headerIdades = document.querySelector('.header-info-idades');

    // 1) .container-fontes → slideFromLeft (mesma dos cards)
    const fontes = document.querySelector('.container-fontes');
    if (fontes) {
        const fontesObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);
        fontesObserver.observe(fontes);
    }

    const textosIdades = document.querySelectorAll('.container-textos-info-idades');
    const idades = document.querySelector('.idades');
    const linhaCrono = document.querySelector('.linha-cronologica');

    const slideObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (headerIdades) slideObserver.observe(headerIdades);
    textosIdades.forEach(el => slideObserver.observe(el));
    if (idades) slideObserver.observe(idades);
    if (linhaCrono) slideObserver.observe(linhaCrono);
});

console.log('pedro peida caldo de cana');

