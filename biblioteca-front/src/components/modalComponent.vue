<template>
  <div class="modal" v-if = "show">
    <div class="modalContent">
        <slot name = "titulo">
            
        </slot>
        
        <slot name = "conteudo">         
        </slot>
        
        <slot name = "botoes">
            <span id = "close" class="close-modal" @click = "closeModal">&times;</span>
        </slot>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        }
    }, 
    emits: ['close'],
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style>

.close-modal{
    background-color: #668667;
    font-size: 25px;
    margin-top: -10px;
    margin-left: 500px;
    padding: 0 10px;
    cursor: pointer;

}
.modalContent {
    background-color: #e4ebe5;
    margin: 15% auto;
    padding-left: 20px;
    width: 40%;
    border-radius: 9px;
    text-align: left;
    position: absolute;
    border: 3px solid #534242;
    margin-top: 110px;
    margin-left: 500px;
}

.modal {
    display: flex; 
    position: fixed; /*isso que faz o fundo ficar escurecido */
    z-index: 1; /* Fica acima do conteúdo */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.4); /* Fundo semitransparente */
}
/* .modal {
  display: flex; /* ✅ ADICIONADO: facilita o alinhamento central 
  justify-content: center; /* ✅ ADICIONADO: centraliza horizontalmente 
  align-items: center; /* ✅ ADICIONADO: centraliza verticalmente 
  position: fixed; /* ✅ MANTIDO: garante que o modal fique fixo na tela 
  z-index: 1000; /* ✅ ALTERADO: valor maior para garantir que fique acima de outros elementos 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  overflow: auto;
}

.modalContent {
  background-color: #e4ebe5;
  padding: 20px; /* ✅ ALTERADO: padding mais padrão e consistente 
  width: 40%;
  border-radius: 9px;
  text-align: left;
  position: relative; /* ✅ ALTERADO: de 'absolute' para 'relative' para funcionar com o layout flex 
  border: 3px solid #534242;
  box-shadow: 0 0 10px black; 
} */

.buttonModal{
    background-color: #668667;
    border: 1px solid #534242;
    border-radius: 7px;
    color: white;
    padding: 10px;
    text-align: center;
    width: 130px;
    height: 45px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 17px;
    box-shadow: 2px 2px 10px #00000033;
}
</style>