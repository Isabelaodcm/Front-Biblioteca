<template>
  <h1> Editar Editora </h1>
  <form class="forms" @submit.prevent="editarEditora">
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

        <button class="btnEditar1"> Salvar alterações</button>
        <button class="btnEditar1" @click="cancelar()"> Cancelar </button>
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
                numero: ""
            }
        }
    },

    async created(){
        const id = this.$route.params.id;
        try{
            const res = await fetch(`http://localhost:8080/editora/busca-editora/${id}`);
            this.editora = await res.json();

        } catch(error){
            alert("Erro ao carregar dados da editora.");
            console.error("Erro ao carregar: ", error);
        }
    },

    methods:{
        async editarEditora(){
            try{
                const dadosJson = JSON.stringify(this.editora);
                const res = await fetch(`http://localhost:8080/editora/editar/${this.editora.id}`, {
                    method: 'PUT',
                    headers: {"Content-Type": "application/json"},
                    body: dadosJson
                })
                
                if(res.ok){
                    alert("Alterações salvas com sucesso!");
                    this.$router.push('/lista-editoras');
                }
                
            }catch(error){
                alert("Não foi possível salvar as alterações");
                console.error("Erro ao editar: ", error);
            }
        },

        async cancelar(){
            this.$router.push('/lista-editoras')
        }
    }

}
</script>

<style>

</style>