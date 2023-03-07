// Remember to import the data and Dog class!
import { dogs } from '/data.js'
import Dog from './Dog.js'

const heartBtn = document.getElementById('btn-heart')
const rejectBtn = document.getElementById('btn-reject')
const profileContainer = document.getElementById('profile')

let badges

let dogIndex = 0
let currentDog = new Dog(dogs[0])
let nextDog = new Dog(dogs[1])

let isWaiting = false

heartBtn.addEventListener('click', heartDog)
rejectBtn.addEventListener('click', rejectDog)

renderDog()

function renderDog() {
    // const notSwiped = dogs.filter((obj) => !obj.hasBeenSwiped)
    // profileContainer.innerHTML = currentDog.getDogHtml()
    let profileHtml = currentDog.getDogHtml() + nextDog.getNextDogHtml()
    profileContainer.innerHTML = profileHtml
    badges = document.querySelectorAll('.badge')
    setTimeout(() => {
        isWaiting = false
    }, 3000);
    
}

function heartDog() {
    if(!isWaiting) {
        isWaiting = true
        currentDog.getHearted()
        dogIndex = dogIndex === dogs.length - 1 ? 0 : dogIndex + 1
        currentDog = new Dog(dogs[dogIndex])
        nextDog = new Dog(dogs[dogIndex === dogs.length - 1 ? 0 : dogIndex + 1])
        badges[0].classList.add('badge--visible')
        setTimeout(() => {
            document.getElementById('current-dog').classList.add('swipeRight')
        }, 1000);
        setTimeout(() => {
            renderDog()
        }, 2000);
    }
}

function rejectDog() {
    if(!isWaiting) {
        isWaiting = true
        currentDog.getRejected()
        dogIndex = dogIndex === dogs.length - 1 ? 0 : dogIndex + 1
        currentDog = new Dog(dogs[dogIndex])
        nextDog = new Dog(dogs[dogIndex === dogs.length - 1 ? 0 : dogIndex + 1])
        badges[1].classList.add('badge--visible')
        setTimeout(() => {
            document.getElementById('current-dog').classList.add('swipeLeft')
        }, 1000);
        setTimeout(() => {
            renderDog()
        }, 2000);
    }
}
