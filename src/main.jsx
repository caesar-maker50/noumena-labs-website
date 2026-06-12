import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Compass,
  ClipboardCheck,
  Handshake,
  Layers3,
  Mail,
  MessageCircle,
  Network,
  Search,
  ShieldCheck
} from "lucide-react";
import "./styles.css";

const LITEPAPER_URL = "https://www.noumena-labs.org/lightpaper.html";
const BOOK_CALL_URL = "https://cal.com/";
const SHIP_IT_URL = "https://enspiral.github.io/forge/";

const problems = [
  {
    title: "You're moving fast.",
    body: "The cracks are starting to show."
  },
  {
    title: "Your organisation looks capable on the surface.",
    body: "It feels hollow underneath."
  },
  {
    title: "The conversations that matter aren't happening.",
    body: "Everyone's talking to AI instead of each other."
  },
  {
    title: "No one can tell anymore which insights are theirs and which belong to the model."
  },
  {
    title: "Your leaders are better at generating options than choosing between them."
  },
  {
    title: "You're accumulating tool dependencies faster than you can evaluate their long-term risk."
  },
  {
    title: "Your best people are questioning whether this is still the right place to do meaningful work."
  }
];

const offerings = [
  {
    title: "Organisational attunement",
    category: "Advisory & coaching",
    icon: Compass,
    body:
      "When AI lands in a fractured organisation, it amplifies the fractures. We do the culture, governance, and organisation design work that determines whether AI makes you stronger or more brittle.",
    tags: ["Decision rights", "Feedback loops", "Leadership alignment", "Governance design"]
  },
  {
    title: "AI adoption strategy",
    category: "Strategy & analysis",
    icon: ShieldCheck,
    body:
      "Most AI strategies stop at workflows. We help decide what to automate, what to keep human, which tools to trust, and where judgement must stay sovereign.",
    tags: ["Readiness assessment", "Build vs. buy", "Tool evaluation", "Adoption roadmap"]
  },
  {
    title: "Innovation infrastructure",
    category: "Programmes & advisory",
    icon: Network,
    body:
      "Agentic AI generates more ideas than most teams can evaluate. We redesign how your organisation filters, tests, prioritises, and ships what matters.",
    tags: ["Prioritisation", "Evaluation systems", "Cohort programmes", "Stakeholder alignment"]
  },
  {
    title: "Human × AI tooling",
    category: "Assessment & advisory",
    icon: Layers3,
    body:
      "Most teams choose tools by marketing and ease. We assess what fits your context, avoids costly lock-in, and strengthens collaboration.",
    tags: ["Fit analysis", "Lock-in risk", "Human-in-the-loop design", "Procurement support"]
  }
];

const steps = [
  {
    title: "30-minute conversation",
    body:
      "We talk about what's actually going on. No pitch deck. If we can help, we'll tell you how. If we can't, we'll point you somewhere useful.",
    icon: MessageCircle
  },
  {
    title: "Diagnosis",
    body:
      "We spend time understanding your specific situation before recommending anything. For many organisations this starts with an AI Work Readiness Diagnostic.",
    icon: Search
  },
  {
    title: "A scoped engagement",
    body:
      "We work on a defined problem with a defined outcome, bringing in the right people from our network for what is needed.",
    icon: ClipboardCheck
  },
  {
    title: "You own what we build",
    body: "The goal is to leave your organisation more capable, not more dependent.",
    icon: Handshake
  }
];

const team = [
  {
    name: "Kate Beecroft",
    role: "Organisation design, strategy & relational practice",
    image: "/team/kate.jpg",
    linkedin: "https://www.linkedin.com/in/kate-beecroft-a3a20955/"
  },
  {
    name: "Susan Basterfield",
    role: "Systems transformation & organisational change",
    image: "/team/susan.jpg",
    linkedin: "https://www.linkedin.com/in/susan-basterfield-ab8104/"
  },
  {
    name: "Joshua Vial",
    role: "AI training and software development",
    image: "/team/joshua.jpg",
    linkedin: "https://www.linkedin.com/in/joshuavial/"
  },
  {
    name: "Charlie Fisher",
    role: "Long-horizon collective governance",
    image: "/team/charlie.jpg",
    linkedin: "https://www.linkedin.com/in/fishercharlie/"
  },
  {
    name: "Juniper",
    role: "AI infrastructure & multi-agent systems",
    image: "/team/juniper.jpg",
    linkedin: "https://www.linkedin.com/in/juniperbevensee/"
  },
  {
    name: "Rowan Yeoman",
    role: "Agentic innovation",
    image: "/team/rowan.jpg",
    linkedin: "https://www.linkedin.com/in/rowanyeoman/?originalSubdomain=nz"
  }
];

const audiences = [
  {
    title: "Technology leadership teams",
    body:
      "Adopting AI fast and feeling the strain on coherence and culture as the surface capability of the organisation outruns what's underneath."
  },
  {
    title: "Founders & executives",
    body: "For leaders whose management complexity just increased dramatically."
  },
  {
    title: "Organisations under pressure",
    body:
      "For organisations where collective decision-making was already fragile and AI is accelerating that."
  },
  {
    title: "Individuals & small teams",
    body:
      "For people who want practical AI skills and real workflows without another SaaS subscription to manage."
  }
];

function Pill({ index, children }) {
  return <span className="pill">{index ? `${index} · ${children}` : children}</span>;
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.94 8.9H3.72v10.36h3.22V8.9ZM5.33 7.48c1.03 0 1.68-.68 1.68-1.54-.02-.88-.65-1.55-1.66-1.55-1 0-1.66.67-1.66 1.55 0 .86.64 1.54 1.62 1.54h.02ZM20.3 13.32c0-3.18-1.7-4.66-3.97-4.66-1.83 0-2.65 1.01-3.1 1.72V8.9H10c.04.97 0 10.36 0 10.36h3.22v-5.79c0-.31.02-.62.11-.84.23-.62.76-1.26 1.65-1.26 1.16 0 1.63.89 1.63 2.19v5.7h3.22l.47-5.94Z"
      />
    </svg>
  );
}

function AbstractVisual({ compact = false }) {
  return (
    <div className={compact ? "abstractVisual compact" : "abstractVisual"} aria-label="Abstract Human × AI collaboration visual" role="img">
      <div className="horizon" />
      <div className="glass slabOne" />
      <div className="glass slabTwo" />
      <div className="bridge bridgeOne" />
      <div className="bridge bridgeTwo" />
      <div className="orb mainOrb" />
      <div className="orb smallOrb" />
      <div className="networkLine lineOne" />
      <div className="networkLine lineTwo" />
      <span className="node nodeOne" />
      <span className="node nodeTwo" />
      <span className="node nodeThree" />
    </div>
  );
}

function useRevealOnce(threshold = 0.22) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    if (section.id && window.location.hash === `#${section.id}`) {
      setIsVisible(true);
      return undefined;
    }

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.86 && rect.bottom > window.innerHeight * 0.08) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

function Nav() {
  return (
    <header className="siteHeader">
      <div className="navWrap">
        <a href="#top" className="brand" aria-label="Noumena Labs home">
          <span>Noumena Labs</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#thesis">Thesis</a>
          <a href="#problem">Problem</a>
          <a href="#offerings">Offerings</a>
          <a href="#approach">How we work</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navCta" href={LITEPAPER_URL}>Read the Litepaper</a>
      </div>
    </header>
  );
}

function Hero() {
  const scrollToOfferings = (event) => {
    event.preventDefault();
    document.getElementById("offerings")?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", "#offerings");
  };

  return (
    <section id="top" className="hero">
      <Nav />
      <div className="heroInner">
        <div className="heroCopy">
          <Pill>Human × AI collaboration</Pill>
          <h1>
            <span className="heroPrimary">AI is infiltrating your organisation.</span>
            <span className="heroSecondary">Are you keeping up?</span>
          </h1>
          <p className="heroText">
            Information is abundant. Speed is a foregone conclusion. What is left is <em>discernment</em>: to know what matters, to sense what is true, to decide with instinct and integrity under conditions of radical uncertainty.
          </p>
          <div className="heroActions">
            <a className="button primary" href={LITEPAPER_URL}>Read the Litepaper <ArrowRight size={18} /></a>
            <a className="button secondary" href="#offerings" onClick={scrollToOfferings}>See Offerings</a>
          </div>
        </div>
      </div>
      <div className="heroBandWrap">
        <div className="heroVisualCard heroBand">
          <img
            className="heroImage"
            src="/hero/collaboration-silhouette.png"
            alt="Silhouetted collaborators gathered in warm sunset light"
          />
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  const [thesisRef, isRevealed] = useRevealOnce();

  return (
    <section id="thesis" ref={thesisRef} className={isRevealed ? "section thesis revealSection isRevealed" : "section thesis revealSection"}>
      <div className="sectionCenter">
        <h2><span>Coherence holds</span> as <span>intelligence accelerates.</span></h2>
        <p>
          Noumena Labs helps organisations redesign work, decision-making, leadership and judgment for the AI era so that coherence holds as intelligence accelerates.
        </p>
      </div>
      <div id="litepaper" className="quotePanel">
        <div className="thesisMarker">
          <span className="thesisIndex">01 · THESIS</span>
          <span className="thesisRule" aria-hidden="true" />
        </div>
        <p>In a landscape being rapidly flattened by AI, humanness is the moat and coherence is the bridge.</p>
      </div>
    </section>
  );
}

function Problem() {
  const [problemRef, isActive] = useRevealOnce(0.18);
  const [activeSignal, setActiveSignal] = useState(0);

  useEffect(() => {
    const section = problemRef.current;
    if (!section) return undefined;

    const signals = Array.from(section.querySelectorAll(".diagnosticSignal"));
    if (!signals.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visible[0]) {
          setActiveSignal(Number(visible[0].target.dataset.signalIndex));
        }
      },
      { rootMargin: "-34% 0px -48% 0px", threshold: 0 }
    );

    signals.forEach((signal) => observer.observe(signal));
    return () => observer.disconnect();
  }, [problemRef]);

  return (
    <section id="problem" ref={problemRef} className={isActive ? "section problem problemActive revealSection isRevealed" : "section problem revealSection"}>
      <div className="problemIntro">
        <Pill index="02">The problem</Pill>
        <h2>AI is a <span>pressure test</span> on how your organisation <span>thinks</span>, <span>decides</span>, and <span>holds together</span>.</h2>
      </div>
      <div className="diagnosticSignals">
        {problems.map(({ title, body }, index) => {
          const signalState = index === activeSignal ? "active" : index < activeSignal ? "past" : "upcoming";

          return (
            <article
              className={`diagnosticSignal ${signalState}`}
              data-signal-index={index}
              key={title}
              style={{ "--signal-delay": `${index * 70}ms` }}
            >
              <span className="diagnosticNumber">{String(index + 1).padStart(2, "0")}</span>
              <div className="diagnosticCopy">
                <h3>{title}</h3>
                {body ? <p>{body}</p> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Offerings() {
  const [offeringsRef, isRevealed] = useRevealOnce();

  return (
    <section id="offerings" ref={offeringsRef} className={isRevealed ? "section offerings sectionCloudGradient section--organic-glow revealSection isRevealed" : "section offerings sectionCloudGradient section--organic-glow revealSection"}>
      <div className="sectionIntro wide">
        <Pill index="03">Offerings</Pill>
        <h2>Four ways to work with us.</h2>
        <p>Named, scoped engagements. We work on a defined problem with a defined outcome, not open-ended retainers.</p>
      </div>
      <div className="offeringGrid">
        {offerings.map(({ title, category, icon: Icon, body, tags }) => (
          <article className="offering" key={title} tabIndex="0">
            <div className="offeringTop">
              <span className="category">{category}</span>
              <span className="softIcon"><Icon size={22} /></span>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="tags" aria-label={`${title} capabilities`}>
              {tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
      <div className="programmeSection">
        <div className="programmeIntro">
          <Pill>Programmes</Pill>
        </div>
      <div className="programGrid">
        <article className="programmeCard">
          <Pill>Programme</Pill>
          <h3>Ship It</h3>
          <p>Our 8-week programme for moving projects from stuck to shipped across open, organisation, and stakeholder cohorts.</p>
          <a className="button tertiary programmeButton" href={SHIP_IT_URL}>Read more</a>
        </article>
        <article className="programmeCard course">
          <Pill>Course · 6 weeks</Pill>
          <h3>AI Level Up Course</h3>
          <p>
            A hands-on programme for individuals and teams moving from browser prompts to practical AI workflows. Taught by Joshua Vial. No coding experience required.
          </p>
          <div className="tags">
            {["Email & calendar automation", "AI workflow design", "Tool connections", "Security & data sovereignty"].map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>
      </div>
      </div>
    </section>
  );
}

function Approach() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (window.location.hash === "#approach") {
      setIsActive(true);
      return undefined;
    }

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > window.innerHeight * 0.08) {
      setIsActive(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.32 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="approach" ref={sectionRef} className={isActive ? "section approach approachActive revealSection isRevealed" : "section approach revealSection"}>
      <div className="sectionIntro processIntro">
        <Pill index="04">How we work</Pill>
        <h2>What happens when you reach out.</h2>
      </div>
      <div className="processTimeline" aria-label="How we work process">
        <div className="processLine" aria-hidden="true">
          <span />
        </div>
        {steps.map(({ title, body }, index) => (
          <article className="processStep" key={title} style={{ "--step-delay": `${420 + index * 420}ms` }}>
            <div className="processNode">
              <span className="processIcon">
                <span className="stepNumber">{String(index + 1).padStart(2, "0")}</span>
              </span>
            </div>
            <div className="processText">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const [teamRef, isRevealed] = useRevealOnce();

  return (
    <section id="team" ref={teamRef} className={isRevealed ? "section team revealSection isRevealed" : "section team revealSection"}>
      <div className="sectionIntro wide">
        <Pill index="05">The team</Pill>
        <h2>We've spent decades building and advising networked organisations and technology companies.</h2>
        <p>We work at the edge of what's becoming mainstream, not after it has.</p>
      </div>
      <div className="teamGrid">
        {team.map(({ name, role, image, linkedin }) => (
          <article className="person" key={name}>
            <img className="avatar" src={image} alt={`Portrait of ${name}`} loading="eager" />
            <div>
              <h3>{name}</h3>
              <p>{role}</p>
            </div>
            <a
              className="linkedinLink"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
            >
              <LinkedInMark />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Audience() {
  const [open, setOpen] = useState(0);
  const [audienceRef, isRevealed] = useRevealOnce();

  return (
    <section ref={audienceRef} className={isRevealed ? "section audience revealSection isRevealed" : "section audience revealSection"}>
      <div className="audienceHeader">
        <Pill index="06">Who this is for</Pill>
        <h2>For teams adopting AI under pressure.</h2>
        <p>
          We work with people holding several of these problems at once: something isn't working in how their people relate and decide, and they're adopting AI fast.
        </p>
      </div>
      <div className="audienceLayout">
        <div className="accordion">
          {audiences.map(({ title, body }, index) => {
            const isOpen = open === index;
            return (
              <article className={isOpen ? "audienceItem open" : "audienceItem"} key={title}>
                <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span>{title}</span>
                  <span className="audienceChevron" aria-hidden="true">
                    {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </span>
                </button>
                <div className="audienceBody">
                  <div>
                    <p>{body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="audienceVisualCard" aria-label="Interactive abstract Human and AI network" role="img">
          <div className="aiFieldOrb orbA" />
          <div className="aiFieldOrb orbB" />
          <div className="aiFieldOrb orbC" />
          <div className="aiFieldRing ringA" />
          <div className="aiFieldRing ringB" />
          <svg className="aiFieldNetwork" viewBox="0 0 520 520" aria-hidden="true">
            <path d="M78 322 C154 206 226 190 306 236 S430 276 462 148" />
            <path d="M116 142 C188 216 208 324 318 336 S420 386 466 298" />
            <path d="M92 404 C176 374 214 286 286 278 S374 210 436 232" />
            <circle cx="78" cy="322" r="7" />
            <circle cx="306" cy="236" r="8" />
            <circle cx="462" cy="148" r="6" />
            <circle cx="116" cy="142" r="7" />
            <circle cx="318" cy="336" r="9" />
            <circle cx="466" cy="298" r="7" />
            <circle cx="92" cy="404" r="6" />
            <circle cx="286" cy="278" r="8" />
            <circle cx="436" cy="232" r="7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [contactRef, isRevealed] = useRevealOnce();

  return (
    <section id="contact" ref={contactRef} className={isRevealed ? "section contactSection revealSection isRevealed" : "section contactSection revealSection"}>
      <div className="contactPanel">
        <div>
          <Pill index="07">Contact</Pill>
          <h2>Talk to us.</h2>
          <p>
            If you're holding any of these problems at once: something isn't working in how your people relate and decide, and you're adopting AI fast. We'd like to hear from you.
          </p>
        </div>
        <div className="contactActions">
          <ul>
            <li><Check size={17} />30 minutes. No pitch deck.</li>
            <li><Check size={17} />If we can help, we'll tell you how.</li>
            <li><Check size={17} />If we can't, we'll point you somewhere useful.</li>
          </ul>
          <div className="buttonRow">
            <a className="button secondary" href="mailto:hello@noumena-labs.org"><Mail size={18} />Email hello@noumena-labs.org</a>
            <a className="button tertiary" href={LITEPAPER_URL}>Read the Litepaper</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerMinimal">
        <div>
          <a href="#top" className="brand footerBrand" aria-label="Noumena Labs home">
            <span>Noumena Labs</span>
          </a>
        </div>
        <div>
          <a href="mailto:hello@noumena-labs.org">hello@noumena-labs.org</a>
        </div>
      </div>
      <div className="footerBottom">
        <span>© Noumena Labs.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Hero />
      <main>
        <Thesis />
        <Problem />
        <Offerings />
        <Approach />
        <Team />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
