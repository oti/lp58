/**
 * ViewChange
 */

class ViewChange {
  constructor() {
    this.body = document.querySelector("body");
    this.toggler = document.querySelector("#toggleViewMode");
    this.demoViewName = "-demoView";
    this.demoView = false;
  }

  init() {
    if (!this.toggler) return;
    this.attachEvent();
  }

  attachEvent() {
    this.toggler.addEventListener("click", (e) => {
      this.demoView = !this.demoView;
      this.toggleState();
    });
  }

  toggleState() {
    // クラスの付け外し
    if (this.demoView) {
      this.body.classList.add(this.demoViewName);
    } else {
      this.body.classList.remove(this.demoViewName);
    }

    // ariaの切り替え
    if (this.demoView) {
      this.toggler.textContent = "デモモードをやめる";
    } else {
      this.toggler.textContent = "デモモードにする";
    }
  }
}

export default ViewChange;
