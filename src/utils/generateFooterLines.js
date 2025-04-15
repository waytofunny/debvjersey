const generateFooterLines = (count = 20) => {
    const lines = []
    lines.push({
      id: 0,
      top: 90,
      left: 9,
      height: 200, // tinggi garis antara 20px - 100px
      rotation: 40,   // rotasi acak
      opacity: Math.random() * 0.3 + 0.1, // 0.1 - 0.4
    })
    lines.push({
      id: 1,
      top: -20,
      left: 18.6,
      height: 100, // tinggi garis antara 20px - 100px
      rotation: -45,   // rotasi acak
      opacity: Math.random() * 0.3 + 0.1, // 0.1 - 0.4
    })
    lines.push({
      id: 1,
      top: -350,
      left: 32.6,
      height: 500, // tinggi garis antara 20px - 100px
      rotation: 80,   // rotasi acak
      opacity: Math.random() * 0.3 + 0.1, // 0.1 - 0.4
    })
    lines.push({
      id: 1,
      top: -350,
      left: 80.6,
      height: 500, // tinggi garis antara 20px - 100px
      rotation: 40,   // rotasi acak
      opacity: Math.random() * 0.3 + 0.1, // 0.1 - 0.4
    })
    lines.push({
      id: 1,
      top: -350,
      left: 72.6,
      height: 500, // tinggi garis antara 20px - 100px
      rotation: 81,   // rotasi acak
      opacity: Math.random() * 0.3 + 0.1, // 0.1 - 0.4
    })
    lines.push({
      id: 1,
      top: -350,
      left: 57.6,
      height: 500, // tinggi garis antara 20px - 100px
      rotation: -40,   // rotasi acak
      opacity: Math.random() * 0.3 + 0.1, // 0.1 - 0.4
    })
    lines.push({
      id: 1,
      top: -350,
      left: 89.6,
      height: 500, // tinggi garis antara 20px - 100px
      rotation: -40,   // rotasi acak
      opacity: Math.random() * 0.3 + 0.1, // 0.1 - 0.4
    })

    // for (let i = 0; i < count; i++) {
    //   lines.push({
    //     id: i,
    //     top: Math.random() * 100,
    //     left: Math.random() * 100,
    //     height: Math.random() * 200 + 20, // tinggi garis antara 20px - 100px
    //     rotation: Math.random() * 360,   // rotasi acak
    //     opacity: Math.random() * 0.3 + 0.1, // 0.1 - 0.4
    //   })
    // }
  
    return lines
  }
  
  export default generateFooterLines
  