<template>
    <title>Editar Autor</title>
        <h1>Editar Autor</h1>
        <form class="forms" @submit.prevent="editarAutor()">
            <div class = "input-group">
                <label for="nome"> Nome </label>
                <input type="text" v-model = "autor.nome">
            </div>
            <div class="input-group">
            <label for="pais">País</label>
            <input type="text" class = "inputs" id="pais" v-model="autor.pais">
            </div>
            <div class="input-group">
                <label for="cidade">Cidade</label>
                <input type="text" class = "inputs" id="cidade" v-model="autor.cidade">
            </div>
            <div class="input-group">
                <label for="anoNasc">Ano de Nascimento</label>
                <input type="text" class = "inputs" id="anoNasc" v-model="autor.anoNasc">
            </div>
            <div class="input-group">
                <label for="anoFalesc">Ano de Falescimento</label>
                <input type="text" class = "inputs" id="anoFalesc" v-model="autor.anoFalesc">
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
        return {
            autor: {
                nome: "",
                pais: "",
                cidade: "",
                anoFalesc: "",
                anoNasc: ""
            }
        }
    }, 
    
    async created(){
        const id = this.$route.params.id
        try {
            const response = await fetch(`http://localhost:8080/autor/busca-autor/${id}`);
            this.autor = await response.json();

        } catch(error){
            alert("Erro ao carregar os dados do autor.")
            console.error("Erro ao carregar os dados: ", error);
        }
    }, 

    methods: {
        async editarAutor(){
            try {
                const dadosJson = JSON.stringify(this.autor);
                const res = await fetch(`http://localhost:8080/autor/editar/${this.autor.id}`, {
                    method: 'PUT',
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: dadosJson
                })

                if(res.ok){
                    alert("Autor editado com sucesso!")
                    this.$router.push('/lista-autores');
                }
            } catch(error){
                alert("Não foi possível salvar as alterações");
                console.error("Erro ao editar: ", error);
            }
        }, 

        cancelar() {
            this.$router.push('/lista-autores')
        }
    }
}
</script>

<style>

</style>