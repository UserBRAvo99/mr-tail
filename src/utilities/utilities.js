export function toggle(value) {
  return !value;
}

export function scrollStop(value) {
  if (!value) {
    document.body.style.overflow = "hidden";
    return;
  }
  document.body.style.overflow = "scroll";
}
