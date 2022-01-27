import { clearHTMLTag } from "utils/helper";

function AvatarCard(props) {
  const doctor = props.data;

  return (
    <div className="border-default border-black p-3 rounded-lg">
      <div className="grid grid-cols-2 gap-x-3">
        {/* doctor profile pict */}
        <img alt="profile-pict" src={doctor.photo.url} className="w-40 h-40 place-self-center" />
        <div className="flex flex-col gap-y-5">
          {/* doctor description */}
          <div className="flex flex-col flex-grow gap-y-2 mx-4">
            <p>
              <b>Name:</b> {doctor.name}
            </p>
            <p>
              <b>Hospital:</b> {doctor.hospital[0].name}
            </p>
            <p>
              <b>Specialization:</b> {doctor.specialization.name}
            </p>
            <p className=" break-words">
              <b>About:</b> {clearHTMLTag(doctor.about)}
            </p>
          </div>
          {/* price */}
          <p className="text-right font-bold text-lg">Price: Rp {doctor.price.raw}</p>
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
