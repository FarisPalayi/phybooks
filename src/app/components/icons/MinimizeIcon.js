const MinimizeIcon = (props) => {
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
        strokeWidth={1.5}
        d="M3.333 11.667h5v5M16.666 8.333h-5v-5M11.666 8.333 17.5 2.5M2.5 17.5l5.833-5.833"
      />
    </svg>
  );
};

export default MinimizeIcon;
