import React from 'react';
import { galleryData } from '../data/gallery';
import useModalDialog from '../hooks/useModalDialog';
import '../App.css';

const focusPositions = {
  center: '50% 50%',
  top: '50% 0%',
  bottom: '50% 100%',
  left: '0% 50%',
  right: '100% 50%',
};

function GalleryPhoto({ src, preview, alt }) {
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  return (
    <div className="gallery-fullscreen-img" aria-busy={!loaded && !failed}>
      {!loaded && <img className="gallery-fullscreen-preview" src={preview} alt="" aria-hidden="true" />}
      <img className={`gallery-fullscreen-original${loaded ? ' is-loaded' : ''}`}
        src={src} alt={alt} decoding="sync"
        onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
      {failed && <span className="gallery-image-status" role="status">Full-size photo unavailable. Showing preview.</span>}
    </div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = React.useState(null);
  const dialogRef = useModalDialog(Boolean(active));
  const basePath = `${process.env.PUBLIC_URL || ''}/images/gallery`;

  const openImage = (section, image, event) => {
    const thumbnail = event.currentTarget.querySelector('img');
    setActive({ section, image, preview: thumbnail.currentSrc || thumbnail.src });
  };

  const closeActive = () => setActive(null);

  const activeSrc = active
    ? `${basePath}/${active.section.id}/${active.image.file}`
    : null;
  const activeAlt = active ? `${active.image.location} — ${active.image.date}` : '';

  return (
    <main className="page page-gallery">
      <div className="container">
        <h1 className="page-title">Gallery</h1>
        <p className="muted">
          A growing collection of photos and scrapbook snapshots of places and people I love.
        </p>

        {galleryData.map((section) => (
          <section key={section.id} className="gallery-section" id={section.id}>
            <h2 className="gallery-section-title">{section.title}</h2>
            <div className="gallery-grid">
              {section.images.map((image) => {
                const thumbnail = `${basePath}/thumbnails/${section.id}/${image.file}`;
                const focus = focusPositions[image.focus] || focusPositions.center;
                const altText = `${image.location} — ${image.date}`;

                return (
                  <figure key={`${section.id}-${image.file}`} className="gallery-card">
                    <button
                      type="button"
                      className="gallery-thumb-btn"
                      onClick={(event) => openImage(section, image, event)}
                      aria-label={`View ${image.location} full size`}
                    >
                      <div className="gallery-thumb">
                        <img
                          src={`${thumbnail}-480-v2.jpg`}
                          srcSet={`${thumbnail}-480-v2.jpg 480w, ${thumbnail}-960-v2.jpg 960w`}
                          sizes="(max-width: 573px) calc(100vw - 62px), (max-width: 839px) calc((100vw - 82px) / 2), (max-width: 1100px) calc((100vw - 102px) / 3), 333px"
                          alt={altText}
                          loading="lazy"
                          decoding="async"
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
        <dialog
          ref={dialogRef}
          className="gallery-fullscreen-overlay"
          aria-label={`Full-screen view: ${active.image.location}`}
          onCancel={(event) => { event.preventDefault(); closeActive(); }}
          onClick={closeActive}
        >
          <div className="gallery-fullscreen" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-fullscreen-close"
              onClick={closeActive}
              aria-label="Close full-screen image"
            >
              ×
            </button>
            <GalleryPhoto key={activeSrc} src={activeSrc} preview={active.preview} alt={activeAlt} />
            <div className="gallery-fullscreen-meta">
              <h3>{active.image.location}</h3>
              <p>{active.image.date}</p>
            </div>
          </div>
        </dialog>
      )}
    </main>
  );
}
