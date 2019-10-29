import { createHashHistory } from 'history'
export const history = createHashHistory()
const EventEmitter = require('events').EventEmitter
export const events = new EventEmitter()
