document.addEventListener('DOMContentLoaded', function() {
    async function loadHTML(selector, url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch ${url}`);
            const text = await response.text();
            document.querySelector(selector).innerHTML = text;
        } catch (error) {
            console.error('Error loading HTML:', error);
        }
    }

    loadHTML('#navbar', 'navbar.html');
    loadHTML('#footer', 'footer.html');
});
