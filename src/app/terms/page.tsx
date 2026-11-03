import type { Metadata } from "next";
import ContentPage from "@/components/content-page";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms governing the use of the A New Beginning website.",
};

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="WEBSITE INFORMATION"
      title="Terms and Conditions"
      description="Please read these terms before using the website."
    >
      <article className="legal-content">
        <p className="legal-updated">Last updated: 3 November 2026</p>

        <h2>1. About these terms</h2>
        <p>
          These terms describe the general conditions for using the
          A New Beginning website. By accessing the website, you agree
          to use it responsibly and in accordance with applicable law.
        </p>

        <h2>2. Purpose of the website</h2>
        <p>
          The website provides general Christian information,
          educational resources and a way for visitors to send messages
          or prayer requests. It is not a substitute for professional
          medical, mental health, legal or financial advice.
        </p>

        <h2>3. Respectful use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website for unlawful or harmful activities.</li>
          <li>Attempt to access systems or information without permission.</li>
          <li>Submit malicious code, spam or misleading information.</li>
          <li>Harass, threaten or abuse other people through the website.</li>
        </ul>

        <h2>4. User submissions</h2>
        <p>
          You are responsible for the content you choose to submit.
          Do not share information about another person without a
          lawful reason and appropriate permission.
        </p>

        <h2>5. Intellectual property</h2>
        <p>
          Website text, design and original materials may be protected
          by applicable intellectual property laws. You may read and
          share links to public pages for personal, non-commercial use.
          Do not reproduce protected material in a way that infringes
          the rights of its owner.
        </p>

        <h2>6. External websites</h2>
        <p>
          The website may eventually link to third-party resources.
          Those websites operate independently and have their own
          terms and privacy practices.
        </p>

        <h2>7. Availability</h2>
        <p>
          We aim to keep the website available and accurate, but
          uninterrupted access cannot be guaranteed. Content may
          change as resources are reviewed and updated.
        </p>

        <h2>8. Changes to these terms</h2>
        <p>
          These terms may be updated when necessary. The latest
          version will be published on this page.
        </p>

        <h2>9. Contact</h2>
        <p>
          Verified ministry contact details and the legal identity
          of the website operator must be added before launch.
        </p>

        <p className="content-notice">
          Publication note: This is an initial terms draft and should
          be reviewed against the ministry&apos;s actual operations and
          applicable Kenyan law before publication.
        </p>
      </article>
    </ContentPage>
  );
}
