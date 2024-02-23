'use client';
import Style from './ToggleButton.module.css';

export default function ToggleButton() {
  return (
    <button
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      className={Style.ToggleButton}
      onClick={() => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';

        setPreference();
      }}
      suppressHydrationWarning
    ></button>
  );
}
