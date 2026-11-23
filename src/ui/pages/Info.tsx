import { ArrowRight } from "lucide-react";
import { DOCUMENTS } from "../../core/documents";
import { DISCLAIMER, DONATION_LINKS, HUB_URL, ISSUES_URL, SITE_NAME, UPSTREAM_NAME, UPSTREAM_REPO } from "../../config";
import { PageShell, Section } from "./parts";
import { documentsByCountry } from "./DocumentsIndex";

export function AboutPage() {
  const countries = documentsByCountry().length;
  const atHome = DOCUMENTS.filter((d) => d.diy !== "no").length;
  return (
    <PageShell
      id="about"
      eyebrow="About"
      title="A free passport photo tool that stays on your device."
      crumbs={[{ label: "About" }]}
      lede={`${SITE_NAME} sizes and frames passport, visa and ID photos in your browser, shows every measurement, and prints a sheet for about 40¢ at a photo counter. It is free, has no account or watermark, and never receives your photo.`}
    >
      <Section title="What it does" id="does">
        <p>
          You pick a document, add a photo, and the studio draws the head and eye positions the
          document asks for on top of it. It frames the photo, checks measurements such as head
          height, eye line, centring and resolution, and exports a single photo, a print sheet, or a
          digital file at the exact pixel size and file size the upload form wants.
        </p>
        <p>
          It never redraws your face. The only editing on offer is an optional background
          replacement, which stays off for documents whose rules forbid altered photos.
        </p>
      </Section>
      <Section title="Where the numbers come from" id="data">
        <p>
          The dataset covers {DOCUMENTS.length} documents from {countries} countries and regions;{" "}
          {atHome} can be prepared at home and the rest cannot. Each number comes from the issuing
          authority’s own page, and each page shows the source and the date we last checked it.
          Start from the <a href="/documents/">document index</a>.
        </p>
      </Section>
      <Section title="What it cannot promise" id="limits">
        <p>
          We check sizes and positions; the issuing authority decides acceptance. Expression,
          lighting, glasses, how recent the photo is and many other rules need your own eyes, so the
          studio lists them as things for you to check. Photo rules change, and some authorities,
          such as Canada and Germany, only accept photos from a photographer or provider they name.
          Those documents are marked as not possible at home.
        </p>
        <p className="pg-note">{DISCLAIMER}</p>
      </Section>
      <Section title="Privacy" id="privacy">
        <p>
          Your photo never leaves your device. Face detection and every export run in your browser.
          The <a href="/privacy/">privacy page</a> covers what the host logs, why there are no
          cookies or analytics, and what a saved project file contains.
        </p>
      </Section>
      <Section title="Open source and credits" id="open">
        <p>
          This site is built on{" "}
          <a href={UPSTREAM_REPO} target="_blank" rel="noreferrer">
            {UPSTREAM_NAME}
          </a>{" "}
          by btahir (MIT license). Face guides use MediaPipe; print sheets use pdf-lib. Found a wrong
          number? <a href={ISSUES_URL} target="_blank" rel="noreferrer">Open an issue</a> on the upstream
          repository.
        </p>
        <p>
          Part of the{" "}
          <a href={HUB_URL}>web-free.site</a> collection of browser-based tools. See the{" "}
          <a href="/terms/">terms</a>, <a href="/accessibility/">accessibility statement</a>, and{" "}
          <a href="/contact/">contact</a>.
        </p>
      </Section>
    </PageShell>
  );
}

export function SupportPage() {
  return (
    <PageShell
      id="support"
      eyebrow="Tips are optional"
      title="Tips keep the upstream project free."
      crumbs={[{ label: "Support" }]}
      lede="PortraitPass, the upstream project this site is based on, is free and open source. Tips are optional and go to the original maintainer."
    >
      <div className="support-main">
        <a className="primary" href={DONATION_LINKS.once} target="_blank" rel="noreferrer">
          Leave a one-time tip <ArrowRight size={15} className="pg-arrow" aria-hidden="true" />
        </a>
      </div>
      <p>Choose your own amount. Tips are always optional.</p>
      <div className="pg-tiers">
        <h2>Monthly tips</h2>
        <div className="support-tiers">
          {DONATION_LINKS.monthly.map((tier) => (
            <a className="support-tier" key={tier.label} href={tier.href} target="_blank" rel="noreferrer">
              <span>{tier.note}</span>
              <strong>
                {tier.label}
                <small style={{ fontSize: 14 }}> / mo</small>
              </strong>
              <span>
                Tip monthly <ArrowRight size={12} className="pg-arrow" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
      <p>
        Tips support the maker’s open-source work. They do not unlock features and have no effect
        on any photo. Stripe handles payments under its own privacy policy, and your photos never go
        there. See the <a href="/privacy/">privacy page</a>.
      </p>
    </PageShell>
  );
}

export function ContactPage() {
  return (
    <PageShell
      id="contact"
      eyebrow="Contact"
      title="Contact"
      crumbs={[{ label: "Contact" }]}
      lede="Questions about a document size, a bug, or accessibility? Use the links below. Your photos are never sent to us."
    >
      <p>
        Report dataset or tool issues on{" "}
        <a href={ISSUES_URL} target="_blank" rel="noreferrer">
          GitHub Issues
        </a>{" "}
        for the upstream PortraitPass project.
      </p>
      <p>
        Browse more utilities on{" "}
        <a href={HUB_URL}>web-free.site</a>. For legal notices see <a href="/privacy/">privacy</a> and{" "}
        <a href="/terms/">terms</a>.
      </p>
    </PageShell>
  );
}
