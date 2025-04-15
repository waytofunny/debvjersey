
const generateRandomLogos = (count = 45) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: 0.7,
      // opacity: 0.05 + Math.random() * 0.1,
      size: 30 + Math.random() * 40,
    }))
  }

  export default generateRandomLogos;