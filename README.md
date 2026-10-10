<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spotify Redirect</title>
    <style>
      html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        background: #000;
      }

      body {
        display: grid;
        place-items: center;
        color: #fff;
        font-family: Arial, sans-serif;
      }

      .content {
        display: grid;
        place-items: center;
        gap: 14px;
      }

      .loader {
        width: 30px;
        height: 30px;
        border: 3px solid rgba(255,255,255,0.2);
        border-top-color: #1db954;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      .text {
        color: rgba(255,255,255,0.7);
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  </head>
  <body>
    <div class="content">
      <div class="loader" aria-label="Indlæser Spotify"></div>
      <div class="text" id="message">Åbner Spotify</div>
    </div>

    <script>
      const params = new URLSearchParams(window.location.search);
      const spotifyUrl = params.get("url");
      const seconds = Number(params.get("seconds") || "10");

      const message = document.getElementById("message");
      message.textContent = `Spiller i ${seconds} sekunder`;

      if (!spotifyUrl) {
        window.location.replace("index.html");
      } else {
        setTimeout(() => {
          window.location.replace(decodeURIComponent(spotifyUrl));
        }, 1200);
      }
    </script>
  </body>
</html>

