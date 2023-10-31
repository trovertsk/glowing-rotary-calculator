function appendToDisplay(value) {
    document.getElementById("display").value += value;  //Acrescenta valores ao display
    //appendToDisplay puxa os numeros que estão sendo mencionados no index e joga para o display, para depois serem calculados
}

function clearDisplay() {
    document.getElementById("display").value = "";  //,A função ClearDisplay e uma função já do Javascript cuja função e limpar o display como diz o nome
}

function calculateResult() { //Essa function tem a função de calcular dois valores quando clicados
    const displayValue = document.getElementById("display").value;  //quando colocado dois valores, serão calculados de uma forma escondida no display  
    try {
        document.getElementById("display").value = eval(displayValue); //Eval avalia os valores, se estiver certo, mostra o resultado, se não estiver certo, mostra o codigo abaixo
    } catch (error) {
        document.getElementById("display").value = "Erro"; //esse codigo captura o eval e mostra erro quando o calculo estiver errado
    }
}
