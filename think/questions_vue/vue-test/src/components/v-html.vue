<script setup>
import { ref } from 'vue'

const text = ref('<em>Изначальный текст<em>')

const btn = () => {
  text.value == '<strong>Новый текст<strong>'
    ? (text.value = '<em>Изначальный текст<em>')
    : (text.value = '<strong>Новый текст<strong>')
}
</script>

<template>
  <span v-html="text"></span>
  <div @click="btn"><button>Изменить текст</button></div>
</template>
