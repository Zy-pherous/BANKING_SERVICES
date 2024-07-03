import Hero from "../components/Hero";
import SecurityContent from "../components/SecurityContent";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[9px] px-0 pb-[114.3px] box-border gap-[24px] leading-[normal] tracking-[normal]">
      <Hero />
      <section className="w-[1396px] flex flex-row items-start justify-end py-0 px-[60px] box-border max-w-full lg:pl-[30px] lg:pr-[30px] lg:box-border">
        <SecurityContent />
      </section>
    </div>
  );
};

export default AboutUs;
