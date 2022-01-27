import { useContext } from "react";
import { SearchContext } from "pages/Home";
import AvatarCard from "components/AvatarCard";

function List() {
  const searchCtx = useContext(SearchContext);

  return (
    <div className="grid grid-cols-2 gap-6">
      {searchCtx.searchResult.map((data, idx) => (
        <AvatarCard key={idx} data={data} />
      ))}
    </div>
  );
}

export default List;
