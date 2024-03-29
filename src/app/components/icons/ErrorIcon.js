const ErrorIcon = (props) => {
  const { stroke } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <g
        stroke={stroke ? stroke : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <path d="M10 18.333a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667ZM10 6.667V10M10 13.334h.008" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ErrorIcon;
