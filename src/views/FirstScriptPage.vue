<template>
    <div class="home">
      <h1 class="text-xl text-center font-bold">Scripts 1</h1>

      <div class="mt-8">
        <modal btn-text="1.1 Search factorial">
          <div class="flex items-center">
          <input 
            v-model="number"
            type="text" 
            id="base-input" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         <div class="w-40 text-center">factorial of a number: </div>
         <input 
         :value="factorialResult"
          type="text"
          disabled 
          id="base-input" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>

          <div v-show="isNotValidNumber" class="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Is not valid number!</strong>
          </div>
        </modal>        
      </div>

      <div class="mt-8">
        <button
        @click="showDialog()" 
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          1.2 Array transformations
        </button>
        
        <div 
          class="mt-4 border-dashed border-2 border-sky-500 w-1/2 px-1 py-2"
          v-show="list.length > 0"
        >
          <h2 class="text-center font-bold">Result</h2>  
          <div class="mt-2">
            Array: {{ this.list }}
          </div>
          <div class="mt-2">
            Array only numbers: {{ this.onlyNumbers }}
          </div>
          <div class="mt-2">
            Min number: {{ this.onlyNumbers.length > 0 ? Math.min(...this.onlyNumbers) : '' }}
          </div>
          <div class="mt-2">
            Array in string: {{ this.arrayInString }}
          </div>         
        </div>
      </div>
  </div>
</template>
  
<script>

export default {
  components: {
  },
  name: 'FirstScript',
  data() {  
    return {
      number: 0,
      isNotValidNumber: false,
      list: [],
    }
  },
  computed: {
    factorialResult() {
      if (this.number === 0 || Number(this.number) === 0) return 1;
      if (this.number.length === 0) return;
      if (isNaN(this.number) || Number(this.number) < 0 || Number(this.number) > 170) {
        this.isNotValidNumber = true;
        return;
      } else {
        this.isNotValidNumber = false;
        return this.factorial(this.number);
      }
    },
    onlyNumbers() {
      if (this.list.length > 0) {
        return this.list.filter(item => !isNaN(item) && item.trim() !== '');
      }
      return [];
    },
    arrayInString() {
      return this.onlyNumbers.join('-');
    }
  },
  methods: {
    factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * this.factorial(n - 1);
      }
    },
    showDialog() {
      const inputValue = prompt('Input new element:');
      if (inputValue !== null) {
        this.list.push(inputValue);
        this.showDialog();
      }
    }    
  }
}
</script>

<style scoped>
</style>
  