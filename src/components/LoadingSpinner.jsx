import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const accent = "#f05656";

const LoadingSpinner = () => (
  <div className="sweet-loading">
    <BeatLoader color={accent} loading={true} css={override} size={15} />
  </div>
);

export default LoadingSpinner;
