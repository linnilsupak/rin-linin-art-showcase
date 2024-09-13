export function scrollToElementById(id: string, minusScroll = 0): boolean {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - minusScroll;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return true;
  }
  return false;
}
