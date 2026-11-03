import type { Metadata } from "next";
import ContentPage from "@/components/content-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how A New Beginning intends to collect, use and protect information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="YOUR PRIVACY MATTERS"
      title="Privacy Policy"
      description="This page explains how information shared through this website is intended to be handled."
    >
      <article className="legal-content">
        <p className="legal-updated">Last updated: 3 November 2026</p>

        <h2>1. Introduction</h2>
        <p>
          A New Beginning respects the privacy of visitors. This policy
          explains the types of information that may be collected when
          you use this website and how that information is intended
          to be handled.
        </p>

        <h2>2. Information you may provide</h2>
        <p>
          If you use a response or prayer request form, the website may
          ask for information such as your name, phone number, email
          address and the message you choose to submit.
        </p>
        <p>
          Please do not submit passwords, financial information,
          identification numbers or information about another person
          unless it is necessary and you have permission to share it.
        </p>

        <h2>3. How information may be used</h2>
        <p>Information may be used to:</p>
        <ul>
          <li>Respond to messages and questions you submit.</li>
          <li>Respond to prayer requests where you ask for a response.</li>
          <li>Provide information or support that you request.</li>
          <li>Maintain the security and operation of the website.</li>
        </ul>

        <h2>4. Sensitive personal information</h2>
        <p>
          Prayer requests and messages may reveal personal beliefs,
          spiritual concerns or other sensitive details. Please share
          only what you are comfortable sharing. Access to submitted
          messages should be restricted to authorised people who need
          that information to respond.
        </p>

        <h2>5. Sharing information</h2>
        <p>
          Personal information should not be sold. It may be processed
          by service providers needed to operate the website, such as
          hosting, database or security providers. Any such providers
          should be selected and configured with appropriate privacy
          and security safeguards.
        </p>

        <h2>6. Cookies and analytics</h2>
        <p>
          Essential storage may be used to remember basic website
          preferences. Optional analytics should only be activated
          after the visitor has given the required consent. Read our
          Cookie Policy for more information.
        </p>

        <h2>7. Security and retention</h2>
        <p>
          Reasonable technical and organisational safeguards should
          be used to protect submitted information. Information should
          only be retained for as long as necessary for its stated
          purpose or as required by applicable law.
        </p>

        <h2>8. Your choices and rights</h2>
        <p>
          Depending on applicable law, you may have rights to request
          access to, correction of or deletion of your personal
          information, and to object to or withdraw consent for certain
          processing.
        </p>

        <h2>9. Children</h2>
        <p>
          This website is not intended to knowingly collect personal
          information from children without appropriate involvement
          and permission from a parent or guardian where required.
        </p>

        <h2>10. Contact and policy updates</h2>
        <p>
          The ministry&apos;s verified privacy contact details must be
          published here before the website launches. This policy may
          be updated when the website&apos;s services or data practices
          change.
        </p>

        <p className="content-notice">
          Publication note: This is an initial policy draft. The
          ministry&apos;s legal identity, contact details, actual service
          providers, retention periods and operational data practices
          must be confirmed before launch.
        </p>
      </article>
    </ContentPage>
  );
}
