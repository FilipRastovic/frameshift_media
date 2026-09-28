export default function App() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">Frame<span>Shift</span> Media</a>
        <ul className="nav-links">
          <li><a href="#usluge">Usluge</a></li>
          <li><a href="#rezultati">Rezultati</a></li>
          <li><a href="#paketi">Paketi</a></li>
          <li><a href="#kontakt" className="nav-cta">Zakažite poziv</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge">Ekskluzivno za auto salone i auto placeve</div>
          <h1>
            Vaša vozila<br />
            <span className="accent">prodaju se</span><br />
            <span className="line-2">pre nego što uđu u salon</span>
          </h1>
          <p className="hero-desc">
            Profesionalni vizuelni marketing koji pretvara vaš inventar u digitalne prodajne magnete — fotografija, video i upravljanje društvenim mrežama dizajnirano isključivo za automobilsku industriju.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn-primary">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              Besplatna konsultacija
            </a>
            <a href="#usluge" className="btn-secondary">
              Pogledajte usluge
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-num">3×</div>
            <div className="stat-label">Više upita sa oglasa</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">48h</div>
            <div className="stat-label">Do isporuke sadržaja</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">200+</div>
            <div className="stat-label">Vozila snimljenih</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="usluge">
        <div className="services-header">
          <div>
            <span className="section-tag">// Naše usluge</span>
            <h2 className="section-title">Sve što vam treba.<br />Na jednom mestu.</h2>
          </div>
          <p className="section-sub">
            Od prvog klika do potpisanog ugovora — kreiramo vizuelni ekosistem koji vozi kupce direktno do vas.
          </p>
        </div>
        <div className="services-grid">

          <div className="service-card">
            <span className="service-number">01</span>
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="3"/></svg>
            </div>
            <h3>Fotografija vozila</h3>
            <p>Studio i eksterijerna fotografija koja ističe svaki detalj. Profesionalna obrada, konzistentan vizuelni identitet za ceo vaš inventar.</p>
            <div className="service-tags">
              <span className="tag">360° prikaz</span>
              <span className="tag">Studio setup</span>
              <span className="tag">Retuširanje</span>
              <span className="tag">Oglasni format</span>
            </div>
          </div>

          <div className="service-card">
            <span className="service-number">02</span>
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>
            </div>
            <h3>Video produkcija</h3>
            <p>Dinamični video oglasi, walk-around prezentacije i short-form sadržaj za društvene mreže koji zadržava pažnju i generiše klikove.</p>
            <div className="service-tags">
              <span className="tag">Reels / TikTok</span>
              <span className="tag">Walk-around</span>
              <span className="tag">Test vožnja</span>
              <span className="tag">Drone snimanje</span>
            </div>
          </div>

          <div className="service-card">
            <span className="service-number">03</span>
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>
            </div>
            <h3>Društvene mreže</h3>
            <p>Potpuno upravljanje vašim Instagram, Facebook i TikTok profilima. Kreiranje sadržaja, objave, komuniciranje sa zainteresovanim kupcima.</p>
            <div className="service-tags">
              <span className="tag">Instagram</span>
              <span className="tag">Facebook</span>
              <span className="tag">TikTok</span>
              <span className="tag">Analitika</span>
            </div>
          </div>

          <div className="service-card">
            <span className="service-number">04</span>
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </div>
            <h3>Optimizacija prodaje</h3>
            <p>Targetirani Meta i Google oglasi koji dovode kvalifikovane kupce. A/B testiranje kreativa, retargeting i praćenje konverzija na vašim oglasniku.</p>
            <div className="service-tags">
              <span className="tag">Meta Ads</span>
              <span className="tag">Remarketing</span>
              <span className="tag">Lead gen</span>
              <span className="tag">Konverzije</span>
            </div>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section>
        <div className="why">
          <div className="why-visual">
            <div className="why-board">
              <div className="why-board-header">
                <div className="dot dot-r"></div>
                <div className="dot dot-y"></div>
                <div className="dot dot-g"></div>
                <span className="board-title">Dashboard — Mesečni izveštaj</span>
              </div>
              <div className="why-board-body">
                <div className="metric-row">
                  <span className="metric-label">Organski doseg</span>
                  <div className="bar-wrap"><div className="bar-fill" style={{ width: '82%' }}></div></div>
                  <span className="metric-value up">+82%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Upiti za vozila</span>
                  <div className="bar-wrap"><div className="bar-fill" style={{ width: '67%' }}></div></div>
                  <span className="metric-value up">+67%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Cost per lead</span>
                  <div className="bar-wrap"><div className="bar-fill" style={{ width: '44%', background: '#22c55e' }}></div></div>
                  <span className="metric-value" style={{ color: '#22c55e' }}>−44%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Vreme prodaje</span>
                  <div className="bar-wrap"><div className="bar-fill" style={{ width: '35%', background: '#22c55e' }}></div></div>
                  <span className="metric-value" style={{ color: '#22c55e' }}>−35%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Konverzija oglasa</span>
                  <div className="bar-wrap"><div className="bar-fill" style={{ width: '91%' }}></div></div>
                  <span className="metric-value red">3.2×</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="section-tag">// Zašto mi</span>
            <h2 className="section-title">Razumemo<br />auto tržište.</h2>
            <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
              Nismo opšta agencija koja radi sve i svašta. Specijalizovani smo isključivo za automobilsku industriju.
            </p>
            <div className="why-points">
              <div className="why-point">
                <div className="why-point-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div>
                  <h4>Auto-specifičan pristup</h4>
                  <p>Svaki kadar, svaki caption i svaki oglas pišemo sa razumevanjem kako kupac automobila donosi odluku.</p>
                </div>
              </div>
              <div className="why-point">
                <div className="why-point-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <h4>Isporuka za 48 sati</h4>
                  <p>Snimimo vozilo danas, obrađeni materijali su spremni za objavljivanje za 48 sati. Inventar ne čeka.</p>
                </div>
              </div>
              <div className="why-point">
                <div className="why-point-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <div>
                  <h4>Merljivi rezultati</h4>
                  <p>Mesečni izveštaji sa jasnim KPI-evima. Znate tačno koliko upita i konverzija je generisao vaš sadržaj.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="rezultati">
        <span className="section-tag">// Rezultati</span>
        <h2 className="section-title">Brojke govore.</h2>
        <div className="results-grid">
          <div className="result-cell">
            <div className="result-num">200+</div>
            <div className="result-label">Vozila snimljena</div>
          </div>
          <div className="result-cell">
            <div className="result-num">3×</div>
            <div className="result-label">Prosečan rast upita</div>
          </div>
          <div className="result-cell">
            <div className="result-num">−40%</div>
            <div className="result-label">Vreme na stoku</div>
          </div>
          <div className="result-cell">
            <div className="result-num">98%</div>
            <div className="result-label">Zadovoljnih salona</div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <span className="section-tag">// Kako radimo</span>
        <h2 className="section-title">Jednostavan proces.<br />Maksimalni efekat.</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-num">01</div>
            <h4>Analiza i strategija</h4>
            <p>Analiziramo vaš inventar, konkurenciju i ciljna tržišta. Definišemo vizuelni identitet vašeg salona.</p>
          </div>
          <div className="process-step">
            <div className="step-num">02</div>
            <h4>Snimanje i produkcija</h4>
            <p>Dolazimo kod vas. Foto i video snimanje kompletnog inventara, studio kvalitet na licu mesta.</p>
          </div>
          <div className="process-step">
            <div className="step-num">03</div>
            <h4>Objave i oglašavanje</h4>
            <p>Kreiramo i vodimo kampanje na svim relevantnim platformama. Svaki oglas ciljamo precizno.</p>
          </div>
          <div className="process-step">
            <div className="step-num">04</div>
            <h4>Praćenje i optimizacija</h4>
            <p>Kontinuirano pratimo performanse i optimizujemo. Mesečni izveštaj sa konkretnim rezultatima.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <span className="section-tag">// Klijenti govore</span>
        <h2 className="section-title">Salone koji su<br />već promenili igru.</h2>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="quote-mark">"</div>
            <p className="testi-text">Od kad smo počeli da radimo sa FrameShift Media, broj poziva sa oglasa nam se utrostručio. Fotografije su na drugom nivou — kupci dolaze već uvereni.</p>
            <div className="testi-author">
              <div className="testi-avatar">MN</div>
              <div>
                <div className="testi-name">Marko Nikolić</div>
                <div className="testi-role">Vlasnik, Auto Salon Nikolić — Beograd</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="quote-mark">"</div>
            <p className="testi-text">Naš Instagram profil je biomrtav. Za 3 meseca smo prešli sa 400 na 8.400 pratilaca i prodali 6 auta direktno preko DM-a. Neverovatno.</p>
            <div className="testi-author">
              <div className="testi-avatar">JP</div>
              <div>
                <div className="testi-name">Jovana Petrović</div>
                <div className="testi-role">Menadžer prodaje, AutoPro Plus — Novi Sad</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="quote-mark">"</div>
            <p className="testi-text">Video sadržaj koji su napravili za naš plac je potpuno promenio kako nas kupci doživljavaju. Deluje profesionalno kao najveći dileri u regionu.</p>
            <div className="testi-author">
              <div className="testi-avatar">DS</div>
              <div>
                <div className="testi-name">Dejan Stanković</div>
                <div className="testi-role">Vlasnik, DS Auto Plac — Kragujevac</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="paketi">
        <span className="section-tag">// Paketi</span>
        <h2 className="section-title">Izaberite paket<br />koji vam odgovara.</h2>
        <p className="section-sub" style={{ marginTop: '0.5rem' }}>Svaki paket uključuje mesečni izveštaj i dedikovanog account managera.</p>
        <div className="packages-grid">

          <div className="package-card">
            <div className="package-name">Starter</div>
            <div className="package-title">Auto Baza</div>
            <ul className="package-features">
              <li>Do 15 vozila mesečno — foto</li>
              <li>Osnovna obrada fotografija</li>
              <li>Objave na 2 platforme</li>
              <li>Mesečni izveštaj</li>
              <li>Podrška via email</li>
            </ul>
            <a href="#kontakt" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Zakaži razgovor</a>
          </div>

          <div className="package-card featured">
            <div className="featured-badge">Najpopularnije</div>
            <div className="package-name">Pro</div>
            <div className="package-title">Auto Pro</div>
            <ul className="package-features">
              <li>Do 40 vozila mesečno — foto + video</li>
              <li>Profesionalna obrada i retuširanje</li>
              <li>Upravljanje 3 platforme</li>
              <li>Meta Ads kampanja (do 500€ budžet)</li>
              <li>Nedeljne objave i Story sadržaj</li>
              <li>Prioritetna podrška</li>
            </ul>
            <a href="#kontakt" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Zakaži razgovor</a>
          </div>

          <div className="package-card">
            <div className="package-name">Enterprise</div>
            <div className="package-title">Auto Elite</div>
            <ul className="package-features">
              <li>Neograničen broj vozila</li>
              <li>Foto, video i drone snimanje</li>
              <li>Kompletno vođenje svih profila</li>
              <li>Multi-platform Ad kampanje</li>
              <li>Dedicated account manager</li>
              <li>Prilagođena strategija</li>
            </ul>
            <a href="#kontakt" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Kontaktirajte nas</a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="kontakt">
        <div className="cta-inner">
          <span className="section-tag">// Sledeći korak</span>
          <h2 className="section-title">Spremni da<br />prodajete brže?</h2>
          <p className="section-sub">
            Ostavite vaš broj ili email — javimo se u roku od 24 sata za besplatnu konsultaciju bez obaveza.
          </p>
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input className="cta-input" type="text" placeholder="Vaš broj telefona ili email" />
            <a href="#" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Pošaljite →</a>
          </form>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '1rem' }}>Bez spam-a. Javimo se isključivo zbog dogovaranja konsultacije.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="footer-logo">Frame<span>Shift</span> Media</div>
          <p className="footer-tagline">Vizuelni marketing za automobilsku industriju</p>
        </div>
        <ul className="footer-links">
          <li><a href="#usluge">Usluge</a></li>
          <li><a href="#rezultati">Rezultati</a></li>
          <li><a href="#paketi">Paketi</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
        <div className="footer-copy">
          <p>© 2025 FrameShift Media. Sva prava zadržana.</p>
          <div className="social-links">
            <a href="#" className="social-link" title="Instagram">
              <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" className="social-link" title="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" className="social-link" title="TikTok">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
