<template>
  <div class="about">
    <div class="about-container">
      <div class="about-content">
        <h1>About Us</h1>
        <p>
          We're the Bachelor of Digital Technology team at Nebula Institute of
          Technology, and we're passionate about bringing people together
          through the vibrant spirit of Holi! We believe in celebrating
          community, culture, and the joy of color. This website is our way of
          sharing the excitement and energy of Holi with everyone. Join us for a
          colorful celebration!
        </p>
      </div>
      <div class="contact">
        <h2>Contact Us</h2>
        <p>For more information, please contact us at:</p>
        <p class="contact-info">
                <!-- <span><Strong>Email: </Strong>{{ contactInfo.email }}</span> -->
                <span v-for="(phone, index) in contactInfo.phones" :key="index">
                  <strong>Phone: </strong>{{ phone.number }} ({{ phone.name }})<br />
                </span>
        </p>
        <!-- <p>You can also get information using:</p>
        <div class="contacts">
            <div v-for="contact in iconsContacts" :key="contact.name">
          <a :href="contact.link"><img :src="contact.icon" :alt="contact.name"/></a>
            </div>
        </div> -->
      </div>
    </div>
    <div class="feedback">
      <h2>Feedback</h2>
      <p>
        We value your feedback! Let us know what you think about our Holi
        website and celebration using the form below. Your input helps us make
        our events even better!
      </p>
      <div class="form-i">
        <input type="text" placeholder="Full Name" v-model="name" required />
        <input type="text" placeholder="Contact number" v-model="number" required />
        <textarea
          name="feedback"
          id="feedback"
          cols="30"
          rows="10"
          placeholder="Your feedback"
          v-model="feedback"
          required
        ></textarea>
        <div v-if="isloading" class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>{{ subbmitted }}</span>
        <button @click="feedbackReq">Submit Feedback</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      contactInfo: {
        email: "unkounnumber@gmail.com",
        phones: [
          {
            name: "Thathsara",
          number: "94714202205",
          },
          {
            name: "Manishka",
            number: "+94751484099",
          },
          {
            name: "Dewsara",
            number: "+94787116715",
          },
        ]
      },
      iconsContacts: [
        {
          name: "WhatsApp",
          icon: "https://img.icons8.com/color/50/whatsapp--v1.png",
          link: "https://wa.me/94714202205",
        },
        {
          name: "Facebook",
          icon: "https://img.icons8.com/color/50/facebook-new.png",
          link: "https://www.facebook.com/yourprofile",
        },
        {
          name: "Instagram",
          icon: "https://img.icons8.com/color/50/instagram-new.png",
          link: "https://www.instagram.com/yourprofile",
        },
        {
          name: "TikTok",
          icon: "https://img.icons8.com/color/50/tiktok--v1.png",
          link: "https://www.tiktok.com/@yourprofile",
        },
        {
          name: "Phone",
          icon: "https://img.icons8.com/color/50/phone.png",
          link: "tel:+94771234567",
        },
        {
          name: "Email",
          icon: "https://img.icons8.com/color/50/email.png",
          link: "mailto:unkounnumber@gmail.com",
        },
      ],
      isloading: false,
      subbmitted: null,
      name: "",
      number: "",
      feedback: "",

    };
  },
  methods: {
    feedbackReq() {
      // validate the form
      if (this.name === "" || this.number === "" || this.feedback === "") {
        alert("Please fill all the fields");
        return;
      }
      this.isloading = true;
      // simulate a server request
      fetch(`https://script.google.com/macros/s/AKfycbwWOzhSzt2Y3Cj1n7Jz60VHya13K0ssTLThvurioMCDM-QDQr1e3QDHxgEXGDd8faKq/exec?name=${this.name}&contact=${this.number}&message=${this.feedback}`)
        .then(response => response.json())
        .then(data => {
          this.isloading = false;
          if (data.status == 200) {
            this.subbmitted = "Feedback submitted successfully.";
          } else {
            this.subbmitted = "Error submitting feedback.";
          }
        })
        .catch(error => {
          this.isloading = false;
          this.subbmitted = "Error submitting feedback.";
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.about,.about-container, .about-content, .contact, .feedback {
  animation: appear 2s;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
.about {
  display: grid;
  gap: 1rem;
  grid-template-areas: "contact-us feedback";
  margin: 3rem 2rem;
  background-color: rgba(255, 255, 255, 0.425);
  backdrop-filter: blur(50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.about-container {

    display: grid;
    gap: 1rem;
    grid-template-areas: 
    "about-content"
    "contact";
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
}
.about-content {
    grid-area: about-content;
}
.about-content h1 , .contact h2,.feedback h2 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    margin-bottom: 0.5rem;
    color: #06195c;
}
.about-content p , .contact p, .feedback p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: #06195c;
}
.contact {
    grid-area: contact;
}
.contact p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
}
.contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.contact-info strong, .contact-info span {
    font-size: clamp(1rem, 2vw, 1.25rem);
}
.contacts {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
}
.contacts a {
    text-decoration: none;
    color: #06195c;
    transition: all 1s ease-in-out;
}
.contact a img {
    width: 2rem;
    height: 2rem;
}
.contacts a:hover img {
    transform: scale(1.1);
}
.feedback {
    padding: 2rem;

}
.form-i {
    display: grid;
    gap: 1rem;
}
input {
    background-color: transparent;
    border-bottom: 2px solid #06195c;
    padding: 1rem;
    border-top: none;
    border-left: none;
    border-right: none;
    color: #06195c;
    font-family: "Delius", serif;
}
input:nth-child(1){
    margin-top: 1rem;
}
input:focus {
    outline: none;
    color: #e1615b;
}
textarea {
    background-color: transparent;
    border: 2px solid #06195c;
    padding: 1rem;
    color: #06195c;
}
textarea:focus {
    outline: none;
    color: #e1615b;
}
button {
    padding: 1rem;
    background-color: #06195c;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
button:hover {
    background-color: #e1615b;
}

@media (max-width: 768px) {
    .about {
        grid-template-areas: 
        "contact-us"
        "feedback";
        margin: 0;

    }
    .about-container {
        grid-template-areas: 
        "about-content"
        "contact";
    }
    .about-content {
        padding: 0;
        text-align: center;
    }
    .feedback {
        text-align: center;
        padding: 1rem;
    }
    p {
        font-size: clamp(1rem, 2.5vw, 1.25rem);
    }
    .contact {
        text-align: center;
        padding: 0;
    }
    .contacts {
        justify-content: center;
    }
    
}
.loading {
  --speed-of-animation: 0.9s;
  --gap: 6px;
  --first-color: #4c86f9;
  --second-color: #49a84c;
  --third-color: #f6bb02;
  --fourth-color: #f6bb02;
  --fifth-color: #2196f3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  gap: 6px;
  height: 100px;
}

.loading span {
  width: 4px;
  height: 50px;
  background: var(--first-color);
  animation: scale var(--speed-of-animation) ease-in-out infinite;
}

.loading span:nth-child(2) {
  background: var(--second-color);
  animation-delay: -0.8s;
}

.loading span:nth-child(3) {
  background: var(--third-color);
  animation-delay: -0.7s;
}

.loading span:nth-child(4) {
  background: var(--fourth-color);
  animation-delay: -0.6s;
}

.loading span:nth-child(5) {
  background: var(--fifth-color);
  animation-delay: -0.5s;
}

@keyframes scale {
  0%,
  40%,
  100% {
    transform: scaleY(0.05);
  }

  20% {
    transform: scaleY(1);
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
