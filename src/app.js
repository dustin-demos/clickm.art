
import { pocket } from 'pocket/index'
import { patch } from 'superfine'

import * as common from 'stores/common'
import * as panel from 'stores/panel'

import Home from 'pages/Home'
import Foobar from 'pages/Foobar'
import Market from 'pages/Market'
import Missing from 'pages/Missing'

/**
 *
 * Initialize
 *
 */

const node = document.getElementById('app')
const app = init => pocket(init, view => patch(node, view))

export const dispatch = app({
  state: {
    common: common.state,
    panel: panel.state,
    carousel: {
      index: 0,
      pause: false
    },
    footer: {
      year: process.env.YEAR
    }
  },
  middleware: {
    common: () => {
      return {
        onRoute: () => {},
        onBeforeLeave: () => {}
      }
    },
    carousel: () => {
      let intervalID

      const nextSlide = ({ carousel }) => {
        carousel.index = (carousel.index + 1) % carousel.slides.length
        return { carousel }
      }

      return {
        onRoute: () => {
          intervalID = setInterval(() => {
            dispatch(nextSlide)
          }, 5000)
        },
        onBeforeLeave: () => {
          clearInterval(intervalID)
        }
      }
    }
  },
  pages: {
    '/': Home,
    '/foobar': Foobar,
    '/market': Market,
    '/missing': Missing
  }
})

/**
 *
 * Google Tag Manager
 *
 */

if (process.env.PROD === true) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'gtm.start': Date.now(),
    'event': 'gtm.js'
  })

  window.addEventListener('load', () => {
    const script = document.createElement('script')

    script.id = 'gtm'
    script.src = 'https://googletagmanager.com/gtm.js?id='

    document.body.appendChild(script)
  })
}
