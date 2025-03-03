import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 bg-[#141413] flex items-center justify-center text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Title */}
        <h1 className="text-gray-50 text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
          Effortless Event Planning with{" "}
          <span className="text-[#1FDA8B]">EventFlow</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-300 md:text-lg">
          Seamless coordination, stunning experiences—EventFlow simplifies
          event management like never before. From planning to execution, we
          help you create unforgettable moments with ease. 🚀
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-zinc-800 hover:bg-[#1FDA8B]">
            <a href="#">Get Started</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#">Explore Features</a>
          </Button>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex -space-x-4">
            {[
              {
                image: "https://shadcnblocks.com/images/block/avatar-1.webp",
                fallback: "AB",
              },
              {
                image: "https://shadcnblocks.com/images/block/avatar-2.webp",
                fallback: "CD",
              },
              {
                image: "https://shadcnblocks.com/images/block/avatar-3.webp",
                fallback: "EF",
              },
            ].map((avatar, index) => (
              <Avatar key={index} className="h-12 w-12 border-2 border-white">
                <AvatarImage src={avatar.image} alt="User Avatar" />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div>
            <p className="text-sm italic text-gray-400">
              “Game-changer for event organizers!”
            </p>
            <p className="text-sm font-medium text-gray-300">
              John Doe, CEO @ EventPro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
