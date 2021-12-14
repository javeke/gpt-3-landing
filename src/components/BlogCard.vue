<template>
    <div class="blog">
        <div class="blog-image">
            <img :src="image" alt="Blog Image">
        </div>
        <div class="blog-body bg-blog text-white">
            <div class="blog-content">
                <span class="blog-date">{{date}}</span>
                <h3>{{title}}</h3>
            </div>
            <div class="blog-footer">
                <p><a href="#">Read Full Article</a></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BlogCard extends Vue{
    @Prop({default: ''}) readonly image!: string;
    @Prop({default: ''}) readonly title!: string;
    @Prop({default: ''}) readonly date!: string;
}
</script>

<style lang="scss" scoped>
.blog{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
}

.blog-image{
    width: 100%;
    height: 100%;
}

.blog-image img{
    width: 100%;
    height: 100%;
}


.blog-body{
    height: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
}

.blog-body span{
    font-size: 10px;
}

.blog-body h3{
    font-weight: 800;
    margin: 1rem 0;
}

.blog-body .blog-footer{
    font-size: 10px;
    margin-top: auto;
}
</style>