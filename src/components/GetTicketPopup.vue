<template>
  <div v-if="show" class="popup">
    <div class="container">
      <div class="title">
        <h1>Download Your Ticket</h1>
        <button @click="$emit('close')" class="popup__close">X</button>
      </div>
      <div class="content">
        <div class="form">
          <p>
            Thank you for joining us! Enter your NIC number or contact number
            click the button below to download your ticket.
          </p>
          <input
            type="text"
            placeholder="NIC Number or Contact Number"
            v-model="searchData"
          />
          <p style="color: #e1615b; font-size: 1rem">{{ error }}</p>
          <div v-if="isloading" class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button class="btn" @click="searchTicket">Download Ticket</button>
        </div>
        <div class="qr" v-if="ifHasTicket">
          <vue-qrcode
          id="qrcodeImage"
            style="margin: 0;
            padding: 0;"
            class="img"
            tag="svg"
            :value="code"
            :options="{
              version: 30,
              errorCorrectionLevel: 'H',
              margin: 1,
              type: 'image/png',
              quality: 1,
              scale: 10,
              width: 1200,
              height:1200,
              color: {
                dark: '#000',
                light: '#fff',
              },
            }"
            @change="onDataUrlChange"
          ></vue-qrcode>
          <button @click="downloadTicket">Download</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeImage from "vue-qrcode-image";
import VueQrcode from "vue-qrcode";
export default {
  name: "GetTicketPopup",
  components: {
    QrcodeImage,
    VueQrcode,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isloading: false,
      ifHasTicket: false,
      error: null,
      searchData: null,
      qrImage: null,
      code: null,
    };
  },
  methods: {
    searchTicket() {
      this.error = null;
      if (!this.searchData) {
        this.error = "Please enter your NIC number or contact number";
        return;
      } else {
        this.isloading = true;
        fetch(
          "https://script.google.com/macros/s/AKfycbxw7k68hKStcFCf0jt2knUxSPW92TtYpsx-ZzEdYCeQpUvSH-hNwWHhG5QoaJVKMJjk/exec?searchData=" +
            this.searchData
        )
          .then((response) => response.json())
          .then(async (res) => {
            console.log(res.data.isbuy);
            this.isloading = false;
            if (res.status === 200) {
              let { isbuy, qr } = res.data;
              if (isbuy) {
                this.ifHasTicket = true;
                this.code = qr;
                // Create a qr code
              } else {
                this.error = "You have not purchased a ticket yet!";
              }
            } else {
              this.error = "Ticket not found! Please try again.";
            }
          })
          .catch((error) => {
            console.log(error);
            this.error = "An error occurred. Please try again.";
          });
      }
    },
    downloadTicket() {
      // Download the qr code
      let qrCode = document.getElementById("qrcodeImage");
      let qrCodeImage = qrCode.src;
      let a = document.createElement("a");
      a.href = qrCodeImage;
      a.download = `BTDT_HOLI_${this.code}.png`;
      a.click();
    },
    onDataUrlChange(dataUrl) {
      this.dataUrl = dataUrl
    },
  },
};
</script>

<style lang="css" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.container {
  width: 100%;
  max-width: 100%;
  max-height: 600px;
  background-color: white;
  color: #06195c;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title h1 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #06195c;
}
.popup__close {
  background-color: #06195c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
.content {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "form qr"
    "form qr";
}
.content .form {
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.content .form p {
  text-align: start;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  margin-bottom: 1rem;
}
.content .form input {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #06195c;
  border-radius: 5px;
}
.content .qr {
  grid-area: qr;
  display: flex;
  flex-direction: column;
}
.content .qr .img {
  width: 300px;
  height: 300px;
  height: auto;
}
.content .qr button {
  background-color: #06195c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  .title h1 {
    font-size: 1.5rem;
  }
  .popup__close {
    padding: 0.25rem 0.5rem;
  }
  .content {
    grid-template-areas:
      "form"
      "qr";
  }
  .content .form p {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
  }
  .content .form input {
    padding: 0.25rem;
  }
  .content .qr img {
    width: 150px;
    height: 150px;
  }
  .content .qr button {
    padding: 0.25rem 0.5rem;
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
</style>
