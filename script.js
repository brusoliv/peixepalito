
function filtrarCardapio(categoria) {
  const itens = document.querySelectorAll('.item');
  itens.forEach(item => {
    item.style.display = (categoria === 'todos' || item.classList.contains(categoria)) ? 'block' : 'none';
  });
}

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
