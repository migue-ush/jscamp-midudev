// Delegación de eventos (optional challenge)

const jobListingsSection = document.querySelector('.jobs-listings')

jobListingsSection?.addEventListener('click', (event) => {
    const element = event.target
  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

const filter = document.querySelector('#filter-tecnology')

filter?.addEventListener('change', () => {
    console.log(filter.value)
})


// Otra forma de hacerlo sin delegación de eventos

//const jobListingsSection = document.querySelector('.jobs-listings')

//if (jobListingsSection) {
//  jobListingsSection.addEventListener('click', (event) => {
//    const element = event.target

//  if (element.classList.contains('button-apply-job')) {
//    element.textContent = '¡Aplicado!'
//    element.classList.add('is-applied')
//    element.disabled = true
//  }
//})
//}


// Otra forma de hacerlo seleccionando todos los botones

//const botones = document.querySelectorAll('.button-apply-job')
//
//botones.forEach(boton => {
//  boton.addEventListener('click', () => {
//   boton.classList.add('is-applied')
//   boton.disabled = true
// })
//})
