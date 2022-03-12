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
playSlide = setInterval(play, 2000);    
};

const previous = () => {
stop()
    if(index == 1){
        index = images.length ;
    }
    if(index >= 0){
        index--;
        imgElement.setAttribute('src', images[index]);
    }

    playSlide = setInterval(play, 2000);
}


const play = () =>{
console.log(images[index])
    if(index < images.length){
        imgElement.setAttribute('src', images[index]);
        index++;
    }
    if(index >= images.length ){
        index = 0;
    }
}

let playSlide = setInterval(play, 2000);


