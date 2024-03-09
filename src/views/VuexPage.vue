<template>
  <div class="home">
    <h1 class="text-xl text-center font-bold">What is Vuex?</h1>

    <div class="mt-8">
      Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.
    </div>

    <div class="flex justify-center items-center mt-8">
      <img 
        class="h-1/5 w-1/5 object-cover object-center" 
        src="https://cdn1.tenchat.ru/static/vbc-gostinder/2022-05-08/080d9fe2-2cd8-438b-9ca2-dc5d0fd73ffa.jpeg" 
        alt="Vuex">
    </div>

    <div class="mt-8">
      <a href="https://vuex.vuejs.org/guide/" class="text-blue-500 underline">Link to the Vuex documenatation</a>
    </div>

    <div class="mt-8 flex flex-col">
      <h1 class="text-xl text-center font-bold">Advantages of Vuex</h1>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">#</th>
                    <th scope="col" class="px-6 py-4">Name</th>
                    <th scope="col" class="px-6 py-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td class="whitespace-nowrap px-6 py-4">Centralized State Management</td>
                    <td class="whitespace-nowrap px-6 py-4">Vuex provides a centralized store for managing the state of your application.</td>
                  </tr>
                  <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td class="whitespace-nowrap px-6 py-4">Predictable State Changes</td>
                    <td class="whitespace-nowrap px-6 py-4">Changes to the state in Vuex follow a strict pattern, where mutations are committed to make changes and actions are dispatched to trigger those mutations.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>

    <div class="mt-8">
      <h1 class="text-xl text-center font-bold">Directives</h1>
      <ul style="list-style: inherit">
        <li>state</li>
        <li>mutations</li>
        <li>getters</li>
        <li>actions</li>
      </ul>
    </div>

    <div class="mt-8">
      <h1 class="text-xl text-center font-bold">To install Vuex in your Vue.js project, you can follow these steps:</h1>
      <ol style="list-style-type: decimal;">
        <li>npm install vuex</li>
        <li>import Vuex from 'vuex'</li>
        <li>Vue.use(Vuex);</li>
      </ol>
    </div>

  </div>
</template>
  
  <script>
  export default {
    name: 'VuexPage'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  