"use client";

import { useState } from "react";
import Address from "./Address";
import Contact from "./Contact";
import Dates from "./Dates";
import Confirmation from "./Confirmation";

export default function RequestForm() {
  const [formTag, setFormTag] = useState<string>("address");
  const [isAddressSubmitted, setIsAddressSubmitted] = useState<boolean>(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState<boolean>(false);
  const [isDatesSubmitted, setIsDatesSubmitted] = useState<boolean>(false);

  function handlerTag(event: React.MouseEvent<HTMLAnchorElement>) {
    const id = event.currentTarget.id;

    if (id === "contact" && !isAddressSubmitted) {
      alert("Please submit the Address form first.");
      return;
    }

    if (id === "dates" && (!isContactSubmitted || !isAddressSubmitted)) {
      alert("Please submit the Contact form first.");
      return;
    }

    if (id === "confirm" && (!isDatesSubmitted || !isContactSubmitted || !isAddressSubmitted)) {
      alert("Please submit the Dates form first.");
      return;
    }

    if (
      (id === "contact" && !isAddressSubmitted) ||
      (id === "dates" && !isContactSubmitted) ||
      (id === "confirm" && !isDatesSubmitted)
    ) {
      setFormTag(id);
    }
  }


  const handleAddressSubmit = () => {
    setIsAddressSubmitted(true);
    setFormTag("contact");
  };

  const handleContactSubmit = () => {
    setIsContactSubmitted(true);
    setFormTag("dates");
  };

  const handleDatesSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDatesSubmitted(true);
    setFormTag("confirm");
  };

  return (
    <div className="bg-white w-[482px] py-[56px] px-[67px] h-[475px] space-y-8 relative">
      
      <ul className="grid grid-cols-4 gap-x-8 text-[13px] font-montserrat h-[57px] w-full relative">
        {["address", "contact", "dates", "confirm"].map((id, index, arr) => (
        
          <div key={id} className="flex flex-col justify-between items-center gap-2 relative">
            <div className={`rounded-full text-white flex items-center justify-center w-[28.49px] h-[26.97px] relative ${arr.indexOf(formTag) >= index ? "bg-black" : "bg-letter-grey"}`}>
              {arr.indexOf(formTag) > index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              ) : (
                index + 1
              )}

              {index !== arr.length - 1 && (
                <div
                  className={`absolute top-1/2 left-full h-[1px] ${
                    arr.indexOf(formTag) > index ? "bg-black" : "bg-letter-grey"
                  }`}
                  style={{ width: "calc(100% + 3rem)" }}
                ></div>
              )}
            </div>

            <a
              className={`cursor-pointer transition-opacity 
                ${arr.indexOf(formTag) >= index ? "text-black" : "text-letter-grey"}
              `}
              id={id}
              onClick={handlerTag}
            >
              <li className="uppercase">{id}</li>
            </a>
          </div>
        ))}
      </ul>

      {formTag === "address" && <Address onSubmit={handleAddressSubmit} />}
      {formTag === "contact" && <Contact onSubmit={handleContactSubmit} />}
      {formTag === "dates" && <Dates onSubmit={handleDatesSubmit} />}
      {formTag === "confirm" && <Confirmation />}
    </div>
  );
}
