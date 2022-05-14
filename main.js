const ul = document.getElementById('catalog')
const url = 'https://portal.hml.b2bstack.com.br/api/v1/products'

function createNode(element) {
  return document.createElement(element)
}

function append(parent, el) {
  return parent.appendChild(el)
}

fetch(url)
  .then(resp => resp.json())
  .then(function (data) {
    let products = data
    return products.map(function (product) {
      let li = createNode('li')
      let img = createNode('img')
      let span = createNode('span')

      img.src = product.imagePath
      span.innerHTML = product.name

      append(li, img)
      append(li, span)
      append(ul, li)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
