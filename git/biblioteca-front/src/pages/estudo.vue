<template>
    <div>
    <h1>composition</h1>
        <p>{{ nome }}</p>
        <input type="text" v-model="nome">
        <hr>
        <p>{{ temperatura }}</p>
        <input type="text" v-model="temperatura">
        <span>{{ verificaTemp }}</span>
        <br>
        <!-- <span>{{ verificaTempFunction }}</span> -->
        <p>{{ person.name }}</p>
        <p>{{ person.age }}</p>

    <h2>Diretivas (v-model, v-if, v-else, v-else-if, v-show)</h2>
        <p>{{ nome2 }}</p>
        <input type="text" v-model = "nome2">
        
        <span v-if = "show">Olá pessoas</span>
        <span v-else-if="show == null">ops. algo deu errado</span>
        <span v-else>tchauu</span>

        <p v-show="show">falando sobre v-show</p>

        <ul>
            <li v-for = "item in array"
            :key = "item">{{ item }}</li>
        </ul>

        Mouse position is at: {{ x }}, {{ y }}
    </div>
</template>

<script setup>
import {ref, onMounted, computed, reactive, onUnmounted} from 'vue'

let nome = ref('isabela');

onMounted( () => {
    // alert("hello vue!"); //vai mostrar isso toda vez que a tela for montada
    nome.value = 'joao' //atribiuindo valores para referencias
})

let temperatura = ref(22);
const verificaTemp = computed ( () => {
    console.log('computed') //se olharmos no console veremos que a computed so roda se eu editar o valor de temperatura
    return temperatura.value > 29 ? 'quente' : 'frio'
}) 

let person = reactive({ 
    name: 'maria', 
    age: 21
})

onMounted ( () => {
    person.name = 'julia';
    console.log(person)
})

const nome2 = ref('pedro')
const show = true;

const array = [1,2,3,4,5]

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
// const verificaTempFunction = () => {
//     console.log('function') //ja a function executa em toda interacao que o usuario tiver com a tela
//     return temperatura.value > 29 ? 'quente' : 'frio' 

// }

// export default {

// }


</script>

<style>

</style>