import gsap from 'gsap';

export default function registerTitleSlideUpEffect(){

  function splitTitleWords(el) {
    if (!el) return;
  
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = ''; // Clear original content
  
    words.forEach(word => {
      const outerSpan = document.createElement('span');
      outerSpan.classList.add('word-wrapper');
      outerSpan.style = "overflow: hidden; display: inline-block;  vertical-align: bottom;"
  
      const innerSpan = document.createElement('span');
      innerSpan.classList.add('word');
      innerSpan.style = "display: inline-block;"
      innerSpan.textContent = word;
  
      outerSpan.appendChild(innerSpan);
      el.appendChild(outerSpan);
      el.appendChild(document.createTextNode(' ')); // preserve spaces
    });
  }

  gsap.registerEffect({
    name: "titleSlideUp",
    effect: (targets, config) => {
      const master = gsap.timeline();

      gsap.utils.toArray(targets).forEach(target => {
        splitTitleWords(target);
        const words = target.querySelectorAll('.word');

        const tl = gsap.from(words, {
          translateY: "100%",
          duration: config.duration,
          stagger: config.stagger,
          ease: config.ease
        });

        master.add(tl, 0); // add all at once, or use "+=..." for sequencing
      });

      return master;
    },
    defaults: { duration: 0.6, stagger: 0.08, ease: "power2.out" },
    extendTimeline: true
  });
}