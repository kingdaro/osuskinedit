export default class SkinImage {
  image = new Image()

  constructor(public id: string, public imagePath: string) {}

  load() {
    return new Promise((resolve, reject) => {
      this.image.src = this.imagePath

      this.image.onload = resolve
      this.image.onerror = reject
    })
  }
}
