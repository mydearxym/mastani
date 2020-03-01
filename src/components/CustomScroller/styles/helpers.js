// horizontal getShadowBackground
export const getShadowBackground = type => {
  switch (type) {
    case 'small': {
      return `-webkit-radial-gradient(
        0% 50%,
        100% 100%,
        #022029 0%,
        transparent 100%
      )`
    }

    // large
    default: {
      return `
      -webkit-radial-gradient(
        0% 50%,
        100% 60%,
        #022029 0%,
        transparent 100%
      )
       `
    }
  }
}

// horizontal getShadowWidth
export const getShadowWidth = type => {
  switch (type) {
    case 'small': {
      return '30px'
    }
    case 'medium': {
      return '50px;'
    }
    // large
    default: {
      return '50px'
    }
  }
}
