<template>
    <div class="container">
        <div class="text-box">
            <h1 class="heading-primary">John Hendricks</h1>
            <p class="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quos itaque quae possimus iusto obcaecati! Aut nemo eaque repellendus id itaque 
                libero aspernatur sunt eos autem. Necessitatibus et facere, repellat voluptates vel 
                nobis tempora eveniet autem quod. Quos, ipsam magnam corrupti vitae iure ab quaerat 
                non accusantium corporis sit accusamus nobis similique laudantium labore nam quia a 
                ducimus nemo fugit neque eum est modi libero architecto. Maiores harum velit repellat 
                cupiditate.
            </p>
            <p class="text-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil itaque sapiente 
                molestias impedit doloremque aspernatur illo dolores. Expedita tempore eum aliquam inventore 
                dicta consequuntur totam ratione porro pariatur ducimus.
            </p>
            <div class="socials">
                <router-link class="social-link"> 
                    <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
                    Me on Twitter
                </router-link>
                <router-link class="social-link">
                    <ion-icon class="social-icon" name="logo-pinterest"></ion-icon>
                    Me on Pinterest
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.text-box {
    width: 50%;
}

.socials {
    display: flex;
    margin-top: 2.4rem;
    gap: 2.4rem;
}

.social-link:link, .social-link:visited {
    font-size: 1.6rem;
    color: #fff;
    text-decoration: none;
    display: flex;
    gap: 1.2rem;
}

.social-icon {
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
}
</style>