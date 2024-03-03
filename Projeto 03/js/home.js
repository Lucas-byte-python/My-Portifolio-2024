
// Select button
var button = document.getElementById('read_button');
// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card');
    // Add/Remove Class Active
    card.classList.toggle('active');
    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = '-';
    } 
    // Change button text if hasn't class active
    button.textContent = '+';
});
// Select button
var button = document.getElementById('read_button-2');
// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card-2');
    // Add/Remove Class Active
    card.classList.toggle('active');
    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = '-';
    }
    // Change button text if hasn't class active
    button.textContent = '+';
});

// Select button
var button = document.getElementById('read_button-3');
// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card-3');
    // Add/Remove Class Active
    card.classList.toggle('active');
    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = '-';
    }
    // Change button text if hasn't class active
    button.textContent = '+';
});
