const updateYear = () => {
    const footerYear = document.getElementById('footer-year');
    footerYear.innerHTML = new Date().getFullYear();
}

document.onload = updateYear();