import Navbar from "../component/utilities/navbar";
import HeroSection from "../component/utilities/HeroSection";
function App() {
  return (
    <div className="flex flex-col w-screen h-screen flex-1">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
