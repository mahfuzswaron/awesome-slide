const images = [
    '/images/img-1.jpg',
    '/images/img-2.jpg',
    '/images/img-3.jpg',
    '/images/img-4.jpg',
    '/images/img-5.jpg',
    '/images/img-6.jpg',
    '/images/img-7.jpg',
    '/images/img-8.jpg',
    '/images/img-9.jpg',
    '/images/img-10.jpg'
];

let index = 0;
const imgElement = document.getElementById('img-slider');

const stop = () =>{
    console.log('pressed');
    clearInterval(playSlide);
}

const next = () => {
stop()
play()
playSlide = setInterval(play, 1000);    
};

const previous = () => {
stop()
    if(index == 1){
        index = images.length-1 ;
    }
    if(index >= 0){
        index--;
        imgElement.setAttribute('src', images[index]);
    }

    playSlide = setInterval(play, 1000);
}


const play = () =>{

    if(index<= images.length){
        index++;
        imgElement.setAttribute('src', images[index]);
    }
    if(index == images.length-1 ){
        index = 0;
    }
}

let playSlide = setInterval(play, 1000);


