# URL Shortener

### To launch:
1. In both client and server directories, install node modules by running command: **npm i**
2. In client directory, run command: **npm start** 
3. In server directory, run command: **npm run dev**

### To use:
1. Enter URL to be shortened in input box and click "shorten".
2. Click on shortened URL to be redirected.

## Assumptions

### Writes per second:
- How many new URLS will be added per month?
- Read/write ratio?
  
### Storage requirements:
- For how long should the URLs be kept?
- Total number of URLs need to be supported?

### URL requirements:
- As short as possible
- Random (e.g. UUID, MD5, Base62(UUID) etc.)
- Human readable

## Implementation
- non-relational DB (MongoDB) for scaling of simple read data
- React for frontend to make my life more difficult (but good practice)
- Express server for simple requests

## ToDo
- Implement substring of Base58 on UUID
- Style app using Material-UI
- Implement in-memory distributed caching to improve scalability
- Multiple servers behind a load balancer



