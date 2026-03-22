type Position = {
  x: number;
  y: number;
};

export default function getCenteredPosition(
  width: number,
  height: number,
): Position {
  const x = window.innerWidth / 2 - width / 2;
  const y = window.innerHeight / 2 - height / 2;

  return { x, y };
}
