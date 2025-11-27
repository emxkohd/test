export interface IButton {
  variant: "primary" | "secondary" | "danger";
  onClick?: () => void;
  children?: React.ReactNode;
}
