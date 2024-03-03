import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

// CSS for the spinner
const override = css`
  display: block; // Display as a block element
  margin: 0 auto; // Center the spinner horizontally
  border-color: red; // Set the border color to red
`;

// Color for the spinner
const accent = "#f05656";

// LoadingSpinner component
const LoadingSpinner = () => (
  <div className="sweet-loading">
    <BeatLoader color={accent} loading={true} css={override} size={15} />
  </div>
);

// Export the LoadingSpinner component
export default LoadingSpinner;
