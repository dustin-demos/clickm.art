
import { readFileSync } from 'fs'
import { html } from 'superstatic'

const styles = process.env.PROD === true
  ? html.style(readFileSync('./public/main.css', 'utf8'))
  : <link rel='stylesheet' href='/main.css'/>

const scripts = process.env.PROD === true
  ? html.script(readFileSync('./public/app.js', 'utf8'))
  : <script src='/app.js' defer></script>

const render = data => {
  return (
    <html lang='en'>
      <meta charset='utf-8'/>
      <title>{data.title}</title>
      <meta name='author' content={data.author}/>
      <meta name='description' content={data.description}/>
      <meta name='viewport' content={data.viewport}/>
      <link rel='icon' href='/cache/logo.svg'/>
      {[styles]}
      <body>
        <noscript>Please enable JavaScript and try again.</noscript>
        <div id='app'></div>
        {[scripts]}
      </body>
    </html>
  )
}

const options = {
  title: 'Clickmart | Find the lowest wholesale prices on a great selection of fun every day items.',
  author: 'CLICKMART LLC',
  description: 'Find the lowest wholesale prices on a great selection of fun every day items.',
  viewport: 'width=device-width,maximum-scale=5'
}

process.stdout.write('<!DOCTYPE html>' + render(options))
