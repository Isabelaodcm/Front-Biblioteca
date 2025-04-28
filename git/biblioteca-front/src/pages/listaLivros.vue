<template>
  <h1> Todos os Livros </h1>
  <div class="searchbar">
        <input type="text" class = "input-searchbar" placeholder="Pesquisar livro...">
        <button class="btn-search">Pesquisar</button>
    
    </div>
    <table>
        <thead>
            <tr>
                <th>Código</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Ano de Publicação</th>
                <th>Edição</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for = "livro in livros" :key="livro.id">
                <td>{{ livro.id || '-'}}</td>
                <td>{{ livro.titulo  || '-'}}</td>
                <td>{{ livro.autor.nome || '-' }}</td>
                <td>{{ livro.editora.nome || '-' }}</td>
                <td>{{ livro.anoPublicacao || '-' }}</td>
                <td>{{ livro.edicao || '-' }}</td>
                <td>{{ livro.status || '-' }}</td>
                <td>
                    <button class="detalhes" @click="detalhesLivro(livro)"> Detalhes </button>
                    <button class="editar" @click="editarAutor(livro)"> Editar </button>
                    <button class="btnExcluir" @click="excluirAutor(livro.id)"> Excluir </button>
                </td>

            </tr>
        </tbody>
    </table>
</template>

<script>
import ListaAutores from './listaAutores.vue';

export default {
    mounted(){
        this.listaLivros();
    },

    data(){
        return{
            livros: []
        };
    },

    methods: {
        async listaLivros(){
            try{
                const res = await fetch(`http://localhost:8080/livro/lista-livros`);
                this.livros = await res.json();
            } catch(error){
                alert("Erro ao listar os livros.");
                console.error(error);
            }

        }
    }
}
</script>

<style>

</style>