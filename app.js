// getting all the ids we need to write the logic
const gallery = document.getElementById('gallery')
const selectedImage = document.getElementById('selectedImage')
const popup = document.getElementById('popup')
const imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const selectedIndex = null

// outputting all images using the forEach array method and creating an img element, then append it to the gallery which is the 'div' parent.
imageIndex.forEach((i) => {
  const image = document.createElement('img')
  image.src = `/images/dog-${i}.jpg`
  image.alt = `image of dog ${i}`
  image.classList.add('galleryImg')

  // adding event listener to take the image full width and height when clicked on
  image.addEventListener('click', () => {
    // popup image when is been clicked
    popup.style.transform = `translateY(0)`
    selectedImage.src = `/images/dog-${i}.jpg`
    selectedImage.alt = `image of dog ${i}`
  })

  gallery.appendChild(image)
})

// removing the iamge full width and height when clicked on
popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-100%)`
  popup.src = ''
  popup.alt = ''
})
