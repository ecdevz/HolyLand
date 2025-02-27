<template>
  <div class="hero cssanimation leFadeIn">
    <div class="container">
      <div class="title">
        <h1 class="cssanimation leFadeIn sequence glow">Let's Celebrate</h1>
        <h1 class="cssanimation leFadeIn sequence glow">Holi on</h1>
        <h1 class="cssanimation leFadeIn sequence glow">{{ date }}</h1>
      </div>
      <div>
        <p class="cssanimation leFadeInBottom sequence glow">
          Join us for a day of color, music, and community spirit!
        </p>
      </div>
      <div class="center">
        <button class="btn cssanimation danceBottom" @click="openPopup">
          <span>Download Your Ticket</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 74"
            height="34"
            width="34"
          >
            <circle
              stroke-width="3"
              stroke="black"
              r="35.5"
              cy="37"
              cx="37"
            ></circle>
            <path
              fill="black"
              d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
            ></path>
          </svg>
        </button>
        <GetTicketPopup :show="showPopup" @close="closePopup" />
        <button class="btn cssanimation danceBottom" @click="$emit('scroll-to-tickets')">
          <span>Request Your Ticket</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 74"
            height="34"
            width="34"
          >
            <circle
              stroke-width="3"
              stroke="black"
              r="35.5"
              cy="37"
              cx="37"
            ></circle>
            <path
              fill="black"
              d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GetTicketPopup from "./GetTicketPopup.vue";
export default {
  name: "Hero",
  components: {
    GetTicketPopup,
  },
  data() {
    return {
      showPopup: false,
      date: "30th March 2025", // Change the date to the current year
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style lang="css" scoped>
.hero {
  background-image: url("../assets/images/hero.svg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  animation: fadeIn 0.5s ease-in-out;
}

.container {
  padding: 0 2rem;
}
.hero h1 {
  font-family: "Joti One", serif;
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  text-align: start;
  text-wrap: nowrap;
}
.hero p {
  font-family: "Joti One", serif;
  font-size: clamp(1.5rem, 3vw, 3rem);
  font-weight: 400;
  text-align: start;
  animation-duration: 0.5s;
}
.center {
  display: flex;
  justify-content: start;
  gap: 1rem;
}
.btn {
  margin-top: 1rem;
}

@media screen and (max-width: 768px) {
  .hero {
    background-image: url("../assets/images/hero-mobile.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100svh;
    justify-content: center;
  }
  .hero h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    text-align: center;
  }
  .hero p {
    font-size: clamp(1rem, 3vw, 2rem);
    text-align: center;
    margin-top: 2rem;
  }
  .center {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .btn {
    width: auto;
    padding: 1rem;
    font-size: clamp(0.5rem, 2.5vw, 1rem);
    text-align: center;
  }
  .btn:first-child {
    margin-top: 2rem;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>