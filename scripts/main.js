function tocaSom(idAudio){
    var audio = document.getElementById(idAudio);
    if(!audio){
        throw Error('O ID informado não foi encontrado!');
    }
    
    audio.play();
}

let teclas = document.querySelectorAll('.tecla')
    .forEach(tecla => {
        const pressed = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
        const idAudio = `som_tecla_${tecla.className
            .split('_')[1]
            .replace('ativa','')
            .replace(' ','')}`;

        tecla.onclick = () => tocaSom(idAudio);
        return tecla;
    });

document.addEventListener('keydown', (keyPressed) => {
    const pressed = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
    const arrayIndex = pressed.findIndex(key => key === keyPressed.key);
    if(arrayIndex !== -1){
        const pressedButton = document.querySelectorAll('.tecla')[arrayIndex];
        pressedButton.classList.add('ativa');
        pressedButton.click();
    }
});
document.addEventListener('keyup', (keyPressed) => {
    const pressed = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
    const arrayIndex = pressed.findIndex(key => key === keyPressed.key);
    if(arrayIndex !== -1){
        const pressedButton = document.querySelectorAll('.tecla')[arrayIndex];
        pressedButton.classList.remove('ativa');
    }
});
