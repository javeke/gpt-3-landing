<template>
    <section class="lg:px-14 sm:px-10 px-8 lg:mx-12 md:mx-6 lg:py-14 sm:py-12 py-8">
        <div class="bar bar-gradient lg:px-12 md:px-10 px-8 lg:py-14 md:py-12 py-10">
            <div class="request">
                <p>Request Early Access to Get Started</p>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>
            <div class="call-to-action">
                <button class="md:px-6 md:py-3 sm:px-4 sm:py-2 px-2 py-2 text-white bg-black">Get Started</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.bar{
    border-radius: 8px;
    display: flex;
    align-items: center;
}

.request{
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 2;
}

.request p{
    font-size: 12px;
}

.request h3{
    font-size: 24px;
    font-weight: 800;
}

.call-to-action{
    display: flex;
    flex: 1;
    justify-content: flex-end;
}

.call-to-action > button{
    border-radius: 40px;
    font-weight: bold;
}

@media screen and (max-width:640px) {
    .bar{
        flex-direction: column;
        gap: 20px;
    }

    .request h3{
        font-size: 16px;
    }

    .call-to-action{
        width: 100%;
    }

    .call-to-action > button{
        width: 100%;
        font-size: 12px;
    }
}

</style>