export const BASE_URL = "https://englishlab.uz/";

export const FORM_LINK = "http://english-lab.modme.uz/entry/form/3456";

export const onFreeCourseClick = () => {
  window.open(FORM_LINK, "_blank");
};

export const fadeInUp = {
  hidden: {
    y: -80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 6000, velocity: -100 } },
  },
};

export const fadeinLeft = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { x: { stiffness: 6000, velocity: -100 } },
  },
};

export const fadeinDown = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { x: { stiffness: 6000, velocity: -100 } },
  },
};

export const fadeinDownPhone = {
  hidden: {
    y: 160,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { x: { stiffness: 6000, velocity: -100 } },
  },
};

export const fadeinRight = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { x: { stiffness: 6000, velocity: -100 } },
  },
};

export const fadeInUpScaleDown = {
  hidden: {
    y: 80,
    opacity: 0,
    scale: 1.4,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { y: { stiffness: 6000, velocity: -500 } },
  }
}