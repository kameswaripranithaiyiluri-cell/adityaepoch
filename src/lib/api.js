export function getApiUrl(path) {
  const apiBase = import.meta.env.VITE_BACKEND_URL?.trim();

  if (!apiBase) return path;

  return new URL(path, `${apiBase.replace(/\/+$/, '')}/`).toString();
}