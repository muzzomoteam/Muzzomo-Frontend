import React, { ReactNode } from "react";
import { mount as mountBase, MountRendererProps, ReactWrapper } from "enzyme";

/**
 * Custom renderer example with enzyme
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://enzymejs.github.io/enzyme/
 */

const mount: (node: ReactNode, options?: MountRendererProps) => ReactWrapper = (node, options) => {
  return mountBase(<>{node}</>, options);
};

// override render method
export default mount;
