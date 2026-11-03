import type { Metadata } from "next";
import Link from "next/link";
import { Heart, BookOpen, Sprout } from "lucide-react";
import ContentPage from "@/components/content-page";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the heart and purpose behind A New Beginning and its message of hope in Jesus Christ.",
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="GET TO KNOW US"
      title="A place for hope, faith and a new beginning."
      description="Everyone deserves the opportunity to hear about God's love and discover the hope found in Jesus Christ."
    >
      <div className="content-narrow">
        <h2>Why this website exists</h2>
        <p>
          Life can bring difficult seasons, unanswered questions and moments
          when we feel uncertain about the future. The message of Jesus offers
          hope, forgiveness and the invitation to begin again.
        </p>
        <p>
          A New Beginning exists to make that message easier to discover.
          Whether you are learning about Christianity for the first time,
          returning to faith or simply looking for encouragement, you are
          welcome to explore.
        </p>

        <h2>What matters to us</h2>
      </div>

      <div className="content-grid">
        <article className="content-card">
          <Heart size={28} />
          <h3>Love and compassion</h3>
          <p>
            Every person deserves to be treated with dignity, patience
            and kindness.
          </p>
        </article>

        <article className="content-card">
          <BookOpen size={28} />
          <h3>Faith in Scripture</h3>
          <p>
            We encourage people to explore the Bible and understand
            the message of Jesus.
          </p>
        </article>

        <article className="content-card">
          <Sprout size={28} />
          <h3>Growing together</h3>
          <p>
            A relationship with God is a journey of learning, prayer
            and spiritual growth.
          </p>
        </article>
      </div>

      <div className="content-callout">
        <h2>You are welcome here.</h2>
        <p>
          You do not need to have everything figured out before taking
          your next step in faith.
        </p>
        <Link href="/accept-christ" className="button button-primary">
          Discover salvation
        </Link>
      </div>
    </ContentPage>
  );
}
