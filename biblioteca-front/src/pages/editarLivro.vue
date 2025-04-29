<template>
  <h1>Editar Livro</h1>
  <form class = "forms" @submit.prevent = "editarLivro">
    <div class = "input-group">
        <label for="titulo">Titulo</label>
        <input type="text" class = "inputs" id = "titulo" v-model = "livro.titulo" required>
    </div>
    <div class="input-group">
        <label for="ano"> Ano </label>
        <input type="text" class = "inputs" id="ano" v-model="livro.anoPublicacao" required>
    </div>
    <div class="input-group">
        <label for="autor"> Autor </label>
        <select id="autor" class="opcoes1" v-model = "livro.autorId" required>
            <option value=""> Selecione um autor </option>
            <option v-for = "autor in autores" :key = "autor.id" :value="autor.id">
                {{ autor.id }} - {{ autor.nome }}
            </option>
        </select>
    </div>
    <div class="input-group">
        <label for="isbn"> ISBN </label>
        <input type="text" class = "inputs" id="isbn" v-model="livro.isbn" required>
    </div>
    <div class="input-group">
        <label for="editora"> Editora </label>
        <select id="editora" class="opcoes1" v-model = "livro.editoraId" required>
            <option value=""> Selecione uma editora </option>
            <option v-for = "editora in editoras" :key="editora.id" :value="editora.id">
                {{ editora.id }} - {{ editora.nome }}
            </option>
        </select>
    </div>
    <div class="input-group">
        <label for="edicao"> Edição </label>
        <input type="text" class = "inputs" id="edicao" v-model="livro.edicao" required>
    </div>
    
    <div class="input-group">
        <label> Status </label>
        <input type="text" class="inputs" id = "status" v-model = "livro.status" readonly>
    </div>

    <div class="input-group">
        <label for="" required>Estado de conservação</label>
        <select  id="estado" class="opcoes1" v-model = "livro.estadoCons">
            <option value="NOVO">Novo</option>
            <option value="BOM">Bom</option>
            <option value="DANIFICADO">Danificado</option>
        </select>
    </div>

    <div class="input-group">
        <label for="obs"> Observações </label>
        <textarea class = "inputs" id="obs" v-model="livro.obs" placeholder="Página rasgada, lombada danificada"></textarea>
    </div>
    <div>

    </div>

    <button class="btnEditar1"> Salvar alterações</button>
    <button class="btnEditar1" @click="cancelar()"> Cancelar </button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            livro: {
                titulo: "",
                anoPublicacao: "",
                isbn: "",
                edicao: "",
                obs: "",
                estadoCons: "",
                autorId: "",   // <--- armazena só o ID
                editoraId: "" 
            },
            autores: [],
            editoras: []
        }
    },

    async created(){
        const id = this.$route.params.id;
        try{
            const [livroRes, autorRes, editoraRes] = await Promise.all([
            fetch(`http://localhost:8080/livro/busca-livro/${id}`),
            fetch(`http://localhost:8080/autor/lista-autores`),
            fetch(`http://localhost:8080/editora/lista-editoras`)

        ]);

        this.livro = await livroRes.json();
        this.autor = await autorRes.json();
        this.editora = await editoraRes.json();

        } catch(error){
            alert("Erro ao carregar os dados do livro.");
            console.error("Erro ao carregar dados: ", error);
        }
    }
}
</script>

<style>

</style>