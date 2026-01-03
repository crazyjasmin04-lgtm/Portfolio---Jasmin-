
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface AchievementItem {
  label: string;
  value: string;
  description: string;
}

export interface PortfolioImage {
  id: string;
  prompt: string;
  url: string | null;
}
