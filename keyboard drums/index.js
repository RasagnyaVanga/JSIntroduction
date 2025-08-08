document.addEventListener('keydown', (e) => {
    let code= e.keyCode; //e.code matches with KeyA, e.keyCode matches with 65, e.key matches with a
    let key = document.querySelector(`.key[data-key="${code}"]`); //picking key div element to pop
    let sound = document.querySelector(`audio[data-key="${code}"]`); //picing up the sound element to be played

    if (!key || !sound) 
    return; //as we have mapped only a to l in keyboard 

    key.classList.add("playing");
    sound.currentTime = 0;
    sound.play();
});

document.addEventListener('keyup', (e) => {
    //e.keyCode is deprecated, as it gives numerical output. now everyone uses e.code which gives string KeyA but as our html contains numerical mapping we are using keyCode
    let code=e.keyCode; 
    let key = document.querySelector(`.key[data-key="${code}"]`);
    if (key)
    key.classList.remove("playing");
});

// document.addEventListener('keydown', (e) => {  //every event that is pressed gives e.key(a) and e.code(KeyA)
//     if (e.code === 'KeyA') { //if e.code is KeyA
//         const key = document.querySelector('.key[data-key="65"]');
//         const sound = document.querySelector('audio[data-key="65"]'); //just picks up that audio element mapped to 65
//         key.classList.add("playing");
//         sound.currentTime = 0; //rewinding 
//         sound.play();
//     }
//     if (e.code === 'KeyS') {
//         const key = document.querySelector('.key[data-key="83"]');
//         key.classList.add("playing");
//         const sound = document.querySelector('audio[data-key="83"]');
//         sound.currentTime = 0;
//         sound.play();
//     }
// });
