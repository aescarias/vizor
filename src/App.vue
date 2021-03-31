<template>
    <nav class="navbar">
        <router-link to="/" class="nav-brand">
            <img alt="Logo" src="./assets/brand.svg" width="120" height="48">
        </router-link>

        <ul class="nav-items">
            <router-link to="/visualizer">Visualizer</router-link>
            <router-link to="/about">About</router-link>
        </ul>
    </nav>

    <router-view id="content" />

    <footer class="footer">
        <p>
            Developed and designed by <b>Angel Carias</b>.
        </p>
        <ul class="footer-links">
            <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Project repository
                </a>
            </li>
            <li>
                <a href="https://angelcarias.github.io/" target="_blank" rel="noopener noreferrer">
                    Author's website
                </a>
            </li>
        </ul>
    </footer>
</template>

<style>
/* Navbar */
.navbar {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #dddddd;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 1.25rem;
}

.nav-brand {
    align-self: center;
}

.nav-items {
    margin: 0;
    padding: 0;
    margin-left: auto;
    align-self: center;
}

.nav-items:last-child {
    padding-right: 0;
}

.nav-items a {
    text-decoration: none;
    color: #2f2f2f;
    font-weight: bold;
    padding-left: 10px;
    padding-right: 10px;
    transition: .25s color ease-in-out;
}

.nav-items a.router-link-exact-active, .nav-items a:hover {
    color: #707070;
}

/* Footer */
.footer {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #dddddd;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin-top: auto;
    text-align: center;
    font-size: 1.25rem;
}

.footer-logo {
    align-self: center;
    margin-right: auto;
}

.footer-links {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-self: center;
}

.footer-links a {
    text-decoration: none;
    text-align: center;
    color: #525252;
    padding-left: 15px;
    padding-right: 15px;
    transition: .25s color ease-in-out;
}

.footer-links a:hover {
    color: #272727;
}

.footer p {
    margin: .25em;
}

@media screen and (max-width: 700px) {
    .footer-links {
        flex-direction: column;
    }
}
</style>