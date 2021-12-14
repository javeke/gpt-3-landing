<template>
    <section class="bg-footer">
        <div class="footer">
            <div class="footer-text flex flex-col justify-center items-center lg:gap-10 md:gap-8 gap-6 lg:p-14 md:p-10 p-8">
                <h1 class="text-gradient main-heading">Do you want to step in to the future before others</h1>
                <button class="call-to-action text-white px-4 py-2">Request Early Access</button>
            </div>
            <div class="footer-content lg:p-14 md:p-10 p-8">
                <div class="brand">
                    <h1 class="text-white section-heading">GPT-3</h1>
                    <p class="primary-color">Alpha Wolf, All Rights Reserved</p>
                </div>
                <div class="links">
                    <div>
                        <h5 class="text-white font-bold">Links</h5>
                        <p class="primary-color"> <a href="#"> Overons </a></p>
                        <p class="primary-color"> <a href="#"> Social Media </a></p>
                        <p class="primary-color"> <a href="#"> Counters </a></p>
                        <p class="primary-color"> <a href="#"> Contact </a></p>
                    </div>
                    <div>
                        <h5 class="text-white font-bold">Company</h5>
                        <p class="primary-color"> <a href="#"> Terms & Conditions </a></p>
                        <p class="primary-color"> <a href="#"> Privacy Policy </a></p>
                        <p class="primary-color"> <a href="#"> Contact </a></p>
                    </div>
                    <div>
                        <h5 class="text-white font-bold">Get in touch</h5>
                        <p class="primary-color"> <a href="#"> Big like truck </a></p>
                        <p class="primary-color"> <a href="#"> Welcome to my house </a></p>
                        <p class="primary-color"> <a href="#"> info@payme.net </a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.footer-text{
    min-height: 60vh;
}

.footer-text h1{
    max-width: 40rem;
    text-align: center;
}

.call-to-action{
    border: 1px solid #fff;
}

@media screen and (max-width:640px) {
    .footer-text{
        min-height: 40vh;
    }
}

.footer-content{
    display: flex;
}

.brand{
    flex: 1;
}

.brand p{
    font-size: 12px;
}

.links{
    flex: 2;
    display: flex;
    justify-content: space-evenly;
}

.links h5{
    margin-bottom: 1rem;
}

.links p{
    font-size: 12px;
    margin-bottom: 0.3rem;
}

@media screen and (max-width:640px) {
    .footer-content{
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .links{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
    }
}

@media screen and (max-width:480px) {
    .links{
        grid-template-columns: repeat(2, 1fr);
        row-gap: 30px;
    }
}
</style>