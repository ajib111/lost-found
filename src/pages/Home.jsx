import { Link } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import { items } from '../data/items'

function Home() {
  // Home shows only the latest three reports from each type.
  const recentLostItems = items.filter((item) => item.type === 'lost').slice(0, 3)
  const recentFoundItems = items.filter((item) => item.type === 'found').slice(0, 3)

  return <><section className="hero"><div className="container hero-grid"><div><span className="eyebrow">Your community's helping hand</span><h1>Every item has a way <em>back home.</em></h1><p>Lost &amp; Found brings people together to reconnect misplaced belongings with the people looking for them.</p><div className="hero-buttons"><Link className="button button-primary button-large" to="/report/lost">I lost something</Link><Link className="button button-secondary button-large" to="/report/found">I found something</Link></div><div className="trust-row"><span>Simple to report</span><span>Community-powered</span><span>Privacy-minded</span></div></div><div className="hero-visual"><img className="hero-photo" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85" alt="Friends helping each other at a table" /><div className="floating-card"><span className="mini-icon">Help</span><span><strong>Small acts, real impact</strong>Help a neighbor find what matters.</span></div></div></div></section><ItemSection heading="Lost items" items={recentLostItems} link="/lost" linkText="Browse all lost items" /><section className="section soft"><div className="container"><div className="section-header"><div><p className="section-kicker">Recently reported</p><h2>Found items</h2></div><Link className="button button-ghost" to="/found">Browse all found items -&gt;</Link></div><div className="item-grid">{recentFoundItems.map((item) => <ItemCard key={item.id} item={item} />)}</div></div></section></>
}

// Keeps the two home-page item sections consistent.
function ItemSection({ heading, items: sectionItems, link, linkText }) {
  return <section className="section"><div className="container"><div className="section-header"><div><p className="section-kicker">Recently reported</p><h2>{heading}</h2></div><Link className="button button-ghost" to={link}>{linkText} -&gt;</Link></div><div className="item-grid">{sectionItems.map((item) => <ItemCard key={item.id} item={item} />)}</div></div></section>
}

export default Home
