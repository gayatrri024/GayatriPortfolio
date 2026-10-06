export const PERSONAL_INFO = {
  name: 'Gayatri Ashok Shinde',
  firstName: 'Gayatri',
  lastName: 'Shinde',
  headline: 'DEVOPS • CLOUD INFRASTRUCTURE • PLATFORM RELIABILITY',
  title: 'DevOps / Cloud Infrastructure Engineer',
  tagline: 'Cloud infrastructure · Kubernetes · Automation · Platform Reliability',
  location: 'Pune, India',
  email: 'gayatrishinde024@gmail.com',
  phone: '+91 8956981923',
  linkedinUrl: 'https://www.linkedin.com/in/gayatri-shinde17/',
  githubUrl: 'https://github.com/gayatrri024',
  portfolioUrl: 'https://gayatrishinde-portfolio.vercel.app/',
  resumeUrl: '/resume/Gayatri_Shinde_Resume.pdf',
  resumeFilename: 'Gayatri_Shinde_Resume.pdf',
  googleDriveUrl: 'https://drive.google.com/file/d/1pGIodybq5VlCU8zocHPfTT1A-bQ6F608/view',
  summary:
    'Cloud and infrastructure-focused engineer with 2+ years of operations experience at Amazon and hands-on DevOps experience across Kubernetes, IaC, CI/CD and observability.'
};

export const RECRUITER_SNAPSHOT = {
  title: 'RECRUITER SNAPSHOT',
  targetRoles: 'DevOps Engineer · Cloud Engineer · Cloud Administrator · Platform Engineer',
  experience: '2+ years Amazon operations/cloud support + hands-on Kubernetes/cloud infrastructure experience',
  coreStack: 'AWS · Kubernetes · Terraform/OpenTofu · Docker · Jenkins · GitHub Actions · Helm',
  location: 'Pune, India · Open to Hybrid / Remote'
};

export const PAGE_NAMES = [
  { num: '01', title: 'HOME', href: '#hero' },
  { num: '02', title: 'ABOUT', href: '#about' },
  { num: '03', title: 'EXPERIENCE', href: '#experience' },
  { num: '04', title: 'PROJECTS', href: '#projects' },
  { num: '05', title: 'SKILLS', href: '#skills' },
  { num: '06', title: 'CREDENTIALS', href: '#recognition' },
  { num: '07', title: 'CONTACT', href: '#contact' }
];

export interface EngineeringDecision {
  topic: string;
  reason: string;
}

export interface DetailedProject {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  badge: string;
  githubUrl: string;
  hasDedicatedRepo: boolean;
  workflow: string[];
  technologies: string[];
  problem: string;
  architecture: string;
  implementation: string[];
  engineeringDecisions?: EngineeringDecision[];
  observability?: string;
  iac?: string;
  databaseOperations?: string;
  costConsiderations?: string;
  validation?: string;
  whatILearned: string;
}

export const PROJECTS: DetailedProject[] = [
  {
    id: 'greendot',
    number: '01',
    name: 'GreenDot',
    subtitle: 'Ultimate End-to-End DevOps Project',
    badge: 'KUBERNETES & CI/CD PIPELINE',
    githubUrl: 'https://github.com/gayatrri024/ultimate-devops-project',
    hasDedicatedRepo: true,
    workflow: [
      'Developer',
      'GitHub',
      'GitHub Actions',
      'Testing / Build',
      'Docker',
      'Docker Hub',
      'Kubernetes / EKS',
      'Helm',
      'Application',
      'Prometheus',
      'Grafana'
    ],
    technologies: [
      'Kubernetes',
      'Docker',
      'GitHub Actions',
      'Helm',
      'Terraform',
      'Prometheus',
      'Grafana',
      'Linux'
    ],
    problem:
      'Manual deployments across distributed microservices cause configuration drift, unrepeatable environments, and lack of runtime visibility. The goal was to build a standardized, automated end-to-end delivery pipeline that moves code from commit to a monitored Kubernetes cluster without manual intervention.',
    architecture:
      'Structured workflow connecting GitHub version control to GitHub Actions CI runners, generating immutable OCI Docker images pushed to Docker Hub, which are subsequently deployed as parameterized Helm releases onto Kubernetes with live Prometheus and Grafana telemetry.',
    implementation: [
      'Automated application testing, multi-stage Docker builds, and image publishing to Docker Hub on every git push via GitHub Actions.',
      'Packaged application manifests into Helm charts with environment parameterization (values.yaml), eliminating hardcoded YAML drifts across environments.',
      'Deployed containerized services to Kubernetes with rolling update strategies, readiness/liveness health probes, and ClusterIP service exposure.',
      'Configured Prometheus telemetry scrapers and Grafana dashboards to monitor container memory pressure, CPU usage, and pod restart counts.'
    ],
    engineeringDecisions: [
      {
        topic: 'Why Kubernetes?',
        reason:
          'Provides automated pod scheduling, self-healing, rolling zero-downtime updates, and declarative desired-state management for microservices.'
      },
      {
        topic: 'Why Helm?',
        reason:
          'Treats complex application manifests as versioned packages, allowing environment-specific values parameterization without hardcoding separate YAML files.'
      },
      {
        topic: 'Why GitHub Actions?',
        reason:
          'Native repository integration, runner flexibility, and reproducible build-and-test steps with automated secrets management.'
      },
      {
        topic: 'Why Docker?',
        reason:
          'Guarantees reproducible container runtimes across local testing, CI build runners, and the remote Kubernetes cluster.'
      },
      {
        topic: 'Health Checks',
        reason:
          'Configured Kubernetes readiness and liveness HTTP probes to prevent routing traffic to unready pods and restart crashed instances automatically.'
      },
      {
        topic: 'Monitoring',
        reason:
          'Exported application metrics to Prometheus scrapers and visualized latency, error rates, and CPU/memory pressure in Grafana dashboards.'
      }
    ],
    observability:
      'Configured Prometheus telemetry scraping for cluster resource metrics, container memory/CPU utilization, and active pod restart counts with Grafana dashboards for cluster observability.',
    whatILearned:
      'Gained hands-on proficiency in container lifecycle management, Helm chart packaging, CI/CD pipeline orchestration, and cluster debugging under Kubernetes scheduling constraints.'
  },
  {
    id: 'pulserds',
    number: '02',
    name: 'PulseRDS',
    subtitle: 'Cost-Aware Database Operations',
    badge: 'AWS IAC & COST TELEMETRY',
    githubUrl: 'https://github.com/gayatrri024',
    hasDedicatedRepo: false,
    workflow: [
      'Terraform IaC',
      'AWS RDS PostgreSQL',
      'Parameter Group',
      'Connectivity & Query Audit',
      'Cost Explorer & Budgets',
      'Python Automation'
    ],
    technologies: [
      'AWS RDS',
      'Terraform',
      'AWS Cost Explorer',
      'AWS Budgets',
      'Python (boto3)',
      'PostgreSQL',
      'Bash Shell'
    ],
    problem:
      'Cloud database instances frequently suffer from unmonitored spending drifts, manual configuration mistakes, and unvalidated parameter updates. The goal was to manage AWS RDS entirely through Infrastructure as Code while pairing operational upgrades with active cost analysis and automation.',
    architecture:
      'Modular Terraform configuration managing VPC subnets, security groups, and an AWS RDS PostgreSQL instance, integrated with AWS Cost Explorer and Budgets alerts, plus Python scripts for automated snapshots.',
    iac:
      'Declaratively provisioned an AWS RDS PostgreSQL instance with custom security groups, subnets, and parameter groups using modular Terraform.',
    databaseOperations:
      'Performed a parameter-group configuration change and minor-version upgrade, validating connectivity and query behavior before and after the change.',
    costConsiderations:
      'Configured AWS Cost Explorer spend telemetry and account-level AWS Budgets alerts to track resource burn rates and identify rightsizing opportunities on underutilized instances.',
    validation:
      'Built a lightweight Python & Bash automation script to schedule automated RDS snapshots and perform endpoint health checks, replacing manual operations.',
    implementation: [
      'Declaratively provisioned an AWS RDS PostgreSQL instance with custom security groups, subnets, and parameter groups using modular Terraform.',
      'Performed a parameter-group configuration change and minor-version upgrade, validating connectivity and query behavior before and after the change.',
      'Configured AWS Cost Explorer spend telemetry and AWS Budgets alert thresholds; analyzed real account usage to identify an oversized instance for rightsizing.',
      'Built a lightweight Python & Bash automation script to schedule automated RDS snapshots and perform endpoint health checks, replacing manual operations.'
    ],
    whatILearned:
      'Learned the operational nuances of database maintenance windows, parameter group application strategies, and the critical importance of linking cloud infrastructure choices to ongoing AWS bill impact.'
  }
];

export interface ExperienceTimelineItem {
  number: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  bullets: string[];
}

export const EXPERIENCES: ExperienceTimelineItem[] = [
  {
    number: '01',
    company: 'Akiyam Solution Pvt Ltd',
    role: 'DevOps & Infrastructure Engineer Intern',
    period: 'April 2026 – Present',
    location: 'Pune',
    badge: 'CURRENT INTERNSHIP',
    bullets: [
      'Supported Kubernetes-based staging and production environments for 50+ microservices using OpenTofu/Terraform, Helm and Kustomize.',
      'Worked with CI/CD workflows involving Jenkins and GitHub Actions across microservice-based development and deployment workflows.',
      'Worked with GitOps and observability tooling including Argo CD, Prometheus, Grafana, and Grafana OnCall where applicable.',
      'Contributed to infrastructure automation, deployment workflows and operational troubleshooting across cloud-native environments.'
    ]
  },
  {
    number: '02',
    company: 'Amazon',
    role: 'CS Associate – Cloud Support Associate',
    period: 'September 2023 – March 2026',
    location: 'Pune',
    badge: '2+ YEARS OPERATIONS & CLOUD SUPPORT',
    bullets: [
      'Automated weekly operational reporting using Excel Macros and Pivot Tables, reducing manual tracking effort by 60%.',
      'Investigated recurring operational issues using structured troubleshooting, root-cause analysis and escalation workflows.',
      'Supported complex customer/operational workflows across multiple marketplaces and issue categories while maintaining 98% quality.',
      'Recognized as Exceptional Trainer & CAP SME / New Hire Trainer; awarded Bug-Bust 2nd Runner-Up.'
    ]
  }
];

export interface CoreSkillCategory {
  category: string;
  badge: string;
  skills: string[];
}

export const HANDS_ON_SKILLS: CoreSkillCategory[] = [
  {
    category: 'AWS',
    badge: 'Cloud Platform',
    skills: ['EC2', 'S3', 'VPC', 'IAM', 'RDS', 'EKS', 'CloudWatch']
  },
  {
    category: 'Infrastructure as Code',
    badge: 'IaC & Provisioning',
    skills: ['Terraform', 'OpenTofu']
  },
  {
    category: 'Containers & Orchestration',
    badge: 'Cloud Native',
    skills: ['Docker', 'Kubernetes', 'Helm']
  },
  {
    category: 'CI/CD & GitOps',
    badge: 'Delivery Automation',
    skills: ['Jenkins', 'GitHub Actions', 'Argo CD']
  },
  {
    category: 'Observability',
    badge: 'Telemetry & Reliability',
    skills: ['Prometheus', 'Grafana', 'Grafana OnCall']
  },
  {
    category: 'Scripting',
    badge: 'Automation',
    skills: ['Python', 'Bash', 'PowerShell']
  }
];

export const FOUNDATIONAL_SKILLS = [
  'Linux (Ubuntu / Amazon Linux)',
  'Networking (VPC, Subnets, Routing, DNS)',
  'PostgreSQL / SQL Basics',
  'Git & Version Control',
  'Kustomize (Overlays & Patches)',
  'AWS Cost Explorer & Budgets'
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: "MES's Institute of Management and Career Courses (IMCC), Pune",
    period: 'September 2024 – May 2026',
    gpa: '8.92 / 10.0'
  },
  {
    degree: 'Bachelor of Business Administration — Computer Applications (BBA-CA)',
    institution: 'Brihan Maharashtra College of Commerce (BMCC), Pune',
    period: 'August 2020 – May 2023',
    gpa: '7.75 / 10.0'
  }
];

export interface AwardItem {
  num: string;
  title: string;
  award: string;
  org: string;
  detail: string;
  isStrongest?: boolean;
}

export const AWARDS: AwardItem[] = [
  {
    num: '01',
    title: 'TECHNOFEST 2025 — 1ST PLACE',
    award: '1st Place — Winner',
    org: 'Sarhad College Project Competition',
    detail: 'Awarded 1st place for architecture, delivery pipeline, and technical operations of the TravVO application.',
    isStrongest: true
  },
  {
    num: '02',
    title: 'AMAZON BUG-BUST',
    award: '2nd Runner-Up',
    org: 'Amazon Development Center',
    detail: "17 system bugs identified and resolved during Amazon's annual Bug-Bust technical troubleshooting event."
  },
  {
    num: '03',
    title: 'EXCEPTIONAL TRAINER',
    award: 'Q3 Recognition',
    org: 'Amazon Development Center',
    detail: 'Recognized for high-impact technical mentoring, workflow training delivery, and operational excellence.'
  },
  {
    num: '04',
    title: '98% QUALITY ACHIEVEMENT',
    award: '98% Quality Score',
    org: 'Amazon Operations Benchmark',
    detail: 'Maintained a sustained 98% quality audit evaluation score across high-volume operational workflows.'
  },
  {
    num: '05',
    title: 'VOIS GIRLSINSTEM PROGRAM',
    award: 'Selected Participant',
    org: 'Vodafone Intelligent Solutions',
    detail: 'Selected for intensive technical track covering web development, responsive architecture, and system design.'
  }
];

export const CERTIFICATIONS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    status: 'IN PROGRESS',
    detail: 'Active preparation and practice tests ongoing (not claimed as completed).'
  },
  {
    name: 'IBM Data Science Professional Specialization',
    code: 'Specialization Credential',
    status: 'COMPLETED',
    detail: 'Professional specialization credentials via IBM / Coursera.'
  }
];

export const ACHIEVEMENTS = AWARDS;

