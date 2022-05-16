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
      let liItem = createNode('li')
      let img = createNode('img')
      let divider = createNode('div')
      let ulInfo = createNode('ul')
      let liInfoName = createNode('li')
      let liInfoAverage = createNode('li')
      let liInfoRating = createNode('li')
      let liInfoReview = createNode('li')

      img.src = product.imagePath
      liInfoName.innerHTML = product.name
      liInfoAverage.innerHTML = `NPS: ${product.average_note}`
      liInfoRating.innerHTML = `RATING: ${product.rating}`
      liInfoReview.innerHTML = `&#9733  ${product.reviews_counter} Reviews`

      liItem.classList.add('row')
      divider.classList.add('divider-vertical')
      ulInfo.classList.add('info')

      append(liItem, img)
      append(liItem, divider)
      append(ulInfo, liInfoName)
      append(ulInfo, liInfoAverage)
      append(ulInfo, liInfoRating)
      append(ulInfo, liInfoReview)
      append(liItem, ulInfo)
      append(ul, liItem)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
