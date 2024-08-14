document.getElementById('calcular').addEventListener('click', function() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carne = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    const refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const cerveja = (homens * 0.8) + (mulheres * 0.5);

    document.getElementById('carne').textContent = `• ${carne.toFixed(2)} kg de carne bovina`;
    document.getElementById('frango').textContent = `• ${frango.toFixed(2)} kg de frango`;
    document.getElementById('linguica').textContent = `• ${linguica.toFixed(2)} kg de linguiça`;
    document.getElementById('refrigerante').textContent = `• ${refrigerante.toFixed(2)} litros de refrigerante`;
    document.getElementById('cerveja').textContent = `• ${cerveja.toFixed(2)} litros de cerveja`;
});
