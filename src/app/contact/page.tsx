import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Heart, BookOpen } from "lucide-react";
import ContentPage from "@/components/content-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find out how to connect with A New Beginning, ask questions or share a prayer request.",
};

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="WE WOULD LOVE TO HEAR FROM YOU"
      title="You do not have to walk alone."
      description="Whether you have a question, need encouragement or would like to share a prayer request, this is a place to begin."
    >
      <div className="content-grid">
        <article className="content-card">
          <MessageCircle size={28} />
          <h3>Share your message</h3>
          <p>
            Send a response or prayer request through our website.
          </p>
          <Link href="/accept-christ" className="text-link">
            Open response form
          </Link>
        </article>

        <article className="content-card">
          <Heart size={28} />
          <h3>Explore your faith</h3>
          <p>
            Learn about the Christian message and the hope found in Jesus.
          </p>
          <Link href="/accept-christ" className="text-link">
            Learn about salvation
          </Link>
        </article>

        <article className="content-card">
          <BookOpen size={28} />
          <h3>Find encouragement</h3>
          <p>
            Explore topics that can help you grow in your understanding
            of the Bible and Christian faith.
          </p>
          <Link href="/watch-and-learn" className="text-link">
            Explore resources
          </Link>
        </article>
      </div>

      <div className="content-callout">
        <h2>Our contact channels</h2>
        <p>
          Direct WhatsApp, phone, email and social media details will
          be published here once the ministry provides its official
          contact information. We do not want to display unverified
          contact details.
        </p>
      </div>
    </ContentPage>
  );
}
