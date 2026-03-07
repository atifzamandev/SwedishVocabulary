// Component testing support file — runs before every component test
// Add global hooks or custom commands here

import { mount } from 'cypress/react'
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)
