import RotatingText from '@/components/RotatingText'
import TargetCursor from '@/components/TargetCursor'
import Dither from '@/components/Dither'
import CardNav from '@/components/CardNav'
import SplitText from "@/components/SplitText";
import AButton from '@/components/AButton';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
    });

    // Tambahkan delay sedikit biar AOS tau posisi elemen React
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
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Background effect */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
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

      {/* Foreground content */}
      <div>
        <TargetCursor spinDuration={3} hideDefaultCursor={true} />
      </div>
      <CardNav
        className='pointer-events-auto'
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <div className="flex flex-col justify-center items-center p-5 relative z-10 text-white py-40 pointer-events-none">
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

        <div className="flex gap-3 justify-center items-center font-extrabold lg:text-5xl sm:text-3xl">
          <RotatingText
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="2000"
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

        {/* <AButton title="Hire Me" /> */}

      </div>
    </div>
  )
}

export default App
