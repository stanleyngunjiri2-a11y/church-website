import Link from "next/link";
import { Sprout } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand footer-logo">
            <span className="brand-icon">
              <Sprout size={23} />
            </span>
            <span className="brand-name">
              A New Beginning
              <small>Faith. Hope. New Life.</small>
            </span>
          </Link>

          <p>
            Sharing the message of God&apos;s love, the hope of salvation
            and the promise of new life through Jesus Christ.
          </p>
        </div>

        <nav className="footer-links" aria-label="Explore">
          <h4>Explore</h4>
          <Link href="/about">About</Link>
          <Link href="/accept-christ">Accept Christ</Link>
          <Link href="/watch-and-learn">Watch &amp; Learn</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <nav className="footer-links" aria-label="Information">
          <h4>Information</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </nav>
      </div>

      <div className="page-container footer-bottom">
        <span>© 2026 A New Beginning. All rights reserved.</span>
        <span>Faith. Hope. New Life.</span>
      </div>
    </footer>
  );
}
