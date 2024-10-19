export const Card = ({
  children,
  noPadding,
}: {
  children: React.ReactNode;
  noPadding?: boolean;
}) => {
  let classes = 'bg-white shadow-md shadow-gray-300 rounded-md mb-5';
  if (!noPadding) {
    classes += ' p-4';
  }
  return <div className={classes}>{children}</div>;
};
