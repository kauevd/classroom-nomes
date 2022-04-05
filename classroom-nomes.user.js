// ==UserScript==
// @name         Nomes Classroom
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Renomeia os nomes das turmas do classroom
// @author       KaueTech
// @match        https://classroom.google.com/h
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    // Your code here..

    var waitForEl = function (selector, callback, maxTimes = false) {
      if (jQuery(selector).length) {
        callback();
      } else {
        if (maxTimes === false || maxTimes > 0) {
          (maxTimes != false) && maxTimes-- ;
          setTimeout(function () {
            waitForEl(selector, callback, maxTimes);
          }, 100);
        }
      }
    };

    waitForEl('.z3vRcc-ZoZQ1', () => {
        var titulos = document.getElementsByClassName('YVvGBb z3vRcc-ZoZQ1');

        var nomes = {
            '2° INFO G1 2022': 'Biologia',
            '59206 - TIN.0019 - Metodologia da Pesquisa Científica - Médio [67 h/80 Aulas]': 'Metodologia',
            '59209 - TIN.0008 - Língua Estrangeira Moderna - Inglês I - Médio [67 h/80 Aulas]': 'Inglês',
            'Sociologia II - Informática - G1 -Médio [33 h/40 Aulas]': 'Sociologia',
            'II INFO_G1_Profa. Mycarla': 'Geografia',
            '59214 - TIN.0113 - Educação Física II - INFORMÁTICA G1': 'Educaçâo Física',
            '2º Informática G1- Língua Portuguesa e Literatura Brasileira II - Médio [100 h/120 Aulas]': 'Português',
            'Programação Orientada a Objetos (G1)': 'POO',
            'História II - Informática G1': 'História',
            'BD - G1 - 2º ano': 'Banco de Dados',
            'Informática G1 - Matemática': 'Matemática',
            'Desenvolvimento de Aplicações Web - G1': 'Desenvolvimento Web',
            'Física II - Infor. G1 - 59212 - TIN.0033 - Física II - Médio [67 h/80 Aulas]': 'Física'
        }

        console.log(titulos)
        console.log(nomes)

        for (let titulo of titulos) {
            var nome = nomes[titulo.innerText]

            if (nome) {
                titulo.innerText = nome
            }

        }
    })

})();