import React from 'react';
import { galleryData } from '../data/gallery';
import '../App.css';

const focusPositions = {
  center: '50% 50%',
  top: '50% 0%',
  bottom: '50% 100%',
  left: '0% 50%',
  right: '100% 50%',
};

export default function GalleryPage() {
  const [active, setActive] = React.useState(null);
  const closeButtonRef = React.useRef(null);
  const lastFocusedRef = React.useRef(null);

  React.useEffect(() => {
    if (!active) return undefined;
    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        setActive(null);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [active]);

  React.useEffect(() => {
    if (active) {
      closeButtonRef.current?.focus();
    } else {
      lastFocusedRef.current?.focus?.();
    }
  }, [active]);

  const openImage = (section, image) => {
    lastFocusedRef.current = document.activeElement;
    setActive({ section, image });
  };

  const closeActive = () => setActive(null);

  const activeSrc = active ? `/images/gallery/${active.section.id}/${active.image.file}` : null;
  const activeAlt = active ? `${active.image.location} — ${active.image.date}` : '';

  return (
    <main className="page page-gallery">
      <div className="container">
        <h1 className="page-title">Gallery</h1>
        <p className="muted">
          A growing collection of photos and scrapbook snapshots from places and people I love.
        </p>

        {galleryData.map((section) => (
          <section key={section.id} className="gallery-section" id={section.id}>
            <h2 className="gallery-section-title">{section.title}</h2>
            <div className="gallery-grid">
              {section.images.map((image) => {
                const src = `/images/gallery/${section.id}/${image.file}`;
                const focus = focusPositions[image.focus] || focusPositions.center;
                const altText = `${image.location} — ${image.date}`;

                return (
                  <figure key={`${section.id}-${image.file}`} className="gallery-card">
                    <button
                      type="button"
                      className="gallery-thumb-btn"
                      onClick={() => openImage(section, image)}
                      aria-label={`View ${image.location} full size`}
                    >
                      <div className="gallery-thumb">
                        <img
                          src={src}
                          alt={altText}
                          loading="lazy"
                          style={{ objectPosition: focus }}
                        />
                      </div>
                    </button>
                    <figcaption className="gallery-meta">
                      <span className="gallery-location">{image.location}</span>
                      <span className="gallery-date">{image.date}</span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {active && (
        <div
          className="gallery-fullscreen-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Full-screen view: ${active.image.location}`}
          onClick={closeActive}
        >
          <div className="gallery-fullscreen" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-fullscreen-close"
              onClick={closeActive}
              aria-label="Close full-screen image"
              ref={closeButtonRef}
            >
              ×
            </button>
            <div className="gallery-fullscreen-img">
              <img src={activeSrc} alt={activeAlt} />
            </div>
            <div className="gallery-fullscreen-meta">
              <h3>{active.image.location}</h3>
              <p>{active.image.date}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
