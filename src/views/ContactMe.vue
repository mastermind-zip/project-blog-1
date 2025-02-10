<template>
    <div class="container">
        <h1 class="heading-primary">Contact me</h1>
        <div class="text-box">
            <div class="info">
                <h2 class="heading-secondary">John Hendricks</h2>
                <p class="text-description">
                    Astana, Kazakhstan
                    15035, Uly Dala avenue
                    info@mysite.com
                </p>
                <p class="text-description">
                    Tel: +7 (7172) 000 00 00
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
            <div class="form-box">
                <form class="form-contacts">
                    <input type="text" placeholder="Name" required>
                    <input type="email" placeholder="Email" required>
                    <input type="tel" placeholder="Telephone number" required>
                    <textarea placeholder="Some message..." rows="4" cols="50" ></textarea>
                    <button type="submit" class="btn-submit">Send</button>
                </form>
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
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
    gap: 4.8rem;
    margin-top: 3.2rem;
    height: 60vh;
}

.info {
    width: 90%;
}

.socials {
    display: flex;
    margin-top: 2.4rem;
    gap: 2.4rem;
    flex-direction: column;
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

.form-box {
    width: 80%;
}

.form-contacts {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-left: 3.2rem;
}

.form-contacts input, textarea{
    padding: 0.8rem 2.4rem;
}

.btn-submit {
    width: 30%;
    padding: 0.4rem 0;
    font-size: 1.6rem;
    align-self: flex-end;
    color: #000;
    background-color: #fff;
    border: none;
}

input:hover, 
input:focus-visible,
textarea:hover,
textarea:focus-visible {
    border: 2px solid yellow;
    outline: none;
}




</style>