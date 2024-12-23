<script setup>
import { ref } from 'vue'
import Theme from './components/Theme.vue'


let id = 0
const task = ref('')
const taskList = ref([])


const addTask = () => {
    let checkTask = task.value.trim(); // Удаляем пробелы в начале и в конце
    if (checkTask === '') return; // Проверяем, пустая ли строка
    taskList.value.push({ id: id++, text: checkTask }); // Добавляем задачу в список
    task.value = ''; // Очищаем поле ввода
}

const deleteTask = (task) => {
    taskList.value = taskList.value.filter(e => e !== task)
}

const changeTask = (task) => {
    let changeText = prompt('редактировать задачу')
    changeText = changeText.trim()
    if (changeText === '') return
    task.text = changeText
}

</script>

<template>
  <div>
    <Theme />
  </div>

  <form v-on:submit.prevent="addTask">
      <input type="text" v-model="task" placeholder="...">
      <button type="submit">добавить</button>
      <ul>
          <li v-for="task in taskList" :key="task.id">
              {{ task.text }}
              <button @click="changeTask(task)">✎</button>
              <button @click="deleteTask(task)">X</button>
          </li>
      </ul>
  </form>

  
    
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    margin: 0;
    height: 100%;
    width: 100%;
}
#app {
    height: 100%; /* Высота для корневого элемента */
}

</style>
