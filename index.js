// lets target the thank you and the welcome containers and the submit button and the dynamic text

let thankYouContainer = document.querySelector('.thank-you-container')
let welcomeContainer = document.querySelector('.welcome-container')
let submitBtn = document.querySelector('.submit-btn')
let dynamicText = document.querySelector('.dynamic-text')
let ratings = document.querySelectorAll('.circle')


ratings.forEach(function (rating) {
  rating.addEventListener('click', function () {
    dynamicText.textContent = rating.textContent
    console.log(dynamicText.textContent);
  })
})

submitBtn.addEventListener ('click', function (e) {
  welcomeContainer.style.display = 'none'
  thankYouContainer.style.display = 'flex'
})

