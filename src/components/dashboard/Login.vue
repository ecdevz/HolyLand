<template>
    <div class="login">
        <div class="container">
            <h1>Login</h1>
            <div class="form">
                <input type="text" placeholder="Username" v-model="username" required/>
                <input type="password" placeholder="Password" v-model="password" @keyup.enter="login" required/>
                <p class="error">{{ error }}</p>
                <button @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
            error: "",
        };
    },
    methods: {
        login() {
            if (this.username === "btdtholi" && this.password === "btdt.sky7") {
                Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Set cookie for 1 day
                this.$emit('login-success');
            } else {
                this.error = "Invalid username or password";
            }
        },
    },
}
</script>

<style lang="css" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;

    .container {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        text-align: center;

        h1 {
            margin-bottom: 1.5rem;
        }

        .form {
            display: flex;
            flex-direction: column;

            input {
                margin-bottom: 1rem;
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            .error {
                color: red;
                margin-bottom: 1rem;
            }

            button {
                padding: 0.75rem;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;

                &:hover {
                    background-color: #0056b3;
                }
            }
        }
    }
}
</style>