import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

const firebaseConfig = {
  apiKey: "AIzaSyDOGiY1ZyYFELU9ucPVfN63jMBt5jKFXVA",
  authDomain: "jam-track-2bce1.firebaseapp.com",
  projectId: "jam-track-2bce1",
  storageBucket: "jam-track-2bce1.appspot.com",
  messagingSenderId: "226481456230",
  appId: "1:226481456230:web:73e4ae094b1fc386c699a7",
  measurementId: "G-EMZSY0SVH2"
};

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
