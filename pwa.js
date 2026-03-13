(function () {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((registration) => {
        // Proactively check for updates (best-effort).
        registration.update().catch(() => {});

        // Auto-reload once a new SW takes control (avoids stale assets).
        let reloaded = false;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          if (reloaded) return;
          reloaded = true;
          window.location.reload();
        });
      })
      .catch(() => {});
  });
})();
