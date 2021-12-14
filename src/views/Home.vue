<template>
  <main>
    <Introduction />
    <Sponsors />
    <Definition />
    <Future />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sponsors from '@/components/Sponsors.vue';
import Introduction from '@/components/Introduction.vue';
import Definition from '@/components/Definition.vue';
import Future from '@/components/Future.vue';

@Component({
  components:{
    Introduction,
    Sponsors,
    Definition,
    Future
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

.text-content{
  width: 100%;
}

h1{
  font-size: 3rem;
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
  main{
    flex-direction: column;
  }

  .ai-img img{
    top: 0px;
  }
}

@media screen and (max-width:650px) {
  h1{
    font-size: 40px;
  }
  p {
    font-size: 0.7em;
  }
}

@media screen and (max-width:480px) {

  h1{
    font-size: 36px;
  }

  .contact-form{
    input, button{
      font-size: 10px;
    }
  }
}

</style>
