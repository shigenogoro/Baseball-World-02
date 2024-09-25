const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const cardInfo = card.querySelector('.card-info');
    
    card.addEventListener('mouseover', () => {
        cardInfo.style.opacity = '1'; // Show the card-info
    });
    
    card.addEventListener('mouseout', () => {
        cardInfo.style.opacity = '0'; // Hide the card-info
    });
});