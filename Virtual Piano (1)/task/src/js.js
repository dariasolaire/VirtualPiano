document.addEventListener("keydown", function(event) {

    switch (event.code) {
        case "KeyA":
            let audioA = new Audio("music/white_keys/A.mp3");
            audioA.play();
            break;
        case "KeyS":
            let audioS = new Audio("music/white_keys/S.mp3");
            audioS.play();
            break;
        case "KeyD":
            let audioD = new Audio("music/white_keys/D.mp3");
            audioD.play();
            break;
        case "KeyF":
            let audioF = new Audio("music/white_keys/F.mp3");
            audioF.play();
            break;
        case "KeyG":
            let audioG = new Audio("music/white_keys/G.mp3");
            audioG.play();
            break;
        case "KeyH":
            let audioH = new Audio("music/white_keys/H.mp3");
            audioH.play();
            break;
        case "KeyJ":
            let audioJ = new Audio("music/white_keys/J.mp3");
            audioJ.play();
            break;
        case "KeyW":
            let audioW = new Audio("music/black_keys/W.mp3");
            audioW.play();
            break;
        case "KeyE":
            let audioE = new Audio("music/black_keys/E.mp3");
            audioE.play();
            break;
        case "KeyT":
            let audioT = new Audio("music/black_keys/T.mp3");
            audioT.play();
            break;
        case "KeyY":
            let audioY = new Audio("music/black_keys/Y.mp3");
            audioY.play();
            break;
        case "KeyU":
            let audioU = new Audio("music/black_keys/U.mp3");
            audioU.play();
            break;
    }
});