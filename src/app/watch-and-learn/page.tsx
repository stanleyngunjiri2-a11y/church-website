import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Play, Heart } from "lucide-react";
import ContentPage from "@/components/content-page";

export const metadata: Metadata = {
  title: "Watch and Learn",
  description:
    "Explore Christian learning topics about salvation, prayer, the Bible and growing in faith.",
};

const topics = [
  {
    title: "Understanding salvation",
    description:
      "Learn about God's grace, forgiveness and the message of Jesus Christ.",
    reference: "Ephesians 2:8–9",
  },
  {
    title: "Learning to pray",
    description:
      "Discover prayer as a personal way to communicate with God.",
    reference: "Matthew 6:9–13",
  },
  {
    title: "Reading the Bible",
    description:
      "Explore how Scripture can help you understand God's character and guidance.",
    reference: "2 Timothy 3:16–17",
  },
  {
    title: "Growing in faith",
    description:
      "Learn about patience, love, forgiveness and developing a life of faith.",
    reference: "Galatians 5:22–23",
  },
];

export default function WatchAndLearnPage() {
  return (
    <ContentPage
      eyebrow="LEARN AND GROW"
      title="Take time to discover the Word."
      description="Faith grows as we learn, reflect, pray and put what we discover into practice."
    >
      <div className="content-narrow">
        <h2>Explore important foundations of faith</h2>
        <p>
          Whether you are new to Christianity or have been following
          Jesus for years, there is always something new to learn.
        </p>
      </div>

      <div className="content-grid">
        {topics.map((topic) => (
          <article className="content-card" key={topic.title}>
            <BookOpen size={27} />
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <span className="content-reference">{topic.reference}</span>
          </article>
        ))}
      </div>

      <div className="content-video">
        <div className="content-video-icon">
          <Play size={30} />
        </div>
        <div>
          <h2>Video teachings coming soon</h2>
          <p>
            We are preparing video resources to help visitors explore
            the Christian faith. This section will feature selected
            teachings once the ministry&apos;s video links are available.
          </p>
        </div>
      </div>

      <div className="content-callout">
        <Heart size={27} />
        <h2>Have questions about your faith?</h2>
        <p>
          You are welcome to share your questions or prayer request.
        </p>
        <Link href="/accept-christ" className="button button-primary">
          Share your response
        </Link>
      </div>
    </ContentPage>
  );
}
