/** @type {import('tailwindcss').Config} */

import tastitPreset from './presets/tastit-preset';
import animate from 'tailwindcss-animate';

const config = {
  presets: [tastitPreset],
  plugins: [animate],
};

export default config;
