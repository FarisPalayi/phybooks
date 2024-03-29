const CheckIcon = (props) => {
  const { stroke } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <path
        stroke={stroke ? stroke : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.667 5 7.5 14.167 3.333 10"
      />
    </svg>
  );
};

export default CheckIcon;
