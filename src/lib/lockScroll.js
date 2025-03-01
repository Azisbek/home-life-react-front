export function lockScroll(isOpen = true) {
  if (isOpen) {
    document.body.classList.add("lock-scroll");
  } 
  else {
    document.body.classList.remove("lock-scroll");
  }
}
