<template>
    <footer class="footer">
        <div class="credentials">
            <p class="copyright">
                Copyright &copy; <span class="year">2027</span> by me, Inc. All rights reserved.
            </p>
        </div>
        <div class="socials">
            <router-link class="social-link">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
            </router-link>
            <router-link class="social-link">
                <ion-icon class="social-icon" name="logo-pinterest"></ion-icon>
            </router-link>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer {
    padding: 3.2rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copyright {
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: uppercase;
}

.socials {
    display: flex;
    gap: 1.6rem;
    align-items: center;
}


.social-icon {
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
}

</style>