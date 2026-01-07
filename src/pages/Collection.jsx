import CollectionCard from "../components/CollectionCard"
import collections from "../data/collections.js"

const Collection = () => {
  return (
        <section className="max-w-6xl mx-auto px-6 mt-32">
      <h2 className="text-3xl font-semibold mb-10">Collections</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
          />
        ))}
      </div>
    </section>
  )
}

export default Collection
