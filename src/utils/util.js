export const uuid = () => {
  return Math.random()
    .toString(36)
    .slice(6);
};

export const calculateContentHeight = (el, lineHeight) => {
  const origHeight = el.style.height;
  const height = el.offsetHeight;
  const scrollHeight = el.scrollHeight;

  el.style.overflow = 'hidden';
  console.log('origHeight', origHeight, 'offsetHeight', height, 'scrollHeight', scrollHeight);
  if (height >= scrollHeight) {
    el.style.height = (height + lineHeight) + 'px';

    if (scrollHeight < el.scrollHeight) {
      el.style.height = origHeight;
      return height;
    }
  }

  return scrollHeight;
};
