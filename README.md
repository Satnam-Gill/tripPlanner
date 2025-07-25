# TripPlanner

## 🚀 Step-by-Step: Backend Setup

### 1. Navigate to the Backend Folder
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a `.env` File
Inside the `backend/` folder, create a `.env` file and add the following:

```
MONGO_URI=mongodb://localhost:27017/tripdb
PORT=5000
```

### 4. Run the Backend Server

#### For Development:
```bash
npm run dev
```

#### For Production:
```bash
npm run build
npm start
```

The backend will be available at:  
[http://localhost:5000](http://localhost:5000)

You can try accessing the API at:  
[http://localhost:5000/api/trips](http://localhost:5000/api/trips)

---

## 💻 Step-by-Step: Frontend Setup

### 1. Navigate to the Frontend Folder
```bash
cd frontend
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Start the Frontend Development Server
```bash
npm run dev
```

The frontend will be available at:  
[http://localhost:3000](http://localhost:3000)

---

All ready! 🎉