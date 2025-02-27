<template>
  <dic class="container">
    <span>{{ messageerror }}</span>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>NIC Number</th>
          <th>Batch</th>
          <th>Contact</th>
          <th>Status</th>
          <th>QR Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <div v-if="isfetching" class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <tbody v-if="alldata" v-for="data in alldata">
        <tr>
          <td>{{ data[0] }}</td>
          <td>{{ data[1] }}</td>
          <td>{{ data[2] }}</td>
          <td>{{ data[3] }}</td>
          <td>{{ data[4] }}</td>
          <td>{{ data[5] }}</td>
          <td>{{ data[6] }}</td>
          <td class="actions">
            <button @click="toPaid(data[0])" :class="data[5]==='PAID'?'disabled':''">Paid</button>
            <button @click="toUnPaid(data[0])" :class="data[5]==='PAID'?'':'disabled'">Unpaid</button>
          </td>
        </tr>
      </tbody>
    </table>
  </dic>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      alldata: null,
      messageerror: null,
      isfetching: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.alldata = null;
      this.isfetching = true;
      fetch(
        "https://script.google.com/macros/s/AKfycbxQliCST_2dI-EvMx5BNo8m8Eso_MfWc344iNHIWnbbqSIT1G0lwvFEkx0zjvbRtim5YA/exec?pass=sky7&toencript=afdh633bchsdscxvc7"
      )
        .then((response) => response.json())
        .then((data) => {
          this.isfetching = false;
          this.alldata = data.data;
        })
        .catch((error) => {
          this.isfetching = false;
          this.messageerror =
            "Error fetching data from server. Please try again later.";
        });
    },
    toPaid(id) {
        this.alldata = null;
        this.isfetching = true;
        fetch(`https://script.google.com/macros/s/AKfycbzc8HNokNvScYHh9dJTzScE-IXKhNq-eEtDSzE9M-FOzm204wUMK46Dwib33pp7EhqB/exec?option=paidSuccess&searchData=${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 200) {
                this.fetchData();
            }else{
                this.messageerror = "Error updating data. Please try again later.";
            }
        })
        .catch((error) => {
            this.messageerror = "Error updating data. Please try again later.";
        });
    },
    toUnPaid(id) {
        this.alldata = null;
        this.isfetching = true;
        fetch(`https://script.google.com/macros/s/AKfycbzc8HNokNvScYHh9dJTzScE-IXKhNq-eEtDSzE9M-FOzm204wUMK46Dwib33pp7EhqB/exec?option=paidUnSuccess&searchData=${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 200) {
                this.fetchData();
            }else{
                this.messageerror = "Error updating data. Please try again later.";
            }
        })
        .catch((error) => {
            this.messageerror = "Error updating data. Please try again later.";
        });
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  margin: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table,
th,
td {
  border: 1px solid black;
}
th,
td {
  padding: 10px;
  text-align: left;
}
th {
  background-color: #333;
  color: white;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.disabled {
  background-color: #949393;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: not-allowed;
}
@media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table thead {
    display: none;
  }
  table tr {
    margin-bottom: 10px;
    display: block;
    border: 1px solid #ccc;
  }
  table td {
    display: block;
    text-align: right;
    border: 1px solid #ccc;
  }
  table td:before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
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
