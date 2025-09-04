import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageContent from "../layouts/PageContent";
import Hero from "../components/Hero";
import EditorPick from "../components/EditorPick";
import BestSeller from "../components/BestSeller";
import ProductHighlight from "../components/ProductHighlight";
import NeuralUniverse from "../components/NeuralUniverse";
import FeaturedPosts from "../components/FeaturedPosts";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />

      <PageContent>
          <EditorPick />
          <BestSeller/>
      </PageContent>

      <ProductHighlight/>
      <NeuralUniverse/>
      <FeaturedPosts/>

      <Footer />
    </div>
  );
}
