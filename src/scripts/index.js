// Any code you will write for your website (in the future!) should go here

// showPlayer = e => {
//     let pl = document.querySelector(".player");
//     pl.classList.add('active');

// }


// hidePlayer = e => {
//     let pl = document.querySelector(".player");
//     pl.classList.remove('active');
// }

//oder alles in einer  toggle


let data = [
    {
        title: 'Nick Cave and the Bad Seeds',
        thumb: '../images/1.jpg',
        videoURL: '1'
    },
    {
        title: 'Radiohead',
        thumb: '../images/2.jpg',
        videoURL: '2'
    },
    {
        title: 'Fleet Foxes',
        thumb: '../images/3.jpg',
        videoURL: '3'
    },
    {
        title: 'The National',
        thumb: '../images/4.jpg',
        videoURL: '4'
    },
    {
        title: 'Nick Cave and the Bad Seeds',
        thumb: '../images/1.jpg',
        videoURL: '1'
    },
    {
        title: 'Radiohead',
        thumb: '../images/2.jpg',
        videoURL: '2'
    },
    {
        title: 'Fleet Foxes',
        thumb: '../images/3.jpg',
        videoURL: '3'
    },
    {
        title: 'The National',
        thumb: '../images/4.jpg',
        videoURL: '4'
    },
];

updateVideo = url => {
    let src = `../images/videos/${url}.mp4`
    let vid = document.createElement('video');      //video ist tag
    vid.src = src;
    vid.autoplay = true;
    vid.controls = true;       
    let vidParent = document.querySelector('.video-container');
    vidParent.appendChild(vid);
}

togglePlayer = e => {                           
    let pl = document.querySelector(".player");
     pl.classList.toggle("active");

        
    let vidParent = document.querySelector('.video-container');
    vidParent.innerHTML = "";   
    let url = e.currentTarget.getAttribute('data-url');
    if(url) updateVideo(url);       
}


generateVideoThumbs = data => {
    data.forEach (el => {
        let parent = document.createElement('div'); 
        parent.classList.add("video-thumb");
        parent.addEventListener("click", togglePlayer); 
        parent.dataset.url = el.videoURL;      
        

        let title = document.createElement("p");
        title.innerText = el.title;

        let imgCont = document.createElement("div");
        imgCont.classList.add('img-cont');

        let img = document.createElement("img");
        img.src = el.thumb;    


        imgCont.appendChild(img);
        parent.appendChild(imgCont);
        parent.appendChild(title);

        let vidCont = document.querySelector('.cont');
        vidCont.appendChild(parent);  
    });
}

generateVideoThumbs(data);



let close = document.querySelector('.close');
close.addEventListener('click', togglePlayer);




/* 
- mit dataset kann man selbst ein attribute definieren
- e bei togglePlayer ist das event; e und event ist das meist Verwendete

let vidParent = document.querySelector('.video-container');
vidParent.innerHTML = "";   //das und das dadrüber braucht man, damit nicht ein Video nach dem anderen appended wird


let url = e.currentTarget.getAttribute('data-url');   //data ist automatisch hinzugefügt
if(url) updateVideo(url); //if true (also if it happens, Zeile dadrüber), run it; if not, also undefined z. B. dann nicht

- parent in generateVideoThumbs(data) ist div video-thumb
- img.src = el.thumb;     img ist hier definiert, soll dann in HTML in src von img src gehen


- parent.addEventListener("click", togglePlayer);     
    --> click event on the container that contains the image
- parent.dataset.url = el.videoURL;      url kann auch anders heißen


- vidCont.appendChild(parent);    append parent to vidCont


- vid.controls = true;        navigation bar im Video
*/