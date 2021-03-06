export const pageAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.75,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};
export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};
export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
    scale: 1,
  },
};

export const Line = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const slider = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 1, ease: "easeOut" },
  },
};
export const scrollRev = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};
