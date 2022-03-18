# Jack's Travel App
### What is this?

This is intended to be a simple cross-platform travel application. The idea is that you can manage your trips, and for each day of your trip enter a journal entry and media (photos / videos). 

### How is it built?

The container for this app is Electron, a framework maintained by Github which allows native desktop applications to be built with web technologies - ie HTML, CSS, Javascript. 

Within Electron, this app is built with React JS as the "front-end." The Electron app also hosts a Node.js server with Express.js for back-end features and leverages a SQLite database for data storage. 

### How to run

```
git clone https://github.com/jack-ditto/Travel-App.git
cd Travel-App
npm install
```
To start the React app:
```
npm run start
```
To start the Electron container:
```
npm run electron-start
```


### Current progess

Currently this app has a functional user interface implemented with React and a functional back-end server. The back-end componet of the application is still being tested and has yet to be fully integrated with the front-end component. 

### TODO

#### Big stuff

- [ ] Fix / possibly re-design UI/UX
- [x] Finish drag-and-drop file uploads / file serving
- [ ] Test UI and implement error messages
- [x] Finish testing back-end server
- [ ] Integrate front-end and back-end
    - [x] Figure out media uploads
- [ ] Additional final testing
- [ ] Honestly probably built a website to market / provide download space

#### Specific stuff
- [ ] Add confirmation message when deleting a trip
- [ ] Add format checking for trip cover photo uploads


### Screenshots
<img width="998" alt="image" src="https://user-images.githubusercontent.com/31874647/158963299-f46a1223-136a-4fc6-bdd7-803425978b49.png">
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/31874647/158963344-b8ddea56-3e94-4c2f-a7f9-c689df929dcc.png">
<img width="999" alt="image" src="https://user-images.githubusercontent.com/31874647/158963384-cda8607d-4159-4710-9833-39252d0f3724.png">
<img width="997" alt="image" src="https://user-images.githubusercontent.com/31874647/158963492-ae24b35b-061d-4c55-a84e-234e9c501102.png">
<img width="1002" alt="image" src="https://user-images.githubusercontent.com/31874647/158963588-61aa95f7-3c6c-4c12-ae7e-6e20ce0db3d1.png">

### Demo Video
https://user-images.githubusercontent.com/31874647/158964028-8bfbd944-7ca3-49f6-b75f-2ccea01ff6e6.mov



