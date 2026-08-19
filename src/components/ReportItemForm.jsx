import { useState } from 'react'
import { categories } from '../data/items'

function ReportItemForm({ type }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const itemTypeLabel = type === 'lost' ? 'lost' : 'found'

  // This is intentionally UI-only: it shows feedback without sending data anywhere.
  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      {isSubmitted && (
        <div className="form-success">
          Thanks! Your {itemTypeLabel} item report has been saved as a UI-only
          demo.
        </div>
      )}
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="item-name">Item name</label>
          <input
            id="item-name"
            required
            placeholder="e.g. Blue water bottle"
          />
        </div>
        <div className="form-field">
          <label htmlFor="category">Category</label>
          <select id="category" required defaultValue="">
            <option value="" disabled>
              Select a category
            </option>
            {categories.slice(1).map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="form-field full">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            placeholder="Include colors, brands, or other details that may help identify the item."
          />
        </div>
        <div className="form-field full">
          <label htmlFor="image">
            Item image <span className="form-hint">(optional)</span>
          </label>
          <input id="image" type="file" accept="image/*" />
          <span className="form-hint">
            A clear photo can make your report easier to recognize.
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="date">Date {itemTypeLabel}</label>
          <input id="date" type="date" required />
        </div>
        <div className="form-field">
          <label htmlFor="location">Location</label>
          <input id="location" required placeholder="e.g. Main library" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="form-field">
          <label htmlFor="contact">Contact number</label>
          <input id="contact" type="tel" required placeholder="98XXXXXXXX" />
        </div>
      </div>
      <label className="check-field">
        <input type="checkbox" />
        <span>
          I have additional identifying information. I understand I should
          share it only when confirming ownership.
        </span>
      </label>
      <button className="button button-primary button-large" type="submit">
        Submit {itemTypeLabel} item report
      </button>
    </form>
  )
}

export default ReportItemForm
