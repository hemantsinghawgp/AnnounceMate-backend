# AnnounceMate

AnnounceMate is a powerful tool designed to simplify and streamline the announcement process for colleges, schools, and organizations. It features an easy-to-use interface for crafting and distributing messages, including a rich text editor, targeted group selection, and reliable email delivery through Nodemailer.

## Demo

Check out the demo of AnnounceMate in action!

[![AnnounceMate Demo](https://img.youtube.com/vi/HuqQujky0Bk/0.jpg)](https://www.youtube.com/watch?v=HuqQujky0Bk)

Click the image above to watch the video on YouTube.


## Project Structure

The project is divided into two main folders:

- **`frontend`**: Contains the front-end code for the application.
- **`backend`**: Contains the back-end code for the application.

## Features

- **Effortless Announcement Crafting**: Create detailed announcements using a rich text editor.
- **Targeted & Preview-Ready**: Select target groups and preview announcements before sending.
- **Guaranteed Email Delivery**: Send announcements reliably using Nodemailer.

## Installation

To set up the project locally, follow these steps:

### Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following configuration:

    ```env
    SMTP_HOST=your-smtp-host
    SMTP_PORT=your-smtp-port
    SMTP_SECURE=true-or-false
    SMTP_USER=your-email@example.com
    SMTP_PASS=your-email-password
    FRONTEND_URL=http://localhost:3000
    JWT_SECRET=your-jwt-secret
    ```

4. Start the backend server:

    ```bash
    node server.js
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the front-end development server:

    ```bash
    npm start
    ```

## Usage

- **Frontend**: Access the application by navigating to `http://localhost:3000` in your web browser.
- **Backend**: The server runs on `http://localhost:5000` by default and handles all API requests.

## Routes

- **POST `/register`**: Register a new user.
- **POST `/login`**: Log in a user and receive a JWT token.
- **POST `/forgot-password`**: Request a password reset email.
- **POST `/reset-password`**: Reset the user's password.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact us at [support@announcemate.com](mailto:support@announcemate.com).
