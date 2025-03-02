<template>
  <div class="join-for-us">
    <h1 class="title">
      Celebrate Holi with Us! A Vibrant Festival of Colors, Music, and Joy
    </h1>
    <img src="../assets/images/Frame19.svg" alt="" srcset="" />
    <div class="content">
      <p>
        Join us in Walisara for a vibrant Holi celebration! Immerse yourself in
        a kaleidoscope of colors, as we celebrate this joyous festival with
        music, dance, and delicious food. Let's create unforgettable memories
        together at Holi Land!
      </p>
      <div class="info">
        <div class="item">
          <img
            src="https://img.icons8.com/color/50/marker--v1.png"
            alt="marker--v1"
          />
          <span>{{ location }}</span>
        </div>
        <div class="item">
          <img width="50" height="50" src="https://img.icons8.com/stickers/50/calendar.png" alt="calendar"/>
          <span>{{ date }}</span>
        </div>
        <div class="item">
          <img
            src="https://img.icons8.com/color/48/000000/clock--v1.png"
            alt="clock--v1"
          />
          <span>{{ time }}</span>
        </div>
        <div class="item">
          <img
            src="https://img.icons8.com/color/48/000000/price-tag--v1.png"
            alt="price-tag--v1"
          />
          <span>{{ price }}</span>
        </div>
      </div>
    </div>
    <div class="dj-info">
      <img :src="dj.img" alt="" srcset="" />
      <p>
        {{ dj.description }}
      </p>
    </div>
  </div>
</template>

<script>
import image02 from "../assets/images/image02.svg";
export default {
  name: "JoinForUs",
  data() {
    return {
      location: "SLTMNIT Ground, Walisara",
      date: "March 30, 2025",
      time: "3.00 PM onwards",
      price: "Rs. 1000 per ticket",
      dj: {
        name: "DJ Nush",
        img: image02,
        description:
          "At Holi Land, DJ Nush will paint the air with sound, creating a sonic explosion as vibrant as the colors around you. Prepare for a musical journey that will elevate your Holi experience.",
      },
    };
  },
};
</script>

<style lang="css" scoped>
* {
  animation: appear 2s;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
.join-for-us {
  display: grid;
  grid-template-areas:
    "title img"
    "content img"
    "dj dj";
  color: #06195c;
  background-color: rgba(255, 255, 255, 0.425);
  backdrop-filter: blur(50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2rem;
}
.title {
  grid-area: title;
  text-align: start;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  padding: 1rem;
}
img {
  grid-area: img;
  width: 400px;
  height: 400px;
  border-radius: 10px;
}
.content {
  grid-area: content;
  padding: 1rem;
  text-align: center;
}
.content p {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.item {
  margin: 1rem;
  display: flex;
  align-items: center;
}
.item img {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}
.dj-info {
  grid-area: dj;
  padding: 1rem;
  text-align: center;
}
.dj-info {
  display: grid;
  grid-template-areas:
    "djimg djcontent"
    "djimg djcontent";
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
.dj-info img {
  grid-area: djimg;
  width: 400px;
  height: 400px;
  border-radius: 10px;
}
.dj-info p {
  grid-area: djcontent;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  text-align: center;
  padding: 1rem;
}

@media (max-width: 768px) {
  .join-for-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }
  .title {
    font-size: clamp(1rem, 2vw, 2rem);
  }
  img {
    width: 300px;
    height: 300px;
  }
  .content p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }
  .info {
    flex-direction: column;
    gap: 0.5rem;
  }
  .item {
    margin: 0.5rem;
  }
  .item img {
    width: 30px;
    height: 30px;
  }
  .dj-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .dj-info img {
    width: 300px;
    height: 300px;
  }
  .dj-info p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
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
