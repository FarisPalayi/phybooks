const ExpandIcon = (props) => {
  const { stroke } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      {...props}
    >
      <path
        stroke={stroke ? stroke : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.625 2.125h4.25v4.25M6.375 14.875h-4.25v-4.25M14.875 2.125 9.916 7.083M2.125 14.875l4.958-4.958"
      />
    </svg>
  );
};

export default ExpandIcon;
