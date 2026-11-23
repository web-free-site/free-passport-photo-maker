export const SITE_NAME = "Free Passport Photo Maker";
export const SITE_URL = "https://free-passport-photo-maker.web-free.site";
export const SUPPORT_URL = "/support/";
export const CONTACT_URL = "/contact/";
export const HUB_URL = "https://web-free.site/?ref=passport-photo-maker";
export const UPSTREAM_NAME = "PortraitPass";
export const UPSTREAM_REPO = "https://github.com/btahir/portraitpass";
export const REPO_URL = UPSTREAM_REPO;
export const ISSUES_URL = `${UPSTREAM_REPO}/issues`;
export const LEGAL_UPDATED = "2026-09-28";
export const DISCLAIMER =
  "Free Passport Photo Maker is an independent open-source tool based on PortraitPass. It is not affiliated with or endorsed by any government or passport office. Photo rules change; check the issuing authority’s current rules.";
export const DOWNLOAD_NOTE =
  "We check sizes and positions. The issuing authority decides acceptance. Free tool, provided as is.";
export const FACE_NOTICE =
  "Face detection runs only in your browser. We never receive your photo or face data.";
export const DONATION_LINKS = {
  once: "https://buy.stripe.com/fZu14m0FO3v050PfqP3ks00",
  monthly: [
    {
      label: "$5",
      note: "Supporter",
      href: "https://buy.stripe.com/9B68wOewEaXsgJxdiH3ks01",
    },
    {
      label: "$15",
      note: "Backer",
      href: "https://buy.stripe.com/7sYbJ088g3v0gJx4Mb3ks02",
    },
    {
      label: "$50",
      note: "Sponsor",
      href: "https://buy.stripe.com/28EeVc88g5D80Kz2E33ks03",
    },
    {
      label: "$100",
      note: "Company sponsor",
      href: "https://buy.stripe.com/00w14m6088PkbpdceD3ks04",
    },
  ],
} as const;