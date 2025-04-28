<template>
   <nav class = "barra-lateral">
    
    <h2 class = "menu" >Menu</h2>
    <ul>
        <li> <RouterLink to="/cadastro-livro"> Cadastrar Livro</RouterLink> </li>
        <li> <RouterLink to = "/cadastro-autor"> Cadastrar Autor </RouterLink></li>
        <li> <RouterLink to = "/cadastro-editora"> Cadastrar Editora </RouterLink></li>
        <li> <RouterLink to = "/cadastro-emprestimo"> Cadastrar Empréstimo </RouterLink></li>
        <li> <RouterLink to = "/cadastro-cliente"> Cadastrar Cliente </RouterLink></li>
        <li> <RouterLink to = "/lista-livros"> Todos os Livros </RouterLink></li>
        <li><RouterLink to="/lista-autores">Todos os Autores</RouterLink></li>
        <li><RouterLink to="/lista-editoras"> Todas as Editoras </RouterLink></li>
        <li><RouterLink to= "/lista-emprestimos">Todos os Empréstimos</RouterLink> </li>     
    </ul>
</nav>
</template>

<script>
export default {
    name: "MenuLateralComponent"

}
</script>

<style>
.barra-lateral{
    background-color: #71ae72; 
    /* background-color: #5e995f; */
    /* background-color: #8AB88B; */
    height: 100vh;
    width: 250px;
    padding: 10px;
    position:fixed;
    top : 0px;
    left: 0px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;

    
}
.barra-lateral ul{
    padding: 10px;
    display: block;
    line-height: 25px;
    list-style: none;
}

.barra-lateral ul li a:hover{
    background-color: #527553;
    /* background-color: #668667; */
}

.barra-lateral ul li a{
    display: block; /* Faz com que o link ocupe toda a largura do elemento pai */
    text-decoration: none;
    color: black;
    border: none;
    /* border: 2px solid #5e995f; */
    /* border: 2px solid #8AB88B; */
    padding: 5px;
    text-align: left;
    font-weight: 450;
    font-size: 19px;
}  
</style>