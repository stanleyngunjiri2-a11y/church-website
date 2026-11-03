import type { ReactNode } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CookieConsent from "@/components/cookie-consent";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function ContentPage({
  eyebrow,
  title,
  description,
  children,
}: ContentPageProps) {
  return (
    <>
      <SiteHeader />

      <main className="interior-page">
        <section className="interior-hero">
          <div className="page-container">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="interior-intro">{description}</p>
          </div>
        </section>

        <section className="page-container interior-content">
          {children}
        </section>
      </main>

      <SiteFooter />
      <CookieConsent />
    </>
  );
}
