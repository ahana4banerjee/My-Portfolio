# Portfolio Refactoring Context & Technical Source of Truth

This document serves as the primary reference and source of truth for the portfolio of **I, Ahana Banerjee**. Every future modification, layout adjustment, or content additions must align with the personal identity, engineering philosophy, and structured project descriptions detailed below.

---

## 1. Who I Am: My Core Identity
I, Ahana Banerjee, am a final-year Integrated B.Tech + M.Tech student in Electronics and Communication Engineering (ECE). 

Unlike traditional software developers or purely hardware-focused engineers, my passion lies at the intersection of both worlds. My goal is to build intelligent systems that combine hardware capability, cloud-scale software, real-time telemetry, and artificial intelligence.

### How I Position Myself:
* **Software + Embedded Systems Engineer**
* **AI & IoT Engineer / Builder**
* **Builder of Intelligent Cyber-Physical Systems (CPS)**

My portfolio communicates that I can design complete systems: from edge sensors and hardware controllers to cloud backends, machine learning pipelines, and user-facing dashboards.

---

## 2. My Engineering Journey & Specialization
My professional growth follows a clear, specialized evolution bridging physical hardware and intelligent software:

1. **Electronics & Communication Engineering:** Academic B.Tech + M.Tech foundations in digital logic, circuit design, and signal processing.
2. **IoT & Embedded Systems:** Direct physical-layer programming using microcontrollers (STM32, 8051, ESP32), hardware design tools (Vivado FPGA, Proteus, PICSimLab), and sensing networks.
3. **Full Stack Development:** Creating end-to-end cloud platforms, secure databases, APIs (Node.js, Express, FastAPI), and responsive web applications (React.js, Next.js).
4. **Artificial Intelligence & Machine Learning:** Designing data-driven applications, utilizing predictive modeling (XGBoost, Scikit-Learn), anomaly detection, and agentic AI (Gemini API, NLP pipelines).
5. **Intelligent Cyber-Physical Systems:** Unifying embedded telemetry, ML models, and full-stack control logic to automate and optimize real-world processes.

---

## 3. Professional Experience & Internships
I have built my expertise through research positions, open-source leadership, and professional internships:

* **Internet of Things (IoT) Intern at DecodeLabs (Apr 2026 - May 2026):** Prototyped environmental sensing networks (Arduino, PIR, LDR), built Python ingestion pipelines, created telemetry dashboards in Streamlit, and designed a rule-based alert suppression engine.
* **Software Developer Intern at SocialMM (Jan 2026 - Apr 2026):** Worked on Zenzhub's Learning Management System (LMS), engineering core course workflows and scalable React interface components.
* **Student Project Associate at Stanley College (Dec 2025 - Apr 2026):** Built a hybrid ML forecasting system (XGBoost R² ≈ 0.94) analyzing Hyderabad Metro GTFS operational logs to predict trip delays.
* **Web Development Intern at Zidio Development (Aug 2025 - Dec 2025):** Developed a MERN-based Excel Analytics dashboard with Three.js 2D/3D visualizations, Gemini API insights, and file parsing pipelines.
* **Open Source Contributor & Project Admin at GirlScript Summer of Code (GsSOC) (2025 & 2026):** Contributed 15+ merged pull requests in 2025 across agentic AI and MERN projects. Served as Project Admin and Mentor in 2026, managing the *CareerLyze* project and mentoring student contributors.

---

## 4. My Projects

### A. Featured Projects
These showcase my core engineering capabilities and are the main centerpiece of my portfolio:

1. **FinLens - AI Finance Tracker SaaS App**
   * **Problem:** Personal finance tracking is manual, tedious, and lacks automated OCR receipt parsing or intelligent savings advice.
   * **Solution:** A MERN SaaS platform using Gemini AI for OCR receipt parsing, bulk CSV ingestion, and Node-Cron for scheduled reports.
   * **Tech Stack:** MERN Stack, TypeScript, Gemini AI, Node-Cron, Chart.js

2. **Smart Wireless Sensor Network**
   * **Problem:** Industrial environments lack scalable real-time telemetry, leading to unpredicted hardware failures and unexplainable data anomalies.
   * **Solution:** An IoT monitoring platform utilizing MQTT telemetry, a FastAPI backend, a React NOC dashboard, and Scikit-Learn (Isolation Forest & Gradient Boosting) for edge anomaly detection.
   * **Tech Stack:** React, FastAPI, MQTT, Python, Scikit-Learn, WSN

3. **Metro Delay Prediction**
   * **Problem:** Urban metro delays are highly dynamic, cascading across downstream stations and creating passenger transit bottlenecks.
   * **Solution:** An end-to-end ML prediction model (XGBoost R² ≈ 0.94) analyzing GTFS operational schedules, served via an interactive forecasting Streamlit dashboard.
   * **Tech Stack:** XGBoost, GTFS Data, Python, Pandas, Streamlit

4. **Vibe-FrameTric**
   * **Problem:** Agriculture faces severe soil degradation and crop loss from NPK fertilizer over-application and unsustainable nutrient imbalances.
   * **Solution:** An AI agronomy advisor employing XGBoost (87.6% accuracy) and heuristic rules to assess soil overuse risks and compute sustainability indexes.
   * **Tech Stack:** XGBoost, Scikit-Learn, Python, Streamlit, Data Analysis

### B. Currently Prototyping
These reflect my ongoing research into advanced cyber-physical applications:

1. **AI Disaster Orchestrator**
   * **Problem:** Incident responders lack dynamic, unified dashboards to classify disaster severity, predict damage magnitude, and optimize emergency dispatch.
   * **Solution:** A multi-agent simulation dashboard using FastAPI, Next.js, and Random Forest severity classifiers to model routing and resource distribution.
   * **Tech Stack:** FastAPI, Next.js, Scikit-Learn, SQLite, Tailwind CSS

2. **Predictive Ambulance Green Corridor Generator**
   * **Problem:** Emergency vehicles lose critical patient transport time due to uncoordinated traffic signal controllers and urban bottlenecks.
   * **Solution:** A physical-software corridor generator integrating STM32 microcontrollers, Vivado FPGA designs, and simulated speed sensors to coordinate signals in advance.
   * **Tech Stack:** STM32, Vivado FPGA, Traffic Simulations, Route Optimization

---

## 5. Current Portfolio Structure & Navigation
My portfolio page is structured linearly to present my qualifications to recruiters:

1. **Navbar:** Sticky glassmorphic menu including links: *Home*, *About*, *Journey*, *Projects*, *Resume*, *Contact*. Mobile layout features an expanded collapsible container to prevent clipping.
2. **Hero Section:** Full-screen header displaying my name, an animated carousel typing out my core roles, a summary tagline, and social profile links (GitHub, LinkedIn, Email).
3. **About Section & Skills:** Contains my biography narrative and category-filtered skill badges, prioritizing ECE/IoT and AI skills. Includes my chronological professional experience timeline.
4. **Engineering Journey Timeline:** A vertical, alternating growth timeline detailing my hardware-to-AI evolution, complete with highlighted project badges under each phase.
5. **Featured Projects & Active Prototyping:** A grid layout presenting my four flagship projects and two active, in-progress prototypes.
6. **Resume Section:** Download/view area for my resume PDF (`/assets/Full_Stack.pdf`) highlighting key professional stats (6+ Projects, 15+ Open-Source PRs, 4+ Roles).
7. **Contact Section:** Form (integrated with EmailJS) and professional handles for discussing embedded, IoT, AI, and systems engineering opportunities.
8. **Footer:** Clean bottom bar with copyright, systems engineering footer text, quick links, and social items.

---

## 6. Design & SEO Philosophy
* **Design Aesthetic:** Professional, minimal, dark-mode biased, with modern glassmorphism and HSL-tailored cyan/purple gradients. Avoids flashy, distracting animations that compromise reading speed.
* **Typography:** Inter for clean body copy; Space Grotesk for technical, geometric headers.
* **SEO Best Practices:** Optimized title, description, and keywords targeting embedded, IoT, cyber-physical systems, ECE, and AI. Canonical tag points to `https://ahanabanerjeeportfolio.vercel.app/`.
