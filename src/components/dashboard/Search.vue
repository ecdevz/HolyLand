<template>
  <div class="search">
    <div class="search-bar">
      <p>Enter NIC, contact number or QR code to get the information.</p>
      <div class="">
        <input type="text" placeholder="Search" v-model="serchData" required />
        <button @click="getData">Search</button>
      </div>
    </div>
    <p>{{ error }}</p>
    <div v-if="isfetching" class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-if="hasData" class="info">
      <h2>Information</h2>
      <div class="card">
        <div class="item">
          <p>ID:</p>
          <p>{{ data[0] }}</p>
        </div>
        <div class="item">
          <p>Name:</p>
          <p>{{ data[1] }}</p>
        </div>
        <div class="item">
          <p>NIC Number:</p>
          <p>{{ data[2] }}</p>
        </div>
        <div class="item">
          <p>Batch:</p>
          <p>{{ data[3] }}</p>
        </div>
        <div class="item">
          <p>Contact:</p>
          <p>{{ data[4] }}</p>
        </div>
        <div class="item">
          <p>Status:</p>
          <p>{{ data[5] }}</p>
        </div>
        <div class="item">
          <p>QR Code:</p>
          <p>{{ data[6] }}</p>
        </div>
      </div>
      <div class="action">
        <button @click="toPaid" :class="data[5] === 'PAID' ? 'disabled' : ''">
          Paid
        </button>
        <button @click="toUnPaid" :class="data[5] === 'PAID' ? '' : 'disabled'">
          Unpaid
        </button>
      </div>
    </div>
    <div v-if="hasQr" class="qr">
      <h2>QR Code</h2>
      <vue-qrcode
        id="qrcodeImage"
        style="margin: 0; padding: 0"
        class="img"
        tag="svg"
        :value="code"
        :options="{
          version: 30,
          errorCorrectionLevel: 'H',
          type: 'image/png',
          color: {
            dark: '#000',
            light: '#fff',
          },
        }"
        @change="onDataUrlChange"
      ></vue-qrcode>
      <div>
        <button @click="downloadQr">Download</button>
        <button @click="shareQr">Share</button>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeImage from "vue-qrcode-image";
import VueQrcode from "vue-qrcode";
export default {
  name: "Search",
  components: {
    QrcodeImage,
    VueQrcode,
  },
  data() {
    return {
      hasData: null,
      hasQr: false,
      code: null,
      error: null,
      serchData: null,
      data: null,
      isfetching: false,
    };
  },
  methods: {
    onDataUrlChange(dataUrl) {
      this.dataUrl = dataUrl;
    },
    fetchData() {
      fetch(
        `https://script.google.com/macros/s/AKfycbyGzrVU7RTZXkpX0tuTvGhtVBNI3r7uBTEA5lVgzCOIbhf1APs7tnqYAfIuncjWNkMZ0g/exec?option=test1&searchData=${this.serchData}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.isfetching = false;
          if (data.status === 200) {
            this.hasData = true;
            this.hasQr = data.message[5] === "PAID" ? true : false;
            this.code = data.message[6];
            this.data = data.message;
          } else {
            this.error = "No data found.";
          }
        })
        .catch((error) => {
          this.isfetching = false;
          this.error = "An error occurred while fetching data.";
        });
    },
    getData() {
      if (this.serchData) {
        this.isfetching = true;
        this.hasData = false;
        this.error = null;
        this.data = null;
        this.fetchData();
      } else {
        this.error = "Please enter a valid NIC, contact number or QR code.";
      }
    },
    toPaid() {
      fetch(
        `https://script.google.com/macros/s/AKfycbzc8HNokNvScYHh9dJTzScE-IXKhNq-eEtDSzE9M-FOzm204wUMK46Dwib33pp7EhqB/exec?option=paidSuccess&searchData=${this.data[0]}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            this.isfetching = true;
            this.hasData = false;
            this.error = null;
            this.data = null;
            this.fetchData();
          } else {
            this.error = "An error occurred while updating data.";
          }
        })
        .catch((error) => {
          this.error = "An error occurred while updating data.";
          console.error(error);
        });
    },
    toUnPaid() {
      fetch(
        `https://script.google.com/macros/s/AKfycbzc8HNokNvScYHh9dJTzScE-IXKhNq-eEtDSzE9M-FOzm204wUMK46Dwib33pp7EhqB/exec?option=paidUnSuccess&searchData=${this.data[0]}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            this.isfetching = true;
            this.hasData = false;
            this.error = null;
            this.data = null;
            this.fetchData();
          } else {
            this.error = "An error occurred while updating data.";
          }
        })
        .catch((error) => {
          this.error = "An error occurred while updating data.";
          console.error(error);
        });
    },
    downloadQr() {
      // Download the qr code
      let qrCode = document.getElementById("qrcodeImage");
      let qrCodeImage = qrCode.src;
      let a = document.createElement("a");
      a.href = qrCodeImage;
      a.download = `BTDT_HOLI_${this.code}.png`;
      a.click();
    },
    shareQr() {
      // Share the qr code
      let qrCode = document.getElementById("qrcodeImage");
      let qrCodeImage = qrCode.src;
      if (navigator.share) {
        navigator
          .share({
            title: "BTDT Holi QR Code",
            text: "BTDT Holi QR Code",
            url: qrCodeImage,
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      } else {
        console.log("Web Share API not supported.");
      }
    },
  },
};
</script>

<style lang="css" scoped>
.search {
  display: grid;
  grid-template-areas:
    "search qr"
    "info qr";
}
.search .search-bar {
  grid-area: search;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.search .search-bar div {
  display: flex;
  gap: 1rem;
}
.search .search-bar input {
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 0.25rem;
}
.search .search-bar button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.search .search-bar button:hover {
  background-color: #555;
}
.search .info {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  grid-area: info;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 0.25rem;
}
.item {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.search .qr {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.search .qr h2 {
  margin: 0;
}
.search .qr img {
  width: 200px;
  height: 200px;
}
.search .qr div {
  display: flex;
  gap: 1rem;
}
.action {
  display: flex;
  gap: 1rem;
}
.search .info .action button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.search .info .action button:hover {
  background-color: #555;
}
.disabled {
  background-color: #c0c0c0;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
}
.search .qr {
  grid-area: qr;
}
.search .qr button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
.search .qr button:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .search {
    grid-template-areas:
      "search"
      "info"
      "qr";
  }
  .search .search-bar {
    margin-bottom: 1rem;
  }
  .search .qr {
    margin-top: 1rem;
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
