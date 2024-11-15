export default function SubmitButton() {
  return (
    <div className="flex justify-between gap-3 w-full">
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded-lg border-2 border-black w-[80%] text-sm"
      >
        Submit
      </button>

      <button
        type="button"
        className="bg-white text-black py-2 rounded-lg w-[20%] text-sm border-2 border-black"
      >
        Cancel
      </button>
    </div>
  );
}
