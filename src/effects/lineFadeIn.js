import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";


export default function lineFadeIn(){

  gsap.registerEffect({
    name: "lineFadeIn",
    effect: (targets, config) => {

      const tl = gsap.timeline()

      SplitText.create(targets, {
        type: "lines",
        autoSplit: true,
        onSplit(self) {
          return tl.from(self.lines, { // a returned animation gets cleaned up and time-synced on each onSplit() call
            opacity: 0,
            stagger: config.stagger,
            duration: config.duration,
            // onComplete: () => self.revert() // revert the element to its original (unsplit) state
            // Revert has lots of bugs - try but likely wont work
          });
        }
      });

      return tl;
    },
    defaults: { duration: 1, stagger: 0.2, ease: "power2.out" },
    extendTimeline: true
  });
}