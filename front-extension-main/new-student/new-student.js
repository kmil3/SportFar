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
// JavaScript para Upload de Imagem

const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const removeButton = document.getElementById('removeImage');

// Função para mostrar a imagem
function displayImage(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview da imagem">
                                 <div class="upload-overlay">
                                     <svg class="change-icon" viewBox="0 0 24 24">
                                         <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"/>
                                     </svg>
                                 </div>`;
        imagePreview.classList.add('has-image');
    };
    reader.readAsDataURL(file);
}

// Upload de arquivo via input
imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        displayImage(file);
    }
});

// Click na área de preview para abrir seletor
imagePreview.addEventListener('click', function() {
    imageInput.click();
});

// Drag and Drop - Drag Over
imagePreview.addEventListener('dragover', function(e) {
    e.preventDefault();
    imagePreview.classList.add('dragover');
});

// Drag and Drop - Drag Leave
imagePreview.addEventListener('dragleave', function() {
    imagePreview.classList.remove('dragover');
});

// Drag and Drop - Drop
imagePreview.addEventListener('drop', function(e) {
    e.preventDefault();
    imagePreview.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
        displayImage(files[0]);
        // Atualizar o input file
        const dt = new DataTransfer();
        dt.items.add(files[0]);
        imageInput.files = dt.files;
    }
});

// Remover imagem
removeButton.addEventListener('click', function(e) {
    e.stopPropagation();
    imagePreview.innerHTML = `<div class="upload-placeholder">
                                <svg class="upload-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19A2 2 0 0 0 5 21H11V19H5V3H13V9H21Z"/>
                                </svg>
                                <div class="upload-text">Clique ou arraste<br>uma foto aqui</div>
                              </div>
                              <div class="upload-overlay">
                                <svg class="change-icon" viewBox="0 0 24 24">
                                    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"/>
                                </svg>
                              </div>`;
    imagePreview.classList.remove('has-image');
    imageInput.value = '';
});