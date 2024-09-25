const header = document.querySelector('header');

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerRight = document.createElement('div')
headerRight.className = 'header-left'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Welcome to the Baseball World!!!'

const headerSubtitle = document.createElement('h2')
headerSubtitle.textContent = 'View players information in the below section.'

const viewButton = document.createElement('button')
viewButton.textContent = 'View'

// Append the headerTitle, headerSubtitle, viewButton into headerLeft div
headerRight.appendChild(headerTitle)
headerRight.appendChild(headerSubtitle)
headerRight.appendChild(viewButton)

// Append the headerRight to the headerContainer
headerContainer.appendChild(headerRight)

// Append the headerContainer to the header
header.appendChild(headerContainer)