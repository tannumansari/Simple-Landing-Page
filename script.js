document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class to trusted-info section
    function addTrustedInfoAnimation() {
        var trustedInfo = document.querySelector('.trusted-info');
        if (isInViewport(trustedInfo)) {
            trustedInfo.classList.add('show');
        }
    }

    // Add event listener for scroll to trigger trusted-info animation
    window.addEventListener('scroll', addTrustedInfoAnimation);

    // Function to add animation delay to each product in offer-list
    function animateOfferList() {
        const offers = document.querySelectorAll(".offer-list .product");
        let delay = 0.5;
        
        offers.forEach((product, index) => {
            product.style.animationDelay = `${delay * (index + 1)}s`;
        });
        
        const offerList = document.querySelector(".offer-list");
        offerList.style.opacity = 1;
        offerList.style.transform = "translateX(0)";
    }

    // Call the offer list animation function when DOM content is loaded
    document.addEventListener("DOMContentLoaded", animateOfferList);
});
