const monitorData = {
  label: "Monitor",
  color: ["Black", "Blue", "Red", "White"],
  panelType: {
    IPS: 150,
    VA: 128,
    OLED: 720,
  },
  refreshRate: {
    "60Hz": 1.0,
    "75Hz": 1.1,
    "120Hz": 1.3,
    "144Hz": 1.5,
    "165Hz": 1.6,
    "240Hz": 1.9,
    "365Hz": 2.5,
  },
  physicalSize: {
    '15"': 0.6,
    '17"': 0.75,
    '21"': 1.0,
    '24"': 1.1,
    '27"': 1.3,
    '32"': 1.62,
  },
  resolution: {
    "720p": 0.6,
    "1080p": 1.0,
    "2K": 1.25,
    "4K": 1.58,
  },
};

export default monitorData;
