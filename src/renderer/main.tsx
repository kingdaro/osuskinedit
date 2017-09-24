import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from 'renderer/core/components/App'
import stores from 'renderer/stores'

import './styles/flex.scss'
import './styles/global.scss'
import './styles/helpers.scss'

function Root() {
  return (
    <Provider {...stores}>
      <App />
    </Provider>
  )
}

async function start() {
  ReactDOM.render(<Root />, document.getElementById('root'))
  await stores.skinStore.initialize()
}

start().catch(console.error)
