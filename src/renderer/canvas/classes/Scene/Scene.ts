import Drawable from 'renderer/canvas/classes/Drawable'

import { bind } from 'decko'

export interface SceneProps {
  width?: number | null
  height?: number | null
}

export default class Scene {
  drawables = [] as Drawable[]

  constructor(options: SceneProps = {}) {
    Object.assign(this, options)
  }

  addDrawable(drawable: Drawable) {
    this.drawables.push(drawable)
  }

  @bind
  render(context: CanvasRenderingContext2D) {
    const { width, height } = context.canvas

    context.clearRect(0, 0, width, height)

    this.drawables.forEach(drawable => {
      drawable.renderToContext(context)
    })
  }
}
