let hiddenTextarea = null;

const HIDDEN_STYLE = `
  height: 0 !important;
  min-height: 0 !important;
  max-height: none !important;
  visibility: hidden !important;
  overflow: hidden !important;
  position: absolute !important;
  z-index: -1000 !important;
  top: 0 !important;
  right: 0 !important;
`;

const CONTEXT_STYLE = [
  'padding-top',
  'padding-bottom',
  'padding-left',
  'padding-rigth',
  'letter-spacing',
  'line-height',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'text-indent',
  'width',
  'border-width',
  'box-sizing'
]

function calculateNodeStyling(el) {
  const style = window.getComputedStyle(el);

  const boxSizing = style.getPropertyValue('box-sizing');

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-top')) +
    parseFloat(style.getPropertyValue('padding-bottom'))
  );

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  );

  const contextStyle = CONTEXT_STYLE.map((name) => `${name}: ${style.getPropertyValue(name)}`).join(';');

  return {
    boxSizing,
    paddingSize,
    borderSize,
    contextStyle
  }
}

export default function calcTextareaHeight(el, minRows = null, maxRows = null) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  let {
    boxSizing,
    paddingSize,
    borderSize,
    contextStyle
  } = calculateNodeStyling(el);

  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = el.value || el.placehloder || '';

  let height = hiddenTextarea.scrollHeight;
  let minHeight = -Infinity;
  let maxHeight = Infinity;

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }
  hiddenTextarea.value = '';
  let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows) {
    minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
  }
  if (maxRows) {
    maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }

  return {
    height: `${height}px`,
    minHeight: `${minHeight}px`,
    maxHeight: `${maxHeight}px`,
  }
}
