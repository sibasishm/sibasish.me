import icons from '../lib/icons';

const SVGProvider = ({ name }) => (
  <svg
    className="fill-current h-5 w-5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {icons[name]}
  </svg>
);

export default SVGProvider;
