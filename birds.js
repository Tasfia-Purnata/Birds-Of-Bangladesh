fetch('birds.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('bird-container');
    data.forEach(bird => {
      const card = document.createElement('div');
      card.className = 'bird-card';
      card.innerHTML = `
        <img src="${bird.image}" alt="${bird.name}">
        <h2>${bird.name}</h2>
        <p><strong>Habitat:</strong> ${bird.habitat}</p>
        <p><strong>Status:</strong> ${bird.status}</p>
      `;
      container.appendChild(card);
    });
  });