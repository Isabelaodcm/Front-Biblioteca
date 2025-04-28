<template>
  <h1> Todas as Editoras </h1>
  <div class="searchbar">
        <input type="text" class="input-searchbar" placeholer = "Pesquisar editora...">
        <button class="btn-search">Pesquisar</button>
  </div>
  <table>
    <thead>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>País</th>
            <th>Cidade</th>
            <th>CEP</th>
            <th>Bairro</th>
            <th>Rua</th>
            <th>número</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for = "editora in editoras" :key="editora.id">
            <td> {{ editora.id }}</td>
            <td> {{ editora.nome }}</td>
            <td> {{ editora.pais }}</td>
            <td> {{ editora.cidade }}</td>
            <td> {{ editora.cep }}</td>
            <td> {{ editora.bairro }}</td>
            <td> {{ editora.rua }}</td>
            <td> {{ editora.numero }}</td>
            <td>
                <button class="editar" @click="editarEditora(editora)"> Editar </button>
                <button class="btnExcluir" @click="excluirEditora(editora.id)"> Excluir </button>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    mounted(){
        this.listaEditoras();
    },
  
    data(){
        return{
            editoras:[]
        };
    },

    methods:{
        async listaEditoras(){
            try{
                const res = await fetch(`http://localhost:8080/editora/lista-editoras`);
                this.editoras = await res.json();
            } catch(error){
                alert("Erro ao listar as editoras ", error);
                console.error(error);
            }

        }
    }

}
</script>

<style>

</style>