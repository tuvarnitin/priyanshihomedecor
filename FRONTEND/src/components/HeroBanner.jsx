import React from 'react';

const HeroBanner = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Container using your border logic and background from @theme */}
      <div className="flex flex-col md:flex-row border border-black bg-background overflow-hidden md:h-[380px]">
        
        {/* Left Content Side - Flex-grow to make it wider */}
        <div className="flex-[1.4] flex flex-col justify-center items-start px-12 py-10 md:px-20">
          <div className="space-y-0">
            {/* Using your outfit-bold font from index.css */}
            <h2 className="text-2xl md:text-3xl font-[outfit-bold] uppercase tracking-tight text-foreground leading-tight">
              Luxury Curtains
            </h2>
            <h2 className="text-2xl md:text-3xl font-[outfit-bold] uppercase tracking-tight text-foreground leading-tight">
              For Modern Homes
            </h2>
          </div>
          
          {/* Using your outfit-light font from index.css */}
          <p className="mt-2 text-base md:text-lg font-[outfit-light] text-zinc-600">
            Elegant fabrics crafted for comfort and style.
          </p>

          <button className="mt-8 px-10 py-3 bg-foreground text-background font-[outfit-bold] text-sm uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer">
            Buy Now
          </button>
        </div>

        {/* Right Image Side - Separated by the vertical border line */}
        <div className="flex-1 border-t border-zinc-400 md:border-t-0 md:border-l border-zinc-400 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop" 
            alt="Curtains"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroBanner;