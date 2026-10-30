import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`panel ${className}`}>{children}</div>;
}
export function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return <div className="section-heading"><span className="section-number pixel">{number}</span><div><p className="eyebrow">{subtitle}</p><h2 className="pixel">{title}</h2></div><span className="heading-rule" aria-hidden="true" /></div>;
}
export function PixelLink({ className = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`pixel-button pixel ${className}`} {...props} />;
}
export function PixelButton({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`pixel-button pixel ${className}`} {...props} />;
}
export function SkillBadge({ children }: { children: ReactNode }) { return <span className="skill-badge">{children}</span>; }
export function Placeholder() { return <span className="placeholder-label">Placeholder</span>; }
export function ProjectCard({ title, description }: { title: string; description: string }) {
  return <Panel className="project-card"><div className="project-art" aria-hidden="true"><span>＋</span><span className="pixel">QUEST SLOT 01</span></div><div className="p-6"><Placeholder/><h3>{title}</h3><p>{description}</p><span className="muted text-sm">Project details will be added in a later stage.</span></div></Panel>;
}
export function TimelineEntry({ title, date, description }: { title: string; date: string; description: string }) {
  return <div className="timeline-entry"><span className="timeline-marker" aria-hidden="true"/><div><Placeholder/><p className="timeline-date">{date}</p><h3>{title}</h3><p>{description}</p></div></div>;
}
export function PixelScene() {
  return <svg className="pixel-scene" viewBox="0 0 320 240" aria-hidden="true" shapeRendering="crispEdges"><path fill="#141c35" d="M0 0h320v240H0z"/><g fill="#8495ba"><path d="M30 32h3v3h-3zM270 28h3v3h-3zM220 57h3v3h-3zM74 70h3v3h-3zM292 99h3v3h-3zM153 27h3v3h-3z"/></g><path fill="#FFD166" d="M247 44h16v4h4v16h-4v4h-16v-4h-4V48h4z"/><path fill="#263554" d="M0 145h24v-16h20v-18h20v18h20v20h29v-36h18V92h20v21h20v37h33v-20h20v-21h20v21h20v19h23v-28h20v-16h13v135H0z"/><path fill="#364b60" d="M0 189h40v-13h45v11h49v-21h50v15h53v-16h36v20h47v55H0z"/><path fill="#7cf7b4" d="M72 181h176v8H72z"/><path fill="#416b65" d="M80 189h160v16H80z"/><path fill="#283f4e" d="M88 205h144v8H96v8h16v8h104v-8h8v-8h8z"/><path fill="#101426" d="M143 177h40v4h-40z"/><path fill="#ffd166" d="M151 135h24v8h8v24h-40v-24h8z"/><path fill="#a98451" d="M143 151h40v8h-40z"/><path fill="#f4f1de" d="M159 151h8v12h-8z"/><path fill="#7cf7b4" d="M157 92h8v8h8v8h-8v8h-8v-8h-8v-8h8z"/><path fill="#426d67" d="M106 162h8v19h-8zM98 163h8v8h-8zM114 155h8v16h-8zM214 165h8v16h-8zM206 157h8v16h-8z"/></svg>;
}
