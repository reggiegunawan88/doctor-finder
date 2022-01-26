import AvatarCard from "components/AvatarCard";

function List(props) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {props.listData.map((data, idx) => (
        <AvatarCard key={idx} data={data} />
      ))}
    </div>
  );
}

export default List;
