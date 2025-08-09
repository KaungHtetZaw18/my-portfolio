import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children, currentPath, navigate }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation currentPath={currentPath} navigate={navigate} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
