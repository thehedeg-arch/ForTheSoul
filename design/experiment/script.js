const header = document.getElementById("site-header");

const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -8% 0px",
        }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
        observer.observe(element);
    });
} else {
    document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-visible");
    });
}
