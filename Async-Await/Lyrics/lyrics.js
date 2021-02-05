async function findLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics-form');
form.addEventListener('submit', el => {
    //Previne o comportamento padrão de enviar o submit do formulário
    el.preventDefault();
    doSummit();
})

async function doSummit(){
    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    /*
    //then
    findLyrics(artist.value, song.value)
        .then(response => response.json())
    .then(data => {
        if(data.lyrics){
            lyrics_el.innerHTML = data.lyrics;
        } else {
            lyrics_el.innerHTML = data.error;
        }
    })
    .catch(err => {
        lyrics_el.innerHTML = `Oops! ${err}`
    })
    */

    // Async / Await
    try{
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        if(data.lyrics)
            lyrics_el.innerHTML = data.lyrics;
        else 
            lyrics_el.innerHTML = data.error;     
    }
    catch (err) {
        console.log(err);
    }
    
}