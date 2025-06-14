const StarIcon = ({ filled = false, halfFilled = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`w-6 h-6 ${
      filled ? 'text-yellow-500 fill-yellow-500' :
      halfFilled ? 'text-yellow-500 fill-yellow-500' : 
      'text-gray-300 fill-gray-300'
    }`}
  >
    {halfFilled ? (
      <path d="M12 2L9 8H2L7 12L4 18L12 14V2Z" />
    ) : (
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    )}
  </svg>
);

export default StarIcon;