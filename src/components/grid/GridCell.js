import "./GridCell.css";

export default function GridCell({ children, ...props }) {
  return (
    <div {...props} className="grid-cell">
      {children[5]}
    </div>
  );
}
