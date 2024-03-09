<template>
    <div class="home">
      <h1 class="text-xl text-center font-bold">What is Vue?</h1>

      <div class="mt-8">
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.
      </div>

      <div class="flex justify-center items-center mt-8">
        <img class="h-1/5 w-1/5 object-cover object-center" src="https://gitlab.com/uploads/-/system/group/avatar/54254384/2560px-Vue.js_Logo_2.png" alt="Vue">
      </div>

      <div class="mt-8">
        <a href="https://vuejs.org/guide/introduction.html" class="text-blue-500 underline">Link to the Vue documenatation</a>
      </div>

      <div class="mt-8 flex flex-col">
        <h1 class="text-xl text-center font-bold">Advantages of vue</h1>
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
                      <td class="whitespace-nowrap px-6 py-4">Easy to Learn and Use</td>
                      <td class="whitespace-nowrap px-6 py-4">Vue provides a simple and intuitive API that allows developers to quickly build applications</td>
                    </tr>
                    <tr
                      class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                      <td class="whitespace-nowrap px-6 py-4">Reactivity</td>
                      <td class="whitespace-nowrap px-6 py-4">Vue uses a reactivity system that automatically tracks changes to data and updates the view.</td>
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
          <li>v-bind</li>
          <li>v-if</li>
          <li>v-for</li>
          <li>v-on</li>
        </ul>
      </div>

      <div class="mt-8">
        <h1 class="text-xl text-center font-bold">Top libraries for Vue</h1>
        <ol style="list-style-type: decimal;">
          <li>Vuex</li>
          <li>Vue Router</li>
          <li>Axios</li>
        </ol>
      </div>

    </div>
</template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  