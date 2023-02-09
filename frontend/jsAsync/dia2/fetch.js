fetch("https://invalid.api.goprogram.ai/inspiration")
    .then(response => response.json()
    ).then(data => console.log(`${data.quote} | ${data.author}`)
    ).catch((error) => console.log(`Erro na requisição: ${error.message}`));
    