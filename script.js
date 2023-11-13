function ConverteParaDolar()
{
    var valorEmDolar = document.getElementById("value").value;
    var cotacaoDoDolar = 4.93;
    var valorEmReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal = valorEmReal.toFixed(2);
    document.getElementById("result").innerHTML = "R$ " + valorEmReal;
}


function ConverteParaReal()
{
    var valorEmReal = document.getElementById("value").value;
    var cotacaoDoDolar = 5.32;
    var valorEmDolar = valorEmReal / cotacaoDoDolar;
    valorEmDolar = valorEmDolar.toFixed(2);
    document.getElementById("result").innerHTML = "$ " + valorEmDolar;
}