<template>
    <section  class="lg:px-14 sm:px-10 px-8 lg:mx-12 md:mx-6 lg:py-14 sm:py-12 py-8">
        <div class="possibility-container">
            <div class="possibility-image lg:px-12 md:px-10 px-8">
                <img src="../assets/possibility.png" alt="Possibilities">
            </div>
            <div class="possibility-content lg:px-12 md:px-10 px-8">
                <p class="subtext-color-2">Request Early Access to Get Started</p>
                <h2 class="text-gradient section-heading">The possibilities are beyond your imagination</h2>
                <p class="primary-color">
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
                    Indulgence way everything joy alteration boisterous the attachment. 
                    Party we years to order allow asked of.
                </p>
                <p class="subtext-color">Request Early Access to Get Started</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.possibility-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.possibility-image{
    width: 100%;
}

.possibility-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media screen and (max-width:1024px) {
    .possibility-container{
        flex-direction: column;
        gap: 40px;
    }
}

@media screen and (max-width:640px) {
    p {
        font-size: 12px;
    }
}
</style>