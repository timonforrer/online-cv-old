class Urls {
  constructor(imagePathPartial) {
    this.baseUrl = 'https://res.cloudinary.com/dcx8f5ez0/image/upload/'
    this.phone = `${this.baseUrl}t_phone${imagePathPartial}`
    this.tablet = `${this.baseUrl}t_tablet${imagePathPartial}`
    this.desktop = `${this.baseUrl}t_desktop${imagePathPartial}`
  }
}

module.exports = Urls