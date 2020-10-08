// Males ngelooping statis aja dulu
function copyToClipBoard() {
    const anchorValue = document.querySelector('.fullendpoint');
    const myInput = document.querySelector('.myInput');
    const copyIcon = document.querySelector('.copyIcon');
    const cpIcon = document.querySelector('.cp-icon'); 
    copyIcon.setAttribute('data-original-title', 'Copied');
    cpIcon.setAttribute('style', 'color:lightskyblue !important;')
    myInput.value = anchorValue;
    
    myInput.select();   
    myInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    // alert("Copied the text: " + myInput.value);
}

function copyToClipBoard2() {
    const anchorValue = document.querySelector('.fullendpoint2');
    const myInput = document.querySelector('.myInput2');
    const copyIcon = document.querySelector('.copyIcon2');
    const cpIcon = document.querySelector('.cp-icon2'); 
    copyIcon.setAttribute('data-original-title', 'Copied');
    cpIcon.setAttribute('style', 'color:lightskyblue !important;')
    myInput.value = anchorValue;
    
    myInput.select();   
    myInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    // alert("Copied the text: " + myInput.value);
}