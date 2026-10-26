import { useState, type FormEvent } from 'react'
import { BedDouble, GraduationCap, Heart, Presentation, Tent, UtensilsCrossed, Waves } from 'lucide-react'
import './SolaceSite.css'

const stays = [
  { no: '01', name: 'Garden cottage', note: 'A cabin tucked into the grounds for a quiet night away.', image: '/cabin2.jpg', label: 'FOR TWO' },
  { no: '02', name: 'The family house', note: 'A welcoming place for your family to settle in together.', image: '/hous.jpg', label: 'FOR THE FAMILY' },
  { no: '03', name: 'The open lawn', note: 'Open green grounds for gathering, celebrating, and spending time outside.', image: '/grounds3.jpg', label: 'GATHER HERE' },
]
const photo = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
const galleryPhotos = [
  { src: '/solace%20garden.jpeg', alt: 'Garden grounds at Solace Resort' },
  { src: '/Solace%20gate.jpeg', alt: 'Entrance gate to Solace Resort' },

  { src: '/cabin%20in.jpg', alt: 'Inside a Solace Resort cabin' },
  { src: '/room1.jpg', alt: 'Guest room at Solace Resort' },
  { src: '/lounge.jpg', alt: 'Lounge at Solace Resort' },
  { src: '/grounds2.jpg', alt: 'Resort grounds at Solace' },
  { src: '/out3.jpg', alt: 'Outdoor area at Solace Resort' },
  { src: '/cabin3.jpg', alt: 'Cabin at Solace Resort' },
  { src: '/out2.jpg', alt: 'Outdoor grounds at Solace Resort' },
  { src: '/room3.jpg', alt: 'Guest room at Solace Resort' },
  { src: '/room2.jpg', alt: 'Guest room at Solace Resort' },
  { src: '/signboard2.jpg', alt: 'Solace Resort signboard' },
  { src: '/signboard.jpg', alt: 'Solace Resort signboard' },
  { src: '/cabin2.jpg', alt: 'Cabin at Solace Resort' },
  { src: '/grounds.jpg', alt: 'Resort grounds at Solace' },
  { src: '/ground3.jpg', alt: 'Garden grounds at Solace Resort' },
  { src: '/views.jpg', alt: 'View from Solace Resort' },
  { src: '/grounds3.jpg', alt: 'Resort grounds at Solace' },
  { src: '/cabin%20out.jpg', alt: 'Exterior of a Solace Resort cabin' },
  { src: '/out1.jpg', alt: 'Outdoor area at Solace Resort' },
]
const tours = [
  { name: 'Thomson’s Falls', place: 'NYAHURURU', note: 'Take in the power and cool mist of the Ewaso Ng’iro as it drops into the gorge.', file: "Thomson's falls.jpg", author: 'Mujtabaa Bashir', source: 'https://commons.wikimedia.org/wiki/File:Thomson%27s_falls.jpg' },
  { name: 'Lake Nakuru National Park', place: 'NAKURU', note: 'A wildlife day of lake views, acacia woodland, and remarkable birdlife.', file: 'Lake nakuru flamingos.jpg', author: 'Bett Duncan', source: 'https://commons.wikimedia.org/wiki/File:Lake_nakuru_flamingos.jpg' },
  { name: 'Menengai Crater', place: 'NAKURU', note: 'Look out across the vast volcanic caldera and the Great Rift Valley.', file: 'Menengai crater.jpg', author: 'Faustinmutua', source: 'https://commons.wikimedia.org/wiki/File:Menengai_crater.jpg' },
  { name: 'Lake Bogoria', place: 'BARINGO COUNTY', note: 'Discover a dramatic Rift Valley lake framed by rugged hills and open skies.', file: 'Lake bogoria view.jpg', author: 'Geomurki', source: 'https://commons.wikimedia.org/wiki/File:Lake_bogoria_view.jpg' },
]
const offerings = [
  { title: 'Wedding grounds', note: 'Celebrate together in an open-air setting at Solace.', image: '/grounds3.jpg', Icon: Heart },
  { title: 'Events & catering', note: 'Bring your guests together on the grounds and ask us about catering.', image: '/ground3.jpg', Icon: UtensilsCrossed },
  { title: 'Accommodation', note: 'Rooms and cabins for guests who would like to stay at Solace.', image: '/room3.jpg', Icon: BedDouble },
  { title: 'Conference hall', note: 'A venue for meetings, workshops, and conferences in Subukia.', image: '/lounge.jpg', Icon: Presentation },
  { title: 'Camping sites', note: 'Spend a night outdoors on the Solace grounds.', image: '/cabin3.jpg', Icon: Tent },
  { title: 'School CBE activities', note: 'Bring your school group to learn and take part in CBE activities.', image: '/grounds.jpg', Icon: GraduationCap },
  { title: 'Swimming pool & cottages', note: 'Make time for a swim, then unwind in a cottage.', image: 'photo-1576013551627-0cc20b96c2a7', Icon: Waves },
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
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation"><a href="#stay" onClick={closeMenu}>Stay</a><a href="#gallery" onClick={closeMenu}>Gallery</a><a href="#tours" onClick={closeMenu}>Tours</a><a href="#experiences" onClick={closeMenu}>Experiences</a><a href="#offerings" onClick={closeMenu}>What we offer</a><a href="#story" onClick={closeMenu}>Our story</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Plan your stay <Arrow /></a></nav>
    </header>

    <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg,rgba(13,38,66,.76),rgba(13,38,66,.4) 47%,rgba(13,38,66,.08)),url("/out2.jpg")` }}>
      <div className="hero-inner"><p className="kicker"><span /> YOUR PLACE IN SUBUKIA</p><h1>Stay awhile<br />at <em>Solace.</em></h1><p className="hero-copy">Come for a night away, a family gathering, a celebration, or simply a little room to breathe. There’s space for it here in Subukia.</p><div className="hero-actions"><a className="button light" href="#stay">Find your stay <Arrow /></a><a className="text-link" href="#story">Get to know Solace <span>↓</span></a></div></div>
      <span className="hero-scroll">SCROLL TO DISCOVER ↓</span><div className="hero-caption">01 / 03 <span /> A softer kind of getaway</div>
    </section>

    <section className="welcome section" id="story"><div className="welcome-aside"><span>01 — SUBUKIA, NAKURU</span><b>✳</b></div><div className="welcome-copy"><p className="eyebrow">WELCOME TO SOLACE</p><h2>A place to come<br />together and <em>feel at home.</em></h2><p>At Solace Garden Resort, you can settle into a room, spend time on the grounds, or bring your people together for a celebration or meeting. We’re here in Subukia, Nakuru, with a warm welcome and space to make the day your own.</p><a className="under-link" href="#experiences">Explore the grounds <Arrow /></a></div><div className="welcome-image" style={{ backgroundImage: 'url("/solace%20board.jpeg")' }}><span>WELCOME TO SUBUKIA</span></div></section>

    <section className="gallery section" id="gallery"><div className="section-heading"><div><p className="eyebrow">A GLIMPSE OF SOLACE</p><h2>Solace, just as <em>it is.</em></h2><p className="gallery-intro">A look around our rooms, garden, and grounds in Subukia. We look forward to welcoming you in person.</p></div><a className="under-link" href="#contact">Come see us <Arrow /></a></div><div className="gallery-grid">{galleryPhotos.map((photo) => <figure className="gallery-photo" key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /></figure>)}</div></section>

    <section className="stays section" id="stay"><div className="section-heading"><div><p className="eyebrow">ROOM TO REST</p><h2>Settle in at <em>Solace.</em></h2><p className="offerings-intro">Choose a cabin, a family stay, or a little more room outdoors. Get in touch and we’ll help you find the right fit.</p></div><a className="under-link" href="#contact">Ask about a stay <Arrow /></a></div><div className="stay-grid">{stays.map((stay) => <article className="stay-card" key={stay.no}><a href="#contact" className="stay-image" style={{ backgroundImage: `url(${stay.image.startsWith('/') ? stay.image : photo(stay.image)})` }} aria-label={`Ask about ${stay.name}`}><span className="tag">{stay.label}</span><span className="round-arrow"><Arrow /></span></a><div className="stay-meta"><span>{stay.no}</span><div><h3>{stay.name}</h3><p>{stay.note}</p></div></div></article>)}</div></section>

    <section className="offerings section" id="offerings"><div className="section-heading"><div><p className="eyebrow">WAYS TO SPEND YOUR TIME HERE</p><h2>Come for what <em>brings you.</em></h2><p className="offerings-intro">A wedding on the grounds, a meal with your group, a meeting, or a night away: tell us what you have in mind and we’ll help you plan it at Solace.</p></div><a className="under-link" href={`tel:${phone}`}>Ask us about a booking <Arrow /></a></div><div className="offering-grid">{offerings.map(({ title, note, image, Icon }, index) => <article className="offering-card" key={title}><div className="offering-photo"><img src={image.startsWith('/') ? image : photo(image, 760)} alt="" loading="lazy" /><span className="offering-number">0{index + 1}</span></div><div className="offering-content"><span className="offering-icon"><Icon size={22} strokeWidth={1.7} /></span><h3>{title}</h3><p>{note}</p><a href={`tel:${phone}`} aria-label={`Call about ${title}`}>Enquire <Arrow /></a></div></article>)}</div></section>

    <section className="tours section" id="tours"><div className="section-heading"><div><p className="eyebrow">OUT AND ABOUT FROM SUBUKIA</p><h2>Find your next <em>view.</em></h2><p className="tour-intro">Make time for the wider region: Thomson’s Falls, Lake Nakuru, Menengai Crater, and Lake Bogoria are all here to explore.</p></div><a className="under-link" href={`tel:${phone}`}>Ask about a tour <Arrow /></a></div><div className="tour-grid">{tours.map((tour, index) => <article className="tour-card" key={tour.name}><div className="tour-photo"><img src={commonsImage(tour.file)} alt={`${tour.name} in Kenya`} loading="lazy" /><span className="tour-number">0{index + 1}</span></div><div className="tour-details"><span className="tour-place">{tour.place}</span><h3>{tour.name}</h3><p>{tour.note}</p><small className="photo-credit">Photo: <a href={tour.source} target="_blank" rel="noreferrer">{tour.author} / Wikimedia Commons</a> · <a href={license} target="_blank" rel="noreferrer">CC BY-SA 4.0</a> · cropped</small></div></article>)}</div></section>

    <section className="experiences" id="experiences"><div className="experience-image" style={{ backgroundImage: `url(${photo('photo-1414235077428-338989a2e8c0')})` }} /><div className="experience-copy"><p className="eyebrow">MAKE YOURSELF AT HOME</p><h2>Time together,<br />your way at <em>Solace.</em></h2><p>Take a swim, stretch your legs on the grounds, share a meal, or bring everyone together for a special day. There’s room to make your own plans here.</p><div className="experience-list"><a href="#contact"><span>01</span> A swim and time outdoors <Arrow /></a><a href="#contact"><span>02</span> Meals with your people <Arrow /></a><a href="#contact"><span>03</span> Celebrations at Solace <Arrow /></a></div></div></section>

    <section className="gather section" id="gather"><div><p className="eyebrow">BRING YOUR PEOPLE TO SUBUKIA</p><h2>Make space for<br />a day <em>together.</em></h2><p>Bring family and friends for a celebration, gather a team to meet, or plan a day out at Solace. Tell us what you’re arranging and we’ll help you get started.</p><a className="button forest" href="#contact">Plan a gathering <Arrow /></a></div><div className="gather-image" style={{ backgroundImage: `url(${photo('photo-1519225421980-715cb0215aed')})` }}><span>ROOM TO CELEBRATE</span></div></section>

    <section className="quote"><div className="quote-mark">s<span>✳</span></div><p>Come as you are.<br /><em>There’s room at Solace.</em></p><a className="under-link" href="#contact">Plan your visit <Arrow /></a></section>

    <section className="contact section" id="contact"><div className="contact-copy"><p className="eyebrow">LET’S PLAN YOUR VISIT</p><h2>What brings<br />you to <em>Solace?</em></h2><p>Let us know whether you’re planning a stay, a gathering, or a day out in Subukia. We’ll get back to you about dates and details.</p><a className="contact-email" href={`tel:${phone}`}>Call Solace: 0799 241751 <Arrow /></a><p className="contact-location">Solace Garden Resort · Subukia, Nakuru, Kenya</p></div><form className="inquiry" onSubmit={sendInquiry}><div className="form-row"><label>Your name<input name="name" placeholder="How should we call you?" required /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label></div><label>Your phone number<input name="phone" type="tel" placeholder="+254 7XX XXX XXX" required /></label><div className="form-row"><label>Arriving<input name="arrival" type="date" required /></label><label>Leaving<input name="departure" type="date" required /></label></div><label>What are you planning?<select name="occasion" defaultValue="" required><option value="" disabled>Choose one</option>{offerings.map(({ title }) => <option key={title}>{title}</option>)}</select></label><button className="button forest" type="submit">{submitted ? 'Open email app again' : 'Send an enquiry'} <Arrow /></button>{submitted && <p className="success" role="status">Your email app should open with the enquiry ready to send. Direct online booking can be connected when you choose a booking service.</p>}</form></section>

    <footer className="footer"><a className="brand footer-brand" href="#home"><img src="/Solace%20logo.png" alt="The Solace Subukia — Serenity beyond imagination" /></a><p>Come as you are.<br />Leave a little lighter.</p><div className="footer-links"><a href="#stay">Stay</a><a href="#gallery">Gallery</a><a href="#tours">Tours</a><a href="#experiences">Experiences</a><a href="#offerings">What we offer</a><a href={`tel:${phone}`}>0799 241751</a><a className="facebook-link" href="https://www.facebook.com/the.solace.subukia" target="_blank" rel="noreferrer" aria-label="Visit Solace on Facebook" title="Solace on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="currentColor"/><path fill="#fff" d="M13.35 21v-8.2h2.76l.41-3.2h-3.17V7.56c0-.93.26-1.56 1.59-1.56h1.69V3.14c-.29-.04-1.3-.14-2.47-.14-2.44 0-4.11 1.49-4.11 4.23V9.6H7.3v3.2h2.75V21h3.3Z"/></svg></a></div><small>© {new Date().getFullYear()} Solace Resort</small></footer>
    <a className="whatsapp-float" href="https://wa.me/254799241751" target="_blank" rel="noreferrer" aria-label="Chat with Solace Resort on WhatsApp" title="Chat with Solace Resort on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.15 1.6 5.96L.12 24l6.32-1.66a11.9 11.9 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.89-11.88a11.82 11.82 0 0 0-3.48-8.42ZM12.1 21.76h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.87 9.87 0 0 1-1.52-5.24c0-5.47 4.45-9.92 9.93-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.03c0 5.48-4.45 9.93-9.93 9.93Zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" /></svg></a>
  </main>
}
