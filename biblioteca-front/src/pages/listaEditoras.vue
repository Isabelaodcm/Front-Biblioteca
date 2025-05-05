<template>
  <h1> Todas as Editoras </h1>
  <div class="searchbar">
        <input type="text" class="input-searchbar" placeholder = "Pesquisar editora..." v-model="termoBusca" @input="pesquisaEditora">
        <!-- <button class="btn-search">Pesquisar</button> -->
        <button class="btn-search" @click="toCadastro()"> Adicionar Editora </button>

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
                <button class="editar" @click="editarEditora(editora.id)"> Editar </button>
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
            editoras:[], 
            termoBusca: ''
        };
    },

    methods:{
        toCadastro(){
            this.$router.push('/cadastro-editora');
        },

        async editarEditora(id){
            this.$router.push(`editar-editora/${id}`)
        },
        
        async excluirEditora(id){
            if(!confirm("Tem certeza que deseja excluir essa editora?")) return;

            try{
                const res = await fetch(`http://localhost:8080/editora/excluir/${id}`, {
                    method: 'DELETE'
                });
            
            if(res.ok){
                alert("Editora excluída com sucesso!");
                this.editora = this.editora.filter(((editora) => editora.id !== id ))
                
            } else {
                alert("Erro ao excluir. A editora está associada a pelo menos um livro.");

            }

            }catch(error){
                console.error("Erro ao excluir a editora: ", error)
            }
        },

        async listaEditoras(){
            try{
                const res = await fetch(`http://localhost:8080/editora/lista-editoras`);
                this.editoras = await res.json();
            } catch(error){
                alert("Erro ao listar as editoras ", error);
                console.error(error);
            }

        },

        async pesquisaEditora(){
            const termo = this.termoBusca.trim();
            if(termo == ''){
                this.listaEditoras();
            }

            try{
                const res = await fetch(`http://localhost:8080/editora/pesquisar?nome=${encodeURIComponent(termo)}`);
                if(!res.ok) throw new Error("Erro na busca");
                this.editoras = await res.json();

            } catch(error){
                console.error("Erro na busca: ", error);
            }
        }


    }

}
</script>

<style>

</style>