'use strict'

import { startTexto } from './animacionText.js';
import { loadEnlaces } from './menuEnlaces.js';

document.addEventListener('DOMContentLoaded', () => {
    startTexto();
    loadEnlaces();
});
