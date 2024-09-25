const renderPlayers = async () => {
    const response = await fetch('/players')
    const data = await response.json()

    const mainContent = document.querySelector('#main-content')

    if(data) {
        data.map(player => {
            // Create card for each player
            const card = document.createElement('div')
            card.className = 'card'

            // Create top-container for background image
            const topContainer = document.createElement('div')
            topContainer.className = 'top-container'

            // Create bottom-container for the player info
            const bottomContainer = document.createElement('div')
            bottomContainer.className = 'bottom-container'

            // Set the background image of the top-container element to the player's image
            topContainer.style.backgroundImage = `url(${player.image})`

            // Create the player info for the card
            const cardTitle = document.createElement('h3')
            cardTitle.textContent = `${player.name}`
            bottomContainer.appendChild(cardTitle)

            // Create the intro for the card
            player.teams.map(team => {
                const cardIntro = document.createElement('p')
                cardIntro.textContent = `${team}`
                bottomContainer.appendChild(cardIntro)
            })

            // Create the a tag for detail page
            const detailLink = document.createElement('a')
            detailLink.textContent = 'Read More >'
            detailLink.href = `/players/${player.id}`
            detailLink.id = 'detail-link'
            bottomContainer.appendChild(detailLink)

            // Append topContainer and bottomContainer to the card
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            // Append card to the mainContent
            mainContent.appendChild(card)
            
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = "No Players Available 😓"
        mainContent.appendChild(message)
    }
}

// 404 Checking
const requestedURL = window.location.href.split('/').pop()
console.log(requestedURL)

if(requestedURL) {
    // requestedURL is not null indicate that it is not for the home page
    window.location.href = '../404.html'
} else {
    renderPlayers()
}