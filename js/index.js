function copyIP(value){
    let ip = 'xgen.reis.host';
    let inputTest = document.createElement("input");
    inputTest.value = ip;
    document.body.appendChild(inputTest);
    inputTest.select();
    document.execCommand('copy');
    document.body.removeChild(inputTest);

    $('.ui.modal').modal('show');
}