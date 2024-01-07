let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById('myprogressbar')
let audioElement  = new Audio('songs/1.mp3')
let songindex = 1
let mastersongname = document.getElementById('mastersongname')
let songitem = Array.from(document.getElementsByClassName('songitem'))

let songs = [
    {songname:'CASE-DILJIT', filepath:'songs/Case.mp3', coverpath:'covers/cover1.jfif'},
    {songname:'DONT-WORRY-KARAN-AUJLA', filepath:'songs/Dont_Worry_1.mp3', coverpath:'covers/cover4.jpg'},
    {songname:'JEE-NI-LAGDA-KARAN-AUJLA', filepath:'songs/Jee_Ni_Lagda.mp3', coverpath:'covers/cover5.jpeg'},
    {songname:'SOFTLY-KARNA-AUJLA', filepath:'songs/Softly.mp3', coverpath:'covers/cover2.jfif'},
    {songname:'UNHOLY', filepath:'songs/Unholy.mp3', coverpath:'covers/cover6.jpg'},
]

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterplay.classList.remove('fa-play')

        masterplay.classList.add('fa-pause')
              Array.from(document.getElementsByClassName('songitemplay'))[songindex - 1].classList.remove('fa-play')
              Array.from(document.getElementsByClassName('songitemplay'))[songindex - 1].classList.add('fa-pause')
    }            
    else{
        audioElement.pause()
        masterplay.classList.add('fa-play')
        masterplay.classList.remove('fa-pause') 
        Array.from(document.getElementsByClassName('songitemplay'))[songindex - 1].classList.remove('fa-pause')
        Array.from(document.getElementsByClassName('songitemplay'))[songindex - 1].classList.add('fa-play')
    }
})



audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value = progress
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100
})


songitem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname
});


const makeallplay= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')
})
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay()
        songindex = parseInt(e.target.id)
        mastersongname.innerText = songs[songindex-1].songname
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audioElement.src = `songs/${songindex}.mp3`
        audioElement.currentTime =0
        audioElement.play()
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')

    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1){
        songindex= 5
    }
    else{
        songindex -= 1
    }
    mastersongname.innerText = songs[songindex-1].songname
    audioElement.src = `songs/${songindex}.mp3`
    audioElement.currentTime =0
    audioElement.play()
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')
    makeallplay()
    Array.from(document.getElementsByClassName('songitemplay'))[songindex - 1].classList.remove('fa-play')
    Array.from(document.getElementsByClassName('songitemplay'))[songindex - 1].classList.add('fa-pause')
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex= 1
    }
    else{
        songindex += 1
    }
    mastersongname.innerText = songs[songindex-1].songname
    audioElement.src = `songs/${songindex}.mp3`
    audioElement.currentTime =0
    audioElement.play()
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause')
    makeallplay()
    Array.from(document.getElementsByClassName('songitemplay'))[songindex - 1].classList.remove('fa-play')
    Array.from(document.getElementsByClassName('songitemplay'))[songindex - 1].classList.add('fa-pause')

})




 
