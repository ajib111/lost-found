import ItemListing from '../components/ItemListing'
import { items } from '../data/items'

function Lost() {
  const lostItems = items.filter((item) => item.type === 'lost')
  return (
    <>
      <header className="page-heading">
        <div className="container">
          <h1>Lost items</h1>
          <p>See something familiar? Help get it back to its owner.</p>
        </div>
      </header>
      <section className="listing">
        <div className="container">
          <ItemListing type="lost" items={lostItems} />
        </div>
      </section>
    </>
  )
}

export default Lost