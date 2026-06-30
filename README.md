# Professional Expenses Management App

A comprehensive expense tracking and accounting application built with React, Node.js, and MongoDB. Perfect for accountants, business owners, and financial professionals.

## Features

### Expense Management
- ✅ Add, edit, and delete expenses
- ✅ Multiple currency support
- ✅ Receipt image uploads
- ✅ Expense categories and subcategories
- ✅ Bulk import from CSV
- ✅ Advanced filtering and search

### Financial Analysis
- 📊 Real-time dashboard with KPIs
- 📈 Expense trends and forecasting
- 💹 Pie charts, bar charts, line graphs
- 📋 Monthly/quarterly/yearly reports
- 🎯 Budget tracking and alerts
- 💰 ROI calculations

### Accounting Features
- 🧾 Invoice generation
- 📑 Expense reports with audit trails
- 💳 Multi-account support
- 🏷️ Tax category classification
- 📌 Recurring expenses automation
- ✅ Approval workflows

### User Management
- 👤 User authentication & authorization
- 👥 Team collaboration (multiple users)
- 🔐 Role-based access control (Admin, Manager, User)
- 📱 Responsive design for mobile/tablet/desktop

### Data Management
- 💾 Automatic backups
- 📥 Export to Excel/PDF
- 🔄 Data synchronization
- 🗑️ Archive and restore expenses

## Tech Stack

**Frontend:**
- React 18
- Redux Toolkit (state management)
- Chart.js / Recharts (visualizations)
- Axios (API client)
- Tailwind CSS (styling)
- React Router (navigation)

**Backend:**
- Node.js with Express
- MongoDB with Mongoose ODM
- JWT authentication
- Multer (file uploads)
- Nodemailer (email notifications)

**Deployment:**
- Docker support
- Environment-based configuration
- Cloud deployment ready (Heroku, AWS, DigitalOcean)

## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/IslamNabiil/expenses-app.git
cd expenses-app
```

2. **Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and settings
npm start
```

3. **Setup Frontend**
```bash
cd ../frontend
npm install
cp .env.example .env
# Edit .env with your API base URL
npm start
```

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/expenses-app
PORT=5000
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Usage

1. **Create Account**: Register as a new user
2. **Add Expenses**: Click "Add Expense" to record new expenses
3. **View Dashboard**: See real-time financial overview
4. **Generate Reports**: Create monthly/quarterly reports
5. **Export Data**: Download reports as PDF or Excel

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh` - Refresh token

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense
- `GET /api/expenses/stats/summary` - Get expense statistics

### Reports
- `GET /api/reports/monthly` - Monthly report
- `GET /api/reports/export` - Export data
- `GET /api/reports/forecast` - Expense forecast

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category

## Deployment

### Using Docker

```bash
docker-compose up -d
```

### Manual Deployment to Heroku

```bash
heroku login
heroku create your-app-name
git push heroku main
heroku config:set MONGODB_URI=your_mongodb_uri
```

### AWS Deployment

See [AWS_DEPLOYMENT.md](./AWS_DEPLOYMENT.md) for detailed instructions.

## File Structure

```
expenses-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── api/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
├── docker-compose.yml
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open a GitHub issue or contact the development team.

---

**Created with ❤️ for professional expense management**
