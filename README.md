# 🛍️ NextShop

NextShop is a simple e-commerce web application built with **Next.js 15**, **NextAuth.js**, and **Tailwind CSS**.  
It includes authentication, product browsing, product detail pages, and an admin manage page.  

🔗 **Live Demo**: [NextShop on Vercel](https://my-shop-gilt-iota.vercel.app/)  
💻 **Source Code**: [GitHub Repository](https://github.com/Repon-Hasan/Task-Nextjs)  

---

## 🚀 Features
- 🔐 User authentication with **NextAuth.js**
- 🖥️ Responsive UI with **Tailwind CSS**
- 📦 Product listing & details page
- 👤 Login page
- ⚙️ Manage page for product management (admin view)
- 🌐 Deployed on **Vercel**

---

## 📂 Project Structure
my-shop/
.env.local # Environment variables (NextAuth, DB, etc.)
jsconfig.json # Path alias configuration
next.config.mjs # Next.js configuration
tailwind.config.js # Tailwind setup
app/
layout.js # Root layout
globals.css # Global styles
page.js # Home page
login/page.jsx # Login page
products/page.js # Product listing page
products/[id]/page.js # Product detail page
manage/page.js # Manage products (admin page)
api/auth/[...nextauth]/route.js # NextAuth API route
components/
Navbar.js # Navigation bar
Footer.js # Footer component
ProductCard.js # Product card UI
lib/
data.js # Mock product data
auth.js # NextAuth configuration
middleware # Middleware for route protection


## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Repon-Hasan/Task-Nextjs.git
   cd Task-Nextjs
Install dependencies

bash
npm install
Set up environment variables
Create a .env.local file in the root directory and configure values:

env
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
Run the development server

bash
npm run dev
Open http://localhost:3000 in your browser 🎉  

🛣️ Route Summary
Route	Description
/	Home page
/login	User login page
/products	Product listing page
/products/[id]	Single product details page
/manage	Manage products (admin only)
/api/auth/[...nextauth]	NextAuth authentication API





🛠️ Tech Stack

Framework: Next.js 15

Styling: Tailwind CSS

Authentication: NextAuth.js

Deployment: Vercel
   
