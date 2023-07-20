
const news = document.querySelectorAll('.new');
const btMarcarComoLida = document.querySelector('.marcar-como-lida')
const numeroNotificacoes = document.querySelector('.numero-notificacoes');

news.forEach((neus) => {

    neus.innerHTML += `<div class="ponto-new"></div>`

})

numeroNotificacoes.innerHTML = `${news.length}`


btMarcarComoLida.addEventListener('click', () => {


    news.forEach((neus) => {

        neus.classList.remove('new');
        
        document.querySelector('.ponto-new').remove()
    })
   
    numeroNotificacoes.innerHTML = 0
})