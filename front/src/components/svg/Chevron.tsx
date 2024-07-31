interface IChevronParams {
  width?: number;
  height?: number;
  color?: string;
}
export const DoubleChevLeft = ({
  width = 20,
  height = 20,
  color = "white",
}: IChevronParams) => {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
      />
    </svg>
  );
};
export const DoubleChevRight = ({
  width = 20,
  height = 20,
  color = "white",
}: IChevronParams) => {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export const ChevLeft = ({
  width = 20,
  height = 20,
  color = "white",
}: IChevronParams) => {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};
export const ChevRight = ({
  width = 20,
  height = 20,
  color = "white",
}: IChevronParams) => {
  return (
    <svg
      width={width}
      height={height}
      color={color}
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
