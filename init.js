(function() {
  'use strict';
  document.body.innerHTML = document.body.innerHTML.replace(/disabled/g, 'enabled')

  let forms = document.querySelectorAll('form')
  const TOKEN = document.querySelector('meta[name="csrf-token"]').content;
  for (let form of forms) {
    form.action = "https://sklep.pgg.pl/koszyk/dodaj-produkt"
    form.method = "POST"
    const linkArr = form.parentElement.parentElement.firstElementChild.querySelector('a').getAttribute('href').split('/')

    let inputToken = document.createElement('input')
    inputToken.type = "hidden"
    inputToken.name = "_token"
    inputToken.value = TOKEN
    form.insertBefore(inputToken, form.querySelector('select'))

    let inputAkcyza = document.createElement('input')
    inputAkcyza.type = "hidden"
    inputAkcyza.name = "akcyza"
    inputAkcyza.value = 0 //constant
    form.insertBefore(inputAkcyza, form.querySelector('button'))

    let inputSklad = document.createElement('input')
    inputSklad.type = "hidden"
    inputSklad.name = "sklad_id"
    inputSklad.value = parseInt(linkArr[3]) //zmienna
    form.insertBefore(inputSklad, form.querySelector('button'))

    let inputProduktId = document.createElement('input')
    inputProduktId.type = "hidden"
    inputProduktId.name = "produkt_id"
    inputProduktId.value = parseInt(linkArr[2]) // zmienna
    form.insertBefore(inputProduktId, form.querySelector('button'))

  }

})()