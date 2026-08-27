import { AppHeader } from "./components/AppHeader";
import { FeatureCard } from "./components/FeatureCard";
export default function Home() {
  return (
    <main>
      <AppHeader />
      <FeatureCard
        title="Object Detection"
        description="ตรวจจับวัตถุจากรูปภาพด้วย AI"
      />
      <FeatureCard
        title="AI Chat"
        description="สนทนากับ Generative AI"
      />
      <button>
        Start Detection
      </button>
    </main>
  );
}
