const ICNARI_NEWS_LINKS = [
  {
    label: "LiveHindustan — International conference begins at NIT",
    url: "https://www.livehindustan.com/bihar/patna/story-international-conference-on-adaptive-research-and-innovations-begins-at-nit-201772813786672.html#google_vignette",
    type: "News",
  },
  {
    label: "YouTube video 1",
    url: "https://youtu.be/VuxfBQnYxn8?si=FDseTotTNKjddNwi",
    type: "Video",
  },
  {
    label: "YouTube video 2",
    url: "https://youtu.be/xtWpJcI0XYE",
    type: "Video",
  },
  {
    label: "YouTube video 3",
    url: "https://youtu.be/TULbvBfE6l8?si=2QWuevXdWC-5uG5N",
    type: "Video",
  },
  {
    label: "Facebook video",
    url: "https://www.facebook.com/share/v/1HVdWVhUxD/",
    type: "Video",
  },
  {
    label: "YouTube video 4",
    url: "https://youtu.be/tOamkOp06m8",
    type: "Video",
  },
  {
    label: "YouTube video 5",
    url: "https://youtu.be/_xNLZem1Ojk",
    type: "Video",
  },
  {
    label: "YouTube video 6",
    url: "https://youtu.be/TtMq2ZlNzZo?si=g4wOBRJIf_RSe2Fc",
    type: "Video",
  },
];

function getHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function getYouTubeId(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return u.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (u.pathname === "/watch") return u.searchParams.get("v") || "";
      const embedMatch = u.pathname.match(/^\/embed\/([^/?#]+)/);
      if (embedMatch) return embedMatch[1] || "";
      const shortsMatch = u.pathname.match(/^\/shorts\/([^/?#]+)/);
      if (shortsMatch) return shortsMatch[1] || "";
    }
  } catch {
    // ignore
  }
  return "";
}

function getThumbnailUrl(url) {
  const youtubeId = getYouTubeId(url);
  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }

  const host = getHostname(url);
  if (host) {
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;
  }

  return "";
}

function LinkCard({ item }) {
  const hostname = getHostname(item.url);
  const thumb = getThumbnailUrl(item.url);
  const youtubeId = getYouTubeId(item.url);
  const isYouTube = Boolean(youtubeId);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="aspect-video bg-gray-100">
        {thumb ? (
          <img
            src={thumb}
            alt={item.label}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // If a YouTube thumb fails (rare), fall back to favicon.
              const fallbackHost = getHostname(item.url);
              if (!fallbackHost) return;
              e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
                fallbackHost
              )}&sz=128`;
              e.currentTarget.className = "w-full h-full object-contain p-8";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No preview
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="font-semibold text-gray-900 group-hover:underline">
          {item.label}
        </div>
        <div className="text-sm text-gray-600 mt-1">
          {item.type}
          {isYouTube ? " • YouTube" : ""}
          {hostname ? ` • ${hostname}` : ""}
        </div>
      </div>
    </a>
  );
}

export default function IcnariInNews() {
  return (
    <section className="bg-white py-16 px-4 mt-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          ICNARI in news
        </h1>
        <p className="text-gray-700 mt-2">
          Media coverage and video links related to ICNARI-2026.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ICNARI_NEWS_LINKS.map((item) => (
            <LinkCard key={item.url} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
