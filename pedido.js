function sim() {
    alert("Você aceitou namorar comigo! :)");
    
    location.href = "https://music.youtube.com/watch?v=exC7e_skR5M";
}

function desvia(btn) {
    
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}


const o = "MTHS1901", e = 90, l = "bold"; console.log(`%c${o}`, "font-size: 90px; font-weight: bold; background: linear-gradient(90deg, red, yellow);"), console.log("Tutorial: https://www.youtube.com/watch?v=zxxB9SFh9p4");
