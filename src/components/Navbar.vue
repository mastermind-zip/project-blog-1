<template>
    <header class="header">
        <div class="header-brand">
            <router-link :to="{ name: 'home' }" class="brand-text">Artist soul</router-link>
            <router-link :to="{ name: 'home' }" class="brand-text">Gallery</router-link>
        </div>
        <nav class="main-nav">
            <ul class="main-nav-list">
                <li><router-link :to="{ name: 'home' }" class="list-link">Home</router-link></li>
                <li><router-link :to="{ name: 'about-me'}" class="list-link">About artist</router-link></li>
                <li><router-link :to="{ name: 'contact-me'}" class="list-link">Contact us</router-link></li>
                <li><router-link :to="{ name: 'portraits' }" class="list-link">Portraits</router-link></li>
                <li><router-link class="list-link">Documentary</router-link></li>
                <li><router-link :to="{ name: 'blog' }" class="list-link">Blog</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header {
    background: transparent;
    max-width: 100rem;
    width: 100%;
    margin: 0 auto;
    padding: 2.4rem 0 0 2.4rem;
    display: flex;
    gap: 2rem;
    align-items: last baseline;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
}

.header-brand {
    border-left: 4px solid #fff;
    display: flex;
    flex-direction: column;
}

.brand-text:link, 
.brand-text:visited {
    font-size: 2rem;
    font-weight: 300;
    color: #cb3f3f;
    text-transform: uppercase;
    text-decoration: none;
    padding-left: 1.2rem;
}

.main-nav-list {
    display: flex;
    gap: 1.2rem;
    list-style: none;
}

.list-link:link,
.list-link:visited {
    color: #fff;
    font-size: 1.6rem;
    text-decoration: none;
    padding: 0.8rem 3.2rem 0 1.2rem;
    font-weight: 300;
    border-top: 1px solid #fff;
    
}

.list-link:hover, 
.list-link:active {
    border-top: 4px solid #fff;
}







</style>