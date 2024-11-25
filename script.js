document.addEventListener('DOMContentLoaded', () => {
    const unidadNegociosSelect = document.getElementById('unidad-negocios');
    const numeroRMNCInput = document.getElementById('numero-rmnc');

    unidadNegociosSelect.addEventListener('change', () => {
        generateRMNCNumber();
    });

    function generateRMNCNumber() {
        const unidadNegocios = unidadNegociosSelect.value;
        const year = new Date().getFullYear();
        const consecutivo = Math.floor(Math.random() * 900 + 100); // Genera un número consecutivo aleatorio
        if (unidadNegocios) {
            numeroRMNCInput.value = `${unidadNegocios}-RMNC ${consecutivo}-${year}`;
        } else {
            numeroRMNCInput.value = '';
        }
    }
});
