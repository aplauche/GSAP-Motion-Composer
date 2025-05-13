import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { GSAPMotionComposer } from "../dist/gsap-motion-composer.min.js";

const gmc = GSAPMotionComposer({triggerStart: "top top"})

gsap.timeline().wordSlideUp('.title')

gmc.recipes.pinnedImageSequence('.airpod-row')

gmc.each('.icon-row', (block) => {
  const items = block.querySelectorAll('.item') // Items are scoped to instance
  gmc.onScroll.enter(block)
    .from(items, {autoAlpha: 0, y: 32, stagger: 0.4, duration: 1})
})
gmc.each('.line-fade-row', (block) => {
  const items = block.querySelectorAll('.lines') // Items are scoped to instance
  gmc.onScroll.enter(block).lineFadeIn(items)
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