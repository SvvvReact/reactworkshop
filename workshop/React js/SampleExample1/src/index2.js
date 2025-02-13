import React from 'react';
import { createRoot } from 'react-dom/client';

var message = "This is an example of React Js";
var displayMessage = <mark>{message}</mark>

createRoot(document.getElementById('root')).render(displayMessage);