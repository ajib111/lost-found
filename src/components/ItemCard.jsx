import { Link } from 'react-router-dom'
import { formatDate } from '../data/items'
import StatusBadge from './StatusBadge'

// Reusable compact view used on the home, lost, and found pages.
function ItemCard({ item }) {
  const dateLabel = item.type === 'lost' ? 'Lost' : 'Found'

  return (
    <article className="item-card">
      <img className="item-card-image" src={item.image} alt={item.title} />
      <div className="card-body">
        <div className="card-top">
          <h3 className="card-title">{item.title}</h3>
          <StatusBadge item={item} />
        </div>
        <p className="card-description">{item.description}</p>
        <div className="card-meta">
          <span>Location: {item.location}</span>
          <span>
            {dateLabel}: {formatDate(item.date)}
          </span>
        </div>
        <Link className="button button-ghost" to={`/item/${item.id}`}>
          View details -&gt;
        </Link>
      </div>
    </article>
  )
}

export default ItemCard
