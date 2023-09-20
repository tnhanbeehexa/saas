const renderPage = (pageUrl) => {
    const content = document.querySelector(".content");

    // Use the fetch API to load the HTML content of the page
    fetch(pageUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch page: ${response.statusText}`);
            }
            return response.text();
        })
        .then((htmlContent) => {
            content.innerHTML = htmlContent; // Load the page content
        })
        .catch((error) => {
            content.innerHTML = "<h2>Page not found</h2>"; // Display a 404 message for errors
        });
}