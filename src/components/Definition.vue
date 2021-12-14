<template>
    <section class="lg:px-14 sm:px-10 px-8 lg:mx-12 md:mx-6 lg:my-14 sm:my-12 my-8">
        <div class="card lg:px-12 md:px-10 px-8 lg:py-14 md:py-12 py-10">
            <div class="definition">
                <h3 class="text-white font-bold indicator">What is GPT-3</h3>
                <p class="primary-color">
                    We so opinion friends me message as delight. Whole front do of plate heard oh ought. 
                    His defective nor convinced residence own. Connection has put impossible own apartments boisterous. 
                    At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
                </p>
            </div>
            <div class="possibilities lg:py-16 md:py-14 py-8">
                <h2 class="text-gradient section-heading">The possibilities are beyond your imagination</h2>
                <p class="subtext-color">
                    Explore The Library
                </p>
            </div>
            <div class="feature-container flex lg:gap-14 sm:gap-12 gap-10">
                <div>
                    <h3 class="text-white font-bold indicator lg:mb-6 sm:mb-4 mb-2">Chatbots</h3>
                    <p class="primary-color">
                        We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                    </p>
                </div>
                <div>
                    <h3 class="text-white font-bold indicator lg:mb-6 sm:mb-4 mb-2">Knowledgebase</h3>
                    <p class="primary-color">
                        At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                    </p>
                </div>
                <div>
                    <h3 class="text-white font-bold indicator lg:mb-6 sm:mb-4 mb-2">Education</h3>
                    <p class="primary-color">
                        At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.card{
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: #042C54;
    border-radius: 8px;
}

.definition{
    display:  flex;
}

.definition h3{
    flex: 0.4;
}

.definition p{
    flex: 1;
}

.possibilities{
    display: flex;
}

.possibilities h2{
    flex: 1;
}

.possibilities p{
    flex: 1;
    text-align: right;
}

@media screen and (max-width:1024px) {
    .feature-container{
        flex-direction: column;
    }
}

@media screen and (max-width:640px) {
    .definition, .possibilities{
        flex-direction: column;
        gap: 40px;
    }

    p{
        font-size: 12px;
    }
}

</style>