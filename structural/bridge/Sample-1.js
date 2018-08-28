// Webpage interface : constructor(theme) getContent()

export class About {
  constructor(theme) {
    this.theme = theme
  }
  getContent() {
    return 'About page in ' + this.theme.getColor()
  }
}

export class Careers {
  constructor(theme) {
    this.theme = theme
  }
  getContent() {
    return 'Careers page in ' + this.theme.getColor()
  }
}

// Theme interface : getColor()
export class DarkTheme {
  getColor() {
    return 'Dark Black'
  }
}
export class LightTheme {
  getColor() {
    return 'Off white'
  }
}
export class AquaTheme {
  getColor() {
    return 'Light blue'
  }
}
