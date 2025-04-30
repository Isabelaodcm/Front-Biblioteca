<template>
  <h1> Todos os Empréstimos </h1>
  <div class="searchbar">
    <input type="text" class="input-searchbar" placeholder="Pesquisar empréstimos...">
    <button class="btn-search"> Pesquisar </button>
    <button class="btn-search" @click="toCadastro()"> Adicionar Empréstimo </button>

  </div>
  <table >
    <thead>
        <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Aluno</th>
            <th>Data Empréstimo</th>
            <th>Data Devolução</th>
            <th>Status</th> <!-- Pendente/devolvido/atrasado -->
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for = "emp in emprestimos" :key="emp.id">
            <td>{{ emp.id }}</td>
            <td>{{ emp.livro.titulo }}</td>
            <td>{{ emp.cliente.nome }}</td>
            <td>{{ emp.dataEmp }}</td>
            <td>{{ emp.dataDev }}</td>
            <td>{{ emp.status }}</td>
            <td>
                <button class="editar" @click = "editarEmp(emp.id)">Editar</button>
                <button class="btnExcluir" @click="excluirEmp(emp.id)">Excluir</button>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    mounted(){
        this.listaEmp();
    },
    
    data(){
        return{
            emprestimos: []
        }
    },

    methods: {
        toCadastro(){
            this.$router.push('/cadastro-emprestimo');
        },

        async editarEmp(id){
            this.$router.push(`/editar-emp/${id}`);

        },

        async excluirEmp(id){
            if (!confirm("Tem certeza que deseja excluir esse empréstimo?")) return;
            try{
                const res = await fetch(`http://localhost:8080/emprestimo/excluir/${id}`, {
                    method:'DELETE'
                })

                if(res.ok){
                    alert("Empréstimo excluído com sucesso.")
                } else {
                    alert("Erro ao excluir o empréstimo.")
                }
            }catch(error){
                console.error("Erro ao excluir o empréstimo: ", error);
            }
        },
        async listaEmp(){
            try{
                const res = await fetch(`http://localhost:8080/emprestimo/lista-emprestimos`);
                this.emprestimos = await res.json();
            } catch(error){
                alert("Erro ao listar os emprestimos: ", error);
                console.error(error);
            }

        }
    }

}
</script>

<style>

</style>