const CATEGORY = {
  MOVIE: 'movie',
  TV: 'tv',
};

const MOVIETYPE = {
  POPULAR: 'popular',
  TOP_RATED: 'top_rated',
  UPCOMING: 'upcoming',
  NOW_PLAYING: 'now_playing',
} as const;

const TVTYPE = {
  POPULAR: 'popular',
  TOP_RATED: 'top_rated',
  ON_THE_AIR: 'on_the_air',
  AIRING_TODAY: 'airing_today',
} as const;

export { CATEGORY, MOVIETYPE, TVTYPE };