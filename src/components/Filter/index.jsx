import MultipleCheckbox from "./MultipleCheckbox";

function Filter() {
  return (
    <div className="w-full border-default border-black mx-auto p-3">
      <div className="flex flex-col gap-y-3">
        <p className="text-xl font-bold">Doctor Finder Apps</p>
        {/* Filter section */}
        <div className="flex flex-row gap-x-3">
          <input placeholder="Search Doctor..." className="border-default border-black p-2 outline-none" />
          <MultipleCheckbox placeholder="Hospital" />
          <MultipleCheckbox placeholder="Specialization" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
