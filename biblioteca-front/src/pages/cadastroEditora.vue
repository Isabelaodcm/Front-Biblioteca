<template>
    <h1>Cadastrar Editora</h1>
    <form class="forms" @submit.prevent="cadastrarEditora">
        <div class="input-group">
            <label for="nome"> Nome </label>
            <input type="text" class="inputs" id = "nome" v-model = editora.nome>
        </div>
        <div class="input-group">
            <label for="cidade"> cidade </label>
            <input type="text" class="inputs" id = "cidade" v-model = editora.cidade>
        </div>
        <div class="input-group">
            <label for="cep"> CEP </label>
            <input type="text" class="inputs" id = "cep" v-model = editora.cep>
        </div>
        <div class="input-group">
            <label for="pais"> País </label>
            <input type="text" class="inputs" id = "pais" v-model = editora.pais>
        </div>
        <div class="input-group">
            <label for="rua"> Rua </label>
            <input type="text" class="inputs" id = "rua" v-model = editora.rua>
        </div>
        <div class="input-group">
            <label for="numero"> Numero </label>
            <input type="text" class="inputs" id = "numero" v-model = editora.numero>
        </div>
        <div class="input-group">
            <label for="bairro"> Bairro </label>
            <input type="text" class="inputs" id = "bairro" v-model = editora.bairro>
        </div>

        <div>

        </div>

        <button class="button"> Cadastrar </button>
    </form>
  
</template>

<script>
export default {
    data(){
        return{
            editora:{
                nome: "",
                pais: "",
                cidade: "",
                cep: "",
                bairro: "",
                rua: "",
                numero: "",

            },
            editoraInicial:{
                nome: "",
                pais: "",
                cidade: "",
                cep: "",
                bairro: "",
                rua: "",
                numero: "",

            }
        };
    }, 

    methods:{
        async cadastrarEditora(e) {
            e.preventDefault();
            if (
                !this.editora.nome ||
                !this.editora.pais ||
                !this.editora.cidade ||
                !this.editora.cep ||
                !this.editora.bairro ||
                !this.editora.rua ||
                !this.editora.numero 
            ) {
                alert("Preencha todos os campos!");
                return;
            }

            const dadosEditora = {
                nome: this.editora.nome,
                pais: this.editora.pais,
                cidade: this.editora.cidade,
                cep: this.editora.cep,
                bairro: this.editora.bairro,
                rua: this.editora.rua,
                numero: this.editora.numero
            }

            try{
                const dadosJson = JSON.stringify(dadosEditora); 
                const req = await fetch(`http://localhost:8080/editora/cadastrar`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    body: dadosJson
                });

                const res = await req.json();
                console.log(dadosEditora);

                if(req.ok){
                    alert("Editora cadastrada com sucesso!")
                    this.editora = {...this.editoraInicial};
                } else {
                    res.errors.forEach(element => {
                        throw new Error(element.defaultMessage);
                        
                    });
                }
            } catch(error){
                alert("Não foi possível cadastrar a editora.");
                console.error("Erro ao cadastrar: ", error);
            }

        }
    }

}
</script>

<style>

</style>