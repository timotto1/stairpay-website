import { Container } from "@/components/layout/Container";

const documents = [
  {
    name: "Leases",
    description: "Ownership %, rent, lease length, dates",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    name: "EPCs",
    description: "Rating, expiry, recommendations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    name: "Fire risk assessments",
    description: "Risk rating, actions, review dates",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
      </svg>
    ),
  },
  {
    name: "EWS1 forms",
    description: "Outcome, cladding status, sign-off",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    name: "Title deeds",
    description: "Freeholder, tenure, title number",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    name: "Valuations",
    description: "Value, date, surveyor",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: "Section 125 notices",
    description: "Price, service charges, discounts",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 12l-2 4h8l-2-4" />
      </svg>
    ),
  },
  {
    name: "Rent statements",
    description: "Payments, arrears, charge breakdown",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
        <path d="M16 3v18" />
        <path d="M8 8h4" />
        <path d="M8 12h4" />
        <path d="M8 16h4" />
      </svg>
    ),
  },
];

export function DocumentExtraction() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <Container>
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <h2 className="text-h2 text-white">
            Upload anything. Cornerstone reads everything.
          </h2>
          <p className="text-body mt-5 text-[rgba(255,255,255,0.5)]">
            Drop in the documents you already have — Cornerstone extracts the
            data that matters and structures it automatically.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {documents.map((doc) => (
            <div key={doc.name} className="text-center">
              <div className="peer inline-flex items-center justify-center w-16 h-16 rounded border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.5)] mb-4 transition-all duration-300 hover:border-[rgba(230,220,255,0.3)] hover:text-white hover:[box-shadow:0_0_8px_rgba(230,220,255,0.08)]">
                {doc.icon}
              </div>
              <h3 className="text-white text-[15px] font-medium leading-snug">
                {doc.name}
              </h3>
              <p className="text-[rgba(255,255,255,0.4)] peer-hover:text-[rgba(255,255,255,0.6)] transition-colors duration-300 text-[13px] leading-relaxed mt-1.5">
                {doc.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
