import { styled } from "../../config";

export const Button = styled("button", {
  padding: "12px 20px",
  backgroundColor: "$primary",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
  display: "block",
  gap: "8px",
  appearance: "none",
  fontSize: "16px",

  "&:hover": {
    backgroundColor: "$primaryHover",
  },
});
