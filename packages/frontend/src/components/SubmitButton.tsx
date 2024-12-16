export default function SubmitButton() {
  return (
    <div className="flex justify-between gap-3 w-full font-inter text-base">
      <button
        type="submit"
        className="text-black-text font-semibold border-2 border-yellow-cta rounded-[5px] w-full h-full bg-yellow-cta hover:bg-white"
      >
        Next
      </button>
    </div>
  );
}
