new Vue({
  el: '#app',
  data: {
    form: {
      nome: '',
      nascimento: '',
      cpf: '',
      celular: '',
      rua: '',
      numero: '',
      bairro: '',
      cep: '',
      cidade: '',
      email: ''
    },
    fotoPreview: null
  },
  methods: {
    abrirUpload() {
      document.getElementById('fotoInput').click();
    },
    carregarFoto(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.fotoPreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    salvarFormulario() {
      alert('Dados salvos com sucesso!');
    }
  }
});
