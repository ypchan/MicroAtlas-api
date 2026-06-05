const taxaTiles = Array.from({ length: 144 }, (_, index) => {
  const cluster = index % 11;
  const intensity = (index * 17 + Math.floor(index / 12) * 9) % 100;
  const palette = [
    "bg-cyan-300",
    "bg-teal-400",
    "bg-emerald-300",
    "bg-sky-400",
    "bg-indigo-300",
    "bg-lime-300",
    "bg-amber-300"
  ];

  return {
    color: palette[cluster % palette.length],
    opacity: 0.28 + intensity / 145
  };
});

const samplePoints = [
  { left: "16%", top: "38%", size: "h-3 w-3", color: "bg-cyan-300" },
  { left: "29%", top: "54%", size: "h-2.5 w-2.5", color: "bg-emerald-300" },
  { left: "47%", top: "32%", size: "h-3.5 w-3.5", color: "bg-sky-300" },
  { left: "57%", top: "58%", size: "h-2.5 w-2.5", color: "bg-amber-300" },
  { left: "70%", top: "43%", size: "h-3 w-3", color: "bg-teal-300" },
  { left: "82%", top: "66%", size: "h-2.5 w-2.5", color: "bg-indigo-300" }
];

const legend = [
  ["Human", "bg-cyan-300"],
  ["Soil", "bg-emerald-300"],
  ["Marine", "bg-sky-300"],
  ["Plant", "bg-lime-300"],
  ["Archaea", "bg-amber-300"]
];

export function MicrobiomeAtlasVisual() {
  return (
    <div className="microbiome-visual" aria-label="MicroAtlas data visualization preview">
      <div className="microbiome-visual__glow" />
      <div className="microbiome-visual__topbar">
        <span>MicroAtlas explorer</span>
        <span>ASV compendium</span>
      </div>

      <div className="microbiome-visual__body">
        <div className="microbiome-visual__map">
          <div className="microbiome-visual__map-grid" />
          {samplePoints.map((point, index) => (
            <span
              key={index}
              className={`microbiome-visual__point ${point.size} ${point.color}`}
              style={{ left: point.left, top: point.top }}
            />
          ))}
          <div className="microbiome-visual__map-label">Global public 16S coverage</div>
        </div>

        <div className="microbiome-visual__matrix">
          {taxaTiles.map((tile, index) => (
            <span key={index} className={`microbiome-visual__tile ${tile.color}`} style={{ opacity: tile.opacity }} />
          ))}
        </div>
      </div>

      <div className="microbiome-visual__footer">
        <div className="flex flex-wrap gap-2">
          {legend.map(([label, color]) => (
            <span key={label} className="microbiome-visual__legend">
              <span className={`h-2 w-2 rounded-full ${color}`} />
              {label}
            </span>
          ))}
        </div>
        <div className="microbiome-visual__readout">
          <span>97% ID</span>
          <span>controlled search</span>
        </div>
      </div>
    </div>
  );
}
