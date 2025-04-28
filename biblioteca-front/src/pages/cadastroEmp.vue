<template>
  <h1> Cadastrar Empréstimo </h1>
  <form class="forms" @submit.prevent="cadastrarEmp">
    <div class="input-group">
        <label for="livro"> Livro </label>
        <select name="livro" id="livro" class="opcoes1" v-model = emp.livroId>
            <option value=""> Selecione um livro </option>
            <option v-for = "livro in livros" :key="livro.id" :value="livro.id">
                {{ livro.id }} - {{ livro.titulo }} - {{ livro.status }}
            </option>
        </select>
    </div>
    <div class="input-group">
        <label for="cliente"> Cliente </label>
        <select name="cliente" id="cliente" class="opcoes1" v-model = emp.clienteId>
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

    <button class="button"> Cadastrar </button>
  </form>
</template>

<script>
export default {
    mounted(){
        this.carregarLivros();
        this.carregarClientes();
    },

    data(){
        return{
            emp: {
                livroId: "",
                clienteId: "",
                dataEmp: "",
                dataDev: ""
            },
            livros: [],
            clientes: [],
            empInicial: {
                livroId: "",
                clienteId: "",
                dataEmp: "",
                dataDev: ""
            }
        }
    },

    methods: {
        async carregarLivros(){
            try{
                const res = await fetch(`http://localhost:8080/livro/lista-livros`);
                this.livros = await res.json();
            } catch(error){
                console.error("Erro ao carregar os livros: ", error);
                alert("Erro ao listar os livros.");
            }
        },
        async carregarClientes(){
            try{
                const res = await fetch(`http://localhost:8080/cliente/lista-clientes`);
                this.clientes = await res.json();
            } catch(error){
                console.error("Erro ao carregar os clientes: ", error);
                alert("Erro ao listar os clientes.");
            }
        },
        async cadastrarEmp(e){
            e.preventDefault();

            if (
                !this.emp.livroId ||
                !this.emp.clienteId ||
                !this.emp.dataEmp ||
                !this.emp.dataDev 
            ){
                alert("Preencha todos os campos!");
                return;
            }

            const daddosEmp = {
                livro: { id: parseInt(this.emp.livroId)},
                cliente: { id: parseInt(this.emp.clienteId)},
                dataEmp: this.emp.dataEmp,
                dataDev: this.emp.dataDev
            }

            try{
                const dadosJson = JSON.stringify(daddosEmp);
                const req = await fetch(`http://localhost:8080/emprestimo/cadastrar`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    body: dadosJson
            });

            const res = await req.json();
            console.log(daddosEmp);

            if(req.ok){
                alert("Empréstimo cadastrado com sucesso!");
                this.emp = {...this.empInicial};
            } else {
                res.errors.forEach((element) => {
                    throw new Error(element.defaultMessage);
                });
            }

            } catch(error){
                alert("Não foi possível cadastrar o empréstimo.");
                console.error("Erro ao cadastra empréstmo: ", error);
            }
        }
    }
}
</script>

<style>

</style>