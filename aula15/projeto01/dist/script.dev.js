"use strict";

function contar() {
  var ini = document.getElementById('txti');
  var fim = document.getElementById('txtf');
  var passo = document.getElementById('txtp');
  var res = document.getElementById('res');

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = "Imposs\xEDvel contar.... \uD83D\uDE13";
    window.alert("[ERRO] Faltam Dados...\uD83D\uDC4A");
  } else {
    res.innerHTML = 'Contando: <br>';
    var i = Number(ini.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    if (p <= 0) {
      window.alert("Passo Inv\xE1lido.... \uD83D\uDC4A Considerando passo 1...");
      p = 1;
    }

    if (i < f) {
      //contagem crecente
      for (var c = i; c <= f; c += p) {
        res.innerHTML += " ".concat(c, "\xBA  \uD83D\uDD96 ");
      }
    } else {
      //contagem regressiva
      for (var _c = i; _c >= f; _c -= p) {
        res.innerHTML += "".concat(_c, "\xBA \uD83D\uDD96");
      }
    }

    res.innerHTML += "\xAE";
  }
}