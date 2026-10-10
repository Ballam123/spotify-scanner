const demoTrackUrl = "https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC";

const hostPanel = document.getElementById("host-panel");
const playerPanel = document.getElementById("player-panel");
const tabs = document.querySelectorAll(".tab-btn");
const trackInput = document.getElementById("track-input");
const generateBtn = document.getElementById("generate-btn");
const fillDemoBtn = document.getElementById("fill-demo-btn");
const qrCodeContainer = document.getElementById("qr-code");
const generatedLink = document.getElementById("generated-link");
const scannerStatus = document.getElementById("scanner-status");

function switchTab(tabName) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("active", isActive);
  });

  hostPanel.classList.toggle("active", tabName === "host");
  playerPanel.classList.toggle("active", tabName === "player");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

function formatSpotifyUrl(rawValue) {
  const value = rawValue.trim();

  if (!value) {
    return "";
  }

  const trackMatch = value.match(/(?:track[/:])([A-Za-z0-9]{10,})/i);
  const spotifyId = value.match(/^[A-Za-z0-9]{10,}$/);

  if (trackMatch && trackMatch[1]) {
    return `https://open.spotify.com/track/${trackMatch[1]}`;
  }

  if (spotifyId && spotifyId[0]) {
    return `https://open.spotify.com/track/${spotifyId[0]}`;
  }

  if (value.includes("spotify.com/track/")) {
    return value;
  }

  if (value.startsWith("spotify:track:")) {
    return `https://open.spotify.com/track/${value.replace("spotify:track:", "")}`;
  }

  return value;
}

function renderQrCode(url) {
  if (!url) {
    qrCodeContainer.innerHTML = "";
    generatedLink.classList.add("hidden");
    generatedLink.textContent = "";
    return;
  }

  const qr = qrcode(0, "L");
  qr.addData(url);
  qr.make();
  qrCodeContainer.innerHTML = qr.createImgTag(10, 10);

  generatedLink.textContent = url;
  generatedLink.classList.remove("hidden");
}

function generateTrackLink() {
  const normalizedUrl = formatSpotifyUrl(trackInput.value);

  if (!normalizedUrl) {
    scannerStatus.textContent = "Indtast et Spotify-link først.";
    return;
  }

  renderQrCode(normalizedUrl);
  scannerStatus.textContent = `QR-kode er klar til: ${normalizedUrl}`;
}

generateBtn.addEventListener("click", generateTrackLink);
fillDemoBtn.addEventListener("click", () => {
  trackInput.value = demoTrackUrl;
  generateTrackLink();
});

function startScanner() {
  const reader = document.getElementById("reader");

  if (!reader) {
    return;
  }

  const scanner = new Html5Qrcode("reader");

  Html5Qrcode.getCameras()
    .then((devices) => {
      if (!devices || devices.length === 0) {
        scannerStatus.textContent = "Ingen kamera fundet. Tilslut telefonens kamera eller prøv igen.";
        return;
      }

      const cameraId = devices[0].id;

      scanner
        .start(
          cameraId,
          {
            fps: 10,
            qrbox: { width: 260, height: 260 },
          },
          (decodedText) => {
            scannerStatus.textContent = `Scannet: ${decodedText}`;
            const destination = formatSpotifyUrl(decodedText);

            if (destination) {
              setTimeout(() => {
                window.location.href = destination;
              }, 500);
            }
          },
          (errorMessage) => {
            console.warn(errorMessage);
          }
        )
        .catch((error) => {
          scannerStatus.textContent = `Kamera kunne ikke starte: ${error}`;
        });
    })
    .catch((error) => {
      scannerStatus.textContent = `Kameraadgang fejlede: ${error}`;
    });
}

window.addEventListener("DOMContentLoaded", () => {
  renderQrCode(formatSpotifyUrl(trackInput.value));
  switchTab("host");
  startScanner();
});

window.addEventListener("load", () => {
  generateTrackLink();
});
