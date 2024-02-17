// Inject this script into example.com
// Traverse DOM, add buttons next to each link, and handle button clicks
document.querySelectorAll('a').forEach(link => {
    const button = document.createElement('button');
    button.textContent = 'Send';
    button.addEventListener('click', () => {
        sendDataToServer(link.href);
    });
    link.parentNode.insertBefore(button, link.nextSibling);
});

function sendDataToServer(link) {
    fetch('http://localhost:8000', {
        method: 'POST',
        body: link
    });
}
