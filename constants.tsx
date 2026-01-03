
import { ExperienceItem, SkillItem, AchievementItem, PortfolioImage } from './types';

export interface EnhancedSkillItem extends SkillItem {
  description: string;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Idhaya Engineering College for Women (IECW), Chinnasalem",
    role: "Assistant Professor & Training and Placement Officer",
    period: "Aug 2025 – Present",
    description: [
      "Teaching Principles of Management for undergraduate students with a focus on practical and industry-oriented learning.",
      "Planning and delivering lectures on management functions, leadership, motivation, communication, and decision-making.",
      "Coordinating training programs, internships, and placement activities for students.",
      "Acting as a bridge between industry partners and academic departments.",
      "Organizing career guidance sessions, employability training, and placement drives.",
      "Mentoring students for professional readiness and soft skill development.",
      "Supporting institutional goals through industry collaboration and student outcome improvement."
    ]
  },
  {
    company: "R4 Consulting India",
    role: "Lead Manager / HR Executive",
    period: "2022 – 2025",
    description: [
      "Closed 100+ technical and non-technical positions across diverse industries.",
      "Designed internship and industrial training programs for skill development.",
      "Improved campus engagement by 45% through targeted outreach and workshops.",
      "Streamlined HR documentation and onboarding processes for better efficiency.",
      "Developed talent pipelines and retention strategies for high-growth sectors."
    ]
  },
  {
    company: "T.I.M.E Institute, Cuddalore",
    role: "Business Developer",
    period: "2021 (7 Months)",
    description: [
      "Promoted educational and training programs to prospective students.",
      "Conducted seminars and counseling sessions for career guidance.",
      "Achieved 20% increase in student enrollment through strategic marketing."
    ]
  }
];

export const SKILLS: EnhancedSkillItem[] = [
  { 
    name: "Talent Acquisition & Campus Hiring", 
    icon: "🤝",
    description: "Expertise in sourcing, interviewing, and closing 100+ positions across IT and manufacturing sectors, specializing in building diverse talent pipelines."
  },
  { 
    name: "Training & Placement Coordination", 
    icon: "🎓",
    description: "Architecting employability frameworks that connect final-year students with Fortune 500 companies and high-growth startups."
  },
  { 
    name: "Principles of Management Teaching", 
    icon: "📖",
    description: "Simplifying complex organizational theories into actionable insights for undergraduate students, focusing on leadership and ethics."
  },
  { 
    name: "Leadership & Team Development", 
    icon: "🚀",
    description: "Mentoring cross-functional teams and student bodies to achieve collective goals through situational leadership and empathy."
  },
  { 
    name: "Employee Engagement", 
    icon: "💬",
    description: "Designing corporate cultures that prioritize mental well-being and professional growth, resulting in significantly higher retention rates."
  },
  { 
    name: "HR Operations & Compliance", 
    icon: "📋",
    description: "Managing full-cycle HR operations including payroll, statutory compliance, and performance management systems."
  },
  { 
    name: "Business Development Strategy", 
    icon: "📈",
    description: "Identifying market opportunities for educational services and driving enrollment growth through strategic outreach."
  },
  { 
    name: "Student Mentoring & Career Guidance", 
    icon: "🧘",
    description: "Providing one-on-one counseling to help students align their academic choices with their long-term career aspirations."
  },
  { 
    name: "Communication & Presentation Skills", 
    icon: "🎤",
    description: "Commanding auditoriums and boardrooms with high-impact presentations that influence decision-makers and inspire students."
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { label: "Recruitments", value: "100+", description: "Successful technical & non-technical closures" },
  { label: "Campus Engagement", value: "45%", description: "Increase in industry-academia interaction" },
  { label: "HR Process Speed", value: "30%", description: "Reduction in turnaround time" },
  { label: "Enrollment Growth", value: "20%", description: "Boost in educational program reach" }
];

export const IMAGE_CONFIGS: PortfolioImage[] = [
  {
    id: "hero",
    prompt: "A breathtaking professional cinematic portrait of a confident Indian woman in a navy blue blazer, standing in a high-tech modern glass office overlooking a campus. Abstract light streaks, soft gold bokeh, professional aura, 4k.",
    url: null
  },
  {
    id: "teaching",
    prompt: "A cinematic shot of an Indian woman professor standing by a digital screen explaining 'Strategic Management' to a group of engaged diverse female college students in a futuristic classroom.",
    url: null
  },
  {
    id: "placement",
    prompt: "A busy campus recruitment drive scene with professional banners, an Indian woman executive shaking hands with a corporate recruiter, students in professional attire in background.",
    url: null
  },
  {
    id: "corporate",
    prompt: "An elegant Indian HR executive leading a boardroom meeting, sleek mahogany table, glass walls, navy and teal color palette, ultra-modern corporate aesthetics.",
    url: null
  },
  {
    id: "skills_header",
    prompt: "A symbolic high-quality illustration of human connection and management: gears turning into mortarboard caps, hands shaking, and light bulbs glowing. Teal and gold accents, white background.",
    url: null
  }
];
