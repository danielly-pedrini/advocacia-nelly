   // Menu hamburguer toggle
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Submissão do formulário
    document.getElementById('contato-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const dados = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        area: formData.get('area'),
        mensagem: formData.get('mensagem')
      };
      
      // Aqui você pode integrar com um backend ou serviço de email
      // Por exemplo: fetch('/api/contato', { method: 'POST', body: JSON.stringify(dados) })
      
      alert(`Mensagem enviada!\n\nObrigado, ${dados.nome}. Em breve entraremos em contato.`);
      this.reset();
    });

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });