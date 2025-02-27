# BTDT V4

## Overview

BTDT V4 is a web application designed to manage and streamline various administrative tasks. The application includes features such as user login, QR code scanning, and data search functionalities.

## Features

- **User Login**: Secure login functionality with cookie-based session management.
- **Admin Dashboard**: A comprehensive dashboard for administrators to manage tasks.
- **QR Code Scanning**: Scan and capture QR codes using the device camera or file upload.
- **Data Search**: Search for user information using NIC, contact number, or QR code.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/btdt-v4.git
    cd btdt-v4
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the development server**:
    ```sh
    npm run serve
    ```

4. **Build for production**:
    ```sh
    npm run build
    ```

## Usage

### User Login

- Navigate to the login page and enter your credentials.
- Upon successful login, you will be redirected to the admin dashboard.

### Admin Dashboard

- The dashboard provides links to various sections such as Search, Scan QR, and All.
- Use the navigation links to access different functionalities.

### QR Code Scanning

- Navigate to the Scan QR section.
- Use the device camera to scan a QR code or upload an image file containing the QR code.
- The application will process the QR code and display the relevant information.

### Data Search

- Navigate to the Search section.
- Enter the NIC, contact number, or QR code to search for user information.
- The application will display the relevant information if found.

## Demo

You can try out the live demo of the application by clicking the button below:

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://your-demo-url.com)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the PROPRIETARY License. See the LICENSE file for more details.

## Acknowledgements

- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue QR Code Reader](https://github.com/gruhn/vue-qrcode-reader)
- [js-cookie](https://github.com/js-cookie/js-cookie)