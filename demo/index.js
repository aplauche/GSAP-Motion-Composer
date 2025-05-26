import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { gmc } from "../dist/gsap-motion-composer.min.js";
import './style.scss'

const tl = gsap.timeline()

tl
  .wordSlideUp('.title')
  .from('subhead', {autoAlpha: 0}, ">-=0.5")
  .fromTo('.button, .pill', {autoAlpha: 0}, {autoAlpha: 1}, ">-=0.5")
  .fromTo('.compare', {autoAlpha: 0}, {autoAlpha: 1}, ">-=0.5")


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

let mm = gsap.matchMedia();

mm.add("(max-width: 960px)", () => {
  console.log("test")
  gmc.each('.parallax-row', (block) => {
    const items = block.querySelectorAll('.item')
    gmc.onScroll.scrub(block)
    .from(items[0], {x: -150}, "0")
    .from(items[1], {x: 120}, "0")
    .from(items[2], {x: 90}, "0")
  })
  
  gmc.each('.parallax-pinned-row', (block) => {
    const items = block.querySelectorAll('.item')
    gmc.onScroll.scrubAndPin(block)
      .from(items[0], {x: -50}, "0")
      .from(items[1], {x: 90}, "0")
      .from(items[2], {x: 30}, "0")
  })
})

mm.add("(min-width: 961px)", () => {
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
})



gmc.recipes.pinnedImageSequence('.airpod-row')