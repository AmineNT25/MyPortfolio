'use srict' ;

// Navigation Buttons
const homeNav = document.querySelector('.homeNav') ;
const cvNav = document.querySelector('.cvNav') ;
const projectsNav = document.querySelector('.projectsNav') ;
const closeButton = document.querySelector('button.imageHover1') ;

// Home button
homeNav.addEventListener('mouseover', function() {
    document.querySelector('.home').classList.remove('hidden') ;
})
homeNav.addEventListener('mouseout', function() {
    document.querySelector('.home').classList.add('hidden') ;
})
homeNav.addEventListener('click', function(e) {
    e.preventDefault() ;
    const target = document.querySelector('.homePage') ;
    target.scrollIntoView({
        behavior: 'smooth'
    }) ;
})

// CV button
cvNav.addEventListener('mouseover', function() {
    document.querySelector('.cv').classList.remove('hidden') ;
})
cvNav.addEventListener('mouseout', function() {
    document.querySelector('.cv').classList.add('hidden') ;
})
cvNav.addEventListener('click', function(e) {
    e.preventDefault() ;
    const target = document.querySelector('main') ;
    target.scrollIntoView({
        behavior: 'smooth'
    }) ;
})

// Projects button
projectsNav.addEventListener('mouseover', function() {
    document.querySelector('.projects').classList.remove('hidden') ;
})
projectsNav.addEventListener('mouseout', function() {
    document.querySelector('.projects').classList.add('hidden') ;
})
projectsNav.addEventListener('click', function(e) {
    e.preventDefault() ;
    const target = document.getElementById('projects') ;
    target.scrollIntoView({
        behavior: 'smooth'
    }) ;
})

// modals
const projectOne = document.querySelector('.project1') ;
const projectTwo = document.querySelector('.project2') ;
const projectThree = document.querySelector('.project3') ;
const projectFour = document.querySelector('.project4') ;
const projectFive = document.querySelector('.project5') ;
const projectSix = document.querySelector('.project6') ;

projectOne.addEventListener('click', function() {
    document.querySelector('.imageHover1').classList.remove('hidden') ;
    closeButton.classList.remove('hidden') ;
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !projectOne.classList.contains('hidden')) {
        document.querySelector('.imageHover1').classList.add('hidden') ;
        closeButton.classList.add('hidden') ;
    }
})


projectTwo.addEventListener('click', function() {
    document.querySelector('.imageHover2').classList.remove('hidden') ;
    closeButton.classList.remove('hidden') ;
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !projectTwo.classList.contains('hidden')) {
        document.querySelector('.imageHover2').classList.add('hidden') ;
        closeButton.classList.add('hidden') ;
    }
})



projectThree.addEventListener('click', function() {
    document.querySelector('.imageHover3').classList.remove('hidden') ;
    closeButton.classList.remove('hidden') ;
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !projectThree.classList.contains('hidden')) {
        document.querySelector('.imageHover3').classList.add('hidden') ;
        closeButton.classList.add('hidden') ;
    }
})



projectFour.addEventListener('click', function() {
    document.querySelector('.imageHover4').classList.remove('hidden') ;
    closeButton.classList.remove('hidden') ;
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !projectFour.classList.contains('hidden')) {
        document.querySelector('.imageHover4').classList.add('hidden') ;
        closeButton.classList.add('hidden') ;
    }
})


projectFive.addEventListener('click', function() {
    document.querySelector('.imageHover5').classList.remove('hidden') ;
    closeButton.classList.remove('hidden') ;
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !projectFive.classList.contains('hidden')) {
        document.querySelector('.imageHover5').classList.add('hidden') ;
        closeButton.classList.add('hidden') ;
    }
})


projectSix.addEventListener('click', function() {
    document.querySelector('.imageHover6').classList.remove('hidden') ;
    closeButton.classList.remove('hidden') ;
})
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !projectSix.classList.contains('hidden')) {
        document.querySelector('.imageHover6').classList.add('hidden') ;
    }
})

closeButton.addEventListener('click', function(){
    document.querySelector('.imageHover1').classList.add('hidden') ;
    closeButton.classList.add('hidden') ;
})
closeButton.addEventListener('click', function(){
    document.querySelector('.imageHover2').classList.add('hidden') ;
    closeButton.classList.add('hidden') ;
})
closeButton.addEventListener('click', function(){
    document.querySelector('.imageHover3').classList.add('hidden') ;
    closeButton.classList.add('hidden') ;
})
closeButton.addEventListener('click', function(){
    document.querySelector('.imageHover4').classList.add('hidden') ;
    closeButton.classList.add('hidden') ;
})
closeButton.addEventListener('click', function(){
    document.querySelector('.imageHover5').classList.add('hidden') ;
    closeButton.classList.add('hidden') ;
})
closeButton.addEventListener('click', function(){
    document.querySelector('.imageHover6').classList.add('hidden') ;
    closeButton.classList.add('hidden') ;
})

// return button
document.querySelector('.return').addEventListener('click',function(e){
    e.preventDefault() ;
    const target = document.querySelector('section') ;
    target.scrollIntoView({
        behavior: 'smooth'
    }) ;
})
