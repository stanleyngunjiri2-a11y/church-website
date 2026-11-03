import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Heart, Cross, MessageCircle } from "lucide-react";
import ContentPage from "@/components/content-page";
import PrayerForm from "@/components/prayer-form";

export const metadata: Metadata = {
  title: "Accept Jesus Christ",
  description:
    "Understand the Christian message of salvation and explore how to begin a relationship with Jesus Christ.",
};

export default function AcceptChristPage() {
  return (
    <ContentPage
      eyebrow="YOUR NEXT STEP"
      title="You can begin again with Jesus."
      description="The Christian message is one of grace, forgiveness, love and the opportunity to have a new life through Jesus Christ."
    >
      <div className="content-narrow">
        <h2>Understanding salvation</h2>
        <p>
          Christianity teaches that God loves humanity and desires a
          relationship with us. Through Jesus Christ, we are offered
          forgiveness and reconciliation with God.
        </p>

        <div className="content-step">
          <Heart size={27} />
          <div>
            <h3>1. Recognise God&apos;s love</h3>
            <p>
              God&apos;s love is a gift. You do not have to earn His love
              through perfection or personal achievements.
            </p>
          </div>
        </div>

        <div className="content-step">
          <Cross size={27} />
          <div>
            <h3>2. Believe in Jesus Christ</h3>
            <p>
              Believe that Jesus died for our sins and rose again.
              Through Him, Christians receive forgiveness and new life.
            </p>
          </div>
        </div>

        <div className="content-step">
          <BookOpen size={27} />
          <div>
            <h3>3. Choose to follow Him</h3>
            <p>
              Begin learning from Scripture, praying, growing in faith
              and connecting with a welcoming Christian community.
            </p>
          </div>
        </div>

        <h2>A prayer you may use</h2>
        <p>
          Prayer is a personal conversation with God. The following
          is an example of a prayer expressing a desire to follow Jesus.
        </p>

        <blockquote className="content-quote">
          Heavenly Father, I come before You recognising my need for
          Your love and forgiveness. I believe in Jesus Christ and
          what He has done for me. Please forgive my sins, guide my
          life and help me grow in faith. I want to follow You and
          learn to live according to Your Word. Thank You for Your
          grace and for giving me hope through Jesus. Amen.
        </blockquote>

        <p>
          A prayer is not a formula or a guarantee that life will
          become easy. Christian faith is a continuing relationship
          with God.
        </p>

        <h2>Would you like someone to hear from you?</h2>
        <p>
          If you have made a decision to follow Jesus, have questions
          about faith or would like to share a prayer request, you
          can use the form below.
        </p>
      </div>

      <div className="content-form">
        <div className="form-heading">
          <div className="form-icon">
            <MessageCircle size={23} />
          </div>
          <div>
            <h2>Share your response</h2>
            <p>You are welcome to reach out.</p>
          </div>
        </div>
        <PrayerForm />
      </div>

      <div className="content-callout">
        <h2>Keep growing in faith.</h2>
        <p>
          Explore more learning resources as you continue your journey.
        </p>
        <Link href="/watch-and-learn" className="button button-primary">
          Explore resources
        </Link>
      </div>
    </ContentPage>
  );
}
