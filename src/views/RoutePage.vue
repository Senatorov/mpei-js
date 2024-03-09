<template>
  <div class="home">
    <h1 class="text-xl text-center font-bold">What is Vue Routing?</h1>

    <div class="mt-8">
      Routing in Vue is used to navigate the Vue application, and it happens on the client side (in the browser) without full page reload, which results in a faster user experience. Routing is a way to navigate, similar to how we have used dynamic components earlier. With routing we can use the URL address to direct someone to a specific place in our Vue application.
    </div>

    <div class="flex justify-center items-center mt-8">
      <img class="h-1/5 w-1/5 object-cover object-center" src="https://jeonghwan-kim.github.io/static/260ebcdc945c3bdd9128c4126bf83ec3/d93a2/vue-router-logo.jpg" alt="Router">
    </div>

    <div class="mt-8">
      <a href="https://router.vuejs.org/guide/" class="text-blue-500 underline">Link to the Vue Routing documenatation</a>
    </div>

    <div class="mt-8 flex flex-col">
      <h1 class="text-xl text-center font-bold">Advantages of Vue Routing</h1>
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
                    <td class="whitespace-nowrap px-6 py-4">Powerful Routing</td>
                    <td class="whitespace-nowrap px-6 py-4">Vue Router provides a powerful routing system that allows you to define and manage multiple routes in your Vue.js application.</td>
                  </tr>
                  <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td class="whitespace-nowrap px-6 py-4">Dynamic Route Matching</td>
                    <td class="whitespace-nowrap px-6 py-4">Vue Router supports dynamic route matching, which means you can define routes with parameters or placeholders that can be extracted and used as dynamic values in your components.</td>
                  </tr>
                  <tr
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <td class="whitespace-nowrap px-6 py-4">Dynamic Route Matching</td>
                    <td class="whitespace-nowrap px-6 py-4">Vue Router supports dynamic route matching, which means you can define routes with parameters or placeholders that can be extracted and used as dynamic values in your components.</td>
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
        <li>v-router-link</li>
        <li>v-router-view</li>
        <li>v-router</li>
        <li>v-router-link-active</li>
        <li>v-router-link-exact-active</li>
      </ul>
    </div>
        
  </div>
</template>
  
  <script>
  export default {
    name: 'RoutePage'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  