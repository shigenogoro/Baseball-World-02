const renderPlayer = async () => {
    // Parse the ID as an "int" from the URL
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/players')
    const data = await response.json()

    const playerContent = document.querySelector('#player-content')
    let player = data.find(player => player.id === requestedID)

    if(player) {
        const image = document.querySelector("#image")
        image.src = `${player.image}`

        const name = document.querySelector('#name')
        name.textContent = `${player.name}`

        const description = document.querySelector('#description')
        description.textContent = `${player.description}`

        document.title = `Baseball World - ${player.name}`
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Player Available 😓'
        playerContent.appendChild(message)
    }

}

renderPlayer()