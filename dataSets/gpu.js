const gpuData = {
  label: "Graphics card",
  color: ["Black", "Blue", "Red", "White"],
  series: {
    "3000 Series": {
      "RTX 3060": 279,
      "RTX 3070": 449,
      "RTX 3080": 699,
    },
    "4000 Series": {
      "RTX 4060": 336,
      "RTX 4070": 529,
      "RTX 4080": 1199,
    },
    "5000 Series": {
      "RTX 5060": 379,
      "RTX 5070": 599,
      "RTX 5080": 1299,
    },
  },
  variants: {
    None: 1.0,
    Ti: 1.2,
    Super: 1.35,
  },
  vram: {
    "8 Go": 1.0,
    "12 Go": 1.15,
    "16 Go": 1.3,
    "24 Go": 1.6,
  },
};

export default gpuData;
