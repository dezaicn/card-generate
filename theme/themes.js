const THEMES = [
  {
    name: "深海蓝",
    fontTitle: "'Noto Sans SC', sans-serif", fontBody: "'Noto Sans SC', sans-serif",
    bgCover: 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)', bgContent: '#ffffff',
    colorTitleCover: '#ffffff', colorBodyCover: '#e5e7eb',
    colorTitleContent: '#005bea', colorBodyContent: '#1f2937',
    maskCover: 0.1, maskContent: 0.0,
    hueRange: [190, 240] // 色相范围 (蓝/青)
  },
  {
    name: "商务黑",
    fontTitle: "'Noto Sans SC', sans-serif", fontBody: "'Noto Sans SC', sans-serif",
    bgCover: 'linear-gradient(135deg, #434343 0%, #000000 100%)', bgContent: '#111827',
    colorTitleCover: '#ffffff', colorBodyCover: '#9ca3af',
    colorTitleContent: '#e5e7eb', colorBodyContent: '#9ca3af',
    maskCover: 0.3, maskContent: 0.0,
    hueRange: [0, 360], // 黑色系, 色相不重要, 亮度低
    lightnessRange: [10, 30] // 特殊：亮度范围
  },
  {
    name: "活力橙",
    fontTitle: "'ZCOOL KuaiLe', cursive", fontBody: "'LXGW WenKai', cursive",
    bgCover: 'linear-gradient(135deg, #fde047 0%, #f97316 100%)', bgContent: '#fffaf0',
    colorTitleCover: '#ffffff', colorBodyCover: '#ffffff',
    colorTitleContent: '#f97316', colorBodyContent: '#333333',
    maskCover: 0.2, maskContent: 0.0,
    hueRange: [15, 50] // 色相范围 (橙/黄)
  },
  {
    name: "清新绿",
    fontTitle: "'Noto Serif SC', serif", fontBody: "'Noto Sans SC', sans-serif",
    bgCover: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', bgContent: '#f5fffa',
    colorTitleCover: '#006400', colorBodyCover: '#2F4F2F',
    colorTitleContent: '#006400', colorBodyContent: '#1f2937',
    maskCover: 0.0, maskContent: 0.0,
    hueRange: [100, 170] // 色相范围 (绿/青)
  },
  {
    name: "雅致紫",
    fontTitle: "'Noto Serif SC', serif", fontBody: "'Noto Sans SC', sans-serif",
    bgCover: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', bgContent: '#fdfbff',
    colorTitleCover: '#ffffff', colorBodyCover: '#ffffff',
    colorTitleContent: '#583783', colorBodyContent: '#333333',
    maskCover: 0.15, maskContent: 0.0,
    hueRange: [250, 310] // 色相范围 (紫/粉)
  },
  {
    name: "极简灰",
    fontTitle: "system-ui, sans-serif", fontBody: "system-ui, sans-serif",
    bgCover: '#374151', bgContent: '#f9fafb',
    colorTitleCover: '#ffffff', colorBodyCover: '#e5e7eb',
    colorTitleContent: '#1f2937', colorBodyContent: '#4b5563',
    maskCover: 0.0, maskContent: 0.0,
    hueRange: [0, 360], // 灰色系, 色相不重要, 饱和度低
    saturationRange: [0, 10] // 特殊：饱和度范围
  },
  // --- [NEW] 新增主题 ---
  {
    name: "热情红",
    fontTitle: "'ZCOOL KuaiLe', cursive", fontBody: "'Noto Sans SC', sans-serif",
    bgCover: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)', bgContent: '#fff0f0',
    colorTitleCover: '#ffffff', colorBodyCover: '#ffffff',
    colorTitleContent: '#d90000', colorBodyContent: '#333333',
    maskCover: 0.2, maskContent: 0.0,
    hueRange: [0, 15] // 红
  },
  {
    name: "浪漫粉",
    fontTitle: "'ZCOOL XiaoWei', cursive", fontBody: "'LXGW WenKai', cursive",
    bgCover: 'linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)', bgContent: '#fff5f7',
    colorTitleCover: '#ffffff', colorBodyCover: '#ffffff',
    colorTitleContent: '#d81b60', colorBodyContent: '#444444',
    maskCover: 0.1, maskContent: 0.0,
    hueRange: [310, 340] // 粉/洋红
  },
  {
    name: "柠檬黄",
    fontTitle: "'LXGW WenKai', cursive", fontBody: "'LXGW WenKai', cursive",
    bgCover: 'linear-gradient(135deg, #f7ff00 0%, #db38b5 100%)', bgContent: '#fffff8',
    colorTitleCover: '#4d4d4d', colorBodyCover: '#333333',
    colorTitleContent: '#333333', colorBodyContent: '#4d4d4d',
    maskCover: 0.0, maskContent: 0.0,
    hueRange: [50, 70], // 黄
    lightnessRange: [60, 90] // 黄色系需要高亮度
  },
  {
    name: "青草绿",
    fontTitle: "'Noto Sans SC', sans-serif", fontBody: "'Noto Sans SC', sans-serif",
    bgCover: 'linear-gradient(135deg, #adeb00 0%, #96c93d 100%)', bgContent: '#f0fff0',
    colorTitleCover: '#004d00', colorBodyCover: '#003300',
    colorTitleContent: '#004d00', colorBodyContent: '#333333',
    maskCover: 0.0, maskContent: 0.0,
    hueRange: [80, 110] // 绿/黄绿
  },
  {
    name: "天空蓝",
    fontTitle: "system-ui, sans-serif", fontBody: "system-ui, sans-serif",
    bgCover: 'linear-gradient(135deg, #7ad7ff 0%, #8693ab 100%)', bgContent: '#f0f8ff',
    colorTitleCover: '#1e3a8a', colorBodyCover: '#334155',
    colorTitleContent: '#1e3a8a', colorBodyContent: '#334155',
    maskCover: 0.0, maskContent: 0.0,
    hueRange: [180, 210], // 青/浅蓝
    lightnessRange: [65, 90] // 浅色
  },
  {
    name: "经典棕",
    fontTitle: "'Noto Serif SC', serif", fontBody: "'Noto Serif SC', serif",
    bgCover: 'linear-gradient(135deg, #8a2387 0%, #e94057 100%)', bgContent: '#f5f0e1',
    colorTitleCover: '#ffffff', colorBodyCover: '#fdfdfd',
    colorTitleContent: '#5d4037', colorBodyContent: '#3e2723',
    maskCover: 0.3, maskContent: 0.0,
    hueRange: [15, 35], // 棕色是低饱和度的橙色
    saturationRange: [30, 60],
    lightnessRange: [30, 50]
  },
  {
    name: "科技银",
    fontTitle: "system-ui, sans-serif", fontBody: "system-ui, sans-serif",
    bgCover: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)', bgContent: '#fafafa',
    colorTitleCover: '#000000', colorBodyCover: '#222222',
    colorTitleContent: '#000000', colorBodyContent: '#222222',
    maskCover: 0.0, maskContent: 0.0,
    hueRange: [190, 220], // 偏蓝的灰色
    saturationRange: [5, 15],
    lightnessRange: [70, 90] // 高亮度
  },
  {
    name: "复古金",
    fontTitle: "'Noto Serif SC', serif", fontBody: "'Noto Serif SC', serif",
    bgCover: 'linear-gradient(135deg, #ffc500 0%, #c77c00 100%)', bgContent: '#fffbeb',
    colorTitleCover: '#3a2f00', colorBodyCover: '#1a1500',
    colorTitleContent: '#3a2f00', colorBodyContent: '#1a1500',
    maskCover: 0.1, maskContent: 0.0,
    hueRange: [40, 55], // 金/黄
    saturationRange: [60, 90],
    lightnessRange: [40, 60]
  }
];

function random(min, max) { return Math.random() * (max - min) + min; }
	  
	  // [NEW] 新增函数：根据主题配置生成颜色
function generateThematicColor(theme) {
    const hue = random(theme.hueRange[0], theme.hueRange[1]);
    const saturation = random(theme.saturationRange?.[0] ?? 40, theme.saturationRange?.[1] ?? 100);
    const lightness = random(theme.lightnessRange?.[0] ?? 40, theme.lightnessRange?.[1] ?? 80);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// [NEW] 新增函数：根据主题生成渐变背景
function generateThematicGradient(theme) {
    const deg = Math.floor(random(0, 360));
    const color1 = generateThematicColor(theme);
    const color2 = generateThematicColor(theme);
    return `linear-gradient(${deg}deg, ${color1}, ${color2})`;
}
	  
function generatePleasingColor() { const hue = random(0, 360); const saturation = random(40, 100); const lightness = random(40, 80); return `hsl(${hue}, ${saturation}%, ${lightness}%)`; }
let bgPresets = [];
