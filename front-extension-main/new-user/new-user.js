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
      const cpf = this.form.cpf.replace(/\D/g, ''); 
      const celular = this.form.celular.replace(/\D/g, '');
      const cep = this.form.cep.replace(/\D/g, '');
      const numero = this.form.numero;
    
      if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        alert('CPF inválido!');
        return;
      } else if (!/^\d+$/.test(celular)) {
        alert('Celular inválido!');
        return;
      } else if (cep.length !== 8 || !/^\d+$/.test(cep)) {
        alert('CEP inválido!');
        return;
      } else if (numero.length === 0 || !/^\d+$/.test(numero)) {
        alert('Número inválido!');
        return;
      }
    
      alert('Dados salvos com sucesso!');
    }
}
});
