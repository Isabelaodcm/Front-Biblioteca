import { createRouter, createWebHistory } from 'vue-router';

import ListaAutores from '../pages/listaAutores.vue'
import HelloWorld from '@/components/HelloWorld.vue';
import CadastroLivro from '@/pages/CadastroLivro.vue';
import EditarAutor from '@/pages/editarAutor.vue';
import listaLivros from '@/pages/listaLivros.vue';
import listaEditoras from '@/pages/listaEditoras.vue';
import ListaEmprestimos from '@/pages/listaEmprestimos.vue';
import CadastroAutor from '@/pages/cadastroAutor.vue';

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
    path: '/editar-autor',
    name: 'EditarAutor',
    component: EditarAutor,
  },
  {
    path: '/lista-editoras',
    name: 'ListaEditoras',
    component: listaEditoras

  },
  {
    path: '/lista-emprestimos',
    name: 'ListaEmprestimos',
    component: ListaEmprestimos

  }
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;