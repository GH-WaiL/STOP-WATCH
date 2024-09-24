let secondpassed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart (value) {
    return String(value).padStart(2, "0"); // ki ykun numero fih ghir 1 chiffre nzido 0 (:6 ==> :06)
}

function setTime () {
    const minute = Math.floor(secondpassed / 60);
    const second = secondpassed % 60;
    time.innerHTML = `${padStart(minute)}:${padStart(second)}`;
}

function timer () {
    secondpassed ++;
    setTime(); // kol ma tzid 1s t3yat l setTime bch t3awad t3amer h1
}

function starClock () {
    if(interval) stopClock () //dirnaha bch ki n7bsoh w n3awdo ndimariw ma yzidch f la vitesse
    interval = setInterval (timer, 1000);
}

function stopClock () {
    clearInterval (interval);
}
function resetClock() {
    stopClock ();
    secondpassed = 0;
    setTime (); // ki dir reset rah y7kam h1 ydiro ga3 00:00 car secondpassed = 0
}
