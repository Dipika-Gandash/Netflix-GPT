export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
  { identifier: "fr", name: "French" },
  { identifier: "de", name: "German" },
  { identifier: "it", name: "Italian" },
  { identifier: "pt", name: "Portuguese" },
  { identifier: "ru", name: "Russian" },
  { identifier: "ja", name: "Japanese" },
  { identifier: "ko", name: "Korean" },
  { identifier: "zh", name: "Chinese" },
  { identifier: "ar", name: "Arabic" },
  { identifier: "bn", name: "Bengali" },
];

