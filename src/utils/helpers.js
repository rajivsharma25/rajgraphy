export const avatarColors = [
  'linear-gradient(135deg,#a870ff,#3f256b 90%)',
  'linear-gradient(135deg,#ab7cfc,#5143a4 90%)',
  'linear-gradient(135deg,#ab6bef,#22223b 90%)',
  'linear-gradient(135deg,#dbbaf7,#41428a 90%)'
];

export const getAvatarColor = (index) => {
  return avatarColors[index % avatarColors.length];
};

export const getAvatarChar = (name) => {
  return name && name.trim() !== "" ? name[0].toUpperCase() : "?";
};

export const escapeHtml = (text) => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

export const formatTimestamp = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};
