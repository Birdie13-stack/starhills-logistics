"use client";

export default function YouTubeEmbed({ videoId, autoplay = false }) {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&controls=1&modestbranding=1${
          autoplay ? "&autoplay=1&mute=1" : ""
        }`}
        className="w-full h-full"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
