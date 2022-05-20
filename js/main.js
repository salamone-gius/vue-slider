// Partendo dal markup HTML allegato creare uno slider di immagini in VueJS:
// - istanzio Vue e lo salvo nella const 'app';
const app = new Vue(
    {
        // - richiamo con id dal DOM l'ELemento su cui andrà a girare il mio programma;
        el: "#root",
        data: {
            // - inizializzo a '0' una variabile che mi farà da index;
            index: 0,
            // - passo l'array a disposizione per l'esercizio come elemento di 'data';
            images: [
                {
                    src: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    src: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                {
                    src: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    src: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    src: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
            ],
            
        },
        // - dentro l'oggetto 'methods' inserisco le funzioni che mi servono per fa funzionare il codice;
        methods: {
            // - imposto la funzione 'nextImage':
            nextImage() {
                // - SE l'indice dell'array è uguale alla lunghezza dell'array -1...
                if (this.index === this.images.length - 1) {
                    // * ...setta l'indice a 0...
                    this.index = 0;
                // - ...ALTRIMENTI...
                } else {
                    // - ...incrementalo (aggiungi 1 all'indice);
                    this.index++;
                }
            },
            // - imposto la funzione 'prevImage':
            prevImage() {
                // - SE l'indice dell'array è uguale a 0...
                if (this.index === 0) {
                    // * ...setta l'indice a lunghezza dell'array -1...
                    this.index = this.images.length - 1;
                // - ...ALTRIMENTI...
                } else {
                    // - ...decrementalo (sottrai 1 all'indice);
                    this.index--;
                }
            },
            // - imposto la funzione 'clickImage':
            clickImage() {
            },
        },
    },
);


// BONUS.1 Al click su una thumb, visualizzare in grande l'immagine corrispondente
// BONUS.2 Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// BONUS.3 Quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
