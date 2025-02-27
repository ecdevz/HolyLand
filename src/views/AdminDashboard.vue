<template>
    <div class="dashboard">
        <Login v-if="!isAlreadyLogin" @login-success="handleLoginSuccess" />
        <div class="main" v-else>
            <header>
                <h1>Admin Dashboard</h1>
                <button @click="handleLogout">Logout</button>
            </header>
            <nav>
                <RouterLink to="/dashboard/search" active-class="active">Search</RouterLink>
                <RouterLink to="/dashboard/scanqr" active-class="active">Scan QR</RouterLink>
                <RouterLink to="/dashboard/all" active-class="active">All</RouterLink>
            </nav>
            <main>
                <router-view />
            </main>
            <footer>
                <p>&copy; 2021</p>
            </footer>
        </div>
    </div>
</template>

<script>
import Login from '@/components/dashboard/Login.vue';
import Cookies from 'js-cookie';
import { RouterLink } from 'vue-router';
export default {
    name: "AdminDashboard",
    components: {
        Login,
    },
    data() {
        return {
            isAlreadyLogin: Cookies.get('isLoggedIn') === 'true',
        };
    },
    methods: {
        handleLoginSuccess() {
            this.isAlreadyLogin = true;
        },
        handleLogout() {
            Cookies.remove('isLoggedIn');
            this.isAlreadyLogin = false;
        },
    },
    beforeMount() {
        document.body.style.backgroundImage = 'none';
    },
}
</script>

<style lang="css" scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
}
header h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2vw, 2rem);
}
header button {
    padding: 0.5rem 1rem;
    background-color: #555;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
}
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
}
nav a {
    padding: 0.5rem 1rem;
    background-color: #555;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
}
nav a.active {
    background-color: #333;
}
main {
    height: 100svh;
    overflow-y: auto;
    padding: 1rem;
}
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
}

</style>