<template>
    <section class="lg:px-14 sm:px-10 px-8 lg:mx-12 md:mx-6 lg:py-14 sm:py-12 py-8">
        <div class="future-container">
            <div class="future">
                <h2 class="text-gradient section-heading lg:mb-8 sm:mb-6 mb-4">
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </h2>
                <p class="subtext-color">Request Early Access to Get Started</p>
            </div>
            <div class="opportunities">
                <div class="opportunity">
                    <h4 class="text-white indicator">Improving end distrusts instantly </h4>
                    <p class="primary-color">
                        From they fine john he give of rich he. They age and draw mrs like. 
                        Improving end distrusts may instantly was household applauded.
                    </p>
                </div>
                <div class="opportunity">
                    <h4 class="text-white indicator">Become the tended active</h4>
                    <p class="primary-color">
                        Considered sympathize ten uncommonly occasional assistance sufficient not. 
                        Letter of on become he tended active enable to.
                    </p>
                </div>
                <div class="opportunity">
                    <h4 class="text-white indicator">Message or am nothing</h4>
                    <p class="primary-color">
                        Led ask possible mistress relation elegance eat likewise debating. 
                        By message or am nothing amongst chiefly address.
                    </p>
                </div>
                <div class="opportunity">
                    <h4 class="text-white indicator">Really boy law county</h4>
                    <p class="primary-color">
                        Really boy law county she unable her sister. Feet you off its like like six. 
                        Among sex are leave law built now. In built table in an rapid blush.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.future-container{
    display: flex;
}

.future{
    flex: 1;
}

.future h2{
    max-width: 25rem;
}

.opportunities{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.opportunities .opportunity{
    display: flex;
    gap: 40px;
}

.opportunity h4{
    flex: 0.6;
}

.opportunity p{
    flex: 1.2;
}

@media screen and (max-width:1024px) {
    .future-container{
        flex-direction: column;
        gap: 60px;
    }
}

@media screen and (max-width:640px) {
    p{
        font-size: 12px;
    }

    .opportunities{
        gap: 50px;
    }
    .opportunities .opportunity{
        flex-direction: column;
        gap: 20px;
    }
}
</style>