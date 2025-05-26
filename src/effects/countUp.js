import gsap from 'gsap';

export default function countUp(){

  gsap.registerEffect({
    name: "countUp",
    effect: (targets, config) => {

      let counter = {value: config.startValue}

      // set it to start value
      targets.forEach(target => {
        target.innerText = counter.value.toFixed(config.decimals)
      })

      return gsap.to(counter, { 
        value: config.endValue,
        duration: config.duration, 
        ease: "none",
        onUpdate: () => {
          targets.forEach(target => {
            target.innerText = counter.value.toFixed(config.decimals)
          })
        },
      });
    },
    defaults: { duration: 2, startValue: 0, decimals: 2, endValue: 100 }, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
  });
}