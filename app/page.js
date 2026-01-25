
import { FishingGames } from "./Games/FishGames";
import { HotGames } from "./Games/HotGames";
import { LiveGames } from "./Games/LiveGames";
import { PokerGames } from "./Games/PokerGames";
import { Categori } from "./Home/Categori";
import { SliderSection } from "./Home/SliderSection";
import { TopMarquee } from "./Home/TopMarquee";
import BottomNav from "./Shared/BottomNav";
import SocialSidebar from "./Shared/SideVar";

export default function Home() {
  return (
    <div className="bg ">
        <TopMarquee />
        <SliderSection />
        <Categori />
        <HotGames />
        {/* <PokerGames />
        <FishingGames />
        <LiveGames /> */}
        <div>
          <BottomNav />
          <SocialSidebar />
        </div>
    </div>
  );
}

