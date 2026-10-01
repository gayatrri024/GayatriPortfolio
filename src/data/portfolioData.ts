export const PERSONAL_INFO = {
  name: 'Gayatri Ashok Shinde',
  firstName: 'Gayatri',
  lastName: 'Shinde',
  headline: 'DEVOPS • CLOUD • INFRASTRUCTURE AS CODE',
  title: 'DevOps & Infrastructure as Code Engineer',
  tagline: 'Building reliable infrastructure, automated delivery pipelines, and cloud-native systems.',
  location: 'Pune, India',
  email: 'gayatrishinde024@gmail.com',
  phone: '+91 8956981923',
  linkedinUrl: 'https://www.linkedin.com/in/gayatri-shinde-078a781b8/',
  githubUrl: 'https://github.com/gayatrri024',
  portfolioUrl: 'https://thegayatriashokshinde.vercel.app/',
  resumeUrl: '/resume.pdf',
  resumeFilename: 'Gayatri_Shinde_Resume.pdf',
  googleDriveUrl: 'https://drive.google.com/file/d/1pGIodybq5VlCU8zocHPfTT1A-bQ6F608/view',
  summary:
    'DevOps & Infrastructure Engineer who genuinely enjoys the behind-the-scenes part of technology — building environments, automating repetitive work, breaking things, figuring out why they broke, and making sure they don’t break the same way twice.'
};

export const PAGE_NAMES = [
  { num: '01', title: 'HOME' },
  { num: '02', title: 'ABOUT' },
  { num: '03', title: 'EXPERIENCE' },
  { num: '04', title: 'PROJECTS' },
  { num: '05', title: 'SKILLS' },
  { num: '06', title: 'RECOGNITION' },
  { num: '07', title: 'CONTACT' }
];

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  workflow: string[];
  technologies: string[];
  highlights: string[];
  githubUrl: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'greendot',
    number: '01',
    name: 'GreenDot',
    subtitle: 'Ultimate End-to-End DevOps Project',
    description:
      'Designed and implemented an end-to-end DevOps workflow for deploying containerized microservices from source control to a Kubernetes environment.',
    workflow: [
      'SOURCE',
      'CI / TEST',
      'BUILD',
      'CONTAINER',
      'REGISTRY',
      'KUBERNETES',
      'MONITORING'
    ],
    technologies: [
      'GitHub',
      'GitHub Actions',
      'Docker',
      'Docker Hub',
      'Terraform',
      'Kubernetes',
      'Helm',
      'Prometheus',
      'Grafana'
    ],
    highlights: [
      'Automated application testing, Docker image builds, and image publishing using GitHub Actions.',
      'Provisioned and managed cloud infrastructure using Terraform following Infrastructure as Code practices for repeatable deployments.',
      'Deployed containerized services to Kubernetes with health checks, service configuration, and rolling-update strategies.',
      'Implemented Prometheus and Grafana monitoring to track application and infrastructure health.',
      'Packaged and modified a Helm chart to parameterize environment-specific values, eliminating hand-edited manifests per environment.'
    ],
    githubUrl: 'https://github.com/gayatrri024/ultimate-devops-project'
  },
  {
    id: 'pulserds',
    number: '02',
    name: 'PulseRDS',
    subtitle: 'Cost-Aware Database Operations',
    description:
      'A hands-on AWS infrastructure project focused on Infrastructure as Code, database operations, automation and cost awareness.',
    workflow: [
      'TERRAFORM IAC',
      'AWS RDS',
      'PARAM GROUP UPGRADE',
      'CONNECTIVITY AUDIT',
      'COST EXPLORER & BUDGETS',
      'PYTHON AUTOMATION'
    ],
    technologies: [
      'AWS RDS',
      'Terraform',
      'AWS Cost Explorer',
      'AWS Budgets',
      'Python',
      'Bash',
      'PostgreSQL'
    ],
    highlights: [
      'Provisioned RDS via Terraform (Infrastructure as Code) and performed a live parameter group change plus a minor version upgrade, validating connectivity and query behavior before and after.',
      'Configured AWS Cost Explorer on a multi-region deployment and AWS Budgets against the account and used several days of real spend data to identify an oversized, underutilized instance as a rightsizing opportunity, connecting infrastructure decisions to their cost impact.',
      'Wrote a Python/Bash script to automate scheduled RDS snapshots and endpoint health checks, replacing a manual operational task.'
    ],
    githubUrl: 'https://github.com/gayatrri024'
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
    company: 'Akiyam Solution Private Limited',
    role: 'DevOps & Infrastructure Engineer Intern',
    period: 'March 2026 – Present',
    location: 'Pune',
    badge: 'CURRENT ROLE',
    bullets: [
      'Managed infrastructure and deployment for GSA-SIP (GeoSim Intelligence Platform), a Kubernetes-based platform running 50+ microservices across staging and production environments.',
      'Supported AWS cloud infrastructure using OpenTofu/Terraform, Docker, Helm, and Kustomize.',
      'Maintained Jenkins CI/CD pipelines for code validation, security checks, container builds, and deployment workflows.',
      'Monitored application and infrastructure health using Prometheus and Grafana.',
      'Troubleshot infrastructure, networking, CI/CD, and Kubernetes issues using root-cause analysis.',
      'Automated recurring infrastructure and operational tasks using scripting and DevOps tooling.'
    ]
  },
  {
    number: '02',
    company: 'Amazon Development Center',
    role: 'Operations Support Associate — Consumer Abuse Prevention',
    period: 'June 2024 – March 2026',
    location: 'Pune',
    badge: '2+ YEARS AT AMAZON',
    bullets: [
      'Served as SME, supporting new hires with process training and knowledge sharing.',
      'Managed high-volume operational queues while maintaining SLA compliance and structured escalation workflows.',
      'Investigated recurring processing issues using RCA and partnered with cross-functional teams on process improvements.',
      'Used internal monitoring and operational tools to identify processing bottlenecks and operational risks.'
    ]
  },
  {
    number: '03',
    company: 'Amazon Development Center',
    role: 'Digital Devices & Alexa Support Associate',
    period: 'September 2023 – February 2024',
    location: 'Pune',
    bullets: [
      'Designed and automated weekly reports using Excel Macros and Pivot Tables, reducing manual tracking effort by 60%.',
      'Troubleshot device and software configuration issues, identifying root causes and managing escalations.'
    ]
  }
];

export interface SkillCategoryEditorial {
  num: string;
  category: string;
  skillsText: string;
}

export const SKILL_CATEGORIES: SkillCategoryEditorial[] = [
  {
    num: '01',
    category: 'INFRASTRUCTURE AS CODE',
    skillsText: 'Terraform · OpenTofu · Jenkins · GitHub Actions · GitOps / Argo CD'
  },
  {
    num: '02',
    category: 'CLOUD',
    skillsText:
      'AWS (EC2 · EKS · S3 · VPC · IAM · RDS · CloudWatch · Security Groups · Load Balancers · Cost Explorer / Budgets) · Azure (Basics) · Google Cloud Platform (GCP)'
  },
  {
    num: '03',
    category: 'CONTAINERS & ORCHESTRATION',
    skillsText: 'Docker · Kubernetes (EKS) · Kustomize · Helm'
  },
  {
    num: '04',
    category: 'NETWORKING',
    skillsText:
      'VPCs · Routing · DNS · Transit Gateways · Load Balancers · AWS Networking Fundamentals'
  },
  {
    num: '05',
    category: 'MONITORING & OBSERVABILITY',
    skillsText: 'Prometheus · Grafana · CloudWatch'
  },
  {
    num: '06',
    category: 'PROGRAMMING & SCRIPTING',
    skillsText: 'Python · Linux Shell Scripting · PowerShell · Bash · Java'
  }
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
  isWinner?: boolean;
}

export const AWARDS: AwardItem[] = [
  {
    num: '01',
    title: 'SARHAD COLLEGE PROJECT COMPETITION',
    award: '1st Place — Winner',
    org: 'TechnoFest 2025 (Project Presentation)',
    detail: '1st place at Sarhad College for architecture and technical operations of the TravVO application.'
  },
  {
    num: '02',
    title: 'AMAZON BUG-BUST',
    award: '2nd Runner-Up',
    org: 'Amazon Development Center',
    detail: "17 system bugs identified and resolved during Amazon's annual Bug-Bust event."
  },
  {
    num: '03',
    title: 'AMAZON EXCEPTIONAL TRAINER',
    award: 'Q3 Award',
    org: 'Amazon Development Center',
    detail: 'Recognized for outstanding training delivery, mentoring, and operational impact.'
  },
  {
    num: '04',
    title: 'QUALITY EXCELLENCE',
    award: '98% Quality Score',
    org: 'Amazon Benchmark',
    detail: 'Maintained a sustained 98% quality evaluation score across operational queues.'
  },
  {
    num: '05',
    title: 'VOIS GIRLSINSTEM PROGRAM',
    award: 'Selected Participant',
    org: 'Vodafone Intelligent Solutions',
    detail: 'Completed Web Development track covering responsive structure and CSS layout.'
  }
];

export const CERTIFICATIONS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    status: 'ONGOING',
    detail: 'Active preparation and practice tests ongoing (not claimed as completed).'
  },
  {
    name: 'IBM Data Science Professional Specialization',
    code: 'Completed',
    status: 'COMPLETED',
    detail: 'Professional specialization credentials via IBM / Coursera.'
  },
  {
    name: 'Amazon Skill Builder',
    code: 'Credential',
    status: 'PLATFORM CREDENTIAL',
  }
];

export const ACHIEVEMENTS = AWARDS;
