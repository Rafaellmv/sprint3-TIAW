import { defineJQueryPlugin } from './util/index'
import Data from './dom/data'
import EventHandler from './dom/event-handler'
import BaseComponent from './base-component'


const NAME = 'button'
const DATA_KEY = 'bs.button'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]'

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`


class Button extends BaseComponent {
 
  static get NAME() {
    return NAME
  }

  

  toggle() {
   
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE))
  }

 

  static jQueryInterface(config) {
    return this.each(function () {
      let data = Data.get(this, DATA_KEY)

      if (!data) {
        data = new Button(this)
      }

      if (config === 'toggle') {
        data[config]()
      }
    })
  }
}



EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
  event.preventDefault()

  const button = event.target.closest(SELECTOR_DATA_TOGGLE)

  let data = Data.get(button, DATA_KEY)
  if (!data) {
    data = new Button(button)
  }

  data.toggle()
})


defineJQueryPlugin(Button)

export default Button
