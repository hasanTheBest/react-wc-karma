import React, { ReactNode } from "react";
interface PropsType {
  children: ReactNode;
}
const FooterCopy = (props: PropsType) => {
  return (
    <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
      <p className="footer-text m-0">{props.children}</p>
    </div>
  );
};

export default FooterCopy;
