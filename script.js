document.addEventListener('DOMContentLoaded', getCatImages);

function getCatImages() {
    const apiKey = 'YOUR_API_KEY'; // Substitua 'YOUR_API_KEY' pela sua chave de API

    fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível obter os dados do servidor.');
            }
            return response.json();
        })
        .then(data => {
            displayCatImage(data[0].url);
        })
        .catch(error => {
            console.error('Erro:', error);
            const catDiv = document.getElementById('cat');
            catDiv.innerHTML = '<p>Não foi possível obter as imagens de gatos.</p>';
        });
}

function displayCatImage(url) {
    const catDiv = document.getElementById('cat');
    const catImage = `<img src="${url}" alt="Imagem de um gato">`;
    catDiv.innerHTML = catImage;
}