import { Link, useParams } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import { formatDate, getItem } from '../data/items'

function ItemDetails() {
  const { id } = useParams()
  const item = getItem(id)

  // A friendly fallback if someone manually enters an invalid URL.
  if (!item) {
    return (
      <section className="details">
        <div className="container empty-state">
          <h1>Item not found</h1>
          <p>This report may have been removed or the link is incomplete.</p>
          <Link className="button button-primary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    )
  }

  const dateLabel = item.type === 'lost' ? 'lost' : 'found'

  return (
    <section className="details">
      <div className="container detail-grid">
        <img className="detail-image" src={item.image} alt={item.title} />
        <div>
          <div className="detail-heading">
            <h1>{item.title}</h1>
            <StatusBadge item={item} typeOnly />
          </div>
          <p className="detail-description">{item.description}</p>
          <div className="details-list">
            <DetailRow label="Status">
              <StatusBadge item={item} />
            </DetailRow>
            <DetailRow label="Category">{item.category}</DetailRow>
            <DetailRow label={`Date ${dateLabel}`}>{formatDate(item.date)}</DetailRow>
            <DetailRow label="Location">{item.location}</DetailRow>
          </div>
          <div className="contact-box">
            <h2>Think this is yours?</h2>
            <p>
              Contact the person who reported this item and include details that
              confirm ownership.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${item.email}`}>
                Email reporter
              </a>
              <a className="button button-secondary" href={`tel:${item.contact}`}>
                Call {item.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Avoid repeating the label-and-value layout for item metadata.
function DetailRow({ label, children }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{children}</strong>
    </div>
  )
}

export default ItemDetails
