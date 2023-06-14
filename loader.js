const loader = document.querySelector('.loader');
loader.classList.remove('hidden');

// Simulating loading completion after 3 seconds
setTimeout(function () {
    loader.classList.add('hidden');
}, 1500);