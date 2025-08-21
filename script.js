function copyToClipboard(id) {
    const el = document.getElementById(id);
    navigator.clipboard.writeText(el.textContent)
        .then(() => alert('Configurazione copiata negli appunti!'))
        .catch(() => alert('Errore nel copiare!'));
}
