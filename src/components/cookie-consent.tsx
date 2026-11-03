"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

type Preferences = {
  essential: boolean;
  analytics: boolean;
};

const STORAGE_KEY = "church-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function savePreferences(analyticsAccepted: boolean) {
    const preferences: Preferences = {
      essential: true,
      analytics: analyticsAccepted,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

    setVisible(false);
    setSettingsOpen(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-overlay" role="presentation">
      <section
        className="cookie-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
      >
        <div className="cookie-icon">
          <ShieldCheck size={27} />
        </div>

        <button
          className="cookie-close"
          onClick={() => savePreferences(false)}
          aria-label="Reject optional cookies and close"
        >
          <X size={20} />
        </button>

        <p className="eyebrow">YOUR PRIVACY MATTERS</p>

        <h2 id="cookie-title">A little about your privacy.</h2>

        <p className="cookie-description">
          We use essential cookies to make this website work properly.
          With your permission, we may also use analytics cookies to
          understand how visitors use our website and improve their
          experience.
        </p>

        <p className="cookie-description">
          Your personal information and prayer requests deserve care
          and respect. Please read our{" "}
          <Link href="/privacy">Privacy Policy</Link>,{" "}
          <Link href="/terms">Terms & Conditions</Link> and{" "}
          <Link href="/cookies">Cookie Policy</Link>.
        </p>

        {settingsOpen && (
          <div className="cookie-settings">
            <div className="cookie-setting-row">
              <div>
                <strong>Essential cookies</strong>
                <p>Required for the website to function.</p>
              </div>
              <span className="always-active">Always active</span>
            </div>

            <div className="cookie-setting-row">
              <div>
                <strong>Analytics cookies</strong>
                <p>Help us understand website usage.</p>
              </div>

              <label className="cookie-toggle">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
                <span>Allow analytics</span>
              </label>
            </div>

            <button
              className="button button-primary cookie-save"
              onClick={() => savePreferences(analytics)}
            >
              Save my preferences
            </button>
          </div>
        )}

        {!settingsOpen && (
          <div className="cookie-actions">
            <button
              className="button button-primary"
              onClick={() => savePreferences(true)}
            >
              Accept all
            </button>

            <button
              className="button button-outline"
              onClick={() => savePreferences(false)}
            >
              Reject optional
            </button>

            <button
              className="cookie-settings-button"
              onClick={() => setSettingsOpen(true)}
            >
              Cookie settings
            </button>
          </div>
        )}

        <p className="cookie-note">
          You can change your preferences at any time through our
          website&apos;s cookie settings.
        </p>
      </section>
    </div>
  );
}
