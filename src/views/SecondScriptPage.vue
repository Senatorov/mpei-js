<template>
    <div class="home">
      <h1 class="text-xl text-center font-bold">Script 2</h1>

      <div class="mt-8">
        <modal btn-text="2.1 MultiString">
          <textarea 
            v-model="multiStr"
            id="message" 
            rows="4" 
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style="width: 500px;"
            placeholder="Enter your text"></textarea>

          <div 
            class="mt-4 border-dashed border-2 border-sky-500 w-full px-1 py-2"
            style="width: 500px;"
          >
            <h2 class="text-center font-bold">Result</h2>  
            <div class="mt-2">{{ charsMultiStr }}</div>      
          </div>
        </modal>        
      </div>

      <div class="mt-8">
        <modal btn-text="2.2 Chislo Propisiuy">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="base-input">Enter a number from 0 to 100</label>
          <input 
            v-model="number"
            type="text"
            id="base-input" 
            style="width: 500px;"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          

          <div v-show="isNotValidNumber" class="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Is not valid number!</strong>
          </div>

          <div 
            class="mt-4 border-dashed border-2 border-sky-500 w-full px-1 py-2"
            style="width: 500px;"
          >
            <h2 class="text-center font-bold">Result</h2>  
            <div class="mt-2">{{ numberToWords }}</div>      
          </div>
        </modal>        
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'SecondScript',
    data() {  
      return {
        multiStr: '',
        chars: {},
        number: 0,
        isNotValidNumber: false,
      }
    },
    computed: {
      charsMultiStr() {
        const lenMultiStr = this.multiStr.length;
        if (lenMultiStr > 0) {
          const chars = {};
          for (let i = 0; i < lenMultiStr; i++) {
            let char = this.multiStr[i];

            if (chars[char] !== undefined) {
              chars[char]++;
            } else {
              chars[char] = 1;              
            }
          }

          return chars;
        }
      },
      numberToWords() {
        if (isNaN(this.number) || Number(this.number) < 0 || Number(this.number) > 99) {
          this.isNotValidNumber = true;
          return '';
        } else {
          this.isNotValidNumber = false;
        }
        let tempNumber = this.number;

        const ones = [
          '', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь',
          'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
          'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
        ];

        const tens = [
          '', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят',
          'семьдесят', 'восемьдесят', 'девяносто'
        ];

        const numberWords = [];

        if (tempNumber === 0) {
          return 'ноль';
        }

        if (tempNumber >= 20) {
          numberWords.push(tens[Math.floor(tempNumber / 10)]);
          tempNumber %= 10;
        }

        if (tempNumber > 0) {
          numberWords.push(ones[tempNumber]);
        }

        return numberWords.join(' ');
      },
    },
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  