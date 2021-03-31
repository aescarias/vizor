<template>
    <section class="home">
        <div class="hero">
            <h1>Anything algorithms? We got it!</h1>
            <p>
                We allow you to visualize the most common algorithms out there.
            </p>
        </div>

        <div class="features-grid">
            <div class="feature">
                <p class="feature-title">
                    Simple, clean UI
                </p>
                <p class="feature-info">
                    Vizor provides a nice, clean, and minimalist interface that is suitable to all of
                    your visualizing needs.
                </p>
            </div>

            <div class="feature">
                <p class="feature-title">
                    Detailed and comprehensive
                </p>
                <p class="feature-info">
                    Vizor provides detailed explanations of each algorithm, as well as an overview of what
                    they do. All of this in an understandable manner!
                </p>
            </div>

            <div class="feature">
                <p class="feature-title">
                    Free and open
                </p>
                <p class="feature-info">
                    Interested in seeing the source code behind Vizor? You freely can by visiting our repository.
                    Vizor is opensource so you can do anything with the code; distribute it,
                    modify it, and everything in between.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    background-color: #2684af;
    padding: 1em;
    color: white;
    text-align: center;
}

.features-grid {
    display: grid;
    margin: 1em;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
}

.feature {
    padding: .5em;
    background-color: #e6e6e6;
    border-radius: 15px;
}

.feature .feature-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.feature .feature-info {
    font-size: 1.25rem;
}

@media screen and (max-width: 700px) {
    .features-grid {
        grid-template-columns: 1fr;
    }
}

</style>

<script>
export default {
    name: 'Home'
}
</script>
