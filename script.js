var total_provas = document.getElementById("qnt_provas").value;

function qnt_provas()  //inicialmente zera o que há e define quantas notas serão calculadas
{
  document.getElementById("msg").innerHTML =""; //caso seja outra nota sendo calculada, zera o valor na tela
total_provas = document.getElementById("qnt_provas").value;   

document.getElementById("caixas_notas").innerHTML = "";    //zera valor nas caixas de notas
var qnt_provas_total;
for(i=1; i <= total_provas; i++)
{
   qnt_provas_total = "<input type='number' class='nota_box' min='0' max='10' placeholder='Avaliação "+i+"'id='Nota"+i+"'/> <input type='number' class='peso_box' min='0' max='2' placeholder='Peso' id='peso"+i+"'/> <br><br>";
   document.getElementById("caixas_notas").innerHTML += qnt_provas_total;
  }
    
}

function MediaFinal() //realiza calculo da média ao clicar no botão 'ver media final' considerando peso de cada nota
{
  document.getElementById("msg").innerHTML = "";
  total_provas = document.getElementById("qnt_provas").value;
  if (total_provas == "")
    {
      document.getElementById("msg").innerHTML = "Informe quantas avaliações deseja calcular"
      return;
    }
  
  var somaNotas = 0;
  var somaPesos = 0;
  for(i=1; i <= total_provas; i++)
  {
    var notaIndividual = parseFloat(document.getElementById("Nota"+i).value);
    var multiplicadorProva = parseFloat(document.getElementById("peso"+i).value); 
    if ((notaIndividual == NaN) || (multiplicadorProva == NaN))
    {
      document.getElementById("msg").innerHTML = "Informe as notas/pesos correspondentes"
      return;
    }
    var notaComPeso = notaIndividual * multiplicadorProva;
    somaNotas += notaComPeso;
    somaPesos += multiplicadorProva;
  }
  
 
  var MediaFinal = somaNotas / somaPesos;

  var MediaFinalFixed = MediaFinal.toFixed(2);
  if (isNaN(MediaFinal))
    {
      document.getElementById("msg").innerHTML = "Informe quantas avaliações deseja calcular e as notas/pesos correspondentes"
      return;
    }
    document.getElementById("msg").innerHTML =
      "Média: " + MediaFinalFixed;
  }

function Zerar() //apaga todos os dados digitados
{
  document.getElementById("msg").innerHTML = "";
  document.getElementById("caixas_notas").innerHTML = "";
  document.getElementById("label_qnt_provas").innerHTML = "Quantas notas você deseja calcular? <br> <input type='text' class='qnt_provas' id='qnt_provas' minlength='0' maxlength='2'> <button type='submit' onclick='qnt_provas()'>Enviar</button>";
  

}