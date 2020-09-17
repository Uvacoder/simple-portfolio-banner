document.addEventListener('mousemove', parallax);

function parallax(e) {
    this.querySelectorAll('.layer').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/200;

        Layer.style.transform = `translateX(${x}px)`
    });
}