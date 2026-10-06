# Gayatri Shinde — DevOps & Cloud Infrastructure Portfolio

> Cloud infrastructure-focused engineer with 2+ years of operations experience at Amazon and hands-on DevOps experience across Kubernetes, IaC, CI/CD, and observability.

**Live Portfolio:** [https://gayatrishinde-portfolio.vercel.app/](https://gayatrishinde-portfolio.vercel.app/)

---

## 🎯 Purpose

This portfolio is engineered to present Gayatri Shinde's technical qualifications and project case studies directly to technical recruiters and engineering managers within 10–20 seconds. It highlights:
- **Operations & Reliability Foundation:** 2+ years of high-volume queue troubleshooting, root-cause analysis (RCA), and automation at Amazon.
- **Hands-On Kubernetes & Microservices:** Supporting 50+ microservices on Kubernetes using OpenTofu/Terraform, Helm, Jenkins, and GitHub Actions at Akiyam Solution.
- **Infrastructure as Code & Platform Engineering:** Reproducible cloud deployments, parameterized Helm releases, and cost telemetry.

---

## 🛠️ Tech Stack

### Cloud & DevOps Technologies Featured
- **Cloud Infrastructure:** AWS (EC2, S3, VPC, IAM, RDS, EKS, CloudWatch)
- **Infrastructure as Code:** Terraform, OpenTofu
- **Containers & Orchestration:** Docker, Kubernetes, Helm, Kustomize
- **CI/CD & Delivery:** Jenkins, GitHub Actions, Argo CD
- **Observability:** Prometheus, Grafana, Grafana OnCall
- **Scripting:** Python, Bash Shell, PowerShell

### Portfolio Web Application Stack
- **Framework:** React 19, TypeScript (`strict: true`)
- **Bundler & Tooling:** Vite 6
- **Styling:** Vanilla CSS with Design Tokens & CSS Variables (Deep Navy, Electric Blue, Cyan)
- **Icons:** Lucide React
- **Continuous Integration:** GitHub Actions (`.github/workflows/ci.yml`)
- **Hosting & CDN:** Vercel

---

## 🏗️ Architecture & Deployment Workflow

The portfolio itself demonstrates clean CI/CD hygiene:

```text
Developer (Local Git Push)
       │
       ▼
GitHub Repository (main branch)
       │
       ▼
GitHub Actions CI Pipeline (Node.js 20)
├── Checkout Code
├── npm ci
└── npm run build (tsc type check + vite build)
       │
       ▼
Vercel Edge Network
       │
       ▼
Production Release (https://gayatrishinde-portfolio.vercel.app/)
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 20+
- npm 10+

### Setup & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gayatrri024/gayatri-portfolio.git
   cd gayatri-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open your browser to the local URL (typically `http://localhost:5173`).

4. **Production Build:**
   ```bash
   npm run build
   ```
   This validates TypeScript types without emitting errors (`tsc`) and generates the production bundle in `dist/`.

5. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 📂 Featured Engineering Case Studies

### 01 — GreenDot: Ultimate End-to-End DevOps Project
- **Repository:** [https://github.com/gayatrri024/ultimate-devops-project](https://github.com/gayatrri024/ultimate-devops-project)
- **Core Stack:** GitHub Actions · Docker · Docker Hub · Kubernetes · Helm · Prometheus · Grafana
- **Highlights:**
  - Automated testing, multi-stage Docker builds, and publishing to Docker Hub on every git push.
  - Packaged microservice manifests into Helm charts with environment parameterization (`values.yaml`), eliminating manual YAML drift.
  - Deployed containerized services to Kubernetes with rolling update strategies and readiness/liveness health probes.
  - Telemetry scrapers in Prometheus connected to Grafana dashboards for cluster observability.

### 02 — PulseRDS: Cost-Aware Database Operations
- **Profile / Repo:** [https://github.com/gayatrri024](https://github.com/gayatrri024)
- **Core Stack:** AWS RDS (PostgreSQL) · Terraform · AWS Cost Explorer · AWS Budgets · Python (boto3)
- **Highlights:**
  - Declaratively provisioned AWS RDS PostgreSQL with modular Terraform.
  - Performed a parameter-group configuration change and minor-version upgrade, validating connectivity and query behavior before and after the change.
  - Configured AWS Cost Explorer spend telemetry and account-level AWS Budgets alerts to track resource burn rates and identify rightsizing opportunities.
  - Python/Bash automation script for automated RDS snapshots and endpoint health checks.

---

## 👤 Author & Links

**Gayatri Ashok Shinde**  
*DevOps / Cloud Infrastructure Engineer · Pune, India*

- **Live Portfolio:** [https://gayatrishinde-portfolio.vercel.app/](https://gayatrishinde-portfolio.vercel.app/)
- **LinkedIn:** [https://www.linkedin.com/in/gayatri-shinde17/](https://www.linkedin.com/in/gayatri-shinde17/)
- **GitHub:** [https://github.com/gayatrri024](https://github.com/gayatrri024)
- **Resume:** Included locally in `public/resume/Gayatri_Shinde_Resume.pdf`
