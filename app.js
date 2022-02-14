function rendomNumber() {
    let rendomInput = document.getElementById('rendomNumberInpuyt');
    let rendom = Math.round(Math.random() * 10000);
    rendom = rendom + "";
    if (rendom.length >= 4) {
        rendomInput.value = rendom;
    }
    else {
        rendomNumber()
    }
}

document.getElementById('keypadd').addEventListener('click', function (event) {
    let keypadd = event.target.innerText;
    let kayInput = document.getElementById('kayInput');
    if(isNaN(keypadd)){
        if(keypadd == 'C'){
            kayInput.value = '';
        }
    }
    else {
        const key = event.target.innerText;
        const kayINputValue = kayInput.value;
        kayInput.value = key + kayINputValue;
    }


})

document.getElementById('button').addEventListener('click',function(){
    let rendomInput = document.getElementById('rendomNumberInpuyt').value;
    let kayInput = document.getElementById('kayInput').value;
    if(rendomInput == kayInput){
        document.getElementById('feld').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
    else{
        document.getElementById('success').style.display = 'block';
        document.getElementById('feld').style.display = 'none';
    }
})