import {
  FaFire,
  FaDrumstickBite,
  FaLeaf,
  FaHeart,
  FaLemon,
  FaSeedling,
  FaUtensils,
  FaRing,
  FaBuilding,
  FaUsers,
  FaGift,
} from "react-icons/fa";

const ICONS = {
  fire: FaFire,
  "drumstick-bite": FaDrumstickBite,
  leaf: FaLeaf,
  heart: FaHeart,
  lemon: FaLemon,
  seedling: FaSeedling,
  "bowl-rice": FaUtensils,
  "rings-wedding": FaRing,
  building: FaBuilding,
  "people-group": FaUsers,
  gifts: FaGift,
};

function Icon({ name, className = "" }) {
  const Component = ICONS[name] || FaUtensils;
  return <Component className={className} aria-hidden="true" />;
}

export default Icon;
