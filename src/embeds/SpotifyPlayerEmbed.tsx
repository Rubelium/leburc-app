function SpotifyPlayerEmbed() {
  return (
    <iframe
      title="Spotify Player Embed"
      className="z-10 max-w-2xl"
      style={{ borderRadius: "12px" }}
      width="37%"
      height="200"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      src="https://open.spotify.com/embed/playlist/6ygw36lSc9FjqEARlTgems?utm_source=generator&theme=0">
    </iframe>
  );
};

export default SpotifyPlayerEmbed;
