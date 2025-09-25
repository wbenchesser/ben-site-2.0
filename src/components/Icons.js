import React from 'react';

export function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, fill: 'currentColor' };
  switch (name) {
    case 'mail':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
        </svg>
      );
    case 'github':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12.2c0 5.15 3.34 9.51 7.98 11.05.58.11.8-.25.8-.56 0-.28-.01-1.02-.02-2-3.24.72-3.93-1.58-3.93-1.58-.53-1.36-1.3-1.72-1.3-1.72-1.06-.74.08-.73.08-.73 1.17.08 1.79 1.21 1.79 1.21 1.04 1.8 2.73 1.28 3.4.98.11-.77.41-1.28.74-1.58-2.59-.3-5.32-1.32-5.32-5.87 0-1.3.46-2.36 1.21-3.19-.12-.3-.52-1.53.12-3.18 0 0 .98-.32 3.2 1.21a11.1 11.1 0 0 1 5.82 0c2.21-1.53 3.2-1.21 3.2-1.21.64 1.65.24 2.88.12 3.18.76.83 1.21 1.89 1.21 3.19 0 4.56-2.74 5.57-5.35 5.87.42.36.79 1.06.79 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12.2 11.5 11.5 0 0 0 12 .5z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.56c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.65H9.33V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.42-1.86 3.66 0 4.33 2.4 4.33 5.51v6.24zM5.34 7.44a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45z" />
        </svg>
      );
    default:
      return null;
  }
}

export function GridIcon() {
  return (
    <span className="menu-icon" aria-hidden>
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} />
      ))}
    </span>
  );
}
