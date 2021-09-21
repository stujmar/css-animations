const crisisBanner = document.createElement('template');

crisisBanner.innerHTML = `
  <h1>Hello from a separate template file!</h1>
  <p>And all who inhabit it</p>
`;

document.body.appendChild(crisisBanner.content);