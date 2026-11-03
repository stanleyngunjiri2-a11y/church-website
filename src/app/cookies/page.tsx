import type { Metadata } from "next";
import ContentPage from "@/components/content-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Understand how this website uses essential browser storage and optional analytics preferences.",
};

export default function CookiesPage() {
  return (
    <ContentPage
      eyebrow="YOUR CHOICES"
      title="Cookie Policy"
      description="Learn about the small pieces of browser storage that may be used when you visit this website."
    >
      <article className="legal-content">
        <p className="legal-updated">Last updated: 3 November 2026</p>

        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small pieces of information stored by a website
          in your browser. Similar technologies, such as local storage,
          can also remember preferences on your device.
        </p>

        <h2>2. Essential storage</h2>
        <p>
          Essential storage may be used to remember your cookie
          preferences and support basic website functionality.
          These functions are necessary for the website to operate
          as intended.
        </p>

        <h2>3. Optional analytics</h2>
        <p>
          Analytics tools may help the website understand general
          visitor activity and improve its content. Optional analytics
          should only be activated after the required consent has
          been provided.
        </p>

        <h2>4. Managing your preferences</h2>
        <p>
          When the cookie notice appears, you can accept optional
          analytics, reject optional analytics or open the settings
          to choose your preferences.
        </p>
        <p>
          You can also clear this website&apos;s stored data through your
          browser settings. Doing so may cause the cookie notice to
          appear again.
        </p>

        <h2>5. Third-party services</h2>
        <p>
          If analytics or embedded video services are added, their
          providers may use their own cookies or similar technologies.
          The policy should be updated to identify the actual services
          before they are enabled.
        </p>

        <h2>6. Changes</h2>
        <p>
          This policy may be updated when the website introduces
          new features or changes the technologies it uses.
        </p>

        <p className="content-notice">
          Publication note: The website currently includes a preference
          interface. Actual analytics scripts and third-party tracking
          have not yet been connected. This policy must be updated
          to reflect the final implementation.
        </p>
      </article>
    </ContentPage>
  );
}
