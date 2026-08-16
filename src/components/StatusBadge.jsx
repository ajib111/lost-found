// Displays either the item's report type or its current return status.
function StatusBadge({ item, typeOnly = false }) {
  if (typeOnly) {
    return <span className={`status ${item.type}`}>{item.type === 'lost' ? 'Lost item' : 'Found item'}</span>
  }

  return <span className={`status ${item.returned ? 'returned' : 'active'}`}>{item.returned ? 'Returned' : 'Active'}</span>
}

export default StatusBadge
