:root {
  --bg: #0d1117;
  --bg-alt: #161b22;
  --panel: rgba(22, 27, 34, 0.9);
  --panel-strong: #111827;
  --card: #1a1f2e;
  --line: rgba(255, 255, 255, 0.1);
  --text: #f3f4f6;
  --muted: #b5bfd2;
  --green: #1db954;
  --green-soft: rgba(29, 185, 84, 0.15);
  --amber: #ffbf47;
  --shadow: 0 16px 30px rgba(0, 0, 0, 0.32);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: Inter, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #1d2e3d 0%, var(--bg) 35%, #070b12 100%);
  color: var(--text);
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

button, input {
  font: inherit;
}

.app-shell {
  width: min(100%, 430px);
  min-height: 820px;
  border-radius: 28px;
  background: rgba(13, 17, 23, 0.88);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.topbar {
  padding: 18px 20px 14px;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--green), #2ad66e);
  color: #07130d;
  font-size: 24px;
  font-weight: 800;
}

.eyebrow {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

h1 {
  margin: 2px 0 0;
  font-size: 1.7rem;
}

.phone-screen {
  padding: 18px 18px 22px;
}

.mode-switch {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 18px;
}

.tab-btn {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.tab-btn.active {
  background: var(--green-soft);
  border-color: rgba(29, 185, 84, 0.4);
  color: #d8ffe6;
}

.panel {
  display: none;
}

.panel.active {
  display: block;
}

.notice {
  margin-bottom: 16px;
  border: 1px solid rgba(29, 185, 84, 0.2);
  background: rgba(29, 185, 84, 0.08);
  color: #ddfce8;
  border-radius: 14px;
  padding: 12px 14px;
  line-height: 1.5;
  font-size: 0.92rem;
}

.notice.warn {
  border-color: rgba(255, 191, 71, 0.25);
  background: rgba(255, 191, 71, 0.08);
  color: #ffe3ab;
}

label {
  display: block;
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

input {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px 14px;
  color: var(--text);
  font-size: 1rem;
  margin-bottom: 14px;
}

input::placeholder {
  color: #8c98ad;
}

.button-row {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

button.primary,
button.secondary {
  flex: 1;
  padding: 13px 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 700;
}

button.primary {
  background: linear-gradient(135deg, var(--green), #31d771);
  color: #07130d;
}

button.secondary {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--text);
}

.generated-link {
  margin-bottom: 14px;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  font-size: 0.82rem;
  word-break: break-all;
  color: #dfe9ff;
}

.hidden {
  display: none;
}

.qr-wrap {
  display: grid;
  place-items: center;
  margin-top: 10px;
  border-radius: 18px;
  background: #f3f3f3;
  padding: 18px;
  min-height: 220px;
}

#qr-code {
  display: grid;
  place-items: center;
  width: 100%;
  max-width: 240px;
}

#qr-code img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
}

.small-text {
  margin-top: 16px;
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.82rem;
}

#reader {
  width: 100%;
  min-height: 360px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

#reader video {
  width: 100%;
  border-radius: 18px;
}

.status-box {
  margin-top: 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--muted);
  padding: 12px 14px;
  font-size: 0.9rem;
}

@media (max-width: 450px) {
  body {
    padding: 0;
  }

  .app-shell {
    min-height: 100vh;
    border-radius: 0;
    width: 100%;
  }
}
