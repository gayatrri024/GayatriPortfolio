export interface FrameMeta {
  index: number;
  filename: string;
  angleRad: number;
  angleDeg: number;
  sourceVideoFrame: number;
}

export interface AnimationManifest {
  totalFrames: number;
  centerFrame: string;
  backgroundColorHex: string;
  backgroundColorRgb: [number, number, number];
  resolution: {
    width: number;
    height: number;
  };
  deadzoneRatio: number;
  smoothingFactor: number;
  frames: FrameMeta[];
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  problem: string;
  architecture: string;
  implementation: string[];
  outcome: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  responsibilities: string[];
  note?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  highlight?: string;
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
