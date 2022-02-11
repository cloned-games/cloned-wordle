import GridCell from "./GridCell";
import "./Grid.css";

const invalidWordAnimation = "animate__animated animate__shakeX";

export default function Grid({ letters = [] }) {
  const gridArray = Array.from(new Array(5 * 6));
  return (
    <div className="grid-container">
      {gridArray.map((key, index) => {
        const hasStatus = ["correct", "missplaced", "wrong"].includes(
          letters[index]?.status
        );
        return (
          <GridCell>
            index={index}
            style={{ animationDelay: hasStatus ? `${(index % 5) / 4}s` : "0s" }}
            letter={letters[index]?.letter}
          </GridCell>
        );
      })}
    </div>
  );
}
