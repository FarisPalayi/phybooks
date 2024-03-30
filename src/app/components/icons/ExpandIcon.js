const ExpandIcon = (props) => {
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
        d="M12.5 2.5h5v5M7.5 17.5h-5v-5M17.5 2.5l-5.834 5.833M2.5 17.5l5.833-5.833"
      />
    </svg>
  );
};

export default ExpandIcon;
