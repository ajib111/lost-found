import ItemListing from '../components/ItemListing'
import { items } from '../data/items'

function Found() {
  const foundItems = items.filter((item) => item.type === 'found')
  return (
    <>
      <header className="page-heading">
        <div className="container">
          <h1>Found items</h1>
          <p>Browse items that kind people in the community have reported.</p>
        </div>
      </header>
      <section className="listing">
        <div className="container">
          <ItemListing type="found" items={foundItems} />
        </div>
      </section>
    </>
  )
}

export default Found
