export const Logo = () => {
  return (
    <svg
      width="250"
      height="50"
      viewBox="0 0 360 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      <g transform="translate(10,15)">
        <path
          d="M25 5
         C15 5, 10 15, 15 22
         C8 25, 10 40, 25 40
         C40 40, 42 25, 35 22
         C40 15, 35 5, 25 5Z"
          fill="url(#aiGradient)"
        />

        <circle cx="20" cy="18" r="2" fill="#ffffff" />
        <circle cx="30" cy="18" r="2" fill="#ffffff" />
        <circle cx="25" cy="28" r="2" fill="#ffffff" />

        <line
          x1="20"
          y1="18"
          x2="25"
          y2="28"
          stroke="#fff"
          strokeWidth="1.5"
        />
        <line
          x1="30"
          y1="18"
          x2="25"
          y2="28"
          stroke="#fff"
          strokeWidth="1.5"
        />
      </g>

      <text
        x="70"
        y="52"
        fontSize="36"
        fontWeight="600"
        fontFamily="Segoe UI, sans-serif"
        fill="url(#aiGradient)"
      >
        skynateAI
      </text>
    </svg>
  );
};

export const About = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="16px"
      height="16px"
    >
      <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z" />
    </svg>
  );
};
