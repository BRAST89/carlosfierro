document.addEventListener('DOMContentLoaded',function (){
    let imagenes = [
        {img: 'imagenes/Galeria/esculturas/tierra viva/2.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/1.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/3.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/4.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/5.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/6.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/7.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/8.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/9.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/10.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/11.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/12.jpg'},
        {img: 'imagenes/Galeria/esculturas/tierra viva/13.jpg'},
        
        {img: 'imagenes/Galeria/esculturas/la cobra/1cobra.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cobra/2cobra.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cobra/3cobra.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cobra/4cobra.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cobra/5cobra.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cobra/6cobra.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cobra/7cobra.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cobra/8cobra.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cobra/9cobra.jpg'},

        {img: 'imagenes/Galeria/esculturas/grita libertad/19liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/1liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/2liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/3liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/4liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/5liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/6liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/7liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/8liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/9liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/10liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/11liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/12liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/13liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/14liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/15liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/16liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/17liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/18liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/20liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/21liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/22liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/23liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/24liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/25liber.jpg'},
        {img: 'imagenes/Galeria/esculturas/grita libertad/26liber.jpg'},

        {img: 'imagenes/Galeria/esculturas/Tormenta/1tor.jpg'},
        {img: 'imagenes/Galeria/esculturas/Tormenta/2tor.jpg'},
        {img: 'imagenes/Galeria/esculturas/Tormenta/3tor.jpg'},
        {img: 'imagenes/Galeria/esculturas/Tormenta/4tor.jpg'},
        {img: 'imagenes/Galeria/esculturas/Tormenta/5tor.jpg'},
        {img: 'imagenes/Galeria/esculturas/Tormenta/6tor.jpg'},

        {img: 'imagenes/Galeria/esculturas/Union/1uni.jpg'},
        {img: 'imagenes/Galeria/esculturas/Union/2uni.jpg'},
        {img: 'imagenes/Galeria/esculturas/Union/3uni.jpg'},
        {img: 'imagenes/Galeria/esculturas/Union/4uni.jpg'},

        {img: 'imagenes/Galeria/esculturas/camino/4cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/1cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/2cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/3cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/5cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/6cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/7cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/8cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/9cam.jpg'},
        {img: 'imagenes/Galeria/esculturas/camino/10cam.jpg'},

        {img: 'imagenes/Galeria/esculturas/tiempos/1tie.jpg'},
        {img: 'imagenes/Galeria/esculturas/tiempos/2tie.jpg'},
        {img: 'imagenes/Galeria/esculturas/tiempos/3tie.jpg'},
        {img: 'imagenes/Galeria/esculturas/tiempos/4tie.jpg'},
        {img: 'imagenes/Galeria/esculturas/tiempos/5tie.jpg'},
        {img: 'imagenes/Galeria/esculturas/tiempos/6tie.jpg'},
        {img: 'imagenes/Galeria/esculturas/tiempos/7tie.jpg'},

        {img: 'imagenes/Galeria/esculturas/desayuno/1des.jpg'},
        {img: 'imagenes/Galeria/esculturas/desayuno/2des.jpg'},
        {img: 'imagenes/Galeria/esculturas/desayuno/3des.jpg'},
        {img: 'imagenes/Galeria/esculturas/desayuno/4des.jpg'},
        {img: 'imagenes/Galeria/esculturas/desayuno/5des.jpg'},
        {img: 'imagenes/Galeria/esculturas/desayuno/6des.jpg'},
        {img: 'imagenes/Galeria/esculturas/desayuno/7des.jpg'},

        {img: 'imagenes/Galeria/esculturas/reloj del tiempo/1re.jpg'},
        {img: 'imagenes/Galeria/esculturas/reloj del tiempo/2re.jpg'},
        {img: 'imagenes/Galeria/esculturas/reloj del tiempo/3re.jpg'},
        {img: 'imagenes/Galeria/esculturas/reloj del tiempo/4re.jpg'},
        {img: 'imagenes/Galeria/esculturas/reloj del tiempo/5re.jpg'},
        {img: 'imagenes/Galeria/esculturas/reloj del tiempo/6re.jpg'},
        {img: 'imagenes/Galeria/esculturas/reloj del tiempo/7re.jpg'},
        {img: 'imagenes/Galeria/esculturas/reloj del tiempo/8re.jpg'},

        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/1acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/2acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/3acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/4acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/5acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/6acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/7acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/8acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/9acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/10acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/11acer.jpg'},
        {img: 'imagenes/Galeria/esculturas/el acero inoxidable/12acer.jpg'},

        {img: 'imagenes/Galeria/esculturas/el quijote/4qui.jpg'},
        {img: 'imagenes/Galeria/esculturas/el quijote/1qui.jpg'},
        {img: 'imagenes/Galeria/esculturas/el quijote/2qui.jpg'},
        {img: 'imagenes/Galeria/esculturas/el quijote/3qui.jpg'},
        {img: 'imagenes/Galeria/esculturas/el quijote/5qui.jpg'},
        {img: 'imagenes/Galeria/esculturas/el quijote/6qui.jpg'},
        {img: 'imagenes/Galeria/esculturas/el quijote/7qui.jpg'},
        {img: 'imagenes/Galeria/esculturas/el quijote/8qui.jpg'},
        {img: 'imagenes/Galeria/esculturas/el quijote/9qui.jpg'},

        {img: 'imagenes/Galeria/esculturas/arbol/12ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/1ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/2ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/3ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/4ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/5ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/6ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/7ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/8ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/9ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/10ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/11ar.jpg'},
        {img: 'imagenes/Galeria/esculturas/arbol/13ar.jpg'},

        {img: 'imagenes/Galeria/esculturas/el pulmon/1pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/2pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/3pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/4pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/5pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/6pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/7pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/8pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/9pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/10pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/11pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/12pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/13pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/14pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/15pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/16pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/17pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/18pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/19pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/20pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/21pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/22pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/23pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/24pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/25pu.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon/26pu.jpg'},
        
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/3pul.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/1pul.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/2pul.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/4pul.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/5pul.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/6pul.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/7pul.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/8pul.jpg'},
        {img: 'imagenes/Galeria/esculturas/el pulmon 2(28-05-2014)/9pul.jpg'},

        {img: 'imagenes/Galeria/esculturas/la cigueña/1ci.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cigueña/2ci.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cigueña/3ci.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cigueña/4ci.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cigueña/5ci.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cigueña/6ci.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cigueña/7ci.jpg'},
        {img: 'imagenes/Galeria/esculturas/la cigueña/8ci.jpg'},
        
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/1pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/2pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/3pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/4pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/5pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/6pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/7pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/8pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/9pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/10pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/11pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/12pun.jpg'},
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/13pun.jpg'}

    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const containertierra = document.querySelectorAll('.imagenescultura img')
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
                img.src = imagenes[tierraviva.length - 1].img        
                contador = imagenes.length - 1
            }
        }else if (tgt == adelante){
            if (contador < imagenes.length - 1){
                    img.src = imagenes[contador + 1].img
                    contador++
            }else{
                    img.src = imagenes[0].img
                    contador = 0
            }
        }
                
    })

    Array.from(containertierra).forEach(img =>{
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
