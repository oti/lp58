/**
 * Demo6
 */

class Demo6 {
  constructor() {
    this.toggler = document.querySelector("#hamburger");
    this.opnendName = "-opened";
    this.opened = false;
  }

  init() {
    if (!this.toggler) return;
    this.attachEvent();
  }

  attachEvent() {
    this.toggler.addEventListener("click", (e) => {
      this.opened = !this.opened;
      this.toggleState();
    });
  }

  toggleState() {
    // クラスの付け外し
    if (this.opened) {
      this.toggler.classList.add(this.opnendName);
    } else {
      this.toggler.classList.remove(this.opnendName);
    }

    // ariaの切り替え
    if (this.opened) {
      this.toggler.setAttribute("aria-label", "メニューを閉じる");
    } else {
      this.toggler.setAttribute("aria-label", "メニューを開く");
    }
  }
}

export default Demo6;
