<template>
  <h1>Cadastrar Livro</h1>
  <form class = "forms" @submit.prevent = "cadastrarLivro">
    <div class = "input-group">
        <label for="titulo">Titulo</label>
        <input type="text" class = "inputs" id = "titulo" v-model = "livro.titulo">
    </div>
    <div class="input-group">
        <label for="ano"> Ano </label>
        <input type="text" class = "inputs" id="ano" v-model="livro.anoPublicacao">
    </div>
    <div class="input-group">
        <label for="autor"> Autor </label>
        <select id="autor" class="opcoes1" v-model = "livro.autorId">
            <option value=""> Selecione um autor </option>
            <option v-for = "autor in autores" :key = "autor.id" :value="autor.id">
                {{ autor.id }} - {{ autor.nome }}
            </option>
        </select>
    </div>
    <div class="input-group">
        <label for="isbn"> ISBN </label>
        <input type="text" class = "inputs" id="isbn" v-model="livro.isbn">
    </div>
    <div class="input-group">
        <label for="editora"> Editora </label>
        <select id="editora" class="opcoes1" v-model = "livro.editoraId">
            <option value=""> Selecione uma editora </option>
            <option v-for = "editora in editoras" :key="editora.id" :value="editora.id">
                {{ editora.id }} - {{ editora.nome }}
            </option>
        </select>
    </div>
    <div class="input-group">
        <label for="edicao"> Edição </label>
        <input type="text" class = "inputs" id="edicao" v-model="livro.edicao">
    </div>
    <div class="input-group">
        <label for="obs"> Observações </label>
        <textarea class = "inputs" id="obs" v-model="livro.obs" placeholder="Página rasgada, lombada danificada"></textarea>
    </div>
    <div class="input-group">
        <label for="">Estado de conservação</label>
        <select  id="estado" class="opcoes" v-model = "livro.estadoCons">
            <option value="NOVO" >Novo</option>
            <option value="BOM">Bom</option>
            <option value="DANIFICADO">Danificado</option>
        </select>
    </div>

    <button class="button" > Cadastrar</button>
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
        };
    },

    mounted(){
        this.carregarAutores();
        this.carregarEditoras();
    },

    methods: {
        async carregarAutores(){
            try{
                const res = await fetch(`http://localhost:8080/autor/lista-autores`);
                this.autores = await res.json();
                // const dataAutores = await res.json();
                // this.autores = dataAutores.autores;
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

        async cadastrarLivro(e){

            e.preventDefault();

            if(
                !this.livro.titulo ||
                !this.livro.autorId ||
                !this.livro.editoraId ||
                !this.livro.isbn ||
                !this.livro.anoPublicacao ||
                !this.livro.edicao ||
                !this.livro.estadoCons 
            ) {
                alert("Preencha todos os campos obrigatórios!");
                return;
            }

            const dadosLivro = {
                titulo: this.livro.titulo,
                anoPublicacao: this.livro.anoPublicacao,
                isbn: this.livro.isbn,
                obs: this.livro.obs,
                edicao: this.livro.edicao,
                estadoCons: this.livro.estadoCons,

                autor: { id: parseInt(this.livro.autorId)},
                editora: {id: parseInt(this.livro.editoraId)}

            };
            
            try{
            const dadosJson = JSON.stringify(dadosLivro);
            const req = await fetch(`http://localhost:8080/livro/cadastrar-livro`, {
                method: 'POST', 
                headers: { "Content-Type": "application/json"},
                body: dadosJson
            });

            const res = await req.json();
            console.log(dadosLivro);

            if(req.ok){
                alert("Livro cadastrado com sucesso!");
            } else {
                res.errors.forEach((element) => {
                    throw new Error(element.defaultMessage);
                });
            }
        } catch (error){
            console.error("Erro ao cadastrar o livro: ", error);
            alert("Erro ao cadastrar o livro.");
        }
        }
    }
}
</script>

<style>

</style>