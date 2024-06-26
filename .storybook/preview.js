/** @type { import('@storybook/react').Preview } */
import "../src/index.css";

// import * as nextImage from "next/image";

// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// Object.defineProperty(nextImage, "default", {
//   configurable: true,
//   value: (props) => <img {...props} />,
// });

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

// export default preview;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
