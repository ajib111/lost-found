import { useMemo, useState } from 'react'
import { categories } from '../data/items'
import ItemCard from './ItemCard'

// Handles the shared search and category filtering for both listing pages.
function ItemListing({ items, type }) {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All categories')

  const filteredItems = useMemo(() => {
    const searchText = query.toLowerCase()

    return items.filter((item) => {
      const matchesCategory = selectedCategory === 'All categories' || item.category === selectedCategory
      const searchableText = `${item.title} ${item.description} ${item.location}`.toLowerCase()

      return matchesCategory && searchableText.includes(searchText)
    })
  }, [items, query, selectedCategory])

  return (
    <>
      <div className="filters">
        <div className="search-wrap">
          <span>Search</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${type} items`} aria-label={`Search ${type} items`} />
        </div>
        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} aria-label="Filter by category">
          {categories.map((category) => <option key={category}>{category}</option>)}
        </select>
      </div>

      {filteredItems.length > 0 ? <div className="item-grid">{filteredItems.map((item) => <ItemCard key={item.id} item={item} />)}</div> : <div className="empty-state">No items match those filters. Try a different search.</div>}
    </>
  )
}

export default ItemListing
