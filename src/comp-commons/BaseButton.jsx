import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const BaseButton = ({ type, label, colour, className, icon }) => {
  // Conditional styling
  let style;
  if (colour === "white" || colour === "transparent") {
    style = "text-primary border-primary hover:text-white ";
  } else if (colour === "red") {
    style = "bg-primary text-white";
  }

  return (
    <div>
      <button
        className={`h-10 px-5 rounded-md border hover:bg-[#DB2721A8] hover:border-[#DB2721A8] drop-shadow-md ${style} ${
          className ?? ""
        }`}
        type={type ?? ""}
      >
        <div className="flex flex-row place-items-center justify-center">
          {icon === "share" && (
            <FontAwesomeIcon icon={faShareNodes} className="mr-2" />
          )}
          {icon === "calendar" && (
            <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
          )}
          {label}
        </div>
      </button>
    </div>
  );
};

export default BaseButton;
