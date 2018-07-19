# Photo Gallery Microservice
Photo Gallery microservice based off of amazon- React, NodeJS, Express, and MongoDB.  10 million documents of data simulated, database indexed.  Service stress tested with Artillery.io locally, and deployed with docker images on AWS EC2.  Horizontally scaled and load balanced with Nginx, and stress tested with Loader.io.
Implementing server side rendering.


Data from Loader.io
Setup: proxy server (with loaderio.text) --> Nginx --> 2 photo gallery clones --> MongoDB

| Expected RPS | Actual RPS | % Error | Response Times avg/min/max (ms) | Success | Network Errors |
| --- | --- | --- | --- | --- | --- |
| 100 | 70 | 0 | 71/16/207 | 2000 | 0 |
| 150 | 150 | 0 | 99/17/370 | 3000 | 0 |
| 200 | 200 | 0 | 231/16/1921 | 3999 | 0 |
| 300 | 170 | 2.1 | 2193/77/10023 | 3555 | 78 |
| 500 | 185 | 9.5 | 3707/342/10012 | 3543 | 372 |





Full project repos at https://github.com/Ghana-SDC
[![Build Status](https://travis-ci.org/slatherin/module-server.svg?branch=PhotoGallery)](https://travis-ci.org/slatherin/module-server)
