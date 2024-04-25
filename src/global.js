import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;

/* font sizes */
--font-size-xs: 12px;
--font-size-base: 16px;

/* Colors */
--color-white: #fff;
--color-gray-100: #1c1c1c;
--color-lavender-100: #f0edff;
--color-lavender-200: rgba(240, 237, 255, 0.8);
--color-dimgray: #525252;

/* Border radiuses */
--br-base: 16px;

}
`;
}
