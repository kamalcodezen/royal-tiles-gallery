import Banner from "@/components/home/Banner";
import FeatureTiles from "@/components/home/FeatureTiles";
import TopMarquee from "@/components/home/Marquee";
import CollectionTiles from "@/components/home/CollectionTiles";
import WhyChoose from "@/components/home/WhyChoose";


export default function Home() {
  return (
    <>
      <Banner />
      <TopMarquee />
      <FeatureTiles />
      <CollectionTiles />
      <WhyChoose />
    </>
  )
}
