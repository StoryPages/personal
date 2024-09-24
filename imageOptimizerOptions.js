const DEFAULT_OPTIONS = {
     test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
     exclude: undefined,
     include: undefined,
     includePublic: true,
     logStats: true,
     ansiColors: true,
     png: {
          quality: 100,
     },
     jpeg: {
          quality: 100,
     },
     jpg: {
          quality: 100,
     },
     tiff: {
          quality: 100,
     },
     gif: {},
     webp: {
          lossless: true,
     },
     avif: {
          lossless: true,
     },
     cache: false,
     cacheLocation: undefined,
};

export default DEFAULT_OPTIONS;
