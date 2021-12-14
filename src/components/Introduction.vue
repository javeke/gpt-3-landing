<template>
  <div class="intro flex lg:px-14 sm:px-10 px-8 lg:mx-12 md:mx-6 gap-3">
    <div class="flex flex-col text-content">
      <h1 class="text-gradient main-heading">Let's Build Something <br> amazing with GPT-3 <br> OpenAI </h1>
      <p class="text-gray-400 py-5 break-words">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
        Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
      </p>
      <form class="flex contact-form">
        <input class="px-4" type="email" placeholder="Your Email Address">
        <button class="md:px-6 md:py-3 sm:px-4 sm:py-2 px-2 py-1 bg-button text-white" type="submit">Get Started</button>
      </form>
      <div class="people-visits flex items-center justify-center lg:justify-start text-white gap-3">
        <img src="../assets/people.png" alt="People icons">
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div class="flex ai-img">
      <img src="../assets/ai.png" alt="AI image">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Introduction extends Vue {}
</script>

<style lang="scss" scoped>

.text-content{
  width: 100%;
}

.contact-form{
  input {
    width: 100%;
    flex: 0.7;
    background-color: #052D56;
    color: white;
  }
  input::placeholder{
    color: #3D6184;
  }

  button{
    width: 100%;
    flex: 0.3;
  }
}

.people-visits{
  font-size: 10px;
  margin-top: 20px;
}

.people-visits img{
  height: 20px;
}

.ai-img{
  width: 100%;
}

.ai-img img{
  position: relative;
  top: -40px;
  width: 100%;
}

@media screen and (max-width: 1050px) {
  .intro{
    flex-direction: column;
  }

  .ai-img img{
    top: 0px;
  }
}

@media screen and (max-width:650px) {
  p {
    font-size: 12px;
  }
}

@media screen and (max-width:480px) {
  .contact-form{
    input, button{
      font-size: 10px;
    }
  }
}

</style>
