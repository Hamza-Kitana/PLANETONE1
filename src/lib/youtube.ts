/** Build a YouTube embed URL from an ID or watch URL. */
export function getYoutubeEmbedUrl(source: string, autoplay = false): string {
  const id = extractYoutubeId(source);
  if (!id) return source;
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    ...(autoplay ? { autoplay: "1" } : {}),
  });
  return `https://www.youtube.com/embed/${id}?${params}`;
}

export function getYoutubeWatchUrl(source: string): string | null {
  const id = extractYoutubeId(source);
  return id ? `https://www.youtube.com/watch?v=${id}` : null;
}

export function extractYoutubeId(source: string): string | null {
  if (/^[\w-]{11}$/.test(source)) return source;
  try {
    const url = new URL(source);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1).split("/")[0] ?? null;
    if (url.hostname.includes("youtube.com")) return url.searchParams.get("v");
  } catch {
    return null;
  }
  return null;
}

export function getYoutubeThumbnail(source: string): string | null {
  const id = extractYoutubeId(source);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}
