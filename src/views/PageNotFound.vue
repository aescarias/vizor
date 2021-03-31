<template>
    <div class="page-not-found">
        <h2>Welcome to 404 Land!</h2>
        <p>
            The resource you were trying to access wasn't found on Earth
            so we brought you to <b>404 Land</b>. <br>
            If you want to go back to Earth,
            click any of the links in the header or just type the correct URL.
        </p>
    </div>
</template>

<style scoped>
.page-not-found {
    margin: 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
</style>

<script>
export default {
    name: 'PageNotFound'
}
</script>
