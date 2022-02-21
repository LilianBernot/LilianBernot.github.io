
function modifyText(x, y) {
    //Change the '+' in '-'
    const t2 = document.querySelector(x); //Attention: c'est l'id qu'il cherche, pas la class
    if (t2.firstChild.nodeValue == "⇲") {
        t2.firstChild.nodeValue = "⇱";
    } else {
        t2.firstChild.nodeValue = "⇲";
    }

    //Extending the 'to_extend' area
    let to_toggle = document.getElementById(y)
    // find its current status
    let current_display = to_toggle.style.display
    // apply the opposite status
    if (current_display == "none") {
        to_toggle.style.display = "block"
    } else {
        to_toggle.style.display = "none"
    }
    // show a message in the JS console
    console.log(`display is now ${to_toggle.style.display}`)
}
