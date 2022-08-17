$(document).ready(function() {
    let quest = prompt('пояснишь за гит?');
    if (quest == 'y') {
        alert('ну ладно, заходи');
    } else if (quest == 'n') {
        alert('ну тогда иди учи');
    }
})