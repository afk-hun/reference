type StartRatingProps = {
  rate: number;
};
export function StarRating({ rate }: StartRatingProps) {
  let classes: string[] = [];
  const whole = Math.floor(rate);
  const fraction = rate - whole;

  for (let i = 1; i <= whole; i++) {
    classes.push("-fill");
  }
  classes.push(fraction < 0.3 ? "" : "-half");

  for (let i = whole + 1; i < 5; i++) {
    classes.push("");
  }

  return (
    <div className="d-flex ">
      {classes.map((star, index) => {
        return <i key={index} className={`bi bi-star${star}`}></i>;
      })}
    </div>
  );
}
