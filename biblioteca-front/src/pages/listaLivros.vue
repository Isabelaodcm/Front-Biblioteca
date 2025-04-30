<template>
  <h1> Todos os Livros </h1>
  <div class="searchbar">
        <input type="text" class = "input-searchbar" placeholder="Pesquisar livro..." v-model="termoBusca" @input="pesquisaLivro">
        <!-- <button class="btn-search">Pesquisar</button> -->
        <button class="btn-search" @click="toCadastro()"> Adicionar Livro </button>
    
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
                    <button class="detalhes" @click="abrirModal(livro)"> Detalhes </button>
                    
                    <button class="editar" @click="editarLivro(livro.id)"> Editar </button>
                    <button class="btnExcluir" @click="excluirLivro(livro.id)"> Excluir </button>
                </td>

            </tr>

            <modalComponent :show = "detalhesLivro" @close = "detalhesLivro = false" style="background-color: #000000;">
                        <template #titulo>
                            <h1>Detalhes do livro</h1>
                        </template>

                        <template #conteudo>
                            <p><strong>Título: </strong> {{ livroSelecionado.titulo || '-'}}</p>
                            <p><strong>Autor: </strong> {{ livroSelecionado.autor?.nome || '-'}}</p>
                            <p><strong>Editora: </strong> {{ livroSelecionado.editora?.nome || '-'}}</p>
                            <p><strong>Ano de Publicação: </strong> {{ livroSelecionado.anoPublicacao || '-'}}</p>
                            <p><strong>ISBN: </strong> {{ livroSelecionado.isbn || '-'}}</p>
                            <p><strong>Edição: </strong> {{ livroSelecionado.edicao || '-'}}</p>
                            <p><strong>Estado de Conservação: </strong> {{ livroSelecionado.estadoCons || '-'}}</p>
                            <p><strong>Status: </strong> {{ livroSelecionado.status || '-'}}</p>
                            <p><strong>Observações: </strong> {{ livroSelecionado.obs || '-'}}</p>
                        </template>

                    </modalComponent>
        </tbody>
    </table>
</template>

<script>
import modalComponent from '@/components/modalComponent.vue';

export default {
    mounted(){
        this.listaLivros();
    },

    data(){
        return{
            livros: [],
            // detalhesLivro: false
            detalhesLivro: false,
            livroSelecionado: {},
            termoBusca: ''
        };
    },
    
    components: { modalComponent },

    methods: {

        toCadastro(){
            this.$router.push('cadastro-livro');
        },
        
        async editarLivro(id){
            this.$router.push(`/editar-livro/${id}`)
        },
        
        async abrirModal(livro){
            this.livroSelecionado = livro;
            this.detalhesLivro = true;
        },

        async excluirLivro(id){
            if (!confirm("Tem certeza que deseja excluir esse livro?")) return;

            try{
                const res = await fetch(`http://localhost:8080/livro/excluir/${id}`, {
                    method: 'DELETE'
                });

                if(res.ok){
                    alert("Livro excluído com sucesso!");
                    // this.livro = this.livro.filter(((livro) => livro.id !== id));
                    window.location.reload();

                } else {
                    alert("Erro ao excluir. O livro está associado a um empréstimo.");

                }

            } catch(error){
                console.error("Erro ao excluir: ", error);
            }
        },

        async listaLivros(){
            try{
                const res = await fetch(`http://localhost:8080/livro/lista-livros`);
                this.livros = await res.json();

            } catch(error){
                alert("Erro ao listar os livros.");
                console.error(error);
            }

        },

        async pesquisaLivro(){
            const termo =  this.termoBusca.trim();
            if(termo == ''){
                this.listaLivros();
    
            }

            try{
                const res = await fetch(`http://localhost:8080/livro/pesquisa?titulo=${encodeURIComponent(termo)}`);
                if(!res.ok) throw new Error("Erro na busca");
                this.livros = await res.json();

            } catch(error){
                console.error("Erro na busca: ", error);
            }
        },
        

    }
}
</script>

<style>

</style>