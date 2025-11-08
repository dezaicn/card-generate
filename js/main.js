    (function () {
// --- DOM ELEMENTS ---
const dom = {
  unifiedStylingEnabled: document.getElementById('unifiedStylingEnabled'),
  unifiedStylingControls: document.getElementById('unifiedStylingControls'),
  individualStylingControls: document.getElementById('individualStylingControls'),
  unifiedFontTitle: document.getElementById('unifiedFontTitle'),
  unifiedFontBody: document.getElementById('unifiedFontBody'),
  unifiedColorTitle: document.getElementById('unifiedColorTitle'),
  unifiedColorBody: document.getElementById('unifiedColorBody'),
  unifiedSizeTitle: document.getElementById('unifiedSizeTitle'),
  unifiedSizeBody: document.getElementById('unifiedSizeBody'),
  unifiedLineHeight: document.getElementById('unifiedLineHeight'),
  unifiedPadding: document.getElementById('unifiedPadding'),
  unifiedBorderEnabled: document.getElementById('unifiedBorderEnabled'),
  unifiedAlignHorizontal: document.getElementById('unifiedAlignHorizontal'),
  unifiedAlignVertical: document.getElementById('unifiedAlignVertical'),
  unifiedBorderControls: document.getElementById('unifiedBorderControls'),
  unifiedBorderWidth: document.getElementById('unifiedBorderWidth'),
  unifiedBorderColor: document.getElementById('unifiedBorderColor'),
  unifiedRadiusOuter: document.getElementById('unifiedRadiusOuter'),
  unifiedRadiusInner: document.getElementById('unifiedRadiusInner'),
  cardSwitcher: document.getElementById('card-switcher'),
  btnAddCard: document.getElementById('btn-add-card'),
  focusedCardTitle: document.getElementById('focused-card-title'),
  btnCopyFocused: document.getElementById('btn-copy-focused'),
  btnExportFocused: document.getElementById('btn-export-focused'),
  btnCopyFloating: document.getElementById('btn-copy-floating'),
  btnExportFloating: document.getElementById('btn-export-floating'),
  btnPrevCard: document.getElementById('btn-prev-card'),
  btnNextCard: document.getElementById('btn-next-card'),
  themeToggle: document.getElementById('themeToggle'),
  btnExportZip: document.getElementById('btn-export-zip'),
  btnResetAll: document.getElementById('btn-reset-all'),
  btnApplyTheme: document.getElementById('btn-apply-theme'), 
  themeSelector: document.getElementById('theme-selector'), // [NEW]
  aspectRatio: document.getElementById('aspectRatio'),
  resolution: document.getElementById('resolution'),
  inputTitle: document.getElementById('inputTitle'),
  inputBody: document.getElementById('inputBody'),
  countBody: document.getElementById('countBody'),
  contentImgEnabled: document.getElementById('contentImgEnabled'),
  contentImgControls: document.getElementById('contentImgControls'),
  contentImgUpload: document.getElementById('contentImgUpload'),
  contentImgSideBySide: document.getElementById('contentImgSideBySide'),
  contentImgPositionControl: document.getElementById('contentImgPositionControl'),
  contentImgPosition: document.getElementById('contentImgPosition'),
  thumbs: document.getElementById('thumbs'),
  bgUpload: document.getElementById('bgUpload'),
  maskOpacity: document.getElementById('maskOpacity'),
  autoColorEnabled: document.getElementById('autoColorEnabled'),
  refreshBgPresets: document.getElementById('refreshBgPresets'),
  clearBgBtn: document.getElementById('clearBg'),
  fontTitle: document.getElementById('fontTitle'),
  fontBody: document.getElementById('fontBody'),
  sizeTitle: document.getElementById('sizeTitle'),
  sizeBody: document.getElementById('sizeBody'),
  lineHeight: document.getElementById('lineHeight'),
  autoLineHeightEnabled: document.getElementById('autoLineHeightEnabled'),
  colorTitle: document.getElementById('colorTitle'),
  colorBody: document.getElementById('colorBody'),
  titleContrastHint: document.getElementById('titleContrastHint'),
  bodyContrastHint: document.getElementById('bodyContrastHint'),
  alignHorizontal: document.getElementById('alignHorizontal'),
  alignVertical: document.getElementById('alignVertical'),
  padding: document.getElementById('padding'),
  autoPaddingEnabled: document.getElementById('autoPaddingEnabled'),
  borderEnabled: document.getElementById('borderEnabled'),
  borderControls: document.getElementById('borderControls'),
  borderWidth: document.getElementById('borderWidth'),
  borderColor: document.getElementById('borderColor'),
  radiusOuter: document.getElementById('radiusOuter'),
  radiusInner: document.getElementById('radiusInner'),
  watermarkType: document.getElementById('watermarkType'),
  watermarkTextControls: document.getElementById('watermarkTextControls'),
  watermarkText: document.getElementById('watermarkText'),
  watermarkImageControls: document.getElementById('watermarkImageControls'),
  watermarkCommonControls: document.getElementById('watermarkCommonControls'),
  watermarkPosition: document.getElementById('watermarkPosition'),
  watermarkSize: document.getElementById('watermarkSize'),
  watermarkSizeControl: document.getElementById('watermarkSizeControl'),
  watermarkSizeHint: document.getElementById('watermarkSizeHint'),
  watermarkOpacity: document.getElementById('watermarkOpacity'),
  watermarkImgUpload: document.getElementById('watermarkImgUpload'),
  clearWatermarkImg: document.getElementById('clearWatermarkImg'),
  qrCodeEnabled: document.getElementById('qrCodeEnabled'),
  qrCodeControls: document.getElementById('qrCodeControls'),
  qrCodeValue: document.getElementById('qrCodeValue'),
  qrCodeSize: document.getElementById('qrCodeSize'),
  qrCodePadding: document.getElementById('qrCodePadding'),
  tabs: document.querySelectorAll('.tab-btn'),
  tabPanels: document.querySelectorAll('.tab-content'),
  wipeBtn: document.getElementById('wipe'),
  saveConfigBtn: document.getElementById('btn-save-config'),
  loadConfigBtn: document.getElementById('btn-load-config'),
  toast: document.getElementById('toast'),
  p: {
      borderContainer: document.getElementById('border-container-focused'),
      preview: document.getElementById('preview-focused'),
      overlay: document.getElementById('overlay-focused'),
      cardInner: document.getElementById('card-inner-focused'),
      title: document.getElementById('title-text-focused'),
      body: document.getElementById('body-text-focused'),
      contentImgContainer: document.getElementById('contentImgContainer-focused'),
      contentImg: document.getElementById('contentImg-focused'),
      watermark: document.getElementById('watermark-focused'),
      qrContainer: document.getElementById('qrcode-container-focused'),
      qrCanvas: document.getElementById('qrcode-canvas-focused'),
  },
  values: {
      sizeTitle: document.getElementById('sizeTitleValue'),
      sizeBody: document.getElementById('sizeBodyValue'),
      lineHeight: document.getElementById('lineHeightValue'),
      padding: document.getElementById('paddingValue'),
      borderWidth: document.getElementById('borderWidthValue'),
      radiusOuter: document.getElementById('radiusOuterValue'),
      radiusInner: document.getElementById('radiusInnerValue'),
      maskOpacity: document.getElementById('maskOpacityValue'),
      watermarkSize: document.getElementById('watermarkSizeValue'),
      watermarkOpacity: document.getElementById('watermarkOpacityValue'),
      unifiedSizeTitle: document.getElementById('unifiedSizeTitleValue'),
      unifiedSizeBody: document.getElementById('unifiedSizeBodyValue'),
      unifiedLineHeight: document.getElementById('unifiedLineHeightValue'),
      unifiedPadding: document.getElementById('unifiedPaddingValue'),
      unifiedBorderWidth: document.getElementById('unifiedBorderWidthValue'),
      unifiedRadiusOuter: document.getElementById('unifiedRadiusOuterValue'),
      unifiedRadiusInner: document.getElementById('unifiedRadiusInnerValue'),
      qrCodeSize: document.getElementById('qrCodeSizeValue'),
      qrCodePadding: document.getElementById('qrCodePaddingValue'),
  }
};

// --- DYNAMIC PRESETS & STATE MANAGEMENT ---

const DEFAULT_PRESETS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(135deg, #f794a4 0%, #fdd6bd 100%)', 'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
  'linear-gradient(135deg, #fde047 0%, #f97316 100%)', 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
];

// THEMES array and related functions are now in theme/themes.js

function generatePleasingColor() { const hue = random(0, 360); const saturation = random(40, 100); const lightness = random(40, 80); return `hsl(${hue}, ${saturation}%, ${lightness}%)`; }
let bgPresets = [];
function generateAllPresets() {
    const solids = [], linears = [], linearsThree = [], radials = [];
    const count = 6;
    for(let i=0; i < count; i++) {
        solids.push(`hsl(${(random(0,360)+i*137.5)%360},${random(60,90)}%,${random(65,80)}%)`);
        linears.push(`linear-gradient(${Math.floor(random(0,360))}deg, ${generatePleasingColor()}, ${generatePleasingColor()})`);
        linearsThree.push(`linear-gradient(${Math.floor(random(0, 360))}deg, ${generatePleasingColor()}, ${generatePleasingColor()}, ${generatePleasingColor()})`);
        const posX = Math.floor(random(0, 100));
        const posY = Math.floor(random(0, 100));
        radials.push(`radial-gradient(circle at ${posX}% ${posY}%, ${generatePleasingColor()}, ${generatePleasingColor()})`);
    }
    const allPresets = [...solids, ...linears, ...radials, ...linearsThree];
    return allPresets.sort(() => 0.5 - Math.random());
}
let cardStates = [];
let globalSettings = {};
let activeCardIndex = 0;

const defaultGlobalSettings = {
  theme: 'light',
  aspectRatio: '3/4', 
  autoColorEnabled: true,
  watermark: { type: 'none', text: '', imageSrc: '', position: 'bottom-left', size: 14, opacity: 0.7 },
  qrCode: { enabled: 'none', value: '', size: 15, padding: 10 },
  unifiedStyling: {
      enabled: false, fontTitle: "'Noto Sans SC', sans-serif", fontBody: "'Noto Sans SC', sans-serif",
      colorTitle: '#ffffff', colorBody: '#e5e7eb', sizeTitle: 42, sizeBody: 20,
      lineHeight: 1.6, padding: 8, alignHorizontal: 'center', alignVertical: 'center',
      border: { enabled: false, width: 15, color: '#ffffff' },
      radius: { outer: 16, inner: 12 }
  }
};
const defaultCardState = {
  title: { text: '周末分享会', font: "'Noto Sans SC', sans-serif", size: 42, color: '#ffffff' },
  body: { text: '这里是正文内容，介绍活动时间、地点和主题。', font: "'Noto Sans SC', sans-serif", size: 20, color: '#e5e7eb', lineHeight: 1.6, autoLineHeight: true },
  content: { image: { src: '', enabled: false, sideBySide: false, position: 'above' } },
  background: { image: 'linear-gradient(135deg, #0f172a, #111827)', maskOpacity: 0.35 },
  layout: {
      alignHorizontal: 'center', alignVertical: 'center',
      padding: 8, autoPadding: true,
      border: { enabled: false, width: 15, color: '#ffffff' },
      radius: { outer: 16, inner: 12 }
  }
};

function createDefaultCards(count = 7) {
    const defaultCards = [];
    for (let i = 0; i < count; i++) {
        const newState = JSON.parse(JSON.stringify(defaultCardState));
        newState.title.text = `新卡片 ${i + 1}`;
        newState.body.text = `这是第 ${i + 1} 张卡片的内容。`;
        newState.background.image = DEFAULT_PRESETS[i % DEFAULT_PRESETS.length];
        newState.title.color = '#111827';
        newState.body.color = '#374155';
        defaultCards.push(newState);
    }
    return defaultCards;
}

function deepMerge(target, source) {
  const output = { ...target };
  for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
          const sourceValue = source[key];
          const targetValue = output[key];
          if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue) && sourceValue !== null) {
              output[key] = deepMerge(targetValue || {}, sourceValue);
          } else if (sourceValue !== undefined) {
              output[key] = sourceValue;
          }
      }
  }
  return output;
}

function updateCardState(newState) {
  if (cardStates[activeCardIndex]) {
      cardStates[activeCardIndex] = deepMerge(cardStates[activeCardIndex], newState);
      renderPreview();
      renderCardTab(activeCardIndex);
      saveCardStatesToLocal();
  }
}
function updateGlobalState(newState) {
  if (newState.theme) {
      document.body.classList.toggle('dark-mode', newState.theme === 'dark');
      document.body.classList.toggle('light-mode', newState.theme === 'light');
  }
  globalSettings = deepMerge(globalSettings, newState);
  renderPreview();
  renderControls(); 
  saveGlobalSettingsToLocal();
}
function saveCardStatesToLocal() { try { localStorage.setItem('cardGeneratorMultiStateV2', JSON.stringify(cardStates)); } catch (e) { console.error("Failed to save card states", e); } }
function saveGlobalSettingsToLocal() { try { localStorage.setItem('cardGeneratorGlobalSettingsV2', JSON.stringify(globalSettings)); } catch (e) { console.error("Failed to save global settings", e); } }

function loadState() {
  try {
      const savedGlobals = localStorage.getItem('cardGeneratorGlobalSettingsV2');
      const defaultCopy = JSON.parse(JSON.stringify(defaultGlobalSettings));
      globalSettings = savedGlobals ? deepMerge(defaultCopy, JSON.parse(savedGlobals)) : defaultCopy;
  } catch(e) { globalSettings = JSON.parse(JSON.stringify(defaultGlobalSettings)); }
  
  document.body.className = '';
  document.body.classList.add(globalSettings.theme === 'dark' ? 'dark-mode' : 'light-mode');

  try {
      const savedCards = localStorage.getItem('cardGeneratorMultiStateV2');
      cardStates = savedCards ? JSON.parse(savedCards) : createDefaultCards(7);
  } catch(e) { 
      cardStates = createDefaultCards(7); 
  }
}

// --- CORE ACTIONS ---
async function addCard() {
  const newState = JSON.parse(JSON.stringify(defaultCardState));
  newState.title.text = `新卡片 ${cardStates.length + 1}`;
  newState.body.text = `这是新卡片的内容。`;
  newState.background.image = bgPresets[Math.floor(Math.random() * bgPresets.length)];
  cardStates.push(newState);
  renderCardSwitcher();
  switchCard(cardStates.length - 1);
  await autoRecommendColors();
  toast(`已添加卡片 ${cardStates.length}`);
}
function deleteCard(index) {
  if (cardStates.length <= 1) { toast("至少需要保留一张卡片"); return; }
  if (!confirm(`确定要删除“卡片 ${index + 1}”吗？`)) return;
  cardStates.splice(index, 1);
  const newActiveIndex = Math.max(0, activeCardIndex >= index ? activeCardIndex - 1 : activeCardIndex);
  renderCardSwitcher();
  switchCard(newActiveIndex);
  saveCardStatesToLocal();
}
function switchCard(index) {
  if (index < 0 || index >= cardStates.length) return;
  activeCardIndex = index;
  document.querySelectorAll('.card-tab').forEach((el, i) => el.classList.toggle('active', i === index));
  renderFocusedPreview();
  renderControls();
  updateNavButtons();
}

function updateNavButtons() {
  if (dom.btnPrevCard) {
    dom.btnPrevCard.disabled = activeCardIndex === 0;
    dom.btnPrevCard.style.opacity = activeCardIndex === 0 ? '0.3' : '1';
    dom.btnPrevCard.style.cursor = activeCardIndex === 0 ? 'not-allowed' : 'pointer';
  }
  if (dom.btnNextCard) {
    dom.btnNextCard.disabled = activeCardIndex >= cardStates.length - 1;
    dom.btnNextCard.style.opacity = activeCardIndex >= cardStates.length - 1 ? '0.3' : '1';
    dom.btnNextCard.style.cursor = activeCardIndex >= cardStates.length - 1 ? 'not-allowed' : 'pointer';
  }
}
function resetAll() {
  if (!confirm('确定要重置所有卡片和设置吗？此操作将清空所有内容且无法撤销。')) { return; }
  try {
      localStorage.removeItem('cardGeneratorMultiStateV2');
      localStorage.removeItem('cardGeneratorGlobalSettingsV2');
  } catch (e) { console.error("Failed to clear local storage", e); }
  cardStates = createDefaultCards(7);
  globalSettings = JSON.parse(JSON.stringify(defaultGlobalSettings));
  
  document.body.className = '';
  document.body.classList.add(globalSettings.theme === 'dark' ? 'dark-mode' : 'light-mode');

  activeCardIndex = 0;
  renderCardSwitcher();
  switchCard(0);
  toast('所有内容已重置');
}

function reorderArray(arr, from, to) {
    const newArray = [...arr];
    const [item] = newArray.splice(from, 1);
    newArray.splice(to, 0, item);
    return newArray;
}

// --- Drag and Drop Handlers ---
let dragSrcIndex = -1;
function handleDragStart(e) {
    dragSrcIndex = parseInt(this.dataset.index, 10);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', dragSrcIndex);
    this.classList.add('dragging');
}
function handleDragOver(e) {
    if (e.preventDefault) e.preventDefault();
    if (this.id === 'btn-add-card') {
        e.dataTransfer.dropEffect = 'none';
        return false;
    }
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
    return false;
}
function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) e.stopPropagation();
    this.classList.remove('drag-over');
    const dropTargetIndex = parseInt(this.dataset.index, 10);
    
    if (dragSrcIndex !== -1 && dragSrcIndex !== dropTargetIndex) {
        const activeCardIdentity = cardStates[activeCardIndex];
        const newCardStates = reorderArray(cardStates, dragSrcIndex, dropTargetIndex);
        cardStates = newCardStates;
        activeCardIndex = cardStates.indexOf(activeCardIdentity);
        
        saveCardStatesToLocal();
        renderCardSwitcher(); 
        renderControls();
    }
    return false;
}

function handleDragEnd(e) {
    document.querySelectorAll('.card-tab').forEach(tab => {
        tab.classList.remove('dragging');
        tab.classList.remove('drag-over');
    });
    dragSrcIndex = -1;
}

// --- RENDERING LOGIC ---
function renderApp() {
    renderCardSwitcher();
    renderFocusedPreview();
}

function renderCardSwitcher() {
    dom.cardSwitcher.innerHTML = ''; // Clear
    cardStates.forEach((state, index) => {
        const tab = document.createElement('div');
        tab.className = 'card-tab';
        tab.dataset.index = index;
        
        const isSolidColor = state.background.image.startsWith('hsl');
        tab.innerHTML = `
          <div class="selection-indicator"></div>
          <div class="card-tab-preview" style="background-image: ${isSolidColor?'none':state.background.image}; background-color: ${isSolidColor?state.background.image:'transparent'};">
              <div style="width:100%; height:100%; background:rgba(0,0,0, ${state.background.maskOpacity});"></div>
          </div>
          <div class="card-tab-name">卡片 ${index + 1}</div>
          <button class="btn-delete-card" title="删除此卡片">&times;</button>
        `;
        
        tab.onclick = () => switchCard(index);
        tab.querySelector('.btn-delete-card').onclick = (e) => { e.stopPropagation(); deleteCard(index); };
        
        tab.setAttribute('draggable', true);
        tab.addEventListener('dragstart', handleDragStart);
        tab.addEventListener('dragover', handleDragOver);
        tab.addEventListener('dragleave', handleDragLeave);
        tab.addEventListener('drop', handleDrop);
        tab.addEventListener('dragend', handleDragEnd);

        tab.classList.toggle('active', index === activeCardIndex);
        
        dom.cardSwitcher.appendChild(tab);
    });
    dom.cardSwitcher.appendChild(dom.btnAddCard);
}

function renderCardTab(index) {
    let state = cardStates[index];
    if (!state) return;
    const tab = dom.cardSwitcher.querySelector(`.card-tab[data-index='${index}']`);
    if (!tab) return;
    
    const preview = tab.querySelector('.card-tab-preview');
    if (!preview) return;

    const isSolidColor = state.background.image.startsWith('hsl');
    preview.style.backgroundImage = isSolidColor ? 'none' : state.background.image;
    preview.style.backgroundColor = isSolidColor ? state.background.image : 'transparent';
    preview.querySelector('div').style.background = `rgba(0,0,0, ${state.background.maskOpacity})`;
    
    tab.classList.toggle('active', index === activeCardIndex);
}

function renderFocusedPreview() {
    const state = cardStates[activeCardIndex];
    if (!state) return;
    dom.focusedCardTitle.textContent = `卡片 ${activeCardIndex + 1} ${state.title.text ? `(${state.title.text})` : ''}`;
    renderPreview();
}
function renderPreview() {
    let cardState = cardStates[activeCardIndex];
    if (!cardState) return;
    let finalLayout;
    if (globalSettings.unifiedStyling && globalSettings.unifiedStyling.enabled) {
        const unified = globalSettings.unifiedStyling;
        cardState = {
            ...cardState,
            title: { ...cardState.title, font: unified.fontTitle, color: unified.colorTitle, size: unified.sizeTitle },
            body: { ...cardState.body, font: unified.fontBody, color: unified.colorBody, lineHeight: unified.lineHeight, size: unified.sizeBody },
        };
        finalLayout = {
            ...cardState.layout,
            padding: unified.padding, alignHorizontal: unified.alignHorizontal, alignVertical: unified.alignVertical,
            border: { ...unified.border }, radius: { ...unified.radius }
        };
    } else { finalLayout = cardState.layout; }
    const p = dom.p;
    p.title.textContent = cardState.title.text;
    const tableHtml = parseMarkdownTable(cardState.body.text);
    p.body.innerHTML = tableHtml ? tableHtml : escapeHtml(cardState.body.text).replace(/\n/g, '<br>');
    p.title.style.display = cardState.title.text.trim() ? 'block' : 'none';
    Object.assign(p.title.style, { fontFamily: cardState.title.font, fontSize: `${cardState.title.size}px`, color: cardState.title.color });
    Object.assign(p.body.style, { fontFamily: cardState.body.font, fontSize: `${cardState.body.size}px`, color: cardState.body.color, lineHeight: cardState.body.lineHeight });
    const contentImg = cardState.content.image;
    if (contentImg.enabled && contentImg.src) {
        p.contentImgContainer.style.display = 'block'; p.contentImg.src = contentImg.src;
        p.cardInner.classList.toggle('side-by-side', contentImg.sideBySide);
        p.cardInner.classList.toggle('image-below', !contentImg.sideBySide && contentImg.position === 'below');
    } else {
        p.contentImgContainer.style.display = 'none';
        p.cardInner.classList.remove('side-by-side', 'image-below');
    }
    const isSolidColor = cardState.background.image.startsWith('hsl');
    p.preview.style.backgroundImage = isSolidColor ? 'none' : cardState.background.image;
    p.preview.style.backgroundColor = isSolidColor ? cardState.background.image : 'transparent';
    p.overlay.style.background = `rgba(0,0,0, ${cardState.background.maskOpacity})`;
    p.borderContainer.style.aspectRatio = globalSettings.aspectRatio;
    p.preview.querySelector('.card-content').style.padding = `${finalLayout.padding}%`;
    p.preview.querySelector('.card-content').style.justifyContent = finalLayout.alignHorizontal;
    p.preview.querySelector('.card-content').style.alignItems = finalLayout.alignVertical;
    p.cardInner.style.textAlign = { 'flex-start': 'left', 'center': 'center', 'flex-end': 'right' }[finalLayout.alignHorizontal];
    p.borderContainer.parentElement.parentElement.style.borderRadius = `${finalLayout.radius.outer}px`;
    p.borderContainer.style.borderRadius = `${finalLayout.radius.inner}px`;
    p.borderContainer.style.padding = finalLayout.border.enabled ? `${finalLayout.border.width}px` : '0px';
    p.borderContainer.style.backgroundColor = finalLayout.border.enabled ? finalLayout.border.color : 'transparent';
    renderWatermark();
    renderQRCode();
}
function renderWatermark() {
    const wm = globalSettings.watermark;
    const wmElem = dom.p.watermark;
    const textSpan = wmElem.querySelector('.watermarkTextSpan');
    const img = wmElem.querySelector('.watermarkImg');
    const isText = wm.type === 'text' && wm.text.trim();
    const isImage = wm.type === 'image' && wm.imageSrc;
    wmElem.style.display = (isText || isImage) ? 'flex' : 'none';
    textSpan.style.display = isText ? 'block' : 'none';
    img.style.display = isImage ? 'block' : 'none';
    if (isText) textSpan.textContent = wm.text;
    if (isImage) img.src = wm.imageSrc;
    const positions = {
      'top-left': { top: '15px', left: '15px', right: 'auto', bottom: 'auto', transform: 'none' },
      'top-right': { top: '15px', left: 'auto', right: '15px', bottom: 'auto', transform: 'none' },
      'center': { top: '50%', left: '50%', right: 'auto', bottom: 'auto', transform: 'translate(-50%, -50%)' },
      'bottom-left': { top: 'auto', left: '15px', right: 'auto', bottom: '15px', transform: 'none' },
      'bottom-right': { top: 'auto', left: 'auto', right: '15px', bottom: '15px', transform: 'none' }
    };
    Object.assign(wmElem.style, positions[wm.position] || positions['bottom-left'], { fontSize: `${wm.size}px`, color: `rgba(255, 255, 255, ${wm.opacity})`, opacity: wm.opacity });
}

function renderQRCode() {
    const qr = globalSettings.qrCode;
    const p = dom.p;

    if (qr.enabled === 'none' || !qr.value.trim() || typeof QRious === 'undefined') {
        p.qrContainer.style.display = 'none';
        return;
    }
    
    p.qrContainer.style.display = 'flex';

    const previewRect = p.preview.getBoundingClientRect();
    if (previewRect.width === 0 || previewRect.height === 0) {
        setTimeout(renderQRCode, 50);
        return;
    }
    
    const shortSide = Math.min(previewRect.width, previewRect.height);
    const finalSize = Math.max(20, (shortSide * (qr.size / 100))); // Min 20px

    const paddingPx = `${qr.padding}px`;
    p.qrContainer.style.bottom = paddingPx;
    p.qrContainer.style.left = paddingPx;
    
    try {
        new QRious({
            element: p.qrCanvas,
            value: qr.value,
            size: finalSize,
            level: 'M',
            padding: 0
        });
        p.qrCanvas.style.padding = '0';
        p.qrCanvas.style.margin = '0';

    } catch(err) {
        console.error("QR Code generation failed:", err);
        p.qrContainer.style.display = 'none';
    }
}

function renderControls() {
  if (!cardStates[activeCardIndex]) return; // Guard clause
  const cardState = cardStates[activeCardIndex];

  dom.themeToggle.value = globalSettings.theme;
  dom.aspectRatio.value = globalSettings.aspectRatio; 
  dom.autoColorEnabled.checked = globalSettings.autoColorEnabled;

  dom.inputTitle.value = cardState.title.text; dom.inputBody.value = cardState.body.text;
  dom.countBody.textContent = cardState.body.text.length;
  dom.contentImgEnabled.checked = cardState.content.image.enabled;
  dom.contentImgSideBySide.checked = cardState.content.image.sideBySide;
  document.querySelector(`input[name="content_img_pos"][value="${cardState.content.image.position}"]`).checked = true;
  
  dom.maskOpacity.value = cardState.background.maskOpacity;
  document.querySelectorAll('.thumb').forEach(t => t.classList.toggle('active', t.dataset.bg === cardState.background.image));
  
  dom.fontTitle.value = cardState.title.font; dom.sizeTitle.value = cardState.title.size; dom.colorTitle.value = cardState.title.color;
  dom.fontBody.value = cardState.body.font; dom.sizeBody.value = cardState.body.size; dom.colorBody.value = cardState.body.color;
  dom.lineHeight.value = cardState.body.lineHeight; dom.autoLineHeightEnabled.checked = cardState.body.autoLineHeight;
  dom.padding.value = cardState.layout.padding;
  dom.autoPaddingEnabled.checked = cardState.layout.autoPadding; dom.borderEnabled.checked = cardState.layout.border.enabled;
  dom.borderWidth.value = cardState.layout.border.width; dom.borderColor.value = cardState.layout.border.color;
  dom.radiusOuter.value = cardState.layout.radius.outer; dom.radiusInner.value = cardState.layout.radius.inner;
  document.querySelectorAll('#alignHorizontal button').forEach(b => b.classList.toggle('active', b.dataset.align === cardState.layout.alignHorizontal));
  document.querySelectorAll('#alignVertical button').forEach(b => b.classList.toggle('active', b.dataset.align === cardState.layout.alignVertical));
  
  const { unifiedStyling } = globalSettings;
  dom.unifiedStylingEnabled.checked = unifiedStyling.enabled;
  dom.unifiedStylingControls.style.display = unifiedStyling.enabled ? 'block' : 'none';
  dom.individualStylingControls.style.display = unifiedStyling.enabled ? 'none' : 'block';

  dom.unifiedFontTitle.value = unifiedStyling.fontTitle; dom.unifiedFontBody.value = unifiedStyling.fontBody;
  dom.unifiedColorTitle.value = unifiedStyling.colorTitle; dom.unifiedColorBody.value = unifiedStyling.colorBody;
  dom.unifiedSizeTitle.value = unifiedStyling.sizeTitle; dom.unifiedSizeBody.value = unifiedStyling.sizeBody;
  dom.unifiedLineHeight.value = unifiedStyling.lineHeight; dom.unifiedPadding.value = unifiedStyling.padding;
  dom.unifiedBorderEnabled.checked = unifiedStyling.border.enabled; dom.unifiedBorderWidth.value = unifiedStyling.border.width;
  dom.unifiedBorderColor.value = unifiedStyling.border.color; dom.unifiedRadiusOuter.value = unifiedStyling.radius.outer;
  dom.unifiedRadiusInner.value = unifiedStyling.radius.inner;
  document.querySelectorAll('#unifiedAlignHorizontal button').forEach(b => b.classList.toggle('active', b.dataset.align === unifiedStyling.alignHorizontal));
  document.querySelectorAll('#unifiedAlignVertical button').forEach(b => b.classList.toggle('active', b.dataset.align === unifiedStyling.alignVertical));
  
  const wm = globalSettings.watermark;
  document.querySelector(`input[name="watermark_type"][value="${wm.type}"]`).checked = true;
  dom.watermarkText.value = wm.text; dom.watermarkPosition.value = wm.position;
  dom.watermarkSize.value = wm.size; dom.watermarkOpacity.value = wm.opacity;
  
  const qr = globalSettings.qrCode;
  document.querySelector(`input[name="qr_type"][value="${qr.enabled}"]`).checked = true;
  dom.qrCodeControls.style.display = qr.enabled !== 'none' ? 'block' : 'none';
  dom.qrCodeValue.value = qr.value;
  dom.qrCodeSize.value = qr.size;
  dom.qrCodePadding.value = qr.padding;
  
  const unified = unifiedStyling.enabled;
  dom.lineHeight.disabled = unified || cardState.body.autoLineHeight;
  dom.padding.disabled = unified || cardState.layout.autoPadding;
  let borderShouldBeEnabled = unified ? unifiedStyling.border.enabled : cardState.layout.border.enabled;
  dom.borderControls.style.display = borderShouldBeEnabled ? 'grid' : 'none';
  dom.unifiedBorderControls.style.display = unifiedStyling.border.enabled ? 'grid' : 'none';
  dom.contentImgControls.style.display = cardState.content.image.enabled ? 'grid' : 'none';
  dom.contentImgPositionControl.style.display = cardState.content.image.sideBySide ? 'none' : 'grid';
  dom.watermarkTextControls.style.display = wm.type === 'text' ? 'block' : 'none';
  dom.watermarkImageControls.style.display = wm.type === 'image' ? 'block' : 'none';
  dom.watermarkCommonControls.style.display = wm.type !== 'none' ? 'block' : 'none';
  dom.watermarkSizeControl.style.display = wm.type === 'text' ? 'block' : 'none';
  
  updateAllSliderValues(); updateContrastHints(); updateWatermarkSizeHint();
}
function updateAllSliderValues() {
    dom.values.sizeTitle.textContent = `${dom.sizeTitle.value}px`;
    dom.values.sizeBody.textContent = `${dom.sizeBody.value}px`;
    dom.values.lineHeight.textContent = parseFloat(dom.lineHeight.value).toFixed(2);
    dom.values.padding.textContent = `${dom.padding.value}%`;
    dom.values.borderWidth.textContent = `${dom.borderWidth.value}px`;
    dom.values.radiusOuter.textContent = `${dom.radiusOuter.value}px`;
    dom.values.radiusInner.textContent = `${dom.radiusInner.value}px`;
    dom.values.maskOpacity.textContent = parseFloat(dom.maskOpacity.value).toFixed(2);
    dom.values.watermarkSize.textContent = `${dom.watermarkSize.value}px`;
    dom.values.watermarkOpacity.textContent = parseFloat(dom.watermarkOpacity.value).toFixed(2);
    dom.values.unifiedSizeTitle.textContent = `${dom.unifiedSizeTitle.value}px`;
    dom.values.unifiedSizeBody.textContent = `${dom.unifiedSizeBody.value}px`;
    dom.values.unifiedLineHeight.textContent = parseFloat(dom.unifiedLineHeight.value).toFixed(2);
    dom.values.unifiedPadding.textContent = `${dom.unifiedPadding.value}%`;
    dom.values.unifiedBorderWidth.textContent = `${dom.unifiedBorderWidth.value}px`;
    dom.values.unifiedRadiusOuter.textContent = `${dom.unifiedRadiusOuter.value}px`;
    dom.values.unifiedRadiusInner.textContent = `${dom.unifiedRadiusInner.value}px`;
    dom.values.qrCodeSize.textContent = `${dom.qrCodeSize.value}%`;
    dom.values.qrCodePadding.textContent = `${dom.qrCodePadding.value}px`;
}

// --- [NEW] ACCORDION LOGIC ---
function setupAccordionListeners() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('active');
        });
    });
    
    // 默认打开"样式"和"组件"标签页的第一个折叠面板
    const firstStyleAccordion = document.querySelector('[data-tab-panel="style"] .accordion-group');
    if(firstStyleAccordion) firstStyleAccordion.classList.add('active');
    
    const firstComponentAccordion = document.querySelector('[data-tab-panel="components"] .accordion-group');
    if(firstComponentAccordion) firstComponentAccordion.classList.add('active');
}

// [NEW] Populate theme selector dropdown
function populateThemeSelector() {
    dom.themeSelector.innerHTML = ''; // Clear
    THEMES.forEach((theme, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = theme.name;
        dom.themeSelector.appendChild(option);
    });
}

// --- EVENT HANDLERS ---
function setupEventListeners() {
  dom.themeToggle.addEventListener('change', e => updateGlobalState({ theme: e.target.value }));
  dom.btnCopyFloating.addEventListener('click', copyFocusedCard);
  dom.btnExportFloating.addEventListener('click', exportFocusedCard);
  dom.btnResetAll.addEventListener('click', resetAll);
  dom.aspectRatio.addEventListener('change', e => updateGlobalState({ aspectRatio: e.target.value }));
  
  dom.autoColorEnabled.addEventListener('change', e => updateGlobalState({ autoColorEnabled: e.target.checked }));
  dom.watermarkType.addEventListener('change', e => updateGlobalState({ watermark: { type: e.target.value } }));
  dom.watermarkText.addEventListener('input', e => updateGlobalState({ watermark: { text: e.target.value } }));
  dom.watermarkPosition.addEventListener('change', e => updateGlobalState({ watermark: { position: e.target.value } }));
  dom.watermarkSize.addEventListener('input', e => { updateGlobalState({ watermark: { size: parseFloat(e.target.value) } }); dom.values.watermarkSize.textContent = `${e.target.value}px`; });
  dom.watermarkOpacity.addEventListener('input', e => { updateGlobalState({ watermark: { opacity: parseFloat(e.target.value) } }); dom.values.watermarkOpacity.textContent = parseFloat(e.target.value).toFixed(2); });
  dom.watermarkImgUpload.addEventListener('change', (e) => handleFileUpload(e, 2, (result) => updateGlobalState({ watermark: { imageSrc: result } })));
  dom.clearWatermarkImg.addEventListener('click', () => { dom.watermarkImgUpload.value = ''; updateGlobalState({ watermark: { imageSrc: '' } }); });
  
  dom.qrCodeEnabled.addEventListener('change', e => updateGlobalState({ qrCode: { enabled: e.target.value } }));
  dom.qrCodeValue.addEventListener('input', e => updateGlobalState({ qrCode: { value: e.target.value } }));
  dom.qrCodeSize.addEventListener('input', e => { updateGlobalState({ qrCode: { size: parseFloat(e.target.value) } }); dom.values.qrCodeSize.textContent = `${e.target.value}%`; });
  dom.qrCodePadding.addEventListener('input', e => { updateGlobalState({ qrCode: { padding: parseFloat(e.target.value) } }); dom.values.qrCodePadding.textContent = `${e.target.value}px`; });

  dom.unifiedStylingEnabled.addEventListener('change', e => updateGlobalState({ unifiedStyling: { enabled: e.target.checked } }));
  dom.unifiedFontTitle.addEventListener('change', e => updateGlobalState({ unifiedStyling: { fontTitle: e.target.value } }));
  dom.unifiedFontBody.addEventListener('change', e => updateGlobalState({ unifiedStyling: { fontBody: e.target.value } }));
  dom.unifiedColorTitle.addEventListener('input', e => updateGlobalState({ unifiedStyling: { colorTitle: e.target.value } }));
  dom.unifiedColorBody.addEventListener('input', e => updateGlobalState({ unifiedStyling: { colorBody: e.target.value } }));
  dom.unifiedSizeTitle.addEventListener('input', e => { updateGlobalState({ unifiedStyling: { sizeTitle: e.target.value } }); dom.values.unifiedSizeTitle.textContent = `${e.target.value}px`; });
  dom.unifiedSizeBody.addEventListener('input', e => { updateGlobalState({ unifiedStyling: { sizeBody: e.target.value } }); dom.values.unifiedSizeBody.textContent = `${e.target.value}px`; });
  dom.unifiedLineHeight.addEventListener('input', e => { updateGlobalState({ unifiedStyling: { lineHeight: e.target.value } }); dom.values.unifiedLineHeight.textContent = parseFloat(e.target.value).toFixed(2); });
  dom.unifiedPadding.addEventListener('input', e => { updateGlobalState({ unifiedStyling: { padding: e.target.value } }); dom.values.unifiedPadding.textContent = `${e.target.value}%`; });
  dom.unifiedAlignHorizontal.addEventListener('click', e => { if (e.target.dataset.align) updateGlobalState({ unifiedStyling: { alignHorizontal: e.target.dataset.align }}); });
  dom.unifiedAlignVertical.addEventListener('click', e => { if (e.target.dataset.align) updateGlobalState({ unifiedStyling: { alignVertical: e.target.dataset.align }}); });
  dom.unifiedBorderEnabled.addEventListener('change', e => { updateGlobalState({ unifiedStyling: { border: { enabled: e.target.checked } } }); });
  dom.unifiedBorderWidth.addEventListener('input', e => { updateGlobalState({ unifiedStyling: { border: { width: e.target.value } } }); dom.values.unifiedBorderWidth.textContent = `${e.target.value}px`; });
  dom.unifiedBorderColor.addEventListener('input', e => updateGlobalState({ unifiedStyling: { border: { color: e.target.value } } }));
  dom.unifiedRadiusOuter.addEventListener('input', e => { updateGlobalState({ unifiedStyling: { radius: { outer: e.target.value } } }); dom.values.unifiedRadiusOuter.textContent = `${e.target.value}px`; });
  dom.unifiedRadiusInner.addEventListener('input', e => { updateGlobalState({ unifiedStyling: { radius: { inner: e.target.value } } }); dom.values.unifiedRadiusInner.textContent = `${e.target.value}px`; });
  
  dom.inputTitle.addEventListener('input', e => updateCardState({ title: { text: e.target.value } }));
  dom.inputBody.addEventListener('input', e => {
      const updates = { body: { text: e.target.value } };
      const cardState = cardStates[activeCardIndex];
      if (cardState.body.autoLineHeight) updates.body.lineHeight = Math.max(1.0, Math.min(mapRange(e.target.value.length, 50, 400, 1.8, 1.5), 2.5)).toFixed(2);
      if (cardState.layout.autoPadding) updates.layout = { padding: Math.max(2, Math.min(mapRange(e.target.value.length, 50, 400, 12, 6), 20)).toFixed(0) };
      updateCardState(updates);
      renderControls();
  });
  dom.contentImgEnabled.addEventListener('change', e => { updateCardState({ content: { image: { enabled: e.target.checked } } }); renderControls(); });
  dom.contentImgSideBySide.addEventListener('change', e => { updateCardState({ content: { image: { sideBySide: e.target.checked } } }); renderControls(); });
  dom.contentImgPosition.addEventListener('change', e => { if (e.target.name === 'content_img_pos') updateCardState({ content: { image: { position: e.target.value } } }); });
  dom.contentImgUpload.addEventListener('change', (e) => handleFileUpload(e, 5, (result) => updateCardState({ content: { image: { src: result } } })));
  
  dom.fontTitle.addEventListener('change', e => updateCardState({ title: { font: e.target.value } }));
  dom.sizeTitle.addEventListener('input', e => { updateCardState({ title: { size: e.target.value } }); dom.values.sizeTitle.textContent = `${e.target.value}px`; });
  dom.colorTitle.addEventListener('input', e => updateCardState({ title: { color: e.target.value } }));
  dom.fontBody.addEventListener('change', e => updateCardState({ body: { font: e.target.value } }));
  dom.sizeBody.addEventListener('input', e => { updateCardState({ body: { size: e.target.value } }); dom.values.sizeBody.textContent = `${e.target.value}px`; });
  dom.colorBody.addEventListener('input', e => updateCardState({ body: { color: e.target.value } }));
  dom.lineHeight.addEventListener('input', e => { updateCardState({ body: { lineHeight: e.target.value, autoLineHeight: false }}); renderControls(); });
  
  dom.bgUpload.addEventListener('change', (e) => handleFileUpload(e, 5, async (result) => {
      const newBg = `url(${result})`;
      updateCardState({ background: { image: newBg } });
      await autoRecommendColors();
  }));
  dom.maskOpacity.addEventListener('input', async (e) => {
       updateCardState({ background: { maskOpacity: e.target.value }});
       dom.values.maskOpacity.textContent = parseFloat(e.target.value).toFixed(2);
       await autoRecommendColors();
  });
  dom.clearBgBtn.addEventListener('click', async () => { 
      updateCardState({ background: { image: 'linear-gradient(135deg, #0f172a, #111827)' }});
      await autoRecommendColors();
  });
  dom.refreshBgPresets.addEventListener('click', async () => { 
      bgPresets = generateAllPresets(); 
      populateBackgrounds(); 
      updateCardState({ background: { image: bgPresets[Math.floor(Math.random() * bgPresets.length)] }});
      await autoRecommendColors(); 
      toast('预设背景已刷新');
  });

  dom.alignHorizontal.addEventListener('click', e => { if(e.target.dataset.align) { updateCardState({ layout: { alignHorizontal: e.target.dataset.align }}); renderControls(); }});
  dom.alignVertical.addEventListener('click', e => { if(e.target.dataset.align) { updateCardState({ layout: { alignVertical: e.target.dataset.align }}); renderControls(); }});
  dom.padding.addEventListener('input', e => { updateCardState({ layout: { padding: e.target.value, autoPadding: false }}); renderControls(); });
  dom.autoPaddingEnabled.addEventListener('change', e => { updateCardState({ layout: { autoPadding: e.target.checked }}); dom.inputBody.dispatchEvent(new Event('input')); });
  dom.autoLineHeightEnabled.addEventListener('change', e => { updateCardState({ body: { autoLineHeight: e.target.checked }}); dom.inputBody.dispatchEvent(new Event('input')); });
  
  dom.borderEnabled.addEventListener('change', e => { updateCardState({ layout: { border: { enabled: e.target.checked } } }); renderControls(); });
  dom.borderWidth.addEventListener('input', e => { updateCardState({ layout: { border: { width: e.target.value } } }); dom.values.borderWidth.textContent = `${e.target.value}px`; });
  dom.borderColor.addEventListener('input', e => updateCardState({ layout: { border: { color: e.target.value } } }));
  dom.radiusOuter.addEventListener('input', e => { updateCardState({ layout: { radius: { outer: e.target.value } } }); dom.values.radiusOuter.textContent = `${e.target.value}px`; });
  dom.radiusInner.addEventListener('input', e => { updateCardState({ layout: { radius: { inner: e.target.value } } }); dom.values.radiusInner.textContent = `${e.target.value}px`; });
  
  dom.tabs.forEach(btn => btn.addEventListener('click', () => { 
      dom.tabs.forEach(b => b.classList.remove('active')); 
      btn.classList.add('active'); 
      dom.tabPanels.forEach(p => p.classList.toggle('active', p.dataset.tabPanel === btn.dataset.tab)); 
  }));
  dom.btnAddCard.addEventListener('click', addCard);
  
  dom.btnAddCard.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'none';
  });
  dom.btnAddCard.addEventListener('drop', (e) => {
      e.preventDefault();
  });

  dom.wipeBtn.addEventListener('click', () => { const { title, body } = JSON.parse(JSON.stringify(defaultCardState)); updateCardState({ title: { text: title.text, font: title.font, size: title.size }, body }); renderControls(); });
  
  dom.btnExportZip.addEventListener('click', exportAllAsZip);
  dom.saveConfigBtn.addEventListener('click', saveConfig);
  dom.loadConfigBtn.addEventListener('click', loadConfig);
  dom.btnCopyFocused.addEventListener('click', copyFocusedCard);
  dom.btnExportFocused.addEventListener('click', exportFocusedCard);
  dom.btnApplyTheme.addEventListener('click', applyThematicRecommendation);
  
  // 方向按钮事件
  dom.btnPrevCard.addEventListener('click', () => {
    if (activeCardIndex > 0) {
      switchCard(activeCardIndex - 1);
    }
  });
  dom.btnNextCard.addEventListener('click', () => {
    if (activeCardIndex < cardStates.length - 1) {
      switchCard(activeCardIndex + 1);
    }
  });
  
  // 键盘事件监听器
  document.addEventListener('keydown', (e) => {
    // 如果焦点在输入框、文本区域或选择框中，不处理键盘事件
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
      return;
    }
    
    if (e.key === 'ArrowLeft' || e.key === 'Left') {
      e.preventDefault();
      if (activeCardIndex > 0) {
        switchCard(activeCardIndex - 1);
      }
    } else if (e.key === 'ArrowRight' || e.key === 'Right') {
      e.preventDefault();
      if (activeCardIndex < cardStates.length - 1) {
        switchCard(activeCardIndex + 1);
      }
    }
  });
}

// --- HELPERS & UTILS ---

function setButtonLoading(buttons, loadingText = '') {
    buttons.forEach(button => {
        if (button) {
            if (!button.dataset.originalText) {
              button.dataset.originalText = button.innerHTML; 
            }
            button.innerHTML = `<span>${loadingText}</span>`; 
            button.disabled = true;
            button.classList.add('is-loading');
        }
    });
}

function resetButtonLoading(buttons) {
    buttons.forEach(button => {
        if (button) {
            button.innerHTML = button.dataset.originalText || ''; 
            button.dataset.originalText = ''; 
            button.disabled = false;
            button.classList.remove('is-loading');
        }
    });
}

function handleFileUpload(event, maxSizeMB, callback) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > maxSizeMB * 1024 * 1024) { toast(`图片需 ≤ ${maxSizeMB}MB`); event.target.value = ''; return; }
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
  event.target.value = '';
}

async function exportFocusedCard() { 
  const btns = [dom.btnExportFocused, dom.btnExportFloating].filter(Boolean);
  setButtonLoading(btns, '生成中...');
  try { 
    const scale = (parseInt(dom.resolution.value, 10) || 1); 
    const canvas = await html2canvas(dom.p.borderContainer, { scale, useCORS: true, backgroundColor: null, allowTaint: true }); 
    const a = document.createElement('a'); a.download = `卡片-${activeCardIndex+1}-${(cardStates[activeCardIndex].title.text || generateDefaultFilename()).replace(/[/\\:?*"<>|]/g, '-')}.png`; a.href = canvas.toDataURL('image/png'); a.click(); toast(`卡片 ${activeCardIndex+1} 已下载`); 
  } catch (err) { 
      console.error('Single export failed:', err); 
      toast('生成失败: ' + err.message.substring(0, 30)); 
  } 
  finally { 
      resetButtonLoading(btns); 
  } 
}

async function copyFocusedCard() { 
  const btns = [dom.btnCopyFocused, dom.btnCopyFloating].filter(Boolean);
  setButtonLoading(btns, '复制中...');
  try { 
    const scale = (parseInt(dom.resolution.value, 10) || 1); 
    const canvas = await html2canvas(dom.p.borderContainer, { scale, useCORS: true, backgroundColor: null, allowTaint: true }); 
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png')); 
    await navigator.clipboard.write([ new ClipboardItem({ 'image/png': blob }) ]); toast(`卡片 ${activeCardIndex+1} 已复制`); 
  } catch (err) { 
      console.error('Copy to clipboard failed:', err); 
      toast('复制失败: ' + err.message.substring(0, 30)); 
  } 
  finally { 
      resetButtonLoading(btns); 
  } 
}

async function exportAllAsZip() { 
    if (typeof JSZip === 'undefined') { 
        toast('错误: 压缩库未加载'); 
        return; 
    } 
    const btn = dom.btnExportZip;
    setButtonLoading([btn], '准备中...');
    
    let successCount = 0;
    let failCount = 0;

    try { 
        const zip = new JSZip(); 
        const scale = (parseInt(dom.resolution.value, 10) || 1); 
        const originalActiveIndex = activeCardIndex; 
        
        for (let i = 0; i < cardStates.length; i++) { 
            const progressText = `(${i + 1}/${cardStates.length})`;
            btn.innerHTML = `<span>${progressText}</span>`; 

            activeCardIndex = i; 
            renderPreview(); 
            await new Promise(r => setTimeout(r, 50)); 
            
            try {
                const canvas = await html2canvas(dom.p.borderContainer, { scale, useCORS: true, backgroundColor: null, allowTaint: true }); 
                const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png')); 
                let tempState = cardStates[i]; 
                if(globalSettings.unifiedStyling.enabled) { 
                    tempState = {...tempState, title: {...tempState.title, text: cardStates[i].title.text}} 
                } 
                const filename = `卡片-${i+1}-${(tempState.title.text || generateDefaultFilename()).replace(/[/\\:?*"<>|]/g, '-')}.png`; 
                zip.file(filename, blob); 
                successCount++;
            } catch (err) {
                failCount++;
                console.error(`Batch export failed for card ${i+1} (${cardStates[i].title.text}):`, err);
            }
        } 
        
        activeCardIndex = originalActiveIndex; 
        renderPreview(); 
        
        btn.innerHTML = '<span>压缩中...</span>'; 
        
        const content = await zip.generateAsync({ type: "blob" }); 
        const a = document.createElement('a'); 
        a.href = URL.createObjectURL(content); 
        a.download = `信息卡片合集-${generateDefaultFilename()}.zip`; 
        a.click(); 
        URL.revokeObjectURL(a.href); 
        
        toast(`批量导出完成: ${successCount} 成功, ${failCount} 失败`);
        if (failCount > 0) {
            setTimeout(() => toast('部分卡片失败，请检查控制台 (F12)'), 2600);
        }

    } catch (err) { 
        toast('批量导出失败: ' + err.message.substring(0, 30)); 
        console.error('ZIP Export Error:', err); 
    } finally { 
        resetButtonLoading([btn]); 
    } 
}

function saveConfig() { const config = { globalSettings, cardStates }; navigator.clipboard.writeText(JSON.stringify(config, null, 2)).then(() => toast('所有配置已复制')).catch(() => toast('复制失败')); }
async function loadConfig() { if (!confirm('这将覆盖当前所有卡片和全局设置，确定要从剪贴板载入配置吗？')) return; try { const config = JSON.parse(await navigator.clipboard.readText()); if (config.cardStates && config.globalSettings) { cardStates = config.cardStates; globalSettings = deepMerge(JSON.parse(JSON.stringify(defaultGlobalSettings)), config.globalSettings); activeCardIndex = 0; renderApp(); switchCard(0); toast('配置已成功载入'); } else { toast('剪贴板内容不是有效的配置'); } } catch(err) { toast('载入失败，请检查剪贴板内容'); } }
let toastTimer; function toast(msg) { dom.toast.textContent = msg; dom.toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => dom.toast.classList.remove('show'), 2500); }
function generateDefaultFilename() { const d = new Date(); return `${d.getFullYear()}${(d.getMonth()+1).toString().padStart(2,'0')}${d.getDate().toString().padStart(2,'0')}-${d.getHours().toString().padStart(2,'0')}${d.getMinutes().toString().padStart(2,'0')}${d.getSeconds().toString().padStart(2,'0')}`; }
function mapRange(value, inMin, inMax, outMin, outMax) { const val = Math.max(inMin, Math.min(value, inMax)); return (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin; }
function escapeHtml(text) { const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }; return text.replace(/[&<>"']/g, m => map[m]); }
function parseMarkdownTable(markdown) { const lines = markdown.trim().split('\n').map(l => l.trim()).filter(Boolean); if (lines.length < 2 || !lines.every(line => line.startsWith('|') && line.endsWith('|'))) return null; if (!/^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[1])) return null; const headerCells = lines[0].slice(1, -1).split('|').map(cell => `<th>${escapeHtml(cell.trim())}</th>`).join(''); let bodyRows = ''; for (let i = 2; i < lines.length; i++) { const cells = lines[i].slice(1, -1).split('|'); if (cells.length === headerCells.match(/<th>/g).length) { bodyRows += `<tr>${cells.map(cell => `<td>${escapeHtml(cell.trim())}</td>`).join('')}</tr>`; } } if (!headerCells || !bodyRows) return null; return `<table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`; }

// [MODIFIED] Thematic recommendation function now uses the selector
function applyThematicRecommendation() {
  if (cardStates.length === 0) {
    toast("没有卡片可应用主题");
    return;
  }
  
  // Get selected theme
  const selectedThemeIndex = parseInt(dom.themeSelector.value, 10);
  const theme = THEMES[selectedThemeIndex];
  if (!theme) {
      toast("未找到所选主题");
      return;
  }
  
  // [MODIFIED] 检查主题是否有 hueRange，这是新逻辑所必需的
  if (!theme.hueRange) {
      toast("主题配置不完整，缺少 hueRange");
      return;
  }
  
  const targetCards = cardStates.length; 
  
  // [MODIFIED] 确认提示已移除
  
  for (let i = 0; i < targetCards; i++) { 
    const state = cardStates[i];

    // [MODIFIED] 此处逻辑已修改：
    // 1. 样式(字体/颜色/布局) 使用主题的 "封面" 样式
    // 2. 背景(image) 调用新的 generateThematicGradient 函数
    const newState = {
      title: {
        font: theme.fontTitle,
        color: theme.colorTitleCover, // 始终使用封面标题颜色
        size: 52 // 始终使用封面标题字号
      },
      body: {
        font: theme.fontBody,
        color: theme.colorBodyCover, // 始终使用封面正文颜色
        size: 20, // 始终使用封面正文字号
        lineHeight: 1.6,
        autoLineHeight: false
      },
      background: {
        // [MODIFIED] 核心修改：为每张卡片生成一个匹配主题色系的渐变
        image: generateThematicGradient(theme),
        maskOpacity: theme.maskCover // 始终使用封面蒙版
      },
      layout: {
        alignHorizontal: 'center', // 始终居中
        alignVertical: (state.body.text.length > 200 ? 'flex-start' : 'center'), // 文本长则居上，短则居中
        padding: 10, // 始终使用封面内边距
        autoPadding: false,
        border: { enabled: false, width: 0, color: '#ffffff' }, // Disable borders
        radius: { outer: 16, inner: 12 } // Consistent radius
      },
      content: {
        image: {
            ...(state.content.image || {}), // 增加健壮性
            enabled: false,
            sideBySide: false,
        }
      }
    };
    
    cardStates[i] = deepMerge(cardStates[i], newState);
  }
  
  if (globalSettings.unifiedStyling.enabled) {
      updateGlobalState({ unifiedStyling: { enabled: false } });
  }
  
  renderCardSwitcher(); 
  switchCard(activeCardIndex); // 保持在当前卡片索引
  toast(`已应用 "${theme.name}" 主题色系`);
}

function updateContrastHints() { /* Placeholder */ }
function updateWatermarkSizeHint() { const preview = dom.p.preview; if (!preview || globalSettings.watermark.type !== 'image') return; const size = Math.round(Math.min(preview.clientWidth, preview.clientHeight) * (globalSettings.watermark.position === 'center' ? 0.5 : 0.2)); dom.watermarkSizeHint.textContent = `基于当前布局，推荐尺寸: ${size} × ${size} px`; }
function parseColor(color) {
    const canvasCtx = document.createElement('canvas').getContext('2d');
    canvasCtx.fillStyle = color;
    const hex = canvasCtx.fillStyle;
    if (hex.startsWith('#')) {
        const r = parseInt(hex.slice(1, 3), 16); const g = parseInt(hex.slice(3, 5), 16); const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }
    const match = hex.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) { return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) }; }
    return { r: 0, g: 0, b: 0 };
}
async function getAverageLuminance(bg) {
  return new Promise((resolve) => {
      const urlMatch = bg.match(/url\((['"]?)(.*?)\1\)/);
      if (urlMatch && urlMatch[2]) {
          const img = new Image();
          img.crossOrigin = "Anonymous";
          img.src = urlMatch[2];
          img.onload = () => {
              if (img.width === 0 || img.height === 0) { resolve(0.2); return; }
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d', { willReadFrequently: true });
              canvas.width = img.width; canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              try {
                  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                  const data = imageData.data;
                  let r = 0, g = 0, b = 0;
                  for (let i = 0; i < data.length; i += 4) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
                  const pixelCount = data.length / 4;
                  if (pixelCount === 0) { resolve(0.2); return; }
                  r = Math.floor(r / pixelCount); g = Math.floor(g / pixelCount); b = Math.floor(b / pixelCount);
                  resolve((0.2126 * r / 255) + (0.7152 * g / 255) + (0.0722 * b / 255));
              } catch (e) { console.error("Could not get image data.", e); resolve(0.2); }
          };
          img.onerror = () => { console.error("Failed to load image for luminance analysis."); resolve(0.2); };
          return;
      }
      if (bg.includes('gradient')) {
          const colors = bg.match(/(?:#|hsl|rgb)[\da-f(),.%\s]+/g) || [];
          if (colors.length > 0) {
              let totalLuminance = 0;
              for (const colorStr of colors) {
                  const { r, g, b } = parseColor(colorStr.trim());
                  totalLuminance += (0.2126 * r / 255) + (0.7152 * g / 255) + (0.0722 * b / 255);
              }
              resolve(totalLuminance / colors.length);
          } else { resolve(0.2); }
          return;
      }
      try {
          const { r, g, b } = parseColor(bg);
          resolve((0.2126 * r / 255) + (0.7152 * g / 255) + (0.0722 * b / 255));
      } catch(e) { resolve(0.2); }
  });
}
async function autoRecommendColors() {
    if (!globalSettings.autoColorEnabled || !cardStates[activeCardIndex]) return;
    const currentBg = cardStates[activeCardIndex].background.image;
    if (currentBg.startsWith('url')) { toast("正在分析背景图片..."); }
    const avgLuminance = await getAverageLuminance(currentBg);
    const maskOpacity = parseFloat(cardStates[activeCardIndex].background.maskOpacity);
    const finalLuminance = avgLuminance * (1 - maskOpacity);
    const isDarkBg = finalLuminance < 0.5;
    updateCardState({
        body: { color: isDarkBg ? '#E5E7EB' : '#374151' }
    });
    renderControls();
    if (currentBg.startsWith('url')) { toast("正文颜色已自动调整"); }
}
function populateBackgrounds() {
    dom.thumbs.innerHTML = '';
    bgPresets.forEach(bg => {
        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        thumb.style.backgroundImage = bg.startsWith('hsl') ? 'none' : bg;
        thumb.style.backgroundColor = bg.startsWith('hsl') ? bg : 'transparent';
        thumb.dataset.bg = bg;
        thumb.innerHTML = '<div class="selection-indicator"></div>';
        thumb.addEventListener('click', async () => {
            updateCardState({ background: { image: bg }});
            await autoRecommendColors();
        });
        dom.thumbs.appendChild(thumb);
    });
}

// --- INITIALIZATION ---
function init() {
  dom.unifiedFontTitle.innerHTML = dom.fontTitle.innerHTML;
  dom.unifiedFontBody.innerHTML = dom.fontBody.innerHTML;
  bgPresets = generateAllPresets();
  populateBackgrounds();
  populateThemeSelector(); // [NEW]
  setupEventListeners();
  setupAccordionListeners(); 
  loadState();
  renderApp();
  switchCard(0);
  updateNavButtons(); // 初始化按钮状态
  window.addEventListener('resize', renderQRCode);
}

init();
    











})();
