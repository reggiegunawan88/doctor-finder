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
            <p>Name: {doctor.name}</p>
            <p>Hospital: {doctor.hospital[0].name}</p>
            <p>Specialization: {doctor.specialization.name}</p>
          </div>
          {/* price */}
          <p className="text-right">Price: Rp {doctor.price.raw}</p>
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
