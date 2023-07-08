document.addEventListener('DOMContentLoaded',function esculturasGaleria(){
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
        {img: 'imagenes/Galeria/esculturas/la punta del iceberg/13pun.jpg'},

        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/1evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/2evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/3evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/4evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/5evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/6evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/7evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/8evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/9evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/10evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/11evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/12evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/13evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/14evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/15evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/16evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/17evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/18evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/19evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/20evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/21evu.jpg'},
        {img: 'imagenes/Galeria/esculturas/evolucion de la materia/22evu.jpg'},

        {img: 'imagenes/Galeria/esculturas/lazos de union/1laz.jpg'},
        {img: 'imagenes/Galeria/esculturas/lazos de union/2laz.jpg'},
        {img: 'imagenes/Galeria/esculturas/lazos de union/3laz.jpg'},
        {img: 'imagenes/Galeria/esculturas/lazos de union/4laz.jpg'},
        {img: 'imagenes/Galeria/esculturas/lazos de union/5laz.jpg'},
        {img: 'imagenes/Galeria/esculturas/lazos de union/6laz.jpg'},
        {img: 'imagenes/Galeria/esculturas/lazos de union/7laz.jpg'},

        {img: 'imagenes/Galeria/esculturas/renacimiento/1ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/2ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/3ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/4ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/5ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/6ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/7ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/8ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/9ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/10ren.jpg'},
        {img: 'imagenes/Galeria/esculturas/renacimiento/11ren.jpg'},

        {img:'imagenes/Galeria/esculturas/resplandor/res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/1res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/2res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/3res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/4res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/5res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/6res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/7res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/8res.jpg'},
        {img:'imagenes/Galeria/esculturas/resplandor/9res.jpg'},
        
        {img:'imagenes/Galeria/esculturas/todos con paula/1pau.jpg'},
        {img:'imagenes/Galeria/esculturas/todos con paula/2pau.jpg'},
        {img:'imagenes/Galeria/esculturas/todos con paula/3pau.jpg'},
        {img:'imagenes/Galeria/esculturas/todos con paula/4pau.jpg'},
        {img:'imagenes/Galeria/esculturas/todos con paula/5pau.jpg'},
        {img:'imagenes/Galeria/esculturas/todos con paula/6pau.jpg'},
        {img:'imagenes/Galeria/esculturas/todos con paula/7pau.jpg'},
        {img:'imagenes/Galeria/esculturas/todos con paula/8pau.jpg'},

        {img:'imagenes/Galeria/esculturas/viveros/vive1.jpg'},
        {img:'imagenes/Galeria/esculturas/viveros/vive2.jpg'},
        {img:'imagenes/Galeria/esculturas/viveros/vive3.jpg'},
        {img:'imagenes/Galeria/esculturas/viveros/vive4.jpg'},
        {img:'imagenes/Galeria/esculturas/viveros/vive5.jpg'},
        {img:'imagenes/Galeria/esculturas/viveros/vive6.jpg'},
        {img:'imagenes/Galeria/esculturas/viveros/vive7.jpg'},

        {img: 'imagenes/Galeria/esculturas/viveros ollo redondo/vivtro1.jpg'},
        {img: 'imagenes/Galeria/esculturas/viveros ollo redondo/vivtro2.jpg'},
        {img: 'imagenes/Galeria/esculturas/viveros ollo redondo/vivtro3.jpg'},
        {img: 'imagenes/Galeria/esculturas/viveros ollo redondo/vivtro4.jpg'},
        {img: 'imagenes/Galeria/esculturas/viveros ollo redondo/vivtro5.jpg'},
        {img: 'imagenes/Galeria/esculturas/viveros ollo redondo/vivtro6.jpg'},
        {img: 'imagenes/Galeria/esculturas/viveros ollo redondo/vivtro7.jpg'},
        {img: 'imagenes/Galeria/esculturas/viveros ollo redondo/vivtro8.jpg'},

        {img:'imagenes/Galeria/esculturas/la ejecucion/eje16.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje1.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje2.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje3.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje4.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje5.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje6.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje7.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje8.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje9.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje10.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje11.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje12.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje13.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje14.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje15.jpg'},
        {img:'imagenes/Galeria/esculturas/la ejecucion/eje17.jpg'},

        {img:'imagenes/Galeria/esculturas/un sueño/su2.jpg'},
        {img:'imagenes/Galeria/esculturas/un sueño/su1.jpg'},
        {img:'imagenes/Galeria/esculturas/un sueño/su3.jpg'},
        {img:'imagenes/Galeria/esculturas/un sueño/su4.jpg'},
        {img:'imagenes/Galeria/esculturas/un sueño/su5.jpg'},
        {img:'imagenes/Galeria/esculturas/un sueño/su6.jpg'},
        {img:'imagenes/Galeria/esculturas/un sueño/su7.jpg'},

        {img:'imagenes/Galeria/esculturas/homenaje dally/ho1.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho2.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho3.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho4.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho5.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho6.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho7.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho8.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho9.jpg'},
        {img:'imagenes/Galeria/esculturas/homenaje dally/ho10.jpg'},

        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca10.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca1.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca2.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca3.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca4.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca5.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca6.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca7.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca8.jpg'},
        {img:'imagenes/Galeria/esculturas/calentamiento hormal/ca9.jpg'},

        {img:'imagenes/Galeria/esculturas/mi corazon/co7.jpg'},
        {img:'imagenes/Galeria/esculturas/mi corazon/co1.jpg'},
        {img:'imagenes/Galeria/esculturas/mi corazon/co2.jpg'},
        {img:'imagenes/Galeria/esculturas/mi corazon/co3.jpg'},
        {img:'imagenes/Galeria/esculturas/mi corazon/co4.jpg'},
        {img:'imagenes/Galeria/esculturas/mi corazon/co5.jpg'},
        {img:'imagenes/Galeria/esculturas/mi corazon/co6.jpg'},

        {img:'imagenes/Galeria/esculturas/herido/herido.jpg'},

        {img:'imagenes/Galeria/esculturas/la rosa/ros2.jpg'},
        {img:'imagenes/Galeria/esculturas/la rosa/ros1.jpg'},

        {img:'imagenes/Galeria/esculturas/equilibrio/equi1.jpg'},
        {img:'imagenes/Galeria/esculturas/equilibrio/equi2.jpg'},

        {img:'imagenes/Galeria/esculturas/la mariposa/mariposa.jpg'},

        {img:'imagenes/Galeria/esculturas/suministro/sumi2.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi1.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi3.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi4.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi5.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi6.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi7.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi8.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi9.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi10.jpg'},
        {img:'imagenes/Galeria/esculturas/suministro/sumi11.jpg'},

        {img:'imagenes/Galeria/esculturas/malos tiempos/mal8.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal1.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal2.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal3.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal4.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal5.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal6.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal7.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal9.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/mal10.jpg'},
        {img:'imagenes/Galeria/esculturas/malos tiempos/malos tiempos.jpg'},

        {img:'imagenes/Galeria/esculturas/desconexion/desco5.jpg'},
        {img:'imagenes/Galeria/esculturas/desconexion/desco1.jpg'},
        {img:'imagenes/Galeria/esculturas/desconexion/desco2.jpg'},
        {img:'imagenes/Galeria/esculturas/desconexion/desco3.jpg'},
        {img:'imagenes/Galeria/esculturas/desconexion/desco4.jpg'},

        {img:'imagenes/Galeria/esculturas/riqueza natural/ri1.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri2.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri3.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri4.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri5.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri6.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri7.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri8.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri9.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri10.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri11.jpg'},
        {img:'imagenes/Galeria/esculturas/riqueza natural/ri12.jpg'},

        {img:'imagenes/Galeria/esculturas/coxapo/cox1.jpg'},
        {img:'imagenes/Galeria/esculturas/coxapo/cox2.jpg'},
        {img:'imagenes/Galeria/esculturas/coxapo/cox3.jpg'},
        {img:'imagenes/Galeria/esculturas/coxapo/cox4.jpg'},
        {img:'imagenes/Galeria/esculturas/coxapo/cox5.jpg'},
        {img:'imagenes/Galeria/esculturas/coxapo/cox6.jpg'}
        
        
    ]

    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    let containeresculturas = document.querySelectorAll('.imagenescultura img')
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

    Array.from(containeresculturas).forEach(img =>{
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

document.addEventListener('DOMContentLoaded',function trofeosGaleria(){
    
    let imagenestrofeos = [
        {img:'imagenes/Galeria/trofeos/1ºencuentro/encue1.jpg'},
        {img:'imagenes/Galeria/trofeos/1ºencuentro/encue2.jpg'},
        {img:'imagenes/Galeria/trofeos/1ºencuentro/encue3.jpg'},
        {img:'imagenes/Galeria/trofeos/1ºencuentro/encue4.jpg'},

        {img:'imagenes/Galeria/trofeos/la locomotora/1loco.jpg'},
        {img:'imagenes/Galeria/trofeos/la locomotora/2loco.jpg'},
        {img:'imagenes/Galeria/trofeos/la locomotora/3loco.jpg'},
        {img:'imagenes/Galeria/trofeos/la locomotora/4loco.jpg'},
        {img:'imagenes/Galeria/trofeos/la locomotora/5loco.jpg'},
        {img:'imagenes/Galeria/trofeos/la locomotora/6loco.jpg'},

        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas8.jpg'},
        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas1.jpg'},
        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas2.jpg'},
        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas3.jpg'},
        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas4.jpg'},
        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas5.jpg'},
        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas6.jpg'},
        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas7.jpg'},
    

        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas10.jpg'},
        {img:'imagenes/Galeria/trofeos/pasion por el futbol/pas9.jpg'},

        {img:'imagenes/Galeria/trofeos/mapfre/mapfre2.jpg'},
        {img:'imagenes/Galeria/trofeos/mapfre/mapfre1.jpg'},
        {img:'imagenes/Galeria/trofeos/mapfre/mapfre3.jpg'},
        {img:'imagenes/Galeria/trofeos/mapfre/mapfre4.jpg'},
        {img:'imagenes/Galeria/trofeos/mapfre/mapfre5.jpg'},

        {img:'imagenes/Galeria/trofeos/encargo deportivo/enca1.jpg'},

        {img:'imagenes/Galeria/trofeos/karaoke/ka4.jpg'},
        {img:'imagenes/Galeria/trofeos/karaoke/ka1.jpg'},
        {img:'imagenes/Galeria/trofeos/karaoke/ka2.jpg'},
        {img:'imagenes/Galeria/trofeos/karaoke/ka3.jpg'},


        {img:'imagenes/Galeria/trofeos/personalidades mundo agua/perso4.jpg'},
        {img:'imagenes/Galeria/trofeos/personalidades mundo agua/perso1.jpg'},
        {img:'imagenes/Galeria/trofeos/personalidades mundo agua/perso2.jpg'},
        {img:'imagenes/Galeria/trofeos/personalidades mundo agua/perso3.jpg'},
        {img:'imagenes/Galeria/trofeos/personalidades mundo agua/perso5.jpg'},
        {img:'imagenes/Galeria/trofeos/personalidades mundo agua/perso6.jpg'},
        {img:'imagenes/Galeria/trofeos/personalidades mundo agua/perso7.jpg'},
        {img:'imagenes/Galeria/trofeos/personalidades mundo agua/perso8.jpg'}
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshowtrofeos')
    const overlay = document.querySelector('.overlaytrofeos')
    let containertrofeos = document.querySelectorAll('.imagentrofeos img')
    const img_slideshow = document.querySelector('.slideshowtrofeos img')

    contenedor.addEventListener('click', function(event){
        let atras = contenedor.querySelector('.atrastrofeos'),
            adelante = contenedor.querySelector('.adelantetrofeos'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras){
            if (contador > 0) {
                img.src = imagenestrofeos[contador - 1].img
                contador--
            } else {
                img.src = imagenestrofeos[imagenestrofeos.length - 1].img        
                contador = imagenestrofeos.length - 1
            }
        }else if (tgt == adelante){
            if (contador < imagenestrofeos.length - 1){
                    img.src = imagenestrofeos[contador + 1].img
                    contador++
            }else{
                    img.src = imagenestrofeos[0].img
                    contador = 0
            }
        }
                
    })

    Array.from(containertrofeos).forEach(img =>{
        img.addEventListener('click', event =>{
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenestrofeos[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.bi-bi-x-circle-filltrofeos').addEventListener('click',() =>{
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })
})



