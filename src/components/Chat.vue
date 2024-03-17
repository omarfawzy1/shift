<script setup>
  import Store from '../store.js'
  defineProps({
    msg: {
      type: String,
      required: false
    }
  })
</script>

<template>
  <div class="w-full flex justify-center bg-[#212121]">
    <div class="h-full w-[90%] sm:w-[70%] flex flex-col py-10 justify-between">
      <div class="flex flex-col gap-4">
        <div v-for="message in messages"> {{ message.message }}</div>
      </div>
      <div class=""></div>
      <div id="search_input" class="border-white/80 border rounded-lg flex items-center">
        
        <input  ref="input" @keyup.enter="addMessage(outMessage)" class="w-full bg-white/0 p-4 px-4" v-model="outMessage">
        <button @click="addMessage(outMessage)" class="material-symbols-outlined rounded-full p-[0.35rem]  mx-5 hover:bg-white/20">
          send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 5,
      messages: []
    };
  },
  methods: {
    changeMessage() {
    },
    updateX(){
      this.x = Store.getLatest()
    },
    getData(){
      Store.getData()
    },
    getMessages(){
      Store.getRoomMessages().then((res) => {
        console.log("Gettring messages ... ")
        this.messages = []
        res.forEach((item) => {
          this.messages.push(item.data())
        })
        this.messages.sort((a, b) => a.timestamp - b.timestamp)
      })
    },
    addMessage(outMessage){
      let timestamp = new Date().getTime();
      const sent = Store.addMessageToRoom({message: outMessage, timestamp: timestamp})
      sent.then((res) => {
        this.getMessages()
      })
      this.outMessage = ""
    }


  },
  beforeMount() {
   this.getMessages()


  }
};



</script>


<style scoped>

</style>
