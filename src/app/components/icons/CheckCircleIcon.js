const CheckCircleIcon = (props) => {
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
        <path d="M18.333 9.234V10a8.334 8.334 0 1 1-4.941-7.616" />
        <path d="M18.333 3.333 10 11.675l-2.5-2.5" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckCircleIcon;
