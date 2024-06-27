function copyAddress() {
    const contractAddress = document.getElementById('contract-address').textContent;
    navigator.clipboard.writeText(contractAddress).then(() => {
        const alertElement = document.getElementById('copy-alert');
        alertElement.classList.remove('hidden');
        setTimeout(() => {
            alertElement.classList.add('hidden');
        }, 2000);
    });
}

function openLink(url) {
    window.open(url, '_blank');
}

// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
