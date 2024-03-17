<script setup>
import Chat from './Chat.vue'
import Store from '../store.js'
import { ref, computed } from 'vue'

</script>

<template>
  <div class="flex flex-row w-screen h-screen bg-slate-500  ">
    <div class="min-w-[17rem] max-w-[18.5rem] bg-[#171717] h-full hidden sm:flex flex-col p-4 gap-4">
      <button @click="clearRoom()" class="rounded-md hover:bg-slate-200/5 flex items-center text-sm font-medium p-2 gap-2 text-white"> <span class="rounded-full  bg-white w-7 h-7"></span> Clear Chat </button>
      <div id="chats_list" class="flex flex-col gap-5">
        <div>
          <section class="text-[12px] px-2">Public</section>
          <button v-for="room in rooms" @click="setRoom(room.id)" class="rounded-md hover:bg-slate-200/5 flex items-center text-sm font-medium p-2 gap-2 text-white w-full truncate"> {{ room.room_name }}</button>
        </div>
        <div hidden>
          <section class="text-[12px] px-2">Tommorow :)</section>
          <button class="rounded-md hover:bg-slate-200/5 flex items-center text-sm font-medium p-2 gap-2 text-white w-full truncate"> How asdf asdf asd to sda get   </button>
  
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full ">
      <div class="h-[3rem] sm:hidden flex-grow-0 bg-[#171717] flex justify-center items-center"> 
        <button @click="clearRoom()" class="material-symbols-outlined rounded-full bg-slate-800 w-[2rem] h-[2rem]">
            delete
        </button>
      </div>
      <Chat class=" flex-grow w-full" msg="asdf" ref="chatCom"></Chat>

    </div>

    <!-- <div class="bg-[#212121]">
      Tests
    </div> -->
  </div>


</template>

<script>
import Chat from './Chat.vue'


  export default {
    data() {
      return {
        rooms: [],
        show: true
      }
    },
    components: {
      Chat
    },
    methods: {
      getRooms(){
        Store.getRooms().then((res) => {
          this.rooms = []
          res.forEach(room => {
            let nroom = room.data()
            nroom.id = room.id
            this.rooms.push(nroom)
          })
        })
      },
      setRoom(roomId){
        console.log("Changing room")
        //this.show=false
        Store.setRoomId(roomId)
        const params = new URLSearchParams(window.location.search);
        params.set('roomId', roomId);

        window.location.href = window.location.origin + window.location.pathname + '?' + params.toString()
        //this.$refs.chatCom.getMessages()
        //this.show=true
      },
      clearRoom(){
        console.log("Deleteing")
        Store.clearRoom().then(()=>{
          window.location.reload()
        })
      }
    },
    beforeMount(){
      this.getRooms()
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const room = urlParams.get('roomId')
      console.log(room)
      Store.setRoomId(room)
    }
  };


</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
:root {
  --text-color: #FFFFFF;
  --icon-color: #ACACBE;
  --icon-hover-bg: #5b5e71;
  --placeholder-color: #dcdcdc;
  --outgoing-chat-bg: #343541;
  --incoming-chat-bg: #444654;
  --outgoing-chat-border: #343541;
  --incoming-chat-border: #444654;
}
.light-mode {
  --text-color: #343541;
  --icon-color: #a9a9bc;
  --icon-hover-bg: #f1f1f3;
  --placeholder-color: #6c6c6c;
  --outgoing-chat-bg: #FFFFFF;
  --incoming-chat-bg: #F7F7F8;
  --outgoing-chat-border: #FFFFFF;
  --incoming-chat-border: #D9D9E3;
}
body {
  background: var(--outgoing-chat-bg);
}

/* Chats container styling */
.chat-container {
  overflow-y: auto;
  max-height: 100vh;
  padding-bottom: 150px;
}
:where(.chat-container, textarea)::-webkit-scrollbar {
  width: 6px;
}
:where(.chat-container, textarea)::-webkit-scrollbar-track {
  background: var(--incoming-chat-bg);
  border-radius: 25px;
}
:where(.chat-container, textarea)::-webkit-scrollbar-thumb {
  background: var(--icon-color);
  border-radius: 25px;
}
.default-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  padding: 0 10px;
  text-align: center;
  color: var(--text-color);
}
.default-text h1 {
  font-size: 3.3rem;
}
.default-text p {
  margin-top: 10px;
  font-size: 1.1rem;
}
.chat-container .chat {
  padding: 25px 10px;
  display: flex;
  justify-content: center;
  color: var(--text-color);
}
.chat-container .chat.outgoing {
  background: var(--outgoing-chat-bg);
  border: 1px solid var(--outgoing-chat-border);
}
.chat-container .chat.incoming {
  background: var(--incoming-chat-bg);
  border: 1px solid var(--incoming-chat-border);
}
.chat .chat-content {
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
}
span.material-symbols-rounded {
  user-select: none;
  cursor: pointer;
}
.chat .chat-content span {
  cursor: pointer;
  font-size: 1.3rem;
  color: var(--icon-color);
  visibility: hidden;
}
.chat:hover .chat-content:not(:has(.typing-animation), :has(.error)) span {
  visibility: visible;
}
.chat .chat-details {
  display: flex;
  align-items: center;
}
.chat .chat-details img {
  width: 35px;
  height: 35px;
  align-self: flex-start;
  object-fit: cover;
  border-radius: 2px;
}
.chat .chat-details p {
  white-space: pre-wrap;
  font-size: 1.05rem;
  padding: 0 50px 0 25px;
  color: var(--text-color);
  word-break: break-word;
}
.chat .chat-details p.error {
  color: #e55865;
}
.chat .typing-animation {
  padding-left: 25px;
  display: inline-flex;
}
.typing-animation .typing-dot {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  margin: 0 3px;
  opacity: 0.7;
  background: var(--text-color);
  animation: animateDots 1.5s var(--delay) ease-in-out infinite;
}
.typing-animation .typing-dot:first-child {
  margin-left: 0;
}
@keyframes animateDots {
  0%,44% {
    transform: translateY(0px);
  }
  28% {
    opacity: 0.4;
    transform: translateY(-6px);
  }
  44% {
    opacity: 0.2;
  }
}

/* Typing container styling */
.typing-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 20px 10px;
  justify-content: center;
  background: var(--outgoing-chat-bg);
  border-top: 1px solid var(--incoming-chat-border);
}
.typing-container .typing-content {
  display: flex;
  max-width: 950px;
  width: 100%;
  align-items: flex-end;
}
.typing-container .typing-textarea {
  width: 100%;
  display: flex;
  position: relative;
}
.typing-textarea textarea {
  resize: none;
  height: 55px;
  width: 100%;
  border: none;
  padding: 15px 45px 15px 20px;
  color: var(--text-color);
  font-size: 1rem;
  border-radius: 4px;
  max-height: 250px;
  overflow-y: auto;
  background: var(--incoming-chat-bg);
  outline: 1px solid var(--incoming-chat-border);
}
.typing-textarea textarea::placeholder {
  color: var(--placeholder-color);
}
.typing-content span {
  width: 55px;
  height: 55px;
  display: flex;
  border-radius: 4px;
  font-size: 1.35rem;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
}
.typing-textarea span {
  position: absolute;
  right: 0;
  bottom: 0;
  visibility: hidden;
}
.typing-textarea textarea:valid ~ span {
  visibility: visible;
}
.typing-controls {
  display: flex;
}
.typing-controls span {
  margin-left: 7px;
  font-size: 1.4rem;
  background: var(--incoming-chat-bg);
  outline: 1px solid var(--incoming-chat-border);
}
.typing-controls span:hover {
  background: var(--icon-hover-bg);
}

/* Reponsive Media Query */
@media screen and (max-width: 600px) {
  .default-text h1 {
    font-size: 2.3rem;
  }
  :where(.default-text p, textarea, .chat p) {
    font-size: 0.95rem!important;
  }
  .chat-container .chat {
    padding: 20px 10px;
  }
  .chat-container .chat img {
    height: 32px;
    width: 32px;
  }
  .chat-container .chat p {
    padding: 0 20px;
  }
  .chat .chat-content:not(:has(.typing-animation), :has(.error)) span {
    visibility: visible;
  }
  .typing-container {
    padding: 15px 10px;
  }
  .typing-textarea textarea {
    height: 45px;
    padding: 10px 40px 10px 10px;
  }
  .typing-content span {
    height: 45px;
    width: 45px;
    margin-left: 5px;
  }
  span.material-symbols-rounded {
    font-size: 1.25rem!important;
  }
}


</style>