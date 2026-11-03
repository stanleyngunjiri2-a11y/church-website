"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Accept Christ", href: "/accept-christ" },
  { label: "Watch & Learn", href: "/watch-and-learn" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="A New Beginning home">
          <span className="brand-icon">
            <Leaf size={23} strokeWidth={1.6} />
          </span>
          <span className="brand-name">
            A New Beginning
            <small>Faith. Hope. New Life.</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/accept-christ" className="header-cta">
          Begin Your Journey
        </Link>

        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/accept-christ"
            className="mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Begin Your Journey
          </Link>
        </nav>
      )}
    </header>
  );
}
