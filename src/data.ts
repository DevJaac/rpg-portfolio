// Replace bracketed values with your real information. Empty sections are intentional.
export const profile = {
  name: '[Your name]', role: '[Your role / specialty]',
  intro: '[A short introduction: what you enjoy building, who you help, and what you want to explore next.]',
  bio: '[Tell your story here. Share your interests, approach to work, and what connects gaming and technology for you.]',
  location: '[City, country]', email: '[Your email address]',
  skills: ['[Skill one]', '[Skill two]', '[Skill three]'],
  project: { title: '[Project title]', description: '[Describe the problem, your contribution, and the outcome.]' },
  experience: { title: '[Role / organization]', date: '[Dates]', description: '[Add verified responsibilities and contributions.]' },
  education: { title: '[Qualification / institution]', date: '[Dates]', description: '[Add your field of study and relevant learning.]' },
  certification: { title: '[Certification name]', issuer: '[Issuer · year]' },
};
export const sections = [
  { id: 'home', label: 'Start', title: 'Home' },
  { id: 'about', label: 'Profile', title: 'Player profile' },
  { id: 'skills', label: 'Abilities', title: 'Abilities' },
  { id: 'projects', label: 'Quests', title: 'Quest log' },
  { id: 'experience', label: 'Journey', title: 'Journey' },
  { id: 'education', label: 'Training', title: 'Training' },
  { id: 'certifications', label: 'Achievements', title: 'Achievements' },
  { id: 'contact', label: 'Connect', title: 'Connect' },
] as const;
