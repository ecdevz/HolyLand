<template>
  <div class="scan-qr-code">
    <div class="scan-media">
      <qrcode-stream :key="streamKey" class="camera" @detect="onDetect"></qrcode-stream>
      <QrcodeCapture class="upload" @detect="onDetect"></QrcodeCapture>
    </div>
    <p>{{ error }}</p>
    <div v-if="isfetching" class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-if="isdata" class="info">
      <h2>Information</h2>
      <div class="card">
        <div class="item">
          <p>ID:</p>
          <p>{{ data[0] }}</p>
        </div>
        <div class="item">
          <p>NAME:</p>
          <p>{{ data[1] }}</p>
        </div>
        <div class="item">
          <p>NIC NUMBER:</p>
          <p>{{ data[2] }}</p>
        </div>
        <div class="item">
          <p>BATCH:</p>
          <p>{{ data[3] }}</p>
        </div>
        <div class="item">
          <p>CONTACT:</p>
          <p>{{ data[4] }}</p>
        </div>
        <div class="item">
          <p>STATUS:</p>
          <p>{{ data[5] }}</p>
        </div>
        <div class="item">
          <p>QRCODE:</p>
          <p>{{ data[6] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
export default {
  name: "ScanQrCode",
  data() {
    return {
      detectedQrCode: "",
      data: null,
      isfetching: false,
      isdata: false,
      error: null,
      streamKey: 0, // Add a key to force re-render
    };
  },
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
  },
  methods: {
    fetchData(qr) {
      fetch(`https://script.google.com/macros/s/AKfycbyGzrVU7RTZXkpX0tuTvGhtVBNI3r7uBTEA5lVgzCOIbhf1APs7tnqYAfIuncjWNkMZ0g/exec?option=test1&searchData=${qr}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === 200) {
            this.data = data.message;
            this.isfetching = false;
            this.isdata = true;
            this.resetQrCodeStream(); // Reset the QR code stream
          } else {
            this.error = "No data found.";
            this.isfetching = false;
          }
        })
        .catch(error => {
          console.error(error);
          this.error = "An error occurred while fetching data from the server. Please try again later.";
          this.isfetching = false;
        });
    },
    onDetect(content) {
      if (content) {
        console.log(content);
        this.isfetching = true;
        this.isdata = false;
        this.error = null;
        this.fetchData(content[0].rawValue);
      }
    },
    resetQrCodeStream() {
      this.streamKey += 1; // Increment the key to force re-render
    },
  },
};
</script>

<style lang="css" scoped>
.scan-qr-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.camera {
  width: 100%;
  max-width: 20rem;
  height: auto;
}
.upload {
  width: 100%;
  max-width: 20rem;
  height: auto;
}
.scan-qr-code button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 0.25rem;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20rem;
}
.info h2 {
  padding: 1rem;
}
.card {
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.item {
  display: flex;
  gap: 2rem;
  gap: 0.5rem;
}
.item p {
  margin: 0;
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