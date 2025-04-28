<template>
  <h1> Cadastrar Autor </h1>
  <form class="forms" @submit.prevent = "cadastrarAutor">
    <div class="input-group">
        <label for="nome">Nome</label>
        <input type="text" class = "inputs" id="nome" v-model="autor.nome">
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

    <button class="button" > Cadastrar</button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            autor: {
                nome: "",
                pais: "",
                cidade: "",
                anoFalesc: "",
                anoNasc: "",

            },
            autorInicial: {
                nome: "",
                pais: "",
                cidade: "",
                anoFalesc: "",
                anoNasc: "",

            }
        };
    }, 

    methods: {
        async cadastrarAutor(e){
            e.preventDefault();
            if(
                !this.autor.nome ||
                !this.autor.pais ||
                !this.autor.cidade ||
                !this.autor.anoNasc 

            ){
                alert("Preencha todos os campos obrigatórios!");
                return;
            }

            const dadosAutor = {
                nome: this.autor.nome,
                pais: this.autor.pais,
                cidade: this.autor.cidade,
                anoNasc: this.autor.anoNasc,
                anoFalesc: this.autor.anoFalesc
            };

            try{
                const dadosJson = JSON.stringify(dadosAutor);
                const req = await fetch(`http://localhost:8080/autor/cadastrar`, {
                    method: 'POST', 
                    headers: { "Content-Type": "application/json"},
                    body: dadosJson
                });

                const res = await req.json();
                console.log(dadosAutor);

                if(req.ok){
                    alert("Autor cadastrado com sucesso!")
                    this.autor = {...this.autorInicial}; //limpando os campos do form
                } else {
                res.errors.forEach((element) => {
                    throw new Error(element.defaultMessage);
                });
            }
            } catch(error){
                alert("Não foi possíve cadastrar o autor.");
                console.error("Erro ao cadastrar: ", error)
            }

        }
    }
}
</script>

<style>

</style>