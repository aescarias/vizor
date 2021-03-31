
<template>
    <section class="about">
        <h1>About</h1>

        <div>
            <h2>What is Vizor?</h2>

            <p>
                Vizor is a free, opensource, minimalist and clean algorithm visualizer written in Vue.
                It allows an user to visualize the inner workings of an algorithm. Vizor provides
                detailed explanations of each algorithm as well as clean visualizations and context as to
                what the algorithm is doing.
            </p>
        </div>

        <hr>

        <div>
            <h2>Why should I use Vizor?</h2>

            <p>
                Some of the reasons you should use Vizor over other similar products are as follows:
            </p>
            <ul>
                <li>Vizor provides a clean, minimalist UI</li>
                <li>Vizor provides detailed explanations of each algorithm</li>
                <li>
                    Vizor is opensource and free meaning that anyone can contribute and see the inner
                    workings of our application
                </li>
            </ul>

            <p>
                And more...
            </p>
        </div>
    </section>
</template>

<style scoped>
    .about {
        margin: 1em;
    }
    .about p {
        margin: .5em;
    }
</style>

<script>
    export default {
        name: 'About'
    }
</script>