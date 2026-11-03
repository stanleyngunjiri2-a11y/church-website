import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Cross,
  Heart,
  MessageCircle,
  Play,
  Quote,
  Sprout,
} from "lucide-react";

import SiteHeader from "@/components/site-header";
import CookieConsent from "@/components/cookie-consent";
import PrayerForm from "@/components/prayer-form";

const salvationSteps = [
  {
    number: "01",
    title: "Understand God's love",
    description:
      "God loves you deeply. His love is not something you have to earn. He invites you into a relationship with Him through Jesus Christ.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Believe in Jesus",
    description:
      "Jesus Christ came into the world, died for our sins and rose again. Through Him, we receive forgiveness and the promise of new life.",
    icon: Cross,
    featured: true,
  },
  {
    number: "03",
    title: "Begin a new life",
    description:
      "Following Jesus is the beginning of a journey. You can grow in faith through prayer, Scripture, fellowship and a relationship with God.",
    icon: Sprout,
  },
];

const bibleVerses = [
  {
    theme: "God's love",
    verse:
      "For God so loved the world that he gave his one and only Son.",
    reference: "John 3:16",
  },
  {
    theme: "A new beginning",
    verse:
      "If anyone is in Christ, the new creation has come: The old has gone, the new is here!",
    reference: "2 Corinthians 5:17",
  },
  {
    theme: "Salvation",
    verse:
      "Everyone who calls on the name of the Lord will be saved.",
    reference: "Romans 10:13",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-image" aria-hidden="true" />

          <div className="page-container hero-content">
            <div className="hero-label">
              <Sprout size={17} />
              <span>YOU ARE WELCOME HERE</span>
            </div>

            <h1>
              Your story isn&apos;t over.
              <br />
              There is <span>hope in Jesus.</span>
            </h1>

            <p className="hero-description">
              No matter where life has taken you, God&apos;s love is
              still reaching for you. Discover the message of Jesus
              Christ and take your first step towards a new beginning.
            </p>

            <div className="hero-actions">
              <Link href="/accept-christ" className="button button-light">
                Discover salvation <ArrowRight size={17} />
              </Link>

              <a href="#welcome" className="button button-outline">
                Learn more
              </a>
            </div>

            <div className="hero-verse">
              <Quote size={19} />
              <span>
                Come to me, all you who are weary and burdened.
                <strong> Matthew 11:28</strong>
              </span>
            </div>
          </div>

          <div className="hero-bottom">
            <span className="hero-bottom-line" />
            <span>A JOURNEY OF FAITH, HOPE AND NEW LIFE</span>
          </div>
        </section>

        {/* WELCOME */}
        <section id="welcome" className="section-padding">
          <div className="page-container welcome-grid">
            <div className="welcome-visual">
              <div
                className="welcome-photo"
                role="img"
                aria-label="A peaceful landscape representing hope and a new beginning"
              />

              <div className="photo-caption">
                <span>A MESSAGE OF HOPE</span>
                <p>There is always room for a new beginning.</p>
              </div>

              <div className="welcome-badge">
                <Heart size={22} />
                <span>YOU ARE LOVED</span>
              </div>
            </div>

            <div className="welcome-copy">
              <p className="eyebrow">A PLACE TO BEGIN AGAIN</p>

              <h2>
                You are loved.
                <br />
                You are <span>not forgotten.</span>
              </h2>

              <p>
                Perhaps you have questions about life, faith, forgiveness
                or what it means to know God. Perhaps you are simply
                looking for hope.
              </p>

              <p>
                We want you to know that the message of Jesus is a message
                of love, grace and restoration. You do not have to have
                everything figured out before you come to Him.
              </p>

              <p>
                Wherever you are in your journey, you are welcome to
                explore, ask questions and discover what a relationship
                with Jesus Christ means.
              </p>

              <Link href="/about" className="text-link">
                Learn about this ministry <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* SALVATION */}
        <section className="salvation-section section-padding">
          <div className="page-container">
            <div className="section-heading centered-heading">
              <p className="eyebrow">THE MESSAGE OF THE GOSPEL</p>

              <h2>
                Discover the gift of <span>salvation.</span>
              </h2>

              <p>
                Salvation is God&apos;s gift of grace through Jesus Christ.
                Here is a simple introduction to what it means to begin
                a relationship with Him.
              </p>
            </div>

            <div className="salvation-cards">
              {salvationSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className={`salvation-card ${
                      step.featured ? "featured-card" : ""
                    }`}
                  >
                    <span className="card-number">{step.number}</span>

                    <div className="salvation-icon">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="salvation-action">
              <Link
                href="/accept-christ"
                className="button button-primary"
              >
                I want to know Jesus <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* SCRIPTURE */}
        <section className="verses-section section-padding">
          <div className="page-container">
            <div className="section-heading">
              <p className="eyebrow">WORDS OF LIFE</p>

              <h2>
                Promises to <span>hold on to.</span>
              </h2>

              <p>
                Scripture reminds us of God&apos;s love, His promises and
                the hope we have through Jesus Christ.
              </p>
            </div>

            <div className="verses-grid">
              {bibleVerses.map((item) => (
                <article className="verse-card" key={item.reference}>
                  <BookOpen size={24} strokeWidth={1.5} />

                  <span className="verse-theme">{item.theme}</span>

                  <p>&ldquo;{item.verse}&rdquo;</p>

                  <strong>{item.reference}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="video-section section-padding">
          <div className="page-container video-grid">
            <div className="video-copy">
              <p className="eyebrow">GROW IN YOUR UNDERSTANDING</p>

              <h2>
                Take time to listen, <span>learn and grow.</span>
              </h2>

              <p>
                Understanding the Christian faith is a journey. Explore
                teachings about salvation, prayer, God&apos;s Word and what
                it means to follow Jesus in everyday life.
              </p>

              <Link
                href="/watch-and-learn"
                className="text-link"
              >
                Explore learning resources <ArrowRight size={17} />
              </Link>
            </div>

            <div
              className="video-placeholder"
              role="img"
              aria-label="Video section awaiting the ministry's selected teaching video"
            >
              <div className="video-placeholder-content">
                <div className="play-button">
                  <Play size={25} fill="currentColor" />
                </div>

                <span>WATCH AND LEARN</span>
                <p>Discover the message of Jesus</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRAYER AND RESPONSE */}
        <section id="prayer" className="prayer-section section-padding">
          <div className="page-container prayer-grid">
            <div className="prayer-copy">
              <p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>

              <h2>
                You do not have to walk this <span>journey alone.</span>
              </h2>

              <p>
                Are you ready to accept Jesus Christ? Do you have a
                question about faith, or would you like someone to pray
                with you?
              </p>

              <p>
                Share a little about how we can support you. You are
                welcome to reach out, whether you are taking your first
                step in faith or looking for someone to walk alongside you.
              </p>

              <div className="prayer-promise">
                <Heart size={23} />
                <span>
                  Your story matters. Your message deserves care and respect.
                </span>
              </div>
            </div>

            <div className="prayer-form-card">
              <div className="form-heading">
                <div className="form-icon">
                  <MessageCircle size={23} />
                </div>

                <div>
                  <h3>Let&apos;s connect</h3>
                  <p>Share your response or prayer request.</p>
                </div>
              </div>

              <PrayerForm />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section section-padding">
          <div className="page-container contact-content">
            <p className="eyebrow">YOU ARE NOT ALONE</p>

            <h2>
              We would be glad to <span>hear from you.</span>
            </h2>

            <p>
              Whether you have questions about Christianity, need prayer
              or simply want to learn more, we welcome you to get in touch.
            </p>

            <div className="contact-methods">
              <Link href="/contact" className="contact-item">
                <MessageCircle size={23} />
                <span>Contact the ministry</span>
              </Link>

              <Link href="/accept-christ" className="contact-item">
                <Heart size={23} />
                <span>Begin your faith journey</span>
              </Link>

              <Link href="/watch-and-learn" className="contact-item">
                <Play size={23} />
                <span>Explore resources</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
            <Link href="/watch-and-learn">Watch & Learn</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <nav className="footer-links" aria-label="Information">
            <h4>Information</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/cookies">Cookie Policy</Link>
            <Link href="/contact">Get in touch</Link>
          </nav>
        </div>

        <div className="page-container footer-bottom">
          <span>
            © 2026 A New Beginning. All rights reserved.
          </span>

          <span>Faith. Hope. New Life.</span>
        </div>
      </footer>

      <CookieConsent />
    </>
  );
}
