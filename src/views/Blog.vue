<template>
    <div class="container">
        <div class="blog-heading">
            <h2 class="heading-secondary">All posts</h2>
            <router-link class="btn-create" :to="{ name: 'create post' }" target="_blank">Make your post
                <ion-icon name="create-outline" class="icon-create"></ion-icon>
            </router-link>
        </div>
        <div class="posts-list">
            <div class="post" v-if="documents" v-for="doc in documents" :key="doc.id">
                <div class="post-img-box">
                    <img :src="doc.coverUrl" alt="roller coaster image" class="post-img">
                </div>
                <div class="post-info">
                    <div class="post-author">
                        <p class="nickname">{{ doc.displayName }}</p>
                        <p class="date">{{ formatDate(doc.createdAt) }}</p>
                        <button class="share">
                            <ion-icon name="ellipsis-vertical" class="icon-menu"></ion-icon>
                        </button>
                    </div>
                    <h1 class="sub-heading">{{ doc.title }}</h1>
                    <p class="description">{{ doc.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import getCollection from '@/composables/getCollection'
    export default {
        setup() {
            const { documents, error } = getCollection('articles')
            const router = useRouter()

            const toCreatePost = () => {
                router.push({ name: 'create post'})
            }

            const formatDate = (timestamp) => {
                if (timestamp) {
                    const date = timestamp.toDate()
                    return date.toLocaleDateString('en-GB')
                }
                return ''
            }

            return { toCreatePost, documents, formatDate }
        }  
    }
</script>

<style scoped>
.blog-heading {
    display: flex;
    justify-content: space-between;
}

.btn-create:link, 
.btn-create:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background-color: #fff;
    color: #000;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 11px;
    font-size: 1.4rem;
    text-decoration: none;
}

.icon-create {
    width: 2.2rem;
    height: 2.2rem;
}

.posts-list {
    margin-top: 4.8rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
}

.post {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
}


.post-img {
    width: 100%;
    height: 38vh;
    object-fit: cover;
    border: 0.5px solid #dddbdb;
    
}

.post-info {
    padding: 2.4rem 0;
}

.post-author {
    display: grid;
    row-gap: 0.4rem;
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 2.4rem;
}

.nickname {
    font-size: 1.4rem;
    font-weight: 300;
    grid-row: 1 / 2;
}

.date {
    font-size: 1.4rem;
    color: #cccbcb;
    grid-row: 2 / -1;
}

.share {
    background: none;
    border: none;
    grid-row: 1 / -1;
    justify-self: end;
}

.icon-menu {
    width: 2.2rem;
    height: 2.2rem;
    color: #fff;
}

.description {
    margin-top: 2rem;
    font-size: 1.4rem;
    line-height: 1.5;
}

</style>