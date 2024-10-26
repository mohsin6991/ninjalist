
import Footer from './component/Footer';
import Header from './component/Header';
import Wel from './component/welcom';
import MenuBody from './component/menuitem';
import AboutSection from './component/Card';
import Contact from './contact/page';
import About from './about/page';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Wel />
      <AboutSection />

      <MenuBody />
      <About />
      <Contact />
    
      
      <Footer />
   

    </div>
  );
}
