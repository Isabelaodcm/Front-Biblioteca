<template>
  <h1> Editar Empréstimo</h1>
  <form class="forms" @submit.prevent="editarEmp">
    <div class="input-group">
        <label for="livro"> Livro </label>
        <input type="text" name="" id="livro" v-model="emp.livro.titulo" readonly>

    </div>
    <div class="input-group">
        <label for="cliente"> Cliente </label>
        <select name="cliente" id="cliente" class="opcoes1" v-model = emp.cliente.id>
            <option value=""> Selecione um cliente </option>
            <option v-for = "cliente in clientes" :key="cliente.id" :value="cliente.id">
                {{ cliente.id }} - {{ cliente.nome }}
            </option>
        </select>
    </div>
    <div class="input-group">
        <label for="dataEmp"> Data de Empréstimo </label>
        <input type="date" class="inputs" id = "dataEmp" v-model="emp.dataEmp">
    </div>
    <div class="input-group">
        <label for="dataDev"> Data de Devolução </label>
        <input type="date" class="inputs" id = "dataDev" v-model="emp.dataDev">
    </div>

    <div class="input-group">
        <label for="edicao"> Status </label>
        <select name="status" id="status" class="opcoes1" v-model="emp.status">
            <option value="PENDENTE">Pendente</option>
            <option value="ATRASADO">Atrasado</option>
            <option value="DEVOLVIDO">Devolvido</option>
        </select>

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
            emp: {
                livro: { id: ""},
                cliente: {id: ""},
                dataEmp: "",
                dataDev: "", 
                status: ""
            }, 

            clientes: []
        }
    },

    mounted(){
        this.carregarClientes();
    },

    async created(){
        const id = this.$route.params.id;
        try{
            const res = await fetch(`http://localhost:8080/emprestimo/busca-emprestimo/${id}`);
            this.emp = await res.json();

        }catch(error){
            alert("Erro ao carregar os dados do empréstimo.");
            console.error("Erro ao carregar os dados: ", error);
        }
    }, 

    methods:{
        async editarEmp(id){
            try{
                const dadosJson = JSON.stringify(this.emp);
                const res = await fetch(`http://localhost:8080/emprestimo/editar/${this.emp.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type':'application/json'},
                    body: dadosJson
                })

                if(res.ok){
                    alert("Empréstimo editado com sucesso!");
                    this.$router.push('/lista-emprestimos');
                }

            }catch(error){
                alert("Não foi possível salvar as alterações.");
                console.error("Erro ao editar: ", error);
            }

        },

        async carregarClientes(){
            try{
                const res = await fetch(`http://localhost:8080/cliente/lista-clientes`);
                this.clientes = await res.json();

            }catch(error){
                alert("Erro ao carregar os clientes.");
                console.log("Erro ao carregar clientes: ", error);
            }
        },

        cancelar(){
            this.$router.push('/lista-emprestimos');
        }
    }

}
</script>

<style>

</style>