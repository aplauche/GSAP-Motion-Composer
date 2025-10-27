import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const GSAPMotionComposer = (start = "top bottom-=150px") => {

  // Register Plugins
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText)

  // Defaults
  const scrollDefaults = {
    start: start,
    scrub: false,
    pin: false
  }

  /**
   * Utility for selecting an element
   * 
   * @param {String} selector selector for querySelectorAll() to find and execute for each loop on
   * @param {HTMLElement} block scope on which to search
   */
    const el = (selector, block = document) => {
      return block.querySelector(selector)
    }

  /**
   * Utility for selecting multiple elements
   * 
   * @param {String} selector selector for querySelectorAll() to find and execute for each loop on
   * @param {HTMLElement} block scope on which to search
   */
    const all = (selector, block = document) => {
      return block.querySelectorAll(selector)
    }

  /**
   * Utility for doing a querySelectorAll and forEach loop and then running functionality
   * 
   * @param {String} selector selector for querySelectorAll() to find and execute for each loop on
   * @param {Function} cb Function to execute scoped to each section
   */
    const each = (selector, cb) => {
      const items = document.querySelectorAll(selector)
      items.forEach(item => {
        cb(item)
      })
    }

  /**
   * Scrolltrigger generators for quickly creating scroll based animations
   */
  const onScroll = {
    /**
     * A basic scrolltrigger that will play your chained animations when the section enters the viewport
     * 
     * @param {HTMLElement} section The section to execute the trigger on
     * @param {GSAPTimeline} animation Optionally pass a preconfigured timeline to trigger
     * @param {Object} options object containing extra scroll trigger configurations
     * @returns {GSAPTimeline}
     */
    enter: (
      section,
      animation = false,
      options = {}
    ) => {
      // If a timeline is not passed, create one and return it for chaining
      let tl = animation ? animation : gsap.timeline({})

      ScrollTrigger.create({
        trigger: section,
        ...scrollDefaults,
        ...options,
        animation: tl
      })
      return tl
    },
    /**
     * A scrolltrigger with offscreen resets - pass in a timeline or tween 
     * 
     * @param {HTMLElement} section The section to execute the trigger on
     * @param {GSAPTimeline} animation Optionally pass a preconfigured timeline to trigger
     * @param {Object} options object containing extra scroll trigger configurations
     * @returns {GSAPTimeline}
     */
    enterAndReset: (
      section,
      animation = false,
      options = {}
    ) => {
      let tl = animation ? animation : gsap.timeline({})
      tl.pause(0)
      const playScrollTrigger = ScrollTrigger.create({
        trigger: section,
        ...scrollDefaults,
        ...options,
        onEnter: () => tl.play(),

      })
      const resetScrollTrigger = ScrollTrigger.create({
        trigger: section,
        onLeaveBack: () => tl.pause(0),
        start: "top bottom",
      })
      return tl
    },
    /**
     * A scrolltrigger that scrubs with scroll 
     * 
     * @param {HTMLElement} section The section to execute the trigger on
     * @param {GSAPTimeline} animation Optionally pass a preconfigured timeline to trigger
     * @param {Object} options object containing extra scroll trigger configurations
     * @returns {GSAPTimeline}
     */
    scrub: (
      section,
      animation = false,
      options = {}
    ) => {
      let tl = animation ? animation : gsap.timeline({})

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        pin: false,
        ...options,
        animation: tl
      })

      return tl
    },
    /**
     * A scrolltrigger that scrubs with scroll and pins section 
     * 
     * @param {HTMLElement} section The section to execute the trigger on
     * @param {GSAPTimeline} animation Optionally pass a preconfigured timeline to trigger
     * @param {Object} options object containing extra scroll trigger configurations
     * @returns {GSAPTimeline}
     */
    scrubAndPin: (
      section,
      animation = false,
      length = 500,
      options = {}
    ) => {
      let tl = animation ? animation : gsap.timeline({})

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${length}`,
        scrub: true,
        pin: true,
        ...options,
        animation: tl
      })

      return tl
    }
  }
  

  return {
    el,
    all,
    each,
    onScroll
  }
}

export const gmc = GSAPMotionComposer();

