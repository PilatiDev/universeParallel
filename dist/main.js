"use strict";
const apiKey = "5ePLMlprN0Mb4YDSTEqbY9HyXZJpvRoLNiopNXwM"; // 🔑 Substitua pela sua API KEY da NASA
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
async function getAPOD() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const container = document.getElementById("apod-container");
        if (!container)
            return;
        container.innerHTML = `
      <h3>${data.title}</h3>
      <p><strong>Data:</strong> ${data.date}</p>
      ${data.media_type === "image"
            ? `<img src="${data.url}" alt="${data.title}"/>`
            : `<iframe src="${data.url}" width="100%" height="400" frameborder="0"></iframe>`}
      <p style="margin-top: 9px; text-align: justify;">${data.explanation}</p>
    `;
    }
    catch (error) {
        console.error("Erro ao buscar APOD:", error);
    }
}
getAPOD();
