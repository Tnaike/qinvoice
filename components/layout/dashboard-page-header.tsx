import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  rightSection?: React.ReactNode;
}

export default function PageHeader({
  title,
  description,
  rightSection,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      {rightSection && <div>{rightSection}</div>}
    </div>
  );
}
