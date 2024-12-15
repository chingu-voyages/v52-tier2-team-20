export default function Confirmation() {
  return (
    <div className="pt-3 text-center text-sm font-montserrat text-[13px]">
      <div className="mb-10 space-y-3 max-sm:text-letter-grey">
        <p className="font-semibold">Thank you for your request.</p>
        <p>Your confirmation number is <span className="font-semibold">2374645</span></p>
        <p className="">A city hall representative will be in touch by phone to confirm your appointment time. We will do our best to accommodate your requested time slot, but cannot guarantee an exact match. </p>
      </div>
      
      <div className="font-semibold space-y-2 max-sm:text-letter-grey">
        <p>To cancel your appointment request, call:</p>
        <p>(808) 734-7346</p>
      </div>
    </div>
  );
}
