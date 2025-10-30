import RotatingText from '@/components/RotatingText'
import TargetCursor from '@/components/TargetCursor'
import Dither from '@/components/Dither'
import CardNav from '@/components/CardNav'
import SplitText from "@/components/SplitText";

function App() {
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
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Background effect */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
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
          className="text-9xl font-extrabold text-center"
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

        <div className="flex gap-3 justify-center items-center font-extrabold text-5xl">
          <RotatingText
            texts={['Full Stack Developer', 'Designer', 'Video Editor']}
            mainClassName="pointer-events-auto cursor-target px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-0.5 justify-center rounded-lg"
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

        <div className="py-7">
          <a
            href="#"
            className="pointer-events-auto bg-white text-black font-semibold text-2xl cursor-target p-2 border rounded m-2 hover:bg-transparent hover:text-white hover:border-white hover:cursor-none"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
