import React from "react";

interface TagProps {
  label: string;
  className?: string;
}

function Tag({ label, className }: TagProps) {
  return (
    <div
      className={`bg-w16 text-white px-6 py-3 rounded-full border border-gray-700 text-center h5 ${className}`}
    >
      {label}
    </div>
  );
}
export default Tag;
