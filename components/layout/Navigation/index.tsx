import React, { ReactNode } from "react";

interface NavigationProps {
  children: ReactNode;
  className?: string;
}

function Navigation({ children, className }: NavigationProps) {
  const filteredChildren = React.Children.toArray(children).filter(Boolean);

  if (filteredChildren.length === 0) {
    return null;
  }

  return (
    <nav className={`flex flex-col gap-2 ${className}`}>
      <ul>
        {filteredChildren.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
