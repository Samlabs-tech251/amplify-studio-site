import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";
import { selectedWork } from "../data/siteData";

type Project = (typeof selectedWork)[number];
const filters = ["all", "websites", "flyers", "branding"] as const;
const filterLabels = { all: "All", websites: "Websites", flyers: "Flyers", branding: "Branding" } as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>(() => {
    if (typeof window === "undefined") return "all";
    const requested = new URLSearchParams(window.location.search).get("filter");
    return filters.includes(requested as (typeof filters)[number]) ? requested as (typeof filters)[number] : "all";
  });
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const sheetStartY = useRef(0);
  const visibleProjects = filter === "all" ? selectedWork : selectedWork.filter((project) => project.filter === filter);

  useEffect(() => {
    document.body.classList.toggle("case-study-open", Boolean(activeProject));
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveProject(null); };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.classList.remove("case-study-open"); document.removeEventListener("keydown", onKeyDown); };
  }, [activeProject]);

  const updateFilter = (value: (typeof filters)[number]) => {
    setFilter(value);
    window.history.replaceState(null, "", value === "all" ? window.location.pathname : `${window.location.pathname}?filter=${value}`);
  };

  return (
    <div id="portfolio" className="page inner-page portfolio-page">
      <PageIntro kicker="Selected work / 05 pieces" title={<>Proof, not<br /><em>promises.</em></>} description="A few ways we’ve helped small businesses show up with more clarity, confidence and character. Each piece starts with the same question: what should someone understand or feel within the first few seconds?" />
      <div className="portfolio-filters" role="tablist" aria-label="Filter portfolio projects">{filters.map((value) => <button type="button" role="tab" aria-selected={filter === value} className={filter === value ? "is-active" : ""} onClick={() => updateFilter(value)} key={value}>{filterLabels[value]}</button>)}</div>
      <section className="portfolio-grid motion-section" aria-label="Selected Amplify Studio work">
        {visibleProjects.map((project) => (
          <button className="portfolio-card portfolio-card-button" data-reveal type="button" onClick={() => setActiveProject(project)} key={project.title}>
            <div className="portfolio-image-wrap"><img src={project.image} alt={project.title} loading="lazy" /><span className="portfolio-view">View <ArrowUpRight size={15} /></span></div>
            <figcaption><div><h2>{project.title}</h2><p>{project.result}</p></div><span className="portfolio-caption-mark">✳</span></figcaption>
          </button>
        ))}
      </section>
      <div className="portfolio-note" data-reveal><p>Website, caption and video samples are shared directly — message us to see more. We can also talk through the kind of work your own business needs next.</p><a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer">Ask for more <ArrowUpRight size={15} /></a></div>
      {activeProject && <CaseStudySheet project={activeProject} onClose={() => setActiveProject(null)} sheetStartY={sheetStartY} />}
    </div>
  );
}

function CaseStudySheet({ project, onClose, sheetStartY }: { project: Project; onClose: () => void; sheetStartY: React.MutableRefObject<number> }) {
  return <div className="case-study-backdrop" role="presentation" onClick={onClose}>
    <aside className="case-study-sheet" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onClick={(event) => event.stopPropagation()} onPointerDown={(event) => { sheetStartY.current = event.clientY; }} onPointerUp={(event) => { if (event.clientY - sheetStartY.current > 90) onClose(); }}>
      <div className="case-study-handle" aria-hidden="true" /><button className="case-study-close" type="button" aria-label="Close case study" onClick={onClose}><X size={20} /></button>
      <div className="case-study-content">
        <div className="case-study-hero-image"><img src={project.image} alt={project.title} /></div>
        <p className="eyebrow">{project.category} / Case study</p><h2 id="case-study-title">{project.title}</h2><p className="case-study-result">{project.result}</p>
        <div className="case-study-copy"><CaseStudyBlock title="Challenge" body={project.challenge} /><CaseStudyBlock title="Approach" body={project.approach} /><CaseStudyBlock title="What we delivered" body={project.deliverables} /></div>
        <BeforeAfterSlider beforeAfter={project.beforeAfter} />
        <div className="case-study-actions">{project.liveUrl && <a className="button button-quiet" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight size={15} /></a>}<a className="button button-primary" href={whatsappUrl(`Hi, I'd like to start something like ${project.title}`)} target="_blank" rel="noreferrer">Start something like this <ArrowUpRight size={15} /></a></div>
      </div>
    </aside>
  </div>;
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return <section className="case-study-block"><p className="eyebrow">{title}</p><p>{body}</p></section>;
}

function BeforeAfterSlider({ beforeAfter }: { beforeAfter: { before: string; after: string } | null }) {
  const [position, setPosition] = useState(50);
  if (!beforeAfter) return null;
  return <div className="before-after" aria-label="Before and after comparison"><img src={beforeAfter.after} alt="After" /><div className="before-after-before" style={{ width: `${position}%` }}><img src={beforeAfter.before} alt="Before" /></div><label className="before-after-range"><span className="sr-only">Compare before and after</span><input type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} /></label><span className="before-after-label before-label">Before</span><span className="before-after-label after-label">After</span><ChevronDown className="before-after-grip" size={19} /> </div>;
}
