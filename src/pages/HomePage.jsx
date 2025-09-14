import Hero from "../components/Hero";
import EditorPick from "../components/EditorPick";
import BestSeller from "../components/BestSeller";
import ProductHighlight from "../components/ProductHighlight";
import NeuralUniverse from "../components/NeuralUniverse";
import FeaturedPosts from "../components/FeaturedPosts";
import PageContent from "../layouts/PageContent";

export default function HomePage() {
  return (
    <>
      <Hero />

      <PageContent>
        <EditorPick />
        <BestSeller />
      </PageContent>

      <ProductHighlight />
      <NeuralUniverse />
      <FeaturedPosts />
    </>
  );
}
