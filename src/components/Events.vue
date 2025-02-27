<template>
  <div class="events">
    <div class="container">
      <div v-for="event in events" class="card">
        <div class="card-header">
          <img :src="(event.image)" alt="" srcset="" />
        </div>
        <div class="card-body">
          <h2>{{ event.name }}</h2>
          <p>{{ event.description }}</p>
        </div>
      </div>
      

      
    </div>
  </div>
</template>

<script>
import Frame2 from '../assets/images/Frame2.svg';
import Frame3 from '../assets/images/Frame3.svg';
import Frame4 from '../assets/images/Frame4.svg';
import Frame5 from '../assets/images/Frame5.svg';
export default {
  name: "Events",
  data() {
    return {
      events: [
        {
          name: "Unleash Your Inner Artist!",
          description:"Get ready to paint the each other! in a kaleidoscope of hues!  Our classic 'Throw Colours' game is the heart of Holi Land. We provide the vibrant, safe, and eco-friendly powders – you bring the energy!  Join friends and strangers alike in a joyous explosion of color, laughter, and pure, unadulterated fun. It's not just a game; it's a celebration of life and unity.  Let your inhibitions go and create a living masterpiece with every throw!",
          image: Frame2,
        },
        {
          name: "Bounce to the Beat!",
          description:"Experience a dance party like no other at our 'Balloon Dance Party'!  Imagine a sea of glowing balloons floating above you as you groove to electrifying music.  This isn't just about dancing; it's about being immersed in a magical, multi-sensory experience.  Our DJ will keep the energy high, while the balloons add a whimsical touch, creating a playful and unforgettable atmosphere.  Let the rhythm move you and the balloons guide your spirit!",
          image: Frame3,
        },
        {
          name: "A Race for the Rainbow!",
          description:"Test your speed and strategy with a colorful twist on a classic favorite!  Our 'Musical Chairs: Holi Edition' adds a splash of excitement to the traditional game.  As the music plays, dance around the chairs, but be ready to dive for a seat when the beat stops!  The twist?  Each round features a different color theme, adding a vibrant layer of fun and competition.  It's a hilarious and energetic way to celebrate Holi, perfect for all ages!",
          image: Frame4,
        },
        {
          name: "Paint Your Story!",
          description:"Unleash your inner artist at our Color Canvas Creation zone!  We provide the blank canvases, the vibrant Holi powders, and a variety of tools – you bring the imagination.  Create your own unique masterpiece using the colors of Holi.  Whether you're a seasoned artist or just looking to have some fun, this is your chance to express yourself and leave your mark on Holi Land.  It's a collaborative and creative experience that's sure to inspire.",
          image: Frame5,
        }
      ]
    };
  },
};
</script>

<style lang="css" scoped>
.events {
  width: 100%;
  color: #06195c;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.card {
  width: 300px;
  flex-grow: 1;
  margin-top: 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.425);
  backdrop-filter: blur(50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
.card-header {
  display: flex;
  justify-content: center;
}
.card-header img {
  width: 200px;
  height: 200px;
  margin: 1rem 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card-body {
  padding: 1rem;
  text-align: center;
}
.card-body h2 {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin-bottom: 1rem;
}
.card-body p {
  font-size: clamp(1rem, 2vw, 1.25rem);
}


@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 0.5rem;
  }
  .card {
    width: 100%;
  }
  .card-header img {
    width: 100%;
    height: 200px;
  }
    
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
