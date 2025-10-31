import RotatingText from '@/components/RotatingText'
import TargetCursor from '@/components/TargetCursor'
import Dither from '@/components/Dither'
import CardNav from '@/components/CardNav'
import SplitText from "@/components/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

function App() {

  useEffect(() => {
    AOS.init({ once: true });

    new fullpage('#fullpage', {
      autoScrolling: true,
      scrollHorizontally: true,
      navigation: true,
      anchors: ['home', 'projects', 'contact'],
      lockAnchors: false,
      recordHistory: false,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 500);
  }, []);

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#", ariaLabel: "About Company" },
        { label: "Careers", href: "#", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:example@email.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "#", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  // Social items untuk StaggeredMenu
  const socialItems = [
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Twitter", link: "https://twitter.com" },
    { label: "Instagram", link: "https://instagram.com" }
  ];

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
      
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'auto' }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <TargetCursor spinDuration={3} hideDefaultCursor={true} />
      
      {/* CardNav dengan props untuk StaggeredMenu */}
      <CardNav
        className='pointer-events-auto'
        items={items}
        menuColor="#fff" // Warna tombol menu
        // Props khusus StaggeredMenu
        position="right" // Posisi menu: 'left' atau 'right'
        colors={['#0D0716', '#170D27', '#271E37']} // Warna layer background
        socialItems={socialItems} // Social media links
        displaySocials={true} // Tampilkan social links
        displayItemNumbering={true} // Tampilkan numbering pada menu items
        menuButtonColor="#fff" // Warna tombol menu saat tertutup
        openMenuButtonColor="#000" // Warna tombol menu saat terbuka
        changeMenuColorOnOpen={true} // Ganti warna tombol saat menu terbuka
        accentColor="#5227FF" // Warna aksen untuk hover dan numbering
      />

      {/* fullPage container */}
      <div id="fullpage" className='md:pointer-events-none' style={{
        position: 'relative',
        zIndex: 100
      }}>
        {/* Section 1 */}
        <div className="section" data-anchor="home">
          <div className="flex flex-col justify-center items-center p-5 relative z-10 text-white py-40">
            <SplitText
              text="Faisal Amiruddin"
              className="lg:text-9xl sm:text-6xl text-4xl font-extrabold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <div
              className="flex gap-3 justify-center items-center font-extrabold lg:text-5xl sm:text-3xl"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <RotatingText
                texts={['Full Stack Developer', 'Designer', 'Video Editor']}
                mainClassName="pointer-events-auto cursor-target px-2 sm:px-2 md:px-3 bg-[#141E61] text-white overflow-hidden py-0.5 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div data-anchor="projects"
          className="section bg-[#111] text-white flex justify-center items-center text-4xl font-bold"
          style={{ pointerEvents: 'auto', position: 'relative', zIndex: 1 }}
        >
          Projects
        </div>

        {/* Section 3 */}
        <div data-anchor="contact" className="section text-white flex justify-center items-center text-4xl font-bold"
          style={{ pointerEvents: 'auto', position: 'relative', zIndex: 1 }}>
          Contact
        </div>
      </div>
    </div>
  )
}

export default App;