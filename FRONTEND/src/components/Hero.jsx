import React from 'react';

const Hero = () => {
  return (
    <div className="w-full md:max-w-5xl sm:max-w-xl mx-auto px-4 py-10 md:px-20 pt-20">
      {/* Container using your border logic and background from @theme */}
      <div className="w-full flex flex-col md:flex-row border border-foreground bg-background overflow-hidden md:h-95">
        
        {/* Left Content Side - Flex-grow to make it wider */}
        <div className="w-full md:w-1/2 space-y-3 flex flex-col justify-center items-start px-6 md:py-10 py-4 md:px-12">
          <div className="">
            {/* Using your outfit-bold font from index.css */}
            <h2 className="text-responsive-medium leading-responsive-large text-foreground">
              Luxury Curtains
            </h2>
            <h2 className="text-responsive-medium leading-responsive-large text-foreground">
              For Modern Homes
            </h2>
          </div>
          
          {/* Using your outfit-light font from index.css */}
          <p className="text-responsive-small text-zinc-600">
            Elegant fabrics crafted for comfort and style.
          </p>

          <button className="px-[max(12px,1.8vw)] py-[max(6px,.6vw)] bg-foreground text-background text-responsive-small uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer">
            Buy Now
          </button>
        </div>

        {/* Right Image Side - Separated by the vertical border line */}
        <div className="md:w-1/2 w-full md:border-t-0 md:border-l overflow-hidden">
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