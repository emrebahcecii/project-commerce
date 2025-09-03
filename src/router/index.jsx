import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageContent from "../layouts/PageContent";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent>
        <h1 className="text-xl font-bold">Home Page</h1>
      </PageContent>
      <Footer />
    </div>
  );
}
