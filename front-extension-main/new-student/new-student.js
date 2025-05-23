new Vue({
  el: '#app',
  data: {
    form: {
      nome: '',
      nascimento: '',
      cpf: '',
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
      const cpf = this.form.cpf.replace(/\D/g, '');

      if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        alert('CPF inválido!');
        return;
      }
      alert('Dados salvos com sucesso!');
    }
}
});
