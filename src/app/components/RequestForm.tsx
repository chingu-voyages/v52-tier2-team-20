"use client";

import { useState } from "react";
import ContactInfo from "./ContactInfo";
import Scheduling from "./Scheduling";
import Confirmation from "./Confirmation";

export default function RequestForm() {
  const [formTag, setFormTag] = useState<string>("contact_info");
  const [isContactInfoSubmitted, setIsContactInfoSubmitted] = useState<boolean>(false);
  const [isSchedulingSubmitted, setIsSchedulingSubmitted] = useState<boolean>(false);

  function handlerTag(event: React.MouseEvent<HTMLAnchorElement>) {
    const id = event.currentTarget.id;
    if (id === "scheduling" && !isContactInfoSubmitted) {
      return;
    }

    if (id === "confirmation" && !isSchedulingSubmitted) {
      return;
    }

    setFormTag(id);
  }

  const handleContactInfoSubmit = () => {
    setIsContactInfoSubmitted(true); 
    setFormTag("scheduling");
  };

  const handleSchedulingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSchedulingSubmitted(true);
    setFormTag("confirmation")
  };

  return (
    <div className="bg-white w-[580px] py-8 px-16 min-h-[500px]">
      <ul className="flex gap-2 justify-between text-xs mb-10">
        {["contact_info", "scheduling", "confirmation"].map((id) => (
          <a
            key={id}
            className={`py-3 border-b-4 cursor-pointer transition-opacity 
              ${formTag === id ? "border-black opacity-100" : "border-transparent opacity-50"}`}
            id={id}
            onClick={handlerTag}
          >
            <li className="uppercase">{id.replace("_", " ")}</li>
          </a>
        ))}
      </ul>
      
      {formTag === "contact_info" && <ContactInfo onSubmit={handleContactInfoSubmit} />}
      {formTag === "scheduling" && <Scheduling onSubmit={handleSchedulingSubmit} />}
      {formTag === "confirmation" && <Confirmation />}
    </div>
  );
}
