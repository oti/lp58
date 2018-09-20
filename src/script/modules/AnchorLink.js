/**
 * AnchorLink :
 *   アンカーリンクのスムーススクロール
 */

import SmoothScroll from "smooth-scroll"

class AnchorLink {

  constructor() {
    this.body = document.querySelector('body')
    this.anchorLink = document.querySelectorAll('a[href^="#"]')
    this.scroll = new SmoothScroll();
    this.offset = 0
  }

  init() {
    if (!this.anchorLink) return
    this.attachEvent()
  }

  attachEvent() {
    [...this.anchorLink].forEach(elem => {
      elem.addEventListener('click', event => {
        const offset = event.target.getAttribute('data-offset') || this.offset
        const anchor = event.target.getAttribute('href')

        this.scroll.animateScroll(document.querySelector(anchor), false, {offset: offset})
      }, false)
    })
  }
}

export default AnchorLink
