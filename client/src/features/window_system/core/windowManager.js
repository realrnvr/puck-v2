export class WindowManager {
  constructor() {
    this.windows = new Map();
    this.z = 1;
  }

  bringToFrontById(id) {
    if (!id) return;
    this.z++;
    this.windows.get(id).style.zIndex = this.z;
  }

  registerWindow(id, node) {
    this.windows.set(id, node);
    this.bringToFrontById(id);
    this.updateScrollLock();
  }

  unregisterWindow(id) {
    this.windows.delete(id);
    this.updateScrollLock();
  }

  updateScrollLock() {
    document.body.style.overflow = this.windows.size > 0 ? "hidden" : "auto";
  }
}
