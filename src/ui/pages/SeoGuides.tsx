import { ArrowRight } from "lucide-react";
import { getDocument } from "../../core/documents";
import { PageShell, Section, FaqList } from "./parts";
import type { Faq } from "./content";

const studioHref = (id: string) => `/studio/?doc=${encodeURIComponent(id)}`;

export const howToHomeFaq: Faq[] = [
  {
    q: "Can I make a passport photo on my phone?",
    a:
      "Yes. Use the rear camera in a well-lit room, plain light wall behind you, and upload the photo here. The tool crops to the official size and can build a print sheet.",
  },
  {
    q: "Does the photo leave my device?",
    a: "No. Cropping, background work, face guides and PDF export all run in your browser.",
  },
  {
    q: "Is there a watermark?",
    a: "No. Exports are clean JPEG/PNG and print PDFs with no watermark.",
  },
];

export function HowToHomePage() {
  return (
    <PageShell
      id="how-to-home"
      eyebrow="How-to"
      title="How to make a passport photo at home"
      crumbs={[{ label: "How-to" }]}
      lede="A plain background, even light and the correct crop matter more than expensive gear. This guide walks through setup, capture and export using the free studio on this site."
    >
      <Section title="What you need" id="gear">
        <ul>
          <li>Phone or camera and a plain wall (white or off-white works best).</li>
          <li>Daylight or two lamps so your face is evenly lit without shadows.</li>
          <li>This tool in your browser — no account and no upload to a server.</li>
        </ul>
      </Section>
      <Section title="Step by step" id="steps">
        <ol>
          <li>Stand about 1–1.5 m from the wall. Face the camera directly with a neutral expression.</li>
          <li>
            Open the <a href={studioHref("general-id")}>photo studio</a>, pick your document (for example US
            passport, Schengen visa or UK passport) and add your photo.
          </li>
          <li>Align head and eyes with the on-screen guides, set the background to white if required, and export.</li>
          <li>For DIY-friendly documents, download a print sheet (4×6, A4 or 10×15) and print at actual size.</li>
        </ol>
      </Section>
      <Section title="Start now" id="start">
        <p>
          <a className="primary" href="/studio/">
            Open the studio <ArrowRight size={15} className="pg-arrow" aria-hidden="true" />
          </a>
        </p>
        <p className="pg-note">
          Need a cleaner background first? Try{" "}
          <a href="https://free-background-remover.web-free.site/?ref=passport-photo-maker">
            Free Background Remover
          </a>{" "}
          (optional, separate tool).
        </p>
      </Section>
      <FaqList items={howToHomeFaq} />
    </PageShell>
  );
}

export const mm35Faq: Faq[] = [
  {
    q: "What is 35×45 mm in pixels at 300 DPI?",
    a: "413×531 pixels at 300 DPI (7:9 aspect ratio).",
  },
  {
    q: "Which countries use 35×45 mm?",
    a:
      "Most EU/Schengen visas, UK printed passports, Rwanda, DRC and many ID cards use 35×45 mm or very close sizes. Always confirm your issuing authority.",
  },
];

export function PassportPhoto35x45Page() {
  const schengen = getDocument("schengen-visa");
  return (
    <PageShell
      id="passport-photo-35x45"
      eyebrow="Size guide"
      title="Passport photo 35×45 mm: size, pixels and documents"
      crumbs={[{ label: "35×45 mm" }]}
      lede="35×45 mm (1.38×1.77 in) is the standard visa and ID size across Europe, Africa and much of Asia. Crop to 413×531 px at 300 DPI — never stretch a square phone photo."
    >
      <Section title="Exact size" id="size">
        <p>
          Print size: <strong>35 × 45 mm</strong>. At 300 DPI that is <strong>413 × 531 px</strong>. Head height
          rules vary by document; the studio applies the numbers from each authority.
        </p>
      </Section>
      <Section title="Popular documents on this size" id="docs">
        <ul>
          <li>
            <a href="/schengen-visa-photo/">Schengen visa</a>
          </li>
          <li>
            <a href="/uk-passport-photo/">UK passport (printed)</a>
          </li>
          <li>
            <a href="/rw-passport-photo/">Rwanda passport</a>
          </li>
          <li>
            <a href="/cd-passport-photo/">DR Congo (DRC) passport</a>
          </li>
          <li>
            <a href="/35x45-photo/">Full list of 35×45 mm documents</a>
          </li>
        </ul>
      </Section>
      <Section title="Make a 35×45 mm photo" id="studio">
        <p>
          <a className="primary" href={studioHref(schengen?.id ?? "schengen-visa")}>
            Open studio for Schengen visa <ArrowRight size={15} className="pg-arrow" aria-hidden="true" />
          </a>
        </p>
      </Section>
      <FaqList items={mm35Faq} />
    </PageShell>
  );
}

export const us2x2Faq: Faq[] = [
  {
    q: "What is 2×2 inches in pixels?",
    a: "600×600 pixels at 300 DPI for a square US passport print.",
  },
  {
    q: "Is 2×2 the same as 35×45 mm?",
    a: "No. US passport photos are square; 35×45 mm is taller. Crop to the correct shape for each form.",
  },
];

export function UsPassportPhoto2x2Page() {
  return (
    <PageShell
      id="us-passport-photo-2x2"
      eyebrow="US passport"
      title="US passport photo 2×2 inches: size and requirements"
      crumbs={[{ label: "US 2×2 in" }]}
      lede="US passport and visa photos are 2×2 inches (51×51 mm) square — 600×600 px at 300 DPI. Head height must fall between 1 and 1⅜ inches from the bottom of the photo."
    >
      <Section title="Print and digital" id="spec">
        <p>
          <a href="/us-passport-photo/">US passport (printed)</a> uses 2×2 in.{" "}
          <a href="/us-passport-online-photo/">US passport (online upload)</a> needs a JPEG within the State
          Department pixel and file-size limits. The studio supports both.
        </p>
      </Section>
      <Section title="Make a 2×2 photo" id="go">
        <p>
          <a className="primary" href={studioHref("us-passport")}>
            Open US passport studio <ArrowRight size={15} className="pg-arrow" aria-hidden="true" />
          </a>
        </p>
        <p>
          See also the dedicated <a href="/2x2-photo/">2×2 inch size page</a> for other documents using this
          format.
        </p>
      </Section>
      <FaqList items={us2x2Faq} />
    </PageShell>
  );
}