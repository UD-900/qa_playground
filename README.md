# 🧪 QA Playground

A full-featured **QA testing playground** to experiment with backend, frontend, and automation testing tools — all in one workspace.

---

## 🚀 Project Structure

qa-playground/
├── backend/ # Node.js + Express API
│ ├── src/
│ ├── package.json
│ └── ...
│
├── frontend/ # Angular app (soon)
│ ├── src/
│ ├── angular.json
│ └── ...
│
├── tests/ # All QA test suites
│ ├── postman/ # Postman collections + Newman reports
│ │ ├── qa-playground.postman_collection.json
│ │ ├── qa-playground.postman_environment.json
│ │ └── reports/
│ │ └── newman-report.html
│ │
│ ├── automation/ # Future: Selenium / Playwright / Cypress
│ ├── performance/ # Future: k6 / Artillery / JMeter scripts
│ └── reports/ # Centralized QA test reports
│
├── .gitignore
└── README.md


---

## 🧰 Tools

| Layer | Tool | Purpose |
|:------|:------|:---------|
| API | **Express.js** | Backend REST API |
| Frontend | **Angular** | Web client UI |
| API Testing | **Postman / Newman** | Manual + CLI API tests |
| Automation (soon) | **Playwright / Cypress** | UI testing |
| Performance (soon) | **k6 / Artillery** | Load testing |

---

## 🧪 How to Run Tests

### 1️⃣ Run Backend
```bash
cd backend
npm install
npm start

Server runs by default on:
👉 http://localhost:5000

Run Postman Collection (Newman)
newman run tests/postman/qa-playground.postman_collection.json

🧱 Roadmap

✅ Backend (Express.js)
✅ Postman + Newman integration
⬜ Frontend (Angular setup)
⬜ UI Automation (Playwright / Cypress)
⬜ Performance Testing (k6 or Artillery)
⬜ CI/CD integration (GitHub Actions)

Author: Sera 🧡
License: MIT
