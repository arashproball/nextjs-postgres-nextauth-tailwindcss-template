export function ProductIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="3240"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 100 100"
    >
      <path d="M92.9,25.1c-0.1-0.6-0.5-1.1-1-1.4L62.8,8.2C62,7.8,61,8,60.4,8.6L50,19.8L39.6,8.6C39,8,38,7.8,37.2,8.2L8.2,23.7   c-0.5,0.3-0.9,0.8-1,1.4c-0.1,0.6,0.1,1.2,0.4,1.7l9.8,11.4L7.6,49.6c-0.4,0.5-0.6,1.1-0.4,1.7c0.1,0.6,0.5,1.1,1,1.4l9.9,5.4v15.6   c0,0.7,0.4,1.4,1,1.8l30,16.4c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.1,0,0.2,0.1c0.2,0,0.3,0.1,0.5,0.1s0.3,0,0.5-0.1   c0.1,0,0.1,0,0.2-0.1c0.1,0,0.2-0.1,0.3-0.1l30-16.4c0.6-0.4,1-1,1-1.8V58.1l9.9-5.4c0.5-0.3,0.9-0.8,1-1.4   c0.1-0.6-0.1-1.2-0.4-1.7l-9.8-11.4l9.8-11.4C92.8,26.3,93,25.7,92.9,25.1z M12.2,26l25.5-13.6l9,9.7L20.5,35.7L12.2,26z    M20.5,54.9l-8.3-4.6l8.3-9.6L46.6,55L37,63.9l-15.6-8.6C21.1,55.1,20.8,55,20.5,54.9z M48,86.6L22,72.4V60.3l14.3,7.8   c0.3,0.2,0.6,0.2,1,0.2c0.5,0,1-0.2,1.4-0.5l9.4-8.7V86.6z M50,52.3l-25.7-14L50,25l25.7,13.3L50,52.3z M78,72.4L52,86.6V59.1   l9.4,8.7c0.4,0.4,0.9,0.5,1.4,0.5c0.3,0,0.7-0.1,1-0.2L78,60.3V72.4z M87.8,50.3L63,63.9L53.4,55l26.1-14.3L87.8,50.3z M79.5,35.7   L53.3,22.2l9-9.7L87.8,26L79.5,35.7z" />
    </svg>
  );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_4)">
        <path
          d="M35.2 4C36.48 4 37.6933 4.49333 38.6 5.4C39.5067 6.30667 40 7.52 40 8.8V31.2C40 32.48 39.5067 33.6933 38.6 34.6C37.6933 35.5067 36.48 36 35.2 36H12.8C11.52 36 10.3067 35.5067 9.4 34.6C8.49333 33.6933 8 32.48 8 31.2V8.8C8 7.52 8.49333 6.30667 9.4 5.4C10.3067 4.49333 11.52 4 12.8 4H35.2ZM35.2 0H12.8C7.93333 0 4 3.93333 4 8.8V31.2C4 36.0667 7.93333 40 12.8 40H35.2C40.0667 40 44 36.0667 44 31.2V8.8C44 3.93333 40.0667 0 35.2 0Z"
          fill="black"
        />
        <path
          d="M40.9467 16.32H26.3467C25.24 16.32 24.3467 15.4267 24.3467 14.32C24.3467 13.2133 25.24 12.32 26.3467 12.32H40.9467C42.0533 12.32 42.9467 13.2133 42.9467 14.32C42.9467 15.4267 42.0533 16.32 40.9467 16.32Z"
          fill="black"
        />
        <path
          d="M24 27.7467H8.30667C7.2 27.7467 6.30667 26.8533 6.30667 25.7467C6.30667 24.64 7.2 23.7467 8.30667 23.7467H24C25.1067 23.7467 26 24.64 26 25.7467C26 26.8533 25.1067 27.7467 24 27.7467Z"
          fill="black"
        />
        <path
          d="M32.0133 39.1333C31.36 39.1333 30.72 38.8133 30.3334 38.2267L8.16002 4.37333C7.56002 3.45333 7.81334 2.21333 8.73334 1.6C9.65334 0.986665 10.8933 1.25333 11.5067 2.17333L33.68 36.0267C34.28 36.9467 34.0267 38.1867 33.1067 38.8C32.7733 39.0267 32.3867 39.1333 32.0133 39.1333Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_4"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function VercelLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Vercel logomark"
      height="64"
      role="img"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
