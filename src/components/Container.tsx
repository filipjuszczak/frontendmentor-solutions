import { useMemo } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "max-w-container mx-auto",
  role
}) => {
  const props = useMemo(
    () => ({
      ...(className && { className: className + " max-w-container mx-auto" }),
      ...(role && { role })
    }),
    [className, role]
  );

  return <div {...props}>{children}</div>;
};

export default Container;
