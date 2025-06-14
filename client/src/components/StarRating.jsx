// components/StarRating.jsx
const StarRating = ({ rating = 0 }) => {
  // Calcul des étoiles
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Couleurs en dur dans le SVG
  const yellow = "#FACC15"; // Jaune vif
  const gray = "#D1D5DB";  // Gris clair

  return (
    <div className="flex items-center">
      {/* Étoiles pleines */}
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{ marginRight: 2 }}
        >
          <path fill={yellow} d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}

      {/* Demi-étoile */}
      {hasHalfStar && (
        <div style={{ position: 'relative', width: 24, height: 24, marginRight: 2 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            style={{ position: 'absolute', left: 0 }}
          >
            <path fill={gray} d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            style={{ position: 'absolute', left: 0, width: '50%', overflow: 'hidden' }}
          >
            <path fill={yellow} d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        </div>
      )}

      {/* Étoiles vides */}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{ marginRight: 2 }}
        >
          <path fill={gray} d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;