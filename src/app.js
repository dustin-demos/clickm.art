
import { pocket, router } from 'pocket/index'
import { patch } from 'superfine'

import * as common from 'stores/common'
import * as inspector from 'stores/inspector'
import * as panel from 'stores/panel'
import * as products from 'stores/products'

import Home from 'pages/Home'
import Account from 'pages/Account'
import Foobar from 'pages/Foobar'
import Login from 'pages/Login'
import Market from 'pages/Market'
import Missing from 'pages/Missing'
import Register from 'pages/Register'
import Subscribe from 'pages/Subscribe'
import Wholesale from 'pages/Wholesale'

/**
 *
 * Initialize
 *
 */

const node = document.getElementById('app')
const app = foo => router(foo, bar => pocket(bar, view => patch(node, view)))

export const { getState, dispatch } = app({
  state: {
    common: common.state,
    inspector: inspector.state,
    panel: panel.state,
    products: products.state,
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
    // Served under /clickmart/ in the demos container, so routes carry that prefix.
    '/clickmart/': Home,
    '/clickmart/account': Account,
    '/clickmart/foobar': Foobar,
    '/clickmart/login': Login,
    '/clickmart/market': Market,
    '/missing': Missing,
    '/clickmart/register': Register,
    '/clickmart/subscribe': Subscribe,
    '/clickmart/wholesale': Wholesale
  },
  rewrites: [
    {
      source: /^\/clickmart\/department/,
      destination: '/clickmart/foobar'
    },
    {
      source: /^\/clickmart\/s$/,
      destination: '/clickmart/market'
    }
  ]
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
    script.src = 'https://googletagmanager.com/gtm.js?id=GTM-WVH48JK'

    document.body.appendChild(script)
  })
}

/**
 *
 * Google AdSense
 *
 */

if (process.env.PROD === true) {
  window.addEventListener('load', () => {
    const script = document.createElement('script')

    script['data-ad-client'] = 'ca-pub-1036438073249007'
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'

    document.body.appendChild(script)
  })
}
