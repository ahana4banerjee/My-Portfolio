# Personal Portfolio — Software + Embedded Systems Engineer

> Bridging the physical and digital layers by building intelligent cyber-physical systems.

I, Ahana Banerjee, build systems where software directly interacts with the physical world. Drawing from my Integrated B.Tech + M.Tech education in Electronics and Communication Engineering (ECE), my engineering philosophy centers on creating complete, end-to-end loops—integrating hardware sensors, real-time microcontrollers, robust cloud telemetry, and edge artificial intelligence models to solve real-world operational challenges.

---

## 2. Live Website

The deployed version of my portfolio is live and accessible at:
* **Live Demo:** [ahanabanerjeeportfolio.vercel.app](https://ahanabanerjeeportfolio.vercel.app/)
* **Portfolio URL:** `https://ahanabanerjeeportfolio.vercel.app/`

---

## 3. About This Portfolio

This repository contains the source code for my personal engineering portfolio. The primary purpose of this site is to demonstrate my ability to engineer across all levels of the technology stack. It showcases real-world systems, internships, and academic prototypes spanning:
* **Embedded Systems:** Real-time firmware development, memory registers, and hardware description logic.
* **Internet of Things (IoT):** Sensor simulation, MQTT telemetry, and NOC dashboards.
* **Artificial Intelligence & Machine Learning:** Custom predictive forecasting models, anomaly detection algorithms, and LLM integrations.
* **Full Stack Development:** Fast REST APIs, responsive React client dashboards, and secure databases.
* **Intelligent Cyber-Physical Systems (CPS):** Unifying physical controllers with intelligence models.

---

## 4. Personal Brand & Identity

My portfolio answers one core question for recruiters and collaborators: *"What kind of engineer is Ahana Banerjee?"*

I am an engineer who bridges the divide between hardware and software. Rather than positioning myself as a generic web developer or a purely hardware-focused IC designer, I focus on systems where code controls physical hardware. Whether designing intelligent traffic-aware corridors or architecting wireless telemetry dashboards, I build unified systems from the sensor layer up to the cloud interface.

---

## 5. Portfolio Features

* **Engineering Journey Timeline:** A customized vertical, alternating timeline tracking my growth from initial circuit design and ECE systems to advanced ML models and CPS development.
* **Responsive Project Showcases:** Highly structured cards highlighting engineering problem-solution statements instead of generic descriptions.
* **Filtered Technical Skills:** Categorized skill badges highlighting ECE tools, IoT communication protocols, and machine learning models first.
* **Interactive Contact Portal:** A fast, recruiter-friendly contact section integrated directly with EmailJS for messaging.
* **Technical UI/UX Design:** A clean, modern dark-mode aesthetic utilizing Space Grotesk and Inter typography, with subtle glassmorphic styling and smooth Framer Motion transitions.

---

## 6. Featured Projects

* **Predictive Ambulance Green Corridor Generator:** An intelligent transit management prototype integrating STM32 microcontrollers, Vivado FPGA controllers, and simulated speed sensors to dynamically coordinate signals ahead of emergency vehicles.
* **Smart Wireless Sensor Network:** A real-time IoT monitoring platform featuring MQTT data pipelines, a FastAPI telemetry backend, a React NOC dashboard, and Scikit-Learn Isolation Forest algorithms for anomalous data filtering.
* **AI Photovoltaic Monitoring System:** An AI-powered solar panel diagnostic and fault-prediction system developed as part of my learning internships.
* **Full Stack SaaS Application (FinLens):** A finance tracker SaaS employing Gemini AI models for transaction OCR parsing, bulk data ingestion, and Node-Cron automation tasks.

---

## 7. Tech Stack

### Embedded Systems
* **Microcontrollers:** STM32, ESP32, 8051
* **Protocols & Buses:** I2C, SPI, UART, MQTT
* **Hardware Development Tools:** Vivado (FPGA), PICSimLab, Proteus, Tinkercad

### AI & Machine Learning
* **Libraries:** TensorFlow, PyTorch, Scikit-Learn
* **Models & APIs:** XGBoost, Regression/Classification, Isolation Forest, Google Gemini API, NLP pipelines
* **Orchestrators:** Multi-Agent Orchestration, Node-Cron automation

### Frontend
* **Core:** React.js, Next.js, TypeScript, JavaScript
* **Styling & Charts:** Tailwind CSS, ShadcnUI, Framer Motion, Chart.js

### Backend & Databases
* **APIs:** FastAPI, Node.js, Express.js, REST API Design, JWT Authentication
* **Databases:** PostgreSQL, MongoDB, Firebase, NeonDB, Prisma ORM
* **Cloud & DevOps:** AWS (EC2, S3), Azure, GitHub Actions, Vercel, Render

### Tools & Utilities
* **Version Control:** Git, GitHub
* **Development Environments:** VS Code, Docker, Webpack/Vite, Multer, SheetJS

---

## 8. Project Structure

Below is the directory structure representing the active codebase layout:

```
My-Portfolio/
├── public/                 # Static assets folder (served at root)
│   ├── assets/             # Project mockups, diagrams, and PDF resume
│   │   ├── Full_Stack.pdf  # PDF Resume downloaded by recruiters
│   │   └── *.png           # Project screenshot assets
│   └── placeholder.svg
├── src/                    # Source files
│   ├── components/         # React components
│   │   ├── ui/             # Radix & Shadcn UI primitive elements (cards, buttons)
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ResumeSection.tsx
│   ├── hooks/              # Custom utility React hooks (e.g., toast alerts)
│   ├── lib/                # Shared helper functions (e.g., shadcn styling utils)
│   ├── pages/              # Main view entry page structures (Index, NotFound)
│   ├── App.css             # Component-level styles
│   ├── App.tsx             # Root application setup & router definition
│   ├── index.css           # Global design system (variables, custom keyframes)
│   └── main.tsx            # DOM anchor mount point
├── CONTEXT.md              # Engineering brand details and context source of truth
├── package.json            # Scripts, project dependencies, and dev packages
├── tsconfig.json           # Global TypeScript compiler rules
└── README.md               # Repository documentation and recruiter guide
```

---

## 9. Local Development

This portfolio is built on a Vite, React, and TypeScript architecture. Follow the steps below to run a local copy of this repository:

### Prerequisites
Make sure you have Node.js (version 18 or above) installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/ahana4banerjee/My-Portfolio.git
cd My-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
The server will boot locally. By default, it will be visible at `http://localhost:8080/` (or next available port).

### 4. Build Production Bundle
To compile the static production-ready files in the `dist/` directory:
```bash
npm run build
```

---

## 10. Design Philosophy

This portfolio's design guidelines prioritize **content depth, technical clarity, and minimal friction**:
* **Technical Depth over Flash:** Visual elements are designed to showcase hardware outputs and data dashboards, avoiding distracting loops or parallax animations that slow reading.
* **Simplicity:** High-contrast text gradients guide the reader's eye naturally from ECE foundations to active AI solutions.
* **Recruiter-Friendly:** Vital resources (Resume PDF, GitHub profile, Email form, LinkedIn) are reachable with a single click, with all links tested against absolute path mappings.
