import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageContent from "../layouts/PageContent";
import Hero from "../components/Hero";
import EditorPick from "../components/EditorPick";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <PageContent>
          <EditorPick />
      </PageContent>
      <Footer />
    </div>
  );
}
