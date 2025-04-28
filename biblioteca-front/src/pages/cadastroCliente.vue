<template>
  <h1> Cadastrar Cliente </h1>
  <form class="forms" @submit.prevent="cadastrarCliente">
    <div class="input-group">
        <label for="nome"> Nome Completo </label>
        <input type="text" class="inputs" id = "nome" v-model = cliente.nome>
    </div>
    <div class="input-group">
        <label for="telefone"> Telefone </label>
        <input type="text" class="inputs" id = "telefone" v-model = cliente.telefone>
    </div>
    <div class="input-group">
        <label for="cpf"> CPF </label>
        <input type="text" class="inputs" id = "cpf" v-model = cliente.cpf>
    </div>
    <div class="input-group">
        <label for="email"> E-mail </label>
        <input type="email" class="inputs" id = "email" v-model = cliente.email>
    </div>

    <button class="button"> Cadastrar </button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            cliente: {
                nome: "",
                telefone: "",
                cpf: "",
                email: ""
            }, 
            clienteInicial: {
                nome: "",
                telefone: "",
                cpf: "",
                email: ""
            }
        }
    }, 
     
    methods:{
        async cadastrarCliente(e){
            e.preventDefault();

            if(
                !this.cliente.nome ||
                !this.cliente.telefone ||
                !this.cliente.cpf ||
                !this.cliente.email 
            ){
                alert("Preencha todos os campos!");
                return;
            }

            const dadosCliente = {
                nome: this.cliente.nome,
                telefone: this.cliente.telefone,
                cpf: this.cliente.cpf,
                email: this.cliente.email
            };

            try{
                const dadosJson = JSON.stringify(dadosCliente);
                const req = await fetch(`http://localhost:8080/cliente/cadastrar`, {
                    method:'POST',
                    headers: {"Content-Type": "application/json"},
                    body: dadosJson
                })

                const res = await req.json();
                console.log(dadosCliente);

                if(req.ok){
                    alert("Cliente cadastrado com sucesso!")
                    this.cliente = {...this.clienteInicial}; //limpando os campos do form
                } else {
                res.errors.forEach((element) => {
                    throw new Error(element.defaultMessage);
                });
            }

            } catch(error){
                alert("Não foi possível cadastrar o cliente.");
                console.error("Erro ao cadastrar o cliente: ", error);
            }


        }
    }

}
</script>

<style>

</style>