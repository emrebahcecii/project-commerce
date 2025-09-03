export default function PageContent({ children }) {
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4">
      {children}
    </main>
  );
}
