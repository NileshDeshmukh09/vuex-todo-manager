<template>
  <div id="app">
    <div class="container">

   <TodosList/>
    </div>
  </div>
</template>

<script>
import TodosList from './components/TodosList.vue'

export default {
  name: 'App',
  components: {
    TodosList
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium" , "Aerial Narrow", Arial , sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
   max-width: 1100 px ;
   margin:  auto;
   overflow: auto;
   padding: 0 2rem;
}

</style>
