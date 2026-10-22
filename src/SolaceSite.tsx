import { useState, type FormEvent } from 'react'
import { BedDouble, GraduationCap, Heart, Presentation, Tent, UtensilsCrossed, Waves } from 'lucide-react'
import './SolaceSite.css'

const stays = [
  { no: '01', name: 'Garden cottage', note: 'A quiet hideaway for slow mornings and long evenings.', image: 'photo-1449158743715-0a90ebb6d2d8', label: 'FOR TWO' },
  { no: '02', name: 'The family house', note: 'Room to gather, with the garden just beyond your door.', image: 'photo-1600607687939-ce8a6c25118c', label: 'FOR THE FAMILY' },
  { no: '03', name: 'The open lawn', note: 'A green, open-air setting for days worth celebrating.', image: 'photo-1519225421980-715cb0215aed', label: 'GATHER HERE' },
]
const photo = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
const tours = [
  { name: 'Thomson’s Falls', place: 'NYAHURURU', note: 'Take in the power and cool mist of the Ewaso Ng’iro as it drops into the gorge.', file: "Thomson's falls.jpg", author: 'Mujtabaa Bashir', source: 'https://commons.wikimedia.org/wiki/File:Thomson%27s_falls.jpg' },
  { name: 'Lake Nakuru National Park', place: 'NAKURU', note: 'A wildlife day of lake views, acacia woodland, and remarkable birdlife.', file: 'Lake nakuru flamingos.jpg', author: 'Bett Duncan', source: 'https://commons.wikimedia.org/wiki/File:Lake_nakuru_flamingos.jpg' },
  { name: 'Menengai Crater', place: 'NAKURU', note: 'Look out across the vast volcanic caldera and the Great Rift Valley.', file: 'Menengai crater.jpg', author: 'Faustinmutua', source: 'https://commons.wikimedia.org/wiki/File:Menengai_crater.jpg' },
  { name: 'Lake Bogoria', place: 'BARINGO COUNTY', note: 'Discover a dramatic Rift Valley lake framed by rugged hills and open skies.', file: 'Lake bogoria view.jpg', author: 'Geomurki', source: 'https://commons.wikimedia.org/wiki/File:Lake_bogoria_view.jpg' },
]
const offerings = [
  { title: 'Wedding grounds', note: 'An open-air setting for your ceremony and celebration.', image: 'photo-1519225421980-715cb0215aed', Icon: Heart },
  { title: 'Events & catering', note: 'A welcoming place for events, with catering available.', image: 'photo-1511795409834-ef04bbd61622', Icon: UtensilsCrossed },
  { title: 'Accommodation', note: 'A comfortable place to settle in and stay awhile.', image: 'photo-1611892440504-42a792e24d32', Icon: BedDouble },
  { title: 'Conference hall', note: 'A dedicated venue for meetings, workshops, and conferences.', image: 'photo-1497366216548-37526070297c', Icon: Presentation },
  { title: 'Camping sites', note: 'Spend a night outdoors in the calm of Subukia.', image: 'photo-1478131143081-80f7f84ca84d', Icon: Tent },
  { title: 'School CBE activities', note: 'A place for school groups and CBE activities.', image: 'photo-1509062522246-3755977927d7', Icon: GraduationCap },
  { title: 'Swimming pool & cottages', note: 'Enjoy the swimming pool and make time to unwind in a cottage.', image: 'photo-1576013551627-0cc20b96c2a7', Icon: Waves },
]
const phone = '+254799241751'
const license = 'https://creativecommons.org/licenses/by-sa/4.0/'
const commonsImage = (file: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`
const Arrow = () => <span aria-hidden="true">↗</span>

export default function SolaceSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const details = [...new FormData(event.currentTarget).entries()].map(([key, value]) => `${key}: ${value}`).join('\n')
    window.location.href = `mailto:hello@solaceresort.com?subject=${encodeURIComponent('Solace Resort enquiry')}&body=${encodeURIComponent(details)}`
    setSubmitted(true)
  }
  const closeMenu = () => setMenuOpen(false)

  return <main className="solace">
    <div className="topbar"><span>SUBUKIA · NAKURU, KENYA</span><a href={`tel:${phone}`}>Call us 0799 241751 <Arrow /></a></div>
    <header className="header">
      <a className="brand" href="#home" aria-label="The Solace Subukia home"><img src="/Solace%20logo.png" alt="The Solace Subukia — Serenity beyond imagination" /></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation"><a href="#stay" onClick={closeMenu}>Stay</a><a href="#tours" onClick={closeMenu}>Tours</a><a href="#experiences" onClick={closeMenu}>Experiences</a><a href="#offerings" onClick={closeMenu}>What we offer</a><a href="#story" onClick={closeMenu}>Our story</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Plan your stay <Arrow /></a></nav>
    </header>

    <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg,rgba(13,38,66,.76),rgba(13,38,66,.4) 47%,rgba(13,38,66,.08)),url(${photo('photo-1445019980597-93fa8acb246c', 2200)})` }}>
      <div className="hero-inner"><p className="kicker"><span /> A LITTLE CLOSER TO CALM</p><h1>Make room<br />for <em>slow.</em></h1><p className="hero-copy">A garden retreat in Subukia, Nakuru, for deep breaths, unhurried days, and the people you love being around.</p><div className="hero-actions"><a className="button light" href="#stay">Find your stay <Arrow /></a><a className="text-link" href="#story">Get to know Solace <span>↓</span></a></div></div>
      <span className="hero-scroll">SCROLL TO DISCOVER ↓</span><div className="hero-caption">01 / 03 <span /> A softer kind of getaway</div>
    </section>

    <section className="welcome section" id="story"><div className="welcome-aside"><span>01 — A PLACE TO EXHALE</span><b>✳</b></div><div className="welcome-copy"><p className="eyebrow">WELCOME TO SOLACE</p><h2>Somewhere between<br />getting there and <em>letting go.</em></h2><p>Set in Subukia, Nakuru, Solace is a place to trade the rush for garden paths, meals that last a little longer, and the kind of quiet that makes space for everything else.</p><a className="under-link" href="#experiences">The Solace feeling <Arrow /></a></div><div className="welcome-image" style={{ backgroundImage: `url(${photo('photo-1449158743715-0a90ebb6d2d8')})` }}><span>TAKE YOUR TIME</span></div></section>

    <section className="stays section" id="stay"><div className="section-heading"><div><p className="eyebrow">A PLACE FOR EVERY PACE</p><h2>Stay a little <em>longer.</em></h2></div><a className="under-link" href="#contact">Explore all stays <Arrow /></a></div><div className="stay-grid">{stays.map((stay) => <article className="stay-card" key={stay.no}><a href="#contact" className="stay-image" style={{ backgroundImage: `url(${photo(stay.image)})` }} aria-label={`Ask about ${stay.name}`}><span className="tag">{stay.label}</span><span className="round-arrow"><Arrow /></span></a><div className="stay-meta"><span>{stay.no}</span><div><h3>{stay.name}</h3><p>{stay.note}</p></div></div></article>)}</div></section>

    <section className="offerings section" id="offerings"><div className="section-heading"><div><p className="eyebrow">MORE WAYS TO ENJOY SOLACE</p><h2>Make it a day to <em>remember.</em></h2><p className="offerings-intro">From weddings and events to overnight stays and school activities, there’s room for different kinds of days at Solace.</p></div><a className="under-link" href={`tel:${phone}`}>Ask us about a booking <Arrow /></a></div><div className="offering-grid">{offerings.map(({ title, note, image, Icon }, index) => <article className="offering-card" key={title}><div className="offering-photo"><img src={photo(image, 760)} alt="" loading="lazy" /><span className="offering-number">0{index + 1}</span></div><div className="offering-content"><span className="offering-icon"><Icon size={22} strokeWidth={1.7} /></span><h3>{title}</h3><p>{note}</p><a href={`tel:${phone}`} aria-label={`Call about ${title}`}>Enquire <Arrow /></a></div></article>)}</div><p className="offering-photo-note">Illustrative photos from <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash</a>. We can replace them with Solace’s own photos when you share them.</p></section>

    <section className="tours section" id="tours"><div className="section-heading"><div><p className="eyebrow">OUT AND ABOUT FROM SUBUKIA</p><h2>Find your next <em>view.</em></h2><p className="tour-intro">Make Solace your base for exploring some of the best-known landscapes in the wider Nakuru region.</p></div><a className="under-link" href={`tel:${phone}`}>Ask about a tour <Arrow /></a></div><div className="tour-grid">{tours.map((tour, index) => <article className="tour-card" key={tour.name}><div className="tour-photo"><img src={commonsImage(tour.file)} alt={`${tour.name} in Kenya`} loading="lazy" /><span className="tour-number">0{index + 1}</span></div><div className="tour-details"><span className="tour-place">{tour.place}</span><h3>{tour.name}</h3><p>{tour.note}</p><small className="photo-credit">Photo: <a href={tour.source} target="_blank" rel="noreferrer">{tour.author} / Wikimedia Commons</a> · <a href={license} target="_blank" rel="noreferrer">CC BY-SA 4.0</a> · cropped</small></div></article>)}</div></section>

    <section className="experiences" id="experiences"><div className="experience-image" style={{ backgroundImage: `url(${photo('photo-1414235077428-338989a2e8c0')})` }} /><div className="experience-copy"><p className="eyebrow">THE GOOD IN BETWEEN</p><h2>Days that find<br />their own <em>rhythm.</em></h2><p>Dip into the pool. Follow the garden paths. Share something delicious, then let the afternoon decide what comes next.</p><div className="experience-list"><a href="#contact"><span>01</span> Poolside afternoons <Arrow /></a><a href="#contact"><span>02</span> From garden to table <Arrow /></a><a href="#contact"><span>03</span> Little celebrations <Arrow /></a></div></div></section>

    <section className="gather section" id="gather"><div><p className="eyebrow">BRING YOUR PEOPLE</p><h2>Good things are<br />better <em>together.</em></h2><p>Mark a milestone, gather your favourite people, or make an ordinary day feel like one worth remembering.</p><a className="button forest" href="#contact">Plan a gathering <Arrow /></a></div><div className="gather-image" style={{ backgroundImage: `url(${photo('photo-1519225421980-715cb0215aed')})` }}><span>ROOM TO CELEBRATE</span></div></section>

    <section className="quote"><div className="quote-mark">s<span>✳</span></div><p>Less itinerary.<br /><em>More being here.</em></p><a className="under-link" href="#contact">A note from our hosts <Arrow /></a></section>

    <section className="contact section" id="contact"><div className="contact-copy"><p className="eyebrow">YOUR NEXT GOOD DAY</p><h2>Let's make a<br /><em>little space.</em></h2><p>Tell us what you're dreaming of. We'll help you find the right dates and the right kind of stay.</p><a className="contact-email" href={`tel:${phone}`}>Call Solace: 0799 241751 <Arrow /></a><p className="contact-location">Solace Garden Resort · Subukia, Nakuru, Kenya</p></div><form className="inquiry" onSubmit={sendInquiry}><div className="form-row"><label>Your name<input name="name" placeholder="How should we call you?" required /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label></div><div className="form-row"><label>Arriving<input name="arrival" type="date" required /></label><label>Leaving<input name="departure" type="date" required /></label></div><label>What are you planning?<select name="occasion" defaultValue="" required><option value="" disabled>Choose one</option><option>A quiet getaway</option><option>A family stay</option><option>A gathering or celebration</option><option>Something else</option></select></label><button className="button forest" type="submit">{submitted ? 'Open email app again' : 'Send an enquiry'} <Arrow /></button>{submitted && <p className="success" role="status">Your email app should open with the enquiry ready to send. Direct online booking can be connected when you choose a booking service.</p>}</form></section>

    <footer className="footer"><a className="brand footer-brand" href="#home"><img src="/Solace%20logo.png" alt="The Solace Subukia — Serenity beyond imagination" /></a><p>Come as you are.<br />Leave a little lighter.</p><div className="footer-links"><a href="#stay">Stay</a><a href="#tours">Tours</a><a href="#experiences">Experiences</a><a href="#offerings">What we offer</a><a href={`tel:${phone}`}>0799 241751</a><a className="facebook-link" href="https://www.facebook.com/the.solace.subukia" target="_blank" rel="noreferrer" aria-label="Visit Solace on Facebook" title="Solace on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="currentColor"/><path fill="#fff" d="M13.35 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56h1.69V3.14c-.29-.04-1.3-.14-2.47-.14-2.44 0-4.11 1.49-4.11 4.23V9.6H7.3v3.2h2.75V21h3.3Z"/></svg></a></div><small>© {new Date().getFullYear()} Solace Resort</small></footer>
  </main>
}
