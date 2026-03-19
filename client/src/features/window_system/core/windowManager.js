class WindowManager {
  constructor() {
    this.z = 1;
    this.openWindows = 0;
  }

  bringToFront(node) {
    if (!node) return;
    this.z++;
    console.log(node);
    node.style.zIndex = this.z;
  }

  registerWindow() {
    this.openWindows++;
    this.updateScrollLock();
  }

  unregisterWindow() {
    this.openWindows = Math.max(0, this.openWindows - 1);
    this.updateScrollLock();
  }

  updateScrollLock() {
    if (this.openWindows > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
}

export const windowManager = new WindowManager();
