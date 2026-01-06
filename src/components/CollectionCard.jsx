
const CollectionCard = ({ collection }) => {
  return (
    <div className="relative rounded overflow-hidden">
      <img
        src={collection.image}
        alt={collection.title}
        className="h-64 w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl font-semibold">{collection.title}</h3>
        <p className="text-sm">{collection.description}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
