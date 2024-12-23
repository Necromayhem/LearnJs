
<script setup>
    import { ref } from 'vue'

    const theme = ref(false) // false - светлая тема, true - темная
    const nightMode = ref('Тёмная тема ') // текст скрыт
    const lightMode = ref('Светлая тема ')
    
</script>


<template>
        <div id="app" :class="theme ? 'dark-theme' : 'light-theme'">
        <div>
            <span class="hidden-text">{{ theme ? nightMode : lightMode }}</span>
            <label class="switch">
                <input type="checkbox" v-model="theme">
                <span class="slider round"></span>
            </label>
        </div>
    </div>    
</template>

<style>
    .light-theme {
    background-color: white;
    color: black;
}

.dark-theme {
    background-color: black;
    color: white;
}

/* Стили для слайдера */
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {display:none;}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.hidden-text {
  display: none; 
}
</style>