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
        <select id="autor" class="opcoes1" v-model = "livro.autor.id" required>
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
        <select id="editora" class="opcoes1" v-model = "livro.editora.id" required>
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
                autor: { id: ""},
                editora: { id: ""}
            },
            autores: [],
            editoras: []
        }
    },

    mounted(){
        this.carregarAutores();
        this.carregarEditoras();
    },

    async created(){
        const id = this.$route.params.id;
        try{
            const res = await fetch(`http://localhost:8080/livro/busca-livro/${id}`);

        this.livro = await res.json();
        // this.autor = await autorRes.json();
        // this.editora = await editoraRes.json();

        } catch(error){
            alert("Erro ao carregar os dados do livro.");
            console.error("Erro ao carregar dados: ", error);
        }
    },

    methods:{

       async editarLivro(){
            try{
                const dadosJson = JSON.stringify(this.livro);
                const res = await fetch(`http://localhost:8080/livro/editar/${this.livro.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json'},
                    body: dadosJson
                })

                if(res.ok){
                    alert("Livro editado com sucesso!");
                    this.$router.push('/lista-livros');
                }

            }catch(error){
                alert("Não foi possível salvar as alterações.");
                console.error("Erro ao editar: ", error);
            }
        },

        async carregarAutores(){
            try{
                const res = await fetch(`http://localhost:8080/autor/lista-autores`);
                this.autores = await res.json();
    
            } catch (error) {
                console.error("Erro ao carregar os autores: ", error);
            }
        },

        async carregarEditoras(){
            try{
                const res = await fetch(`http://localhost:8080/editora/lista-editoras`);
                this.editoras = await res.json();
            } catch (error) {
                console.error("Erro ao carregar as editoras: ", error);
            }
        }, 

        cancelar(){
            this.$router.push('/lista-livros');
        }
    }
}
</script>

<style>

</style>