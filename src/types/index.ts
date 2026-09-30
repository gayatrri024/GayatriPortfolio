export interface ProjectDetailSections {
  problem?: string;
  approach?: string;
  architecture?: string;
  cicd?: string;
  infrastructure?: string;
  security?: string;
  observability?: string;
  result?: string;
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  problemStatement: string;
  description: string;
  technologies: string[];
  workflowSteps: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  details: ProjectDetailSections;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  summary?: string;
  responsibilities: string[];
  technologies?: string[];
  note?: string;
}

export interface SkillCategory {
  layer: string;
  title: string;
  iconName: string;
  skills: string[];
  highlight?: string;
}

export interface WorkflowStage {
  id: string;
  number: string;
  title: string;
  concept: string;
  description: string;
  keyPractices: string[];
  tools: string[];
}

export interface AchievementItem {
  title: string;
  award: string;
  details: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

export interface CertificationItem {
  name: string;
  code?: string;
  status: 'Completed' | 'Ongoing' | 'Platform Credential';
  issuer: string;
  note?: string;
}
