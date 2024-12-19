document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        alert('Form submitted with cool animation!'); // Replace with your animation logic
        // You can add more animation logic here
    });
});