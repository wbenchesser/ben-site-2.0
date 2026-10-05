import { useEffect, useRef } from 'react';

// Native modal dialogs provide focus containment and make the background inert.
export default function useModalDialog(open) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return undefined;
    const trigger = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    const containTab = (event) => {
      if (event.key !== 'Tab') return;
      const items = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')]
        .filter((item) => item.getClientRects().length);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    dialog.addEventListener('keydown', containTab);
    return () => {
      dialog.removeEventListener('keydown', containTab);
      dialog.close();
      document.body.style.overflow = overflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [open]);
  return ref;
}
