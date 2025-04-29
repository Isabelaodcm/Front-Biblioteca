import { createRouter, createWebHistory } from 'vue-router';

import ListaAutores from '../pages/listaAutores.vue'
import HelloWorld from '@/components/HelloWorld.vue';
import CadastroLivro from '@/pages/CadastroLivro.vue';
import EditarAutor from '@/pages/editarAutor.vue';
import listaLivros from '@/pages/listaLivros.vue';
import listaEditoras from '@/pages/listaEditoras.vue';
import ListaEmprestimos from '@/pages/listaEmprestimos.vue';
import CadastroAutor from '@/pages/cadastroAutor.vue';
import CadastroEditora from '@/pages/cadastroEditora.vue';
import CadastroEmp from '@/pages/cadastroEmp.vue';
import CadastroCliente from '@/pages/cadastroCliente.vue';
import EditarLivro from '@/pages/editarLivro.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HelloWorld,
    }, 
    {
    path: '/cadastro-livro',
    name: 'CadastroLivro',
    component: CadastroLivro,
  },
  {
    path: '/lista-livros',
    name: 'ListaLivros',
    component: listaLivros

  },
  {
    path: '/editar-livro/:id',
    name: 'EditarLivro',
    component: () => import ('@/pages/editarLivro.vue')
  },
  {
    path: '/cadastro-autor',
    name: 'CadastroAutor',
    component: CadastroAutor,
  },
  {
    path: '/lista-autores',
    name: 'ListaAutores',
    component: ListaAutores,
  },
  {
    path: '/editar-autor/:id',
    name: 'EditarAutor',
    component: () => import ('@/pages/editarAutor.vue')
  },
  {

    path: '/cadastro-editora',
    name: 'CadastroEditora', 
    component: CadastroEditora,
  },
  {
    path: '/lista-editoras',
    name: 'ListaEditoras',
    component: listaEditoras

  },
  {
    path: '/editar-editora/:id',
    name: 'EditarEditora',
    component: () => import('@/pages/editarEditora.vue')
  },
  {
    path: '/cadastro-emprestimo',
    name: 'CadastrarEmp',
    component: CadastroEmp
  },
  {
    path: '/lista-emprestimos',
    name: 'ListaEmprestimos',
    component: ListaEmprestimos
  },
  {
    path: '/cadastro-cliente',
    name: 'CadastrarCliente',
    component: CadastroCliente
  }
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;