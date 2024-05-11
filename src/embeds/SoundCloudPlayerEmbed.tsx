function SoundCloudPlayerEmbed() {
  return (
    <iframe
      title="SoundCloud Player Embed"
      className="z-10 max-w-2xl"
      width="100%"
      height="166"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1819189959&color=%239600fa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
    </iframe>
  );
};

export default SoundCloudPlayerEmbed;