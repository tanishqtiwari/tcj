import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Fetal Development",
    description:
      "Embryology, fetal growth, organ formation and the development of the human fetus.",
    links: [
      ["Week-by-Week Development", "/fetus/development"],
      ["Embryology", "/fetus/embryology"],
      ["Organ Development", "/fetus/organs"]
    ]
  },
  {
    number: "02",
    title: "Congenital Anomalies",
    description:
      "A reference archive of documented congenital and developmental abnormalities.",
    links: [
      ["Craniofacial Anomalies", "/condition/craniofacial"],
      ["Skeletal Anomalies", "/condition/skeletal"],
      ["Neural Abnormalities", "/condition/neural"]
    ]
  },
  {
    number: "03",
    title: "Fetal Pathology",
    description:
      "Gross pathology, developmental findings, placental pathology and postmortem medicine.",
    links: [
      ["Fetal Pathology", "/pathology/fetal"],
      ["Placental Pathology", "/pathology/placenta"],
      ["Postmortem Findings", "/autopsy/fetal"]
    ]
  },
  {
    number: "04",
    title: "Medical Procedures",
    description:
      "Prenatal diagnosis, fetal intervention, neonatal surgery and historical procedures.",
    links: [
      ["Prenatal Procedures", "/procedure/prenatal"],
      ["Fetal Surgery", "/procedure/fetal-surgery"],
      ["Neonatal Surgery", "/procedure/neonatal"]
    ]
  },
  {
    number: "05",
    title: "Video Archive",
    description:
      "Educational medical footage, imaging, procedures and pathology demonstrations.",
    links: [
      ["Medical Videos", "/video"],
      ["Ultrasound Archive", "/video/ultrasound"],
      ["Procedure Archive", "/video/procedures"]
    ]
  },
  {
    number: "06",
    title: "Case Archive",
    description:
      "Individual documented cases organized as permanent medical reference records.",
    links: [
      ["Case Archive", "/case"],
      ["Recent Cases", "/case/recent"],
      ["Historical Cases", "/case/historical"]
    ]
  }
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="logo">
            MORBIDA
          </Link>

          <nav>
            <Link href="/fetus/development">Fetus</Link>
            <Link href="/condition">Conditions</Link>
            <Link href="/pathology/fetal">Pathology</Link>
            <Link href="/procedure/prenatal">Procedures</Link>
            <Link href="/video">Videos</Link>
            <Link href="/case">Cases</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-decoration left">✦</div>
          <div className="hero-decoration right">✧</div>

          <div className="hero-label">
            ARCHIVE OF FETAL &amp; NEONATAL MEDICINE
          </div>

          <h1>
            MOR<span>B</span>IDA
          </h1>

          <div className="hero-line">
            <span></span>
            <i>THE FETAL ARCHIVE</i>
            <span></span>
          </div>

          <p className="hero-description">
            A visual and textual archive devoted to fetal development,
            congenital anomalies, fetal pathology, medical procedures and
            documented cases.
          </p>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search the archive..."
              aria-label="Search the archive"
            />
          </div>
        </section>

        <section className="notice">
          <div className="notice-symbol">!</div>
          <div>
            <strong>MEDICAL ARCHIVE</strong>
            <p>
              Morbida presents medical and historical material for educational
              and reference purposes. Some sections may contain clinically
              graphic imagery and should be approached accordingly.
            </p>
          </div>
        </section>

        <section className="intro">
          <div className="section-kicker">THE COLLECTION</div>
          <h2>An archive of human development.</h2>
          <p>
            From the earliest stages of embryological development to
            congenital abnormalities, fetal pathology and neonatal medicine,
            Morbida documents the unusual, the rare and the medically
            significant.
          </p>
        </section>

        <section className="archive-grid">
          {sections.map((section) => (
            <article className="archive-card" key={section.number}>
              <div className="card-number">{section.number}</div>

              <div className="card-content">
                <h3>{section.title}</h3>

                <p>{section.description}</p>

                <div className="card-links">
                  {section.links.map(([label, href]) => (
                    <Link href={href} key={href}>
                      {label}
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="featured">
          <div className="featured-image">
            <div className="crosshair">+</div>
            <div className="specimen-label">
              PLATE No. 001
              <br />
              DEVELOPMENTAL ANATOMY
            </div>
          </div>

          <div className="featured-text">
            <div className="section-kicker">FROM THE ARCHIVE</div>

            <h2>
              Every case
              <br />
              tells a story.
            </h2>

            <p>
              Morbida is designed as a growing reference library. Each
              documented condition can have its own permanent page containing
              clinical descriptions, developmental information, images,
              procedures, pathology and references.
            </p>

            <Link className="archive-button" href="/case">
              ENTER CASE ARCHIVE →
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">MORBIDA</div>

        <div className="footer-text">
          <p>FETAL • CONGENITAL • PATHOLOGY • MEDICINE</p>
          <span>AN EDUCATIONAL MEDICAL ARCHIVE</span>
        </div>

        <div className="footer-mark">EST. 2026</div>
      </footer>
    </>
  );
}
