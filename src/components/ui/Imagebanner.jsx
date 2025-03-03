import React from "react";

const ImageBanner = () => {
  return (
    <section className="py-12 md:py-24 bg-[url('/grid.svg')] bg-[#141413]">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-800 overflow-hidden rounded-lg md:rounded-xl">
          <div className="relative w-full" style={{ aspectRatio: "75 / 16" }}>
            <img
              src="discount.avif"
              alt="Banner Image"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
