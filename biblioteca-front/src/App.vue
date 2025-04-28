
<template>
  <div>
    <!-- <button @click="idade++">Idade (+)</button> {{ idade }}
    {{ idade }}

    {{ idade + 2 }}
    <HelloWord /> -->
    <!-- <CadastroLivro></CadastroLivro> -->

    <!-- <listaAutores></listaAutores> -->
    <div class = "content">
      <!-- <ListaAutores /> -->
      <RouterView />
      <MenuLateralComponent />
    </div>
    
  </div>
</template>

<script>
// import HelloWord from './components/HelloWorld.vue';
// import barraLateralVue from './pages/barraLateral.vue';
// import editarAutorVue from './pages/editarAutor.vue';
// import listaAutores from './pages/listaAutores.vue';
// import CadastroLivro from './pages/CadastroLivro.vue';

import MenuLateralComponent from './components/MenuLateralComponent.vue';
import ListaAutores from './pages/listaAutores.vue';
import CadastroLivro from './pages/CadastroLivro.vue';
// import EditarAutor from './pages/editarAutor.vue';



export default {
  data () {
    return {
      nome: "Isabela",
      idade: 20
    }
  },
  methods: {

  },
  components: {
    // HelloWord,
    // // CadastroLivro,
    // listaAutores,
    // barraLateralVue,
    // editarAutorVue,
    MenuLateralComponent,
    ListaAutores
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy:wght@400;700&display=swap");

/* estilo geral */ 
body{
    background-color: #ceeec8;
    /* background-color: #BED6B9; */
    /* background-color: #cae8c4; */
    /* background-color: #b3d6ac; */
    /* font-family: "Kantumruy", sans-serif; */
    font-family: 'Segoe UI', sans-serif;
}

.cadastro{
    background-color: #D9D9D9;
}

p{
    font-size: 17px;
}


.menu{
    font-weight: bold;
    font-size: 27px;
    top: 0px;
    padding: 10px;
}

.btn-sair{
    font-weight: bold;
    font-size: 19px;
    color: #000;
    margin-top: auto; /* alinha o botão ao final da barra lateral */
    margin-bottom: 19px;
    padding: 10px;
    
}

.btn-sair:hover{
    color: #fff;
}




.content{
    margin-left: 320px;
    padding: 20px; 
}

.forms{
    display: grid;    /* Faz com que os elementos fiquem em linhas e colunas */
    grid-template-columns: 1fr 1fr; /* Cria duas colunas com o mesmo tamanho */
}


form div label{
    font-size: 17px;
    font-weight: 600;
}


input, textarea, .opcoes, .opcoes1{
    width: 350px;
    padding: 10px;
    border: 1.7px solid #534242;
    border-radius: 10px;
    background-color: #eaf4ee;
    font-size: 15px;
}

.input-group, .opcoes, .opcoes1{
    display:flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 5px;
}

.opcoes{
    width: 160px;
}

.opcoes1{
    width: 370px;
    height: 35px;
}

.button{
    background-color: #668667;
    border: 1px solid #534242;
    border-radius: 7px;
    color: white;
    padding: 10px;
    text-align: center;
    width: 130px;
    height: 45px;
    margin-top: 30px;
    font-weight: bold;
    font-size: 17px;
    box-shadow: 2px 2px 10px #00000033;

}


.button:hover{
    background-color: #465c46;
}

.btnAcoes, .btnExcluir, .editar, .detalhes{
    background-color: #668667;
    border: 1px solid #534242;
    border-radius: 7px;
    color: white;
    padding: 10px;
    text-align: center;
    width: 80px;
    height: 35px;
    font-size: 14px;
    box-shadow: 2px 2px 10px #00000033;
    margin-right: 7px;
}

.btnAcoes:hover, .btnEditar:hover, .btnEditarLivro:hover, .buttonModal:hover, .editar:hover, .btnExcluir:hover, .detalhes:hover{
    background-color: #465c46;
}

.btnEditar{
    background-color: #668667;
    border: 1px solid #534242;
    border-radius: 7px;
    color: white;
    /* padding: 10px; */
    text-align: center;
    width: 130px;
    height: 50px;
    font-weight: bold;
    margin-top: 15px;
    font-size: 16px;
    box-shadow: 2px 2px 10px #00000033;
}

.btnEditarLivro{
    background-color: #668667;
    border: 1px solid #534242;
    border-radius: 7px;
    color: white;
    /* padding: 10px; */
    text-align: center;
    width: 130px;
    height: 45px;
    font-weight: bold;
    font-size: 14px;
    margin: 10px;
    box-shadow: 2px 2px 10px #00000033;
}

.closeModal{
    background-color: #668667;
    font-size: 25px;
    margin-top: -10px;
    /* margin-left: 570px; */
    padding: 0 10px;
    cursor: pointer;

}
/*ajustes especificos cadastro livros*/
#descricao{
    height: 70px;
    font-family: "Roboto", sans-serif;
    resize: none;
}

/* #isbn, #ano, #edicao, #qtd{
    width: 140px;
    font-size: 15px;
} */

/* barra de pesquisa */
.input-searchbar{
    margin-top: 20px;
    width: 400px;
    border-radius: 15px;
    margin-bottom: 20px;
}

.btn-search{
    background-color: #668667;
    border: 1px solid #534242;
    border-radius: 10px;
    color: white;
    padding: 10px;
    text-align: center;
    width: 120px;
    height: 40px;
    margin-left: 15px;
    font-weight: bold;
    font-size: 15px;
    box-shadow: 2px 2px 10px #00000033;
}

.btn-search:hover {
    background-color: #4d6d4d;
}

.searchbar{
    display: inline-block;
}

/* listagem livros */
table{
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    /* border: 1px solid #534242; */
    border-radius: 8px;
    overflow: hidden; /* para arredondar os cantos */
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);

}
th, td{
    padding: 12px;
    text-align: center;
}

thead{
    background-color: #677F5A;
    color: white;
}

tbody tr:hover {
    background-color: #aacfb7;
}

/* detalhes livro */

/* O conteúdo do modal */
/* .tituloModal{
    background-color: #71ae72;
    padding: 0px;
    width: 100%;
} */

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
    display: block; 
    position: fixed; /*isso que faz o fundo ficar escurecido*/
    z-index: 1; /* Fica acima do conteúdo */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Fundo semitransparente */
}

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

/* login e cadastro */
.login-content{
    background-color: #71ae72;
    display: flex;
    justify-content: center; /* centraliza horizontalmente */
    align-items: center;     /* centraliza verticalmente */
    height: 100vh; /* Faz o body ocupar 100% da altura da tela */
}

.login-content h1{
    text-align: center;
    font-size: 40px;
}

.form-login{
    /* flex-direction: column; */
    border: 3px solid #534242;
    border-radius: 20px;
    background-color: #ceeec8;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    width: 500px;   
    align-items: center;
}

.input-group-login{
    display: flex;
    flex-direction: column;
    padding: 5px;
    font-size: 13px;
}

.inputs1{
    margin: 5px auto; /* centraliza o input */
    width: 310px;
    border: 1.7px solid #534242;
    border-radius: 10px;
    background-color: #eaf4ee;
    font-size: 15px;
}

.input-group-login label{
    width: 90%;
    margin-left: 80px; /* centraliza o label */
    text-align: left;
}
.btn-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
}

.botao-login{
    background-color: #668667;
    border: 1px solid #534242;
    border-radius: 10px;
    color: white;
    padding: 10px;
    text-align: center;
    margin-top: 8px;
    width: 230px;
    height: 45px;
    font-weight: bold;
    font-size: 17px;
    box-shadow: 2px 2px 10px #00000033;
}

.botao-login:hover {
    background-color: #4d6d4d;
}

.btn-container a{
    font-weight: 20px;
}
.btn-cadastro{
    font-weight: bold;
    text-decoration: none;
    color: #000;
}

.btn-cadastro:hover{
    color: #3925aa;
}
</style>
