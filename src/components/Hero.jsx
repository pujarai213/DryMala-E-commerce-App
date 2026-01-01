import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/home.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-[88vh] text-center px-6">
        <h1 className="text-5xl md:text-9xl font-garamond font-bold text-white tracking-wide mt-20">
          DRY MALA
        </h1>
        <p className="mt-10 text-lg md:text-xl font-montserrat leading-relaxed text-white max-w-8xl">
          “Preserving Nature's Goodness through carefully dehydrated fruits and
          foods, crafted for a healthier and longer-lasting lifestyle.”{" "}
        </p>
        <div className="mt-10">
          <Link
            to="/product"
            className="inline-flex items-center gap-2 text-green-300 text-lg font-montserrat tracking-widest cursor-pointer hover:gap-3 transition-all"
          >
            Explore Our Products
            <span className="text-xl">→</span>
          </Link>
        </div>
        <div className="mt-10 flex justify-center gap-6 text-sm font-montserrat uppercase tracking-widest text-gray-100">
          <span>100% Natural</span>
          <span>Locally Sourced</span>
          <span>Hygienically Dried</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
