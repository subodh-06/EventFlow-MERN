import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const EventCard = ({ image, title, date, location, description, onBook }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-800 bg-zinc-900 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt={title}
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">
           {description}
          </p>
          <div className="mx-4 flex items-center gap-4">
            <span className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </span>
            <span className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </span>
          </div>
          <div className=" mt-4 flex items-center justify-end">
          <Button onClick={onBook} className="w-full bg-gray-200 text-black  hover:bg-[#17c77a]">
          Book Now
        </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;