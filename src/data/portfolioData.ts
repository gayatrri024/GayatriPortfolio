import {
  ProjectCaseStudy,
  ExperienceItem,
  SkillCategory,
  AchievementItem,
  EducationItem,
  CertificationItem
} from '../types';

export const PERSONAL_INFO = {
  name: 'Gayatri Ashok Shinde',
  firstName: 'Gayatri',
  lastName: 'Shinde',
  title: 'DevOps Engineer',
  focusAreas: 'Cloud Infrastructure • Infrastructure as Code • Kubernetes • CI/CD',
  heroTagline: 'Building and automating reliable infrastructure with AWS, Kubernetes and Infrastructure as Code.',
  summary:
    'DevOps Engineer with 2.5+ years of experience at Amazon across cloud operations, infrastructure, and technical support, with hands-on expertise in Terraform/OpenTofu, AWS, Kubernetes, Helm, Docker, Jenkins, and CI/CD automation for building and maintaining scalable infrastructure.',
  email: 'gayatrishinde024@gmail.com',
  phone: '+91 8956981923',
  location: 'Pune, Maharashtra, India',
  portfolioUrl: 'thegayatriashokshinde.vercel.app',
  githubUrl: 'https://github.com/gayatrri024',
  linkedinUrl: 'https://www.linkedin.com/in/gayatri-shinde-devops',
  resumeUrl: '/resume.pdf'
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'greendot',
    number: '01',
    title: 'GreenDot',
    subtitle: 'Ultimate End-to-End DevOps Project',
    description:
      'Designed and implemented an end-to-end DevOps workflow for deploying containerized microservices from source control to a Kubernetes environment.',
    problem:
      'Manual deployments and environment-specific configuration drifts led to inconsistent deployments, lack of observability, and risk during microservice releases.',
    architecture:
      'Git-driven CI/CD orchestration: GitHub commits trigger automated unit testing, containerization, and registry publishing via GitHub Actions. Terraform provisions the underlying VPC and Kubernetes clusters, while parameterized Helm charts control rolling releases with active Prometheus & Grafana telemetry.',
    technologies: [
      'Terraform',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Helm',
      'Prometheus',
      'Grafana',
      'GitHub'
    ],
    implementation: [
      'Automated application testing, Docker image builds, and image publishing using GitHub Actions.',
      'Provisioned and managed cloud infrastructure using Terraform following Infrastructure as Code practices for repeatable deployments.',
      'Deployed containerized services to Kubernetes with health checks, service configuration, and rolling-update strategies.',
      'Implemented Prometheus and Grafana monitoring to track application and infrastructure health.',
      'Maintained application and infrastructure configurations using Git/GitHub with version-controlled deployment workflows and documentation.',
      'Packaged and modified a Helm chart to parameterize environment-specific values, eliminating hand-edited manifests per environment.'
    ],
    outcome:
      'Achieved a fully automated, declarative deployment lifecycle from commit to production with parameterized Helm manifests, zero-downtime rolling updates, and full Prometheus observability.'
  },
  {
    id: 'pulserds',
    number: '02',
    title: 'PulseRDS',
    subtitle: 'Cost-Aware Database Operations',
    description:
      'A hands-on AWS infrastructure project focused on Infrastructure as Code, database operations, automation and cost awareness.',
    problem:
      'Database operations frequently suffer from manual maintenance risks, unmonitored spending drifts, oversized instance provisioning, and lack of automated backup routines.',
    architecture:
      'Infrastructure as Code with Terraform orchestrating AWS RDS PostgreSQL. Integrated with AWS Cost Explorer and AWS Budgets for real-time spend analytics, accompanied by custom Python and Bash automation for automated snapshots and endpoint health validations.',
    technologies: [
      'AWS RDS',
      'Terraform',
      'AWS Cost Explorer',
      'AWS Budgets',
      'Python',
      'Bash'
    ],
    implementation: [
      'Provisioned RDS using Terraform.',
      'Performed a live parameter group change and minor version upgrade.',
      'Validated connectivity and query behavior before and after the change.',
      'Configured AWS Cost Explorer for a multi-region deployment and AWS Budgets against the account.',
      'Used several days of real spend data to identify an oversized, underutilized instance as a rightsizing opportunity.',
      'Connected infrastructure decisions to their direct cost impact.',
      'Wrote Python/Bash automation for scheduled RDS snapshots and endpoint health checks, replacing a manual operational task.'
    ],
    outcome:
      'Identified and demonstrated quantifiable cost savings through database rightsizing, zero-downtime parameter maintenance, and automated snapshot management.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'akiyam',
    role: 'DevOps & Infrastructure Engineer Intern',
    company: 'Akiyam Solution Private Limited',
    location: 'Pune',
    period: 'March 2026 – Present',
    badge: 'Current Role',
    responsibilities: [
      'Managed infrastructure and deployment for GSA-SIP (GeoSim Intelligence Platform), a Kubernetes-based platform running 50+ microservices across staging and production environments.',
      'Supported AWS cloud infrastructure using OpenTofu/Terraform, Docker, Helm, and Kustomize across staging and production.',
      'Maintained Jenkins CI/CD pipelines for code validation, security checks, container builds, and deployment workflows.',
      'Monitored application and infrastructure health using Prometheus and Grafana, investigating logs, alerts, and deployment issues.',
      'Troubleshot infrastructure, networking, CI/CD, and Kubernetes issues, performing root-cause analysis and documenting resolutions.',
      'Automated recurring infrastructure and operational tasks using scripting and DevOps tooling to improve deployment and troubleshooting workflows.',
      'Used Cursor and Claude to accelerate code understanding, scripting, troubleshooting, and infrastructure tasks, while reviewing and validating outputs before implementation.'
    ],
    note: 'Engineering practiced with AI-assisted acceleration under rigorous human review and validation.'
  },
  {
    id: 'amazon-abuse',
    role: 'Operations Support Associate — Consumer Abuse Prevention',
    company: 'Amazon Development Center',
    location: 'Pune, India',
    period: 'June 2024 – March 2026',
    badge: '2+ Years at Amazon',
    responsibilities: [
      'Served as a Subject Matter Expert (SME), supporting new hires with process training, knowledge sharing, and guidance on internal workflows.',
      'Managed high-volume operational queues while maintaining SLA compliance and structured escalation workflows across global marketplaces.',
      'Investigated recurring processing issues using Root Cause Analysis (RCA) and partnered with cross-functional teams to implement long-term process improvements.',
      'Used internal monitoring and operational tools to identify processing bottlenecks and reduce high-impact operational risks.'
    ]
  },
  {
    id: 'amazon-d2as',
    role: 'Digital Devices & Alexa Support (D2AS) Associate',
    company: 'Amazon Development Center',
    location: 'Pune, India',
    period: 'September 2023 – February 2024',
    responsibilities: [
      'Designed and automated weekly reports using Excel Macros and Pivot Tables, reducing manual tracking effort by 60%.',
      'Troubleshot device and software configuration issues, identifying root causes and managing ticket lifecycle in partnership with internal teams for escalations.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Infrastructure as Code',
    iconName: 'Boxes',
    skills: ['Terraform', 'OpenTofu'],
    highlight: 'Core IaC'
  },
  {
    title: 'Containers & Orchestration',
    iconName: 'Cpu',
    skills: ['Docker', 'Kubernetes', 'Kustomize', 'Helm'],
    highlight: '50+ Microservices'
  },
  {
    title: 'Cloud Platforms',
    iconName: 'Cloud',
    skills: [
      'AWS (EC2, EKS, S3, VPC, IAM, RDS, CloudWatch, Security Groups, Load Balancers, Cost Explorer, AWS Budgets)',
      'Azure — Basics',
      'Google Cloud Platform (GCP)'
    ],
    highlight: 'Multi-Cloud Aware'
  },
  {
    title: 'CI/CD & GitOps',
    iconName: 'GitBranch',
    skills: ['Jenkins', 'GitHub Actions', 'GitOps', 'Argo CD'],
    highlight: 'Automated Pipelines'
  },
  {
    title: 'Monitoring & Observability',
    iconName: 'Activity',
    skills: ['Prometheus', 'Grafana', 'CloudWatch'],
    highlight: 'Real-time Telemetry'
  },
  {
    title: 'Cloud Networking',
    iconName: 'Network',
    skills: [
      'VPCs',
      'Routing & Subnets',
      'DNS',
      'Transit Gateways',
      'Load Balancers',
      'AWS Networking Fundamentals'
    ]
  },
  {
    title: 'Programming & Scripting',
    iconName: 'Terminal',
    skills: ['Python', 'Linux Shell Script', 'PowerShell', 'Bash', 'Java'],
    highlight: 'Automation First'
  },
  {
    title: 'Systems & Practices',
    iconName: 'ShieldCheck',
    skills: [
      'Linux',
      'Windows',
      'GitHub',
      'Agile/Scrum',
      'Cloud Security',
      'Cost Optimization'
    ]
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    num: '01',
    title: 'Reproducibility',
    desc: 'Infrastructure should be reproducible. Every resource, policy, and network route must be declared in code to eliminate drift.'
  },
  {
    num: '02',
    title: 'Automation',
    desc: 'Automation should remove repetitive work. Engineers should spend their creative intellect designing systems, not running manual commands.'
  },
  {
    num: '03',
    title: 'Observability',
    desc: 'Deployments should be observable. If a system cannot be measured through metrics, logs, and traces, its health is purely an assumption.'
  },
  {
    num: '04',
    title: 'Systematic Analysis',
    desc: 'Failures should be investigated systematically. True reliability comes from disciplined Root Cause Analysis (RCA) and permanent mitigation.'
  },
  {
    num: '05',
    title: 'Cost Awareness',
    desc: 'Cloud decisions should consider cost as well as reliability. Efficient architectures rightsize resources and prevent budgetary waste.'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: "MES's Institute of Management and Career Courses (IMCC), Pune",
    period: 'September 2024 – May 2026',
    gpa: '8.92 / 10.0'
  },
  {
    degree: 'Bachelor of Business Administration in Computer Applications (BBA-CA)',
    institution: 'Brihan Maharashtra College of Commerce (BMCC), Pune',
    period: 'August 2020 – May 2023',
    gpa: '7.75 / 10.0'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'TechnoFest 2025',
    award: 'Winner — Project Presentation (1st Place)',
    details: '1st place at Sarhad College for the architecture and technical operations of the TravVO application.',
    badge: '1st Place'
  },
  {
    title: 'Amazon Bug-Bust',
    award: '2nd Runner-Up',
    details: "Identified and resolved 17 system bugs during Amazon's annual month-long Bug-Bust event.",
    badge: 'Amazon Award'
  },
  {
    title: 'Amazon Exceptional Trainer Award',
    award: 'Q3 Recipient',
    details: 'Recognized for training delivery, new hire mentorship, and cross-functional operational impact.',
    badge: 'Leadership'
  },
  {
    title: 'Quality Excellence Award',
    award: 'Amazon Quality Benchmark',
    details: 'Achieved a 98% quality score benchmark while supporting global operational stakeholders.',
    badge: '98% Quality'
  },
  {
    title: 'VOIS GirlsInSTEM Program',
    award: 'Program Graduate',
    details: 'Selected for and successfully completed an HTML/CSS Web Development course, gaining hands-on experience building and styling responsive web pages.',
    badge: 'STEM'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    status: 'Ongoing',
    issuer: 'Amazon Web Services',
    note: 'Preparation and practice ongoing'
  },
  {
    name: 'IBM Data Science Professional Specialization',
    status: 'Completed',
    issuer: 'IBM / Coursera'
  },
  {
    name: 'Amazon Skill Builder',
    status: 'Platform Credential',
    issuer: 'Amazon Web Services',
    note: 'Continuous learning platform credential across cloud infrastructure'
  }
];
