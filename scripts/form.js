const products = [
    { id: "fc-1888", name: "flux capacitor", avgRating: 4.5 },
    { id: "fc-2050", name: "power laces", avgRating: 4.7 },
    { id: "fs-1987", name: "time circuits", avgRating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", avgRating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", avgRating: 5.0 }
];

document.addEventListener('DOMContentLoaded', () => {
    const reviewCountElement = document.getElementById('reviewCount');
    const reviewForm = document.getElementById('reviewForm');

    let reviewCount = localStorage.getItem('reviewCount') || 0;

    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault(); 

            reviewCount++;
            
            localStorage.setItem('reviewCount', reviewCount);

            if (reviewCountElement) {
                reviewCountElement.textContent = reviewCount;
            }

            window.location.href = 'review.html';
        });
    }

    const copyrightYearElement = document.getElementById('copyright-year');
    if (copyrightYearElement) {
        const currentYear = new Date().getFullYear();
        copyrightYearElement.textContent = currentYear;
    }

    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
});
