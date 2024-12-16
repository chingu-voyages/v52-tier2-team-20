export default function SubmitButton() {
  return (
    <div className="flex justify-between gap-3 w-full font-inter text-base">
      <button
        type="button"
        className="bg-white border border-stroke-line text-black rounded-[5px] w-[92px] h-[33px] hover:bg-black hover:text-white"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="text-black-text font-semibold border-2 border-yellow-cta rounded-[5px] w-[240px] h-[33px] bg-yellow-cta hover:bg-white"
      >
        Next
      </button>
    </div>
  );
}
