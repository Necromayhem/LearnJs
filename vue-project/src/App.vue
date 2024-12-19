<script setup>
import { ref, computed } from 'vue'

// выдаем всем todo уникальные id
let id = 0

const addTodo = ref('')
const hideCompleted = ref(false)
const todoList = ref([
  {id: id++, text: "Повторить html/DOM", done: false},
  {id: id++, text: "Начать изучать Vue", done: false},
  {id: id++, text: "Test 1", done: false},
  {id: id++, text: "Test 2", done: false},
  {id: id++, text: "Test 3", done: false},
])

const addTodoBtn = (event) => {
  event.preventDefault(); // предотвращаем обновление страницы
  todoList.value.push({id: id++, text: addTodo.value, done: false})
  addTodo.value = '';
}

const removeTodo = (todo) => {
  todoList.value = todoList.value.filter(e => e !== todo)
}

const changeText = (todo) => {
  let newText = prompt('изменение задачи', '');
  if (newText === null) {
    return; // Если пользователь нажал "Отмена", просто выходим из функции
  }
  newText = newText.trim();
  if (newText === '') {
    return; // Если строка пустая после trim(), выходим из функции
  }
  todo.text = newText; // Обновляем текст задачи
}

const filteredView = computed(() => {
  return hideCompleted.value
    ? todoList.value.filter(e => !e.done) // Скрываем выполненные
    : todoList.value
})

</script>

<template>
<form @submit="addTodoBtn">
  <input v-model="addTodo" placeholder="...">
  <button type="submit">добавить задачу</button>
</form>

<ul>
  <li v-for="todo in filteredView" :key="todo.id">
    <input type="checkbox" v-model="todo.done">
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <button @click="removeTodo(todo)">Х</button>
    <button @click="changeText(todo)">Изменить</button>
  </li>
</ul>
<button @click="hideCompleted = !hideCompleted">
  {{ hideCompleted ? 'Показать все' : 'Скрыть выполненные' }}
</button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
