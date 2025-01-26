async function loadHeader(currentPage) {
    const response = await fetch('header.html');
    const headerHtml = await response.text();
    document.getElementById('header').innerHTML = headerHtml;

    const links = document.querySelectorAll('#header a');
    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            const strong = document.createElement('strong');
            strong.textContent = link.textContent;
            link.replaceWith(strong);
        }
    });
}