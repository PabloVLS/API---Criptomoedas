document.addEventListener("DOMContentLoaded", function () {
    const seletor = document.querySelector("select");
    
    if (seletor) {
        seletor.addEventListener("change", function () {
            const url = this.value;
            if (url) {
                window.location.href = url;
            }
        });
    }
});
