<template>
    <!-- <div class = "content"> -->
        <h1> Todos os autores </h1>

        <div class="searchbar">
            <input type="text" class = "input-searchbar" placeholder="Pesquisar autor..." v-model="termoBusca" @input="pesquisaAutor">
            <!-- <button class="btn-search">Pesquisar</button> -->
            <button class="btn-search" @click="toCadastro()"> Adicionar Autor </button>
            
        </div>
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Cidade</th>
                    <th>País</th>
                    <th>Ano de Nascimento</th>
                    <th>Ano de Falecimento</th>
                    <!-- <th>Livros cadastrados</th> -->
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="autor in autores" :key="autor.id">
                    <td>{{ autor.id || '-' }}</td>
                    <td>{{ autor.nome || '-' }}</td>
                    <td>{{ autor.cidade || '-' }}</td>
                    <td>{{ autor.pais || '-' }}</td>
                    <td>{{ autor.anoNasc || '-' }}</td>
                    <td>{{ autor.anoFalesc || '-' }}</td>
                    <td>
                        <button class="editar" @click="editarAutor(autor)"> Editar </button>
                        <button class="btnExcluir" @click="excluirAutor(autor.id)"> Excluir </button>
                    </td>

                </tr>
            </tbody>
        </table>

        

    <!-- </div> -->
</template>

<script>

export default{
    data(){
        return{
            autores: [], 
            termoBusca: ''

        };
    },

    methods: {
        toCadastro(){
            this.$router.push('/cadastro-autor');
        },

        async listaAutores() {
            try{
                const response = await fetch(`http://localhost:8080/autor/lista-autores`);
                this.autores = await response.json();
            } catch(error) {
                alert("Erro ao listar os autores.");
                console.error(error);
            }
        },
    
        async editarAutor(autor){
            // window.location.href = `editarAutor.vue?id=${id}`
            this.$router.push({name: 'EditarAutor', params:{id: autor.id}})
        },

        async excluirAutor(id){
            if(!confirm("Tem certeza que deseja excluir esse autor?")) return;

            try{
                const response = await fetch(`http://localhost:8080/autor/excluir-autor/${id}`,{
                method: 'DELETE'
            });

            if(response.ok){
                alert("Autor excluido com sucesso!");
                // this.autores = this.autores.filter(((autor) => autor.id !== id));
            } else {
                alert("Erro ao excluir. O autor está associado a um livro.")
            }
        } catch (error) {
            alert("Erro ao excluir.");
        }
    },

        async pesquisaAutor(){
            const termo = this.termoBusca.trim();
            if(termo == ''){
                this.listaAutores();
            }

            try{
                const res = await fetch(`http://localhost:8080/autor/pesquisar?nome=${encodeURIComponent(termo)}`);
                if(!res.ok) throw new Error("Erro na busca");
                this.autores = await res.json();

            }catch(error){
                console.error("Erro ao buscar: ", error);
            }
        }
    },

    mounted(){
        this.listaAutores();
        // const autorId = this.$route.params.id;
        // console.log('ID do autor:', autorId);
    }
}

</script>

<style>

</style>