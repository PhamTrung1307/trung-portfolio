import React from 'react'

const paths = {
  download: "M12 3v10m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
  github:
    "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5 5 0 0 0-1.4-3.4 4.6 4.6 0 0 0-.1-3.4s-1.1-.3-3.5 1.3a12.1 12.1 0 0 0-6 0C6.6.9 5.5 1.2 5.5 1.2a4.6 4.6 0 0 0-.1 3.4A5 5 0 0 0 4 8c0 5 3 6.5 6 6.5a4.8 4.8 0 0 0-1 3.5v4M9 18c-4.5 2-5-2-7-2",
  mail: "M4 4h16v16H4z M4 7l8 6 8-6",
  external: "M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z",
  linkedin:
    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
};

function Icon({ name, size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export default Icon;
