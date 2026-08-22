// Keep mock data in one place so all pages show the same items.
export const categories = [
  'All categories',
  'Electronics',
  'Accessories',
  'Documents',
  'Bags',
  'Keys',
  'Others',
]

export const items = [
  {
    id: 'black-wallet', type: 'lost', title: 'Black Leather Wallet', category: 'Accessories',
    description: 'Black leather wallet with several cards and a small family photo inside.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80',
    location: 'College Cafeteria', date: '2026-08-12', email: 'maya.shrestha@example.com', contact: '9812345678', returned: false,
  },
  {
    id: 'iphone-14', type: 'lost', title: 'iPhone 14', category: 'Electronics',
    description: 'Blue iPhone with a clear case and a few stickers on the back.',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80',
    location: 'Central Library', date: '2026-08-10', email: 'anish.k@example.com', contact: '9801234567', returned: false,
  },
  {
    id: 'student-id', type: 'lost', title: 'Student ID Card', category: 'Documents',
    description: 'University student identification card issued to Riya Sharma.',
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=900&q=80',
    location: 'Bus Stop, Gate 2', date: '2026-08-09', email: 'riya.sharma@example.com', contact: '9860123456', returned: false,
  },
  {
    id: 'black-backpack', type: 'found', title: 'Black Backpack', category: 'Bags',
    description: 'Black canvas backpack with a water bottle pocket and notebooks inside.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    location: 'Engineering Block', date: '2026-08-13', email: 'founddesk@example.com', contact: '9845678901', returned: false,
  },
  {
    id: 'wireless-earbuds', type: 'found', title: 'Wireless Earbuds', category: 'Electronics',
    description: 'White wireless earbuds in a compact charging case.',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80',
    location: 'Sports Ground', date: '2026-08-11', email: 'founddesk@example.com', contact: '9845678901', returned: false,
  },
  {
    id: 'house-keys', type: 'found', title: 'House Keys', category: 'Keys',
    description: 'A small set of three keys on a blue mountain keychain.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80',
    location: 'Main Entrance', date: '2026-08-08', email: 'security@example.com', contact: '9856789012', returned: true,
  },
]

// Used by the item details page to find the matching URL id.
export const getItem = (id) => items.find((item) => item.id === id)

// Formats the stored YYYY-MM-DD date for readers.
export const formatDate = (date) => new Intl.DateTimeFormat('en', {
  month: 'short', day: 'numeric', year: 'numeric',
}).format(new Date(`${date}T00:00:00`))
