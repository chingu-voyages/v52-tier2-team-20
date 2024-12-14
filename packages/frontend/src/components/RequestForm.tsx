"use client";

import { useRequestForm } from "../utils/useRequestForm"
import Address from "./Address";
import Contact from "./Contact";
import Dates from "./Dates";
import Confirmation from "./Confirmation";
import FormTabs from "./FormTabs";

export default function RequestForm() {
  const {
    formTag,
    handlerTag,
    handleAddressSubmit,
    handleContactSubmit,
    handleDatesSubmit,
  } = useRequestForm();

  return (
    <div className="relative bg-white max-w-[482px] w-full py-[56px] h-full min-[482px]:max-h-[475px] space-y-8 max-[482px]:bg-black">
      <div className="px-[60px]">
        <FormTabs formTag={formTag} handlerTag={handlerTag} />
        {formTag === "address" && <Address onSubmit={handleAddressSubmit} />}
        {formTag === "contact" && <Contact onSubmit={handleContactSubmit} />}
        {formTag === "dates" && <Dates onSubmit={handleDatesSubmit} />}
        {formTag === "confirm" && <Confirmation />}
      </div>

    </div>
  );
}
