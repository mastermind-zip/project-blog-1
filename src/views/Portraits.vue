<template>
    <div class="container">
        <div class="text-box">
            <h1 class="heading-primary">Portraits</h1>
            <p class="text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quos itaque quae possimus iusto obcaecati! Aut nemo eaque repellendus id itaque 
                libero aspernatur sunt eos autem. Necessitatibus et facere, repellat voluptates vel 
                nobis tempora eveniet autem quod. Quos, ipsam magnam corrupti vitae iure ab quaerat 
                non accusantium corporis sit accusamus nobis similique laudantium labore nam quia a 
                ducimus nemo fugit neque eum est modi libero architecto. Maiores harum velit repellat 
                cupiditate.
            </p>
        </div>
        <div class="portraits">
            <div class="portrait">
                <div class="img-box">
                    <img src="../assets/portrait_1.jpg" alt="portrait of customer" class="portrait-img">
                </div>
                <h2 class="heading-secondary">Title of portrait here</h2>
                <p class="text-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, saepe.</p>
            </div>
        </div>
        <div class="portraits">
            <div class="portrait">
                <div class="img-box">
                    <img src="../assets/portrait_2.jpg" alt="portrait of customer" class="portrait-img">
                </div>
                <h2 class="heading-secondary">Title of portrait here</h2>
                <p class="text-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, saepe.</p>
            </div>
        </div>
        <div class="portraits">
            <div class="portrait">
                <div class="img-box">
                    <img src="../assets/portrait_3.jpg" alt="portrait of customer" class="portrait-img">
                </div>
                <h2 class="heading-secondary">Title of portrait here</h2>
                <p class="text-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, saepe.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {

        return {}
    }
}
</script>

<style scoped>

.text-box {
    width: 80%;
}

.portrait {
    margin-top: 2.4rem;
    background-color: #fff;
    color: #000;
    padding: 0.8rem 0.8rem 2rem 0.8rem;
}

.img-box {
    overflow: hidden;
    pointer-events: all;
    cursor: pointer;
}

.portrait-img {
    width: 100%;
    border: 0.05px solid #a0a0a0da;
    transition: all 0.6s;
}

.portrait-img:hover {
    transform: scale(1.4);
}

.heading-secondary {
    margin-top: 1.2rem;
}




</style>