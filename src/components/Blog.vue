<template>
    <section class="lg:px-14 sm:px-10 px-8 lg:mx-12 md:mx-6 lg:py-14 sm:py-12 py-8">
        <div class="blog-container">
            <h1 class="text-gradient main-heading lg:mb-10 sm:mb-8 mb-6">A lot is happening, <br> We are blogging about it.</h1>
            <div class="blogs">
                <div class="main-blog">
                    <BlogCard :image="require('@/assets/blog01.png')" title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Nov 12, 2021"/>
                </div>
                <div class="secondary-blog">
                    <BlogCard :image="require('@/assets/blog02.png')" title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Nov 12, 2021"/>
                    <BlogCard :image="require('@/assets/blog03.png')" title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Nov 12, 2021"/>
                    <BlogCard :image="require('@/assets/blog04.png')" title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Nov 12, 2021"/>
                    <BlogCard :image="require('@/assets/blog05.png')" title="GPT-3 and Open AI is the future. Let us exlore how it is?" date="Nov 12, 2021"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlogCard from '@/components/BlogCard.vue'

@Component({
  components:{
    BlogCard
  }
})
export default class Home extends Vue {}

</script>

<style lang="scss" scoped>

.blogs{
    display: flex;
    gap: 20px;
}

.main-blog{
    flex: 1;
}

.secondary-blog{
    flex: 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

@media screen and (max-width:1050px) {
    .blogs{
        flex-direction: column;
    }
}

@media screen and (max-width:1050px) {
    .secondary-blog{
        grid-template-columns: 1fr;
    }
}

</style>
