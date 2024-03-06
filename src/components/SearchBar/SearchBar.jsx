import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
          onSubmit(e.target.value);
        }
      }
  return (
    <div className="w-96 flex items-center bg-gray-200 rounded-full">
      <SearchIcon size={24} className="ml-3 text-gray-500"/>
      <input 
        onKeyUp={submit}
        type="text" 
        placeholder="Search for a TV show" 
        className="py-2 px-4 bg-transparent outline-none text-black w-full"
      />
    </div>
  );
}