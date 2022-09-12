import * as React from "react";
import { useEffect } from "react";

const PageNotFound = (): React.ReactElement => {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return <React.Fragment></React.Fragment>;
};

export default PageNotFound;
