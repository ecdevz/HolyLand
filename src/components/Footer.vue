<template>
    <div class="footer">
        <a href="https://eshansky7.live">&copy; 2025 EC Dev. All rights reserved.</a>
        <div>
            <router-link class="dash" to="/dashboard">Dashboard</router-link>
        </div>
    </div>
</template>

<script>
import router from '@/router';

    export default {
        name: "Footer",
    }
</script>

<style lang="css" scoped>
    .footer {

        background-color: #06195c;
        color: white;
        text-align: center;
        padding: 1rem;
        margin-top: 2rem;
    }
    .footer p {
        margin: 0;
    }
    a {
        color: white;
    }
    .footer div {
        position: relative;
        margin-top: 1rem;
    }
    .dash {
        position: absolute;
        right: 0;
        bottom: 50%;
        color: white;
        text-decoration: none;
    }
    .dash:hover {
        color: #f5f5f5;
    }

</style>

