<template>
   <div class="nav-menu font-bold text-2xl">
    <ul class="flex justify-center">
      <li><router-link to="/">Home</router-link>|</li>
      <li><router-link to="/route">Route</router-link>|</li>
      <li><router-link to="/vuex">Vuex</router-link>|</li>
      <li>
        <button class="peer">
          Scripts
        </button>
        
        <!-- the menu here -->
        <div class="hidden peer-hover:flex hover:flex
         w-[80px]
         flex-col bg-white drop-shadow-lg">
         <router-link to="/scripts/1">1</router-link>
         <router-link to="/scripts/2">2</router-link>
        </div>
      </li>
    </ul>
   </div>

   <div class="mt-16 min-h-screen"><router-view /></div>

   <footer class="mt-16">
    <a href="https://github.com/Senatorov/mpei-js" class="text-blue-500 underline">Link to the project's github</a> by Senatorov
  </footer>
</template>

<script>

export default {
  name: 'App',
    components: {
    },
    data() {
      return {
        showModal: false
      }
  }
}
</script>

<style>

</style>
