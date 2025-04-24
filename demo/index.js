import gsap from "gsap";
import { gmc } from "../src/gsap-motion-composer.js";

gsap.timeline().titleSlideUp('.title')

gmc.each('.icon-row', (block) => {
  const items = block.querySelectorAll('.item') // Items are scoped to instance
  gmc.onScroll.enter(block)
    .from(items, {autoAlpha: 0, y: 32, stagger: 0.4, duration: 1})
})

gmc.each('.icon-row-with-reset', (block) => {
  const items = block.querySelectorAll('.item') // Items are scoped to instance
  gmc.onScroll.enterAndReset(block)
    .from(items, {autoAlpha: 0, y: 32, stagger: 0.4, duration: 1})
})

gmc.each('.counter-row', (block) => {
  const counter = block.querySelector('.counter-item')
  gmc.onScroll.enter(block).countUp(counter)
})

gmc.each('.parallax-row', (block) => {
  const items = block.querySelectorAll('.item')
  gmc.onScroll.scrub(block)
    .from(items[0], {y: -300}, "0")
    .from(items[1], {y: 200}, "0")
    .from(items[2], {y: 400}, "0")
})

gmc.each('.parallax-pinned-row', (block) => {
  const items = block.querySelectorAll('.item')
  gmc.onScroll.scrubAndPin(block)
    .from(items[0], {y: -300}, "0")
    .from(items[1], {y: 200}, "0")
    .from(items[2], {y: 400}, "0")
})

// gmc.each('.icon-row', (block) => {
//   const items = block.querySelectorAll('.icon-row__item')
//   const tl = gmc.scroll.enter(block).from(items, {autoAlpha: 0, y:32, stagger: 1, duration: 3})
// })


// gmc.each('.icon-row', (block) => {
//   const items = block.querySelectorAll('.icon-row__item')
//   const tl = gmc.scroll.enter(block).from(items, {autoAlpha: 0, y:32, stagger: 1, duration: 3})
// })

// gmc.each('.counter-row', (block) => {
//   gmc.scroll.enter(block).from(block, {
//     onUpdate: (this) => {
//       gmc.onUpdate.count(this, '.count', 8, 80, 2)
//     }
//   })
// })

// gmc.recipes.pinnedImageSequence()