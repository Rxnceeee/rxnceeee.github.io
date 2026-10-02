import { useRef, useState, type ReactNode } from 'react'
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Github, GraduationCap, Mail, MapPin, Menu, Phone, Trophy, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { experience, projects, skills, softSkills } from '@/data'

const links = [['about', 'About'], ['experience', 'Experience'], ['skills', 'Skills'], ['projects', 'Projects'], ['education', 'Education'], ['achievements', 'Awards'], ['contact', 'Contact']]
const container = 'mx-auto w-full max-w-6xl px-6 sm:px-10'
function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="border-t py-20 sm:py-24"><div className={container}><p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>{children}</div></section>
}
function Tags({ items }: { items: string[] }) { return <div className="flex flex-wrap gap-2">{items.map(item => <Badge key={item} variant="secondary" className="max-w-full whitespace-normal rounded-md px-2.5 py-1 font-mono text-xs font-normal">{item}</Badge>)}</div> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  return <>
    <a href="#main" className="fixed top-2 left-2 z-50 -translate-y-24 rounded-md bg-primary p-3 text-primary-foreground focus:translate-y-0">Skip to content</a>
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-lg" onKeyDown={event => { if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus() } }}>
      <div className={`${container} flex h-20 items-center justify-between gap-4`}>
        <a href="#hero" className="font-mono text-lg font-medium tracking-tight text-primary" aria-label="Rance Rios home">~/rkr.dev</a>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">{links.map(([id, label]) => <a key={id} href={`#${id}`} className="text-xs text-muted-foreground transition-colors hover:text-primary">{label}</a>)}</nav>
        <Button asChild size="sm" className="hidden lg:inline-flex"><a href="mailto:rancekayronrios@gmail.com">Let’s talk <ArrowUpRight /></a></Button>
        <Button ref={menuButton} variant="outline" size="icon" className="lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      <nav id="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen} className="border-t px-6 py-4 lg:hidden">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-primary">{label}</a>)}</nav>
    </header>
    <main id="main">
      <section id="hero" className="relative overflow-hidden py-24 sm:py-32">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
        <div className={`${container} relative`}>
          <Badge variant="outline" className="mb-8 gap-2 rounded-full border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-xs font-normal text-primary"><span className="size-1.5 rounded-full bg-primary" />Open to full-time roles & extended internships</Badge>
          <h1 className="max-w-4xl text-5xl leading-[1.08] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">Rance Kayron<br /><span className="text-primary">L. Rios</span><span className="text-primary/40">.</span></h1>
          <p className="mt-6 font-mono text-sm tracking-wide text-muted-foreground sm:text-base">Software Developer · Back-end & Full-stack</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">Building secure APIs, database-driven applications, and business systems that turn everyday problems into working software.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#projects">View projects <ArrowDown /></a></Button><Button asChild variant="outline" size="lg"><a href="mailto:rancekayronrios@gmail.com"><Mail />Contact me</a></Button></div>
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t pt-7 font-mono text-xs text-muted-foreground"><span><span className="mb-2 block text-xl text-foreground">4th year</span>BS Information Technology</span><span><span className="mb-2 block text-xl text-foreground">FMC Research</span>Intern → Volunteer contributor</span><span><span className="mb-2 block text-xl text-foreground">2 awards</span>Programming & databases</span></div>
        </div>
      </section>
      <Section id="about" eyebrow="01 / About" title="Building with purpose. Learning with intent.">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-base leading-8 text-muted-foreground"><p>I’m a <strong className="font-medium text-foreground">4th Year Information Technology student</strong> with hands-on experience in back-end development, REST API design, database management, and full-stack business system development gained through my ongoing internship at FMC Research Solutions Inc.</p><p>I build and document production systems end-to-end, including secure authentication, inventory management, and enterprise reporting tools. I’m committed to team collaboration, discipline, and continuous growth.</p><p>I’m seeking a full-time role or extended internship to further apply and grow these skills on real-world projects.</p></div>
          <Card className="h-fit"><CardContent className="space-y-7 pt-6">{[[MapPin, 'Based in', 'Quezon City, Philippines 1411'], [GraduationCap, 'Education', 'BS Information Technology · Expected June 2027'], [BriefcaseBusiness, 'Currently', 'Volunteer IT team member at FMC Research Solutions Inc.']].map(([Icon, label, value]) => { const ItemIcon = Icon as typeof MapPin; return <div key={String(label)} className="flex items-start gap-4"><ItemIcon className="mt-1 size-5 shrink-0 text-primary" /><div><p className="mb-1 font-mono text-xs text-muted-foreground">{String(label)}</p><p className="text-sm leading-6">{String(value)}</p></div></div> })}</CardContent></Card>
        </div>
      </Section>
      <Section id="experience" eyebrow="02 / Experience" title="Real systems. Hands-on experience.">
        <Card><CardHeader className="gap-4 sm:flex sm:flex-row sm:justify-between"><div><Badge variant="outline" className="mb-4 text-primary">Internship & ongoing volunteering</Badge><CardTitle className="text-xl">Software Developer Intern</CardTitle><p className="mt-2 text-sm text-muted-foreground">FMC Research Solutions Inc. · Mandaluyong City, Philippines</p></div><div className="text-sm sm:text-right"><p>May 2026 – Present</p><p className="mt-2 text-xs text-muted-foreground">OJT: May – Aug 2026; volunteering since</p></div></CardHeader><CardContent><ul className="space-y-4 pl-5 text-sm leading-7 text-muted-foreground marker:text-primary list-disc">{experience.map(item => <li key={item}>{item}</li>)}</ul></CardContent></Card>
      </Section>
      <Section id="skills" eyebrow="03 / Technical skills" title="The tools behind the work.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skills.map(group => <Card key={group.title}><CardHeader><CardTitle className="text-sm">{group.title}</CardTitle></CardHeader><CardContent><Tags items={group.items} /></CardContent></Card>)}</div>
        <div className="mt-6 rounded-xl border border-dashed p-6"><div className="mb-3 flex flex-wrap items-center gap-3"><h3 className="font-medium">Currently exploring</h3><Badge variant="outline" className="text-muted-foreground">Basic experience</Badge></div><Tags items={['Apache Airflow', 'Linux']} /><p className="mt-3 text-sm text-muted-foreground">Limited hands-on exposure; continuing to build familiarity.</p></div>
        <div className="mt-8"><h3 className="mb-4 text-sm font-medium">How I work</h3><Tags items={softSkills} /></div>
      </Section>
      <Section id="projects" eyebrow="04 / Selected projects" title="From idea to implementation.">
        <div className="grid gap-5 md:grid-cols-2">{projects.map((project, index) => <Card key={project.title} className="transition-colors hover:border-primary/40"><CardHeader><div className="mb-3 flex items-center justify-between font-mono text-xs text-muted-foreground"><span>{project.category}</span><span className="ml-3 text-primary/60">0{index + 1}</span></div><CardTitle className="text-xl leading-7">{project.title}</CardTitle></CardHeader><CardContent className="flex flex-1 flex-col gap-5"><p className="flex-1 text-sm leading-7 text-muted-foreground">{project.description}</p><Tags items={project.tech} /><div className="mt-1 border-t pt-4">{project.href ? <Button asChild variant="outline" size="sm"><a href={project.href} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight /></a></Button> : <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground"><Code2 className="size-4" />{project.internal ? 'Internal company system' : 'Academic project'}</span>}</div></CardContent></Card>)}</div>
      </Section>
      <Section id="education" eyebrow="05 / Education" title="A foundation for what’s next.">
        <div className="grid gap-5 md:grid-cols-2"><Card><CardHeader><GraduationCap className="mb-3 size-6 text-primary" /><CardTitle className="text-xl">BS Information Technology</CardTitle></CardHeader><CardContent className="space-y-3 text-sm leading-6 text-muted-foreground"><p>Datamex College of Saint Adeline<br />Valenzuela Branch, Metro Manila</p><Badge variant="outline">Expected June 2027</Badge></CardContent></Card><Card><CardHeader><GraduationCap className="mb-3 size-6 text-primary" /><CardTitle className="text-xl">TVL – Programming Strand</CardTitle></CardHeader><CardContent className="space-y-3 text-sm leading-6 text-muted-foreground"><p>Panghulo National High School<br />SY 2016 – 2022</p><Badge variant="outline" className="text-primary">With High Honors</Badge></CardContent></Card></div>
      </Section>
      <Section id="achievements" eyebrow="06 / Awards & achievements" title="A little competitive spirit.">
        <div className="grid gap-5 md:grid-cols-2">{[['Champion · Gold', 'C++ Structured Programming League (SPL)', 'text-amber-300'], ['2nd Place · Bronze Medal', 'Database using MySQL CLI', 'text-orange-300']].map(([award, title, color]) => <Card key={title}><CardHeader><Trophy className={`mb-3 size-6 ${color}`} /><p className={`font-mono text-xs ${color}`}>{award}</p><CardTitle className="text-lg leading-7">{title}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">2nd Year · March 2025</CardContent></Card>)}</div>
      </Section>
      <Section id="contact" eyebrow="07 / Contact" title="Let’s build something useful.">
        <p className="mb-8 max-w-xl text-base leading-8 text-muted-foreground">Have a full-time opportunity, an extended internship, or a project in mind? I’d love to hear from you.</p>
        <div className="flex flex-col items-start gap-5"><a href="mailto:rancekayronrios@gmail.com" className="flex max-w-full items-center gap-3 text-sm text-primary hover:underline sm:text-xl"><Mail className="size-5 shrink-0" /><span className="break-all">rancekayronrios@gmail.com</span><ArrowUpRight className="size-4 shrink-0" /></a><a href="tel:+639636213463" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"><Phone className="size-4" />0963-621-3463</a><a href="https://github.com/Rxnceeee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"><Github className="size-4" />github.com/Rxnceeee <ArrowUpRight className="size-4" /></a><p className="flex items-center gap-3 text-sm text-muted-foreground"><MapPin className="size-4" />Quezon City, Philippines 1411</p></div>
      </Section>
    </main>
    <footer className="border-t py-8"><div className={`${container} flex flex-wrap justify-between gap-4 font-mono text-xs text-muted-foreground`}><p>© {new Date().getFullYear()} Rance Kayron L. Rios</p><p>Built with React, shadcn/ui & Tailwind CSS</p></div></footer>
  </>
}
