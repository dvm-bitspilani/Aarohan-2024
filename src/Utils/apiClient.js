import axios from "axios";

// Fallback used when VITE_API_BASE_URL is not provided at build time.
const DEFAULT_API_BASE_URL = "https://api-aarohan.bits-apogee.org/aarohan";

// Central API client. baseURL is read from VITE_API_BASE_URL, which Vite
// inlines at build time (see .env.production / .env.development). If that var
// is missing, fall back to the production backend so requests never resolve
// against the Cloudflare-served frontend origin by accident.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL,
  // Backend uses Django session cookies. The app now lives on a different
  // origin than the API, so cross-origin cookies must be sent explicitly.
  withCredentials: true,
});

// Read a cookie value by name (e.g. Django's csrftoken).
function getCookie(name) {
  const match = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return match ? decodeURIComponent(match[1]) : null;
}

// Django CSRF: echo the csrftoken cookie back as the X-CSRFToken header on
// state-changing requests. Safe methods (GET/HEAD/OPTIONS) don't need it.
apiClient.interceptors.request.use((config) => {
  const method = (config.method || "get").toUpperCase();
  if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
    const csrfToken = getCookie("csrftoken");
    if (csrfToken) {
      config.headers = config.headers || {};
      config.headers["X-CSRFToken"] = csrfToken;
    }
  }
  return config;
});

export default apiClient;
