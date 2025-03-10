# Blogging System

A feature-rich blogging platform where users can create, read, update, and delete blog posts. Includes authentication, search, filtering, pagination, and advanced role-based access control.

## 🛠️ Tech Stack

- **Frontend**: Not implemented (Can be integrated with React/Next.js)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Storage**: Cloudinary (for image uploads)

## 📌 Features

- **User Authentication**: Sign up, log in, JWT-based authentication
- **CRUD Operations**: Create, read, update, and delete blog posts
- **Pagination**: Fetch posts with pagination support
- **Search & Filtering**: Search posts by title, filter by author, and category
- **Authorization**: Only post owners can update or delete their posts
- **Error Handling**: Custom error handling with descriptive messages
- **Middleware**: For authentication and access control

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
  git clone https://github.com/your-username/blogging-system.git
  cd blogging-system
```

### 2. Install Dependencies

```bash
  npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your-mongodb-connection-string
ACCESS_TOKEN_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 4. Start the Server

```bash
  npm start
```

Server runs on `http://localhost:3000`

## 📊 API Endpoints

### Auth Routes

- **POST /api/auth/register** – User Registration
- **POST /api/auth/login** – User Login

### Post Routes

- **POST /api/posts** – Create a Post (Authenticated)
- **GET /api/posts** – Get All Posts (Supports pagination & filters)
- **GET /api/posts/:id** – Get Single Post
- **PUT /api/posts/:id** – Update Post (Owner only)
- **DELETE /api/posts/:id** – Delete Post (Owner only)

## 🔍 Example API Request

### Create a Post

```bash
POST /api/posts
Headers: { Authorization: Bearer YOUR_TOKEN }
Body: {
  "title": "My First Blog Post",
  "content": "This is the content of the post"
}
```

## 📷 Image Upload

- Images are uploaded to **Cloudinary** via the `POST /api/posts` route.

## 📖 Future Improvements

- Add frontend (React/Next.js)
- Implement caching using Redis
- Add comment and like systems

## 📬 Contact




I’m always open to connecting with fellow professionals and enthusiasts in the field. Feel free to reach out to me at Jyotibrotoroy90@gmail.com or connect with me on LinkedIn - https://www.linkedin.com/in/jyotibroto-roy-laskar-490733314/.

Thank you for visiting my project, and I hope you find it insightful!
