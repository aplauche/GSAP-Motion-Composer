// rollup.config.js
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/gsap-motion-composer.js',
  output: [
    {
      file: 'dist/gsap-motion-composer.esm.js',
      format: 'esm', // <- for import/export
    },
    {
      file: 'dist/gsap-motion-composer.esm.min.js',
      format: 'esm', // <- for import/export
      plugins: [terser()],
    }
  ],
  external: ['gsap', 'gsap/ScrollTrigger', 'gsap/SplitText'], // <-- this prevents GSAP from being bundled
};
