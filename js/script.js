async function buscarCep() {
  const cep = document.getElementById('input').value;
  const res = document.querySelector('.res');

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (response.ok) {
    const data = await response.json();

    if (data.erro) {
      res.innerHTML = `<p>❌ CEP não encontrado</p>`;
    } else {
      res.innerHTML = `
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Rua:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>UF:</strong> ${data.estado}</p>
      `;
    }
  } else {
    res.innerHTML = `<p>⚠️ Erro na requisição: ${response.status}</p>`;
  }
}
