<template>
  <main>
    <Hero @scroll-to-tickets="scrollToTickets" />
    <Events />
    <!-- <hr> -->
    <JoinForUs />
    <div id="tickets-section">
      <Tickets />
    </div>
    <About />
    <Footer />
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Events from "@/components/Events.vue";
import JoinForUs from "@/components/JoinForUs.vue";
import Tickets from "@/components/Tickets.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    Events,
    JoinForUs,
    Tickets,
    About,
    Footer,
  },
  setup() {
    return {};
  },
  methods: {
    scrollToTickets() {
      const ticketsSection = document.getElementById('tickets-section');
      if (ticketsSection) {
        ticketsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style lang="css" scoped>
hr {
  margin: 1.5rem 3rem;
  border: 0;
  border-image: linear-gradient(
      to right,
      #edbb2c,
      #ff6a00,
      #06195c,
      #7fddbb,
      #72ced6
    )
    1;
  border-top: 3px solid;
  animation: fadeIn 2s;
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

@keyframes appear {
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
</style>