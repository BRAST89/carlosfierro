document.addEventListener('DOMContentLoaded',function (){
    let imagenes = [
        {img: '/imagenes/Galeria/esculturas/tierra viva/2.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/1.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/3.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/4.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/5.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/6.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/7.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/8.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/9.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/9.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/10.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/11.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/12.jpg'},
        {img: '/imagenes/Galeria/esculturas/tierra viva/13.jpg'},
       
        {img: '/imagenes/Galeria/esculturas/la cobra/1cobra.jpg'},
        {img: '/imagenes/Galeria/esculturas/la cobra/2cobra.jpg'},
        {img: '/imagenes/Galeria/esculturas/la cobra/3cobra.jpg'},
        {img: '/imagenes/Galeria/esculturas/la cobra/4cobra.jpg'},
        {img: '/imagenes/Galeria/esculturas/la cobra/5cobra.jpg'},
        {img: '/imagenes/Galeria/esculturas/la cobra/6cobra.jpg'},
        {img: '/imagenes/Galeria/esculturas/la cobra/7cobra.jpg'},
        {img: '/imagenes/Galeria/esculturas/la cobra/8cobra.jpg'},
        {img: '/imagenes/Galeria/esculturas/la cobra/9cobra.jpg'}
    ]
    
    
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const containerEsculturas = document.querySelectorAll('.imagenescultura img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function(event){
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras){
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante){
            if (contador < imagenes.length - 1){
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }        
    })

    Array.from(containerEsculturas).forEach(img =>{
        img.addEventListener('click', event =>{
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.bi-bi-x-circle-fill').addEventListener('click',() =>{
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

})