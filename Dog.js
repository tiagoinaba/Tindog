// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getHearted() {
        this.hasBeenSwiped = true
        this.hasBeenLiked = true
    }
    
    getRejected() {
        this.hasBeenSwiped = true
        this.hasBeenLiked = false
    }

    getNextDogHtml() {
        return `
        <div class="next-dog">
            <img src="images/badge-like.png" class="badge">
            <img src="images/badge-nope.png" class="badge">
            <img src="${this.avatar}" class="profile__image">
            <div class="profile__information">
                <h3 class="profile__name">${this.name}, ${this.age}</h3>
                <h4 class="profile__description">${this.bio}</h4>
            </div>
        </div>`
    }

    getDogHtml() {
        return `
        <div id="current-dog">
            <img src="images/badge-like.png" class="badge">
            <img src="images/badge-nope.png" class="badge">
            <img src="${this.avatar}" class="profile__image">
            <div class="profile__information">
                <h3 class="profile__name">${this.name}, ${this.age}</h3>
                <h4 class="profile__description">${this.bio}</h4>
            </div>
        </div>`
    }
}

export default Dog