const MinimizeIcon = (props) => {
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
        d="M2.833 9.917h4.25v4.25M14.166 7.083h-4.25v-4.25M9.916 7.083l4.959-4.958M2.125 14.875l4.958-4.958"
      />
    </svg>
  );
};

export default MinimizeIcon;
