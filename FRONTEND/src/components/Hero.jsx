import React from 'react';

const Hero = () => {
  return (
    <div className="w-full flex items-center md:max-w-6xl sm:max-w-xl mx-auto px-4 py-10 md:px-20 mt-6 md:mt-10">
      {/* Container using your border logic and background from @theme */}
      <div className="w-fit md:w-full mx-auto flex flex-col md:flex-row border border-foreground bg-background overflow-hidden md:h-110">
        
        {/* Left Content Side - Flex-grow to make it wider */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center items-start px-6 md:py-10 py-4 md:px-12">
          <div className="flex flex-col gap-1">
            {/* Using your outfit-bold font from index.css */}
            <h2 className="text-responsive-xlarge leading-responsive-xlarge text-foreground">
              Luxury Curtains
              <br />
              For Modern Homes
            </h2>
          {/* Using your outfit-light font from index.css */}
          <p className="text-responsive-small text-zinc-600">
            Elegant fabrics crafted for comfort and style.
          </p>
          </div>
          <button className="px-[max(12px,1.8vw)] py-[max(6px,.6vw)] bg-foreground text-background text-responsive-small uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer">
            Buy Now
          </button>
        </div>

        {/* Right Image Side - Separated by the vertical border line */}
        <div className="w-full h-full md:w-1/2 md:max-w-lg max-w-sm md:border-l border-t md:border-t-0 overflow-hidden">
          <img 
            src="/hero_image.png" 
            alt="Curtains"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;