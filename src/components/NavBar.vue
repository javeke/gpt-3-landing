<template>
    <header class="flex lg:px-14 sm:px-10 px-8 lg:py-8 sm:py-6 py-4 lg:mx-12 md:mx-6 text-white items-center">
        <span class="font-black brand">GPT-3</span>
        <nav class="md:ml-12 nav-bar">
            <ul class="flex gap-10">
                <li><a href="#"> Home</a></li>
                <li><a href="#"> What is GPT?</a></li>
                <li><a href="#"> Open AI</a></li>
                <li><a href="#"> Case Studies</a></li>
                <li><a href="#"> Library</a></li>
            </ul>
        </nav>
        <div class="ml-auto flex md:gap-6 gap-4 sign-btns">
            <button>Sign in</button>
            <button class="xl:px-9 lg:px-7 md:px-4  px-2 sm:py-2 py-1 bg-button button-border-radius">Sign up</button>
        </div>

        <div class="ml-8 mobile-nav-toggle">
            <span v-if="!toggleMenu" @click="onToggleMenu" class="material-icons clickable">menu</span>
            <span v-else @click="onToggleMenu" class="material-icons clickable">close</span>
        </div>

        <div v-if="toggleMenu" class="mobile-nav-container scale-up-center">
            <div class="mobile-nav">
                <div class="mobile-nav-menu">
                    <ul class="flex md:gap-10 gap-4 flex-col items-end">
                        <li><a href="#"> Home</a></li>
                        <li><a href="#"> What is GPT?</a></li>
                        <li><a href="#"> Open AI</a></li>
                        <li><a href="#"> Case Studies</a></li>
                        <li><a href="#"> Library</a></li>
                    </ul>
                    <div class="mobile-sign-btns text-right">
                        <button>Sign in</button>
                        <button class="block md:px-7 px-2 py-1 bg-button button-border-radius">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
    toggleMenu = false;

    onToggleMenu(){
        this.toggleMenu = !this.toggleMenu;
    }
}
</script>

<style lang="scss" scoped>

.brand {
    font-size: 20px;
}

.mobile-nav-toggle{
    display: none;
}

.mobile-nav-container{
    display: none;
    position: relative;
}

.mobile-nav{
    position: absolute;
    right: 0;
    top: 50px;
    min-width: 210px;
    border-radius: 5px;
    box-shadow: 0 0 5 rgba($color: #000000, $alpha: 0.2);
    margin-top: 1rem;
}

.mobile-sign-btns{
    display: none;
}

@media screen and (max-width: 1050px) {
   .mobile-nav-toggle{
       display: flex;
   } 

   .nav-bar{
       display: none;
   }

   .mobile-nav-container{
       display: flex;
   }
}

@media screen and (max-width: 400px) {
   .mobile-nav{
       min-width: 100px;
   } 

   .mobile-nav-toggle{
       margin-left: auto;
   }

   .sign-btns{
       display: none;
   }

   .mobile-sign-btns{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 30px;
      gap: 20px;
   }

}
</style>
