# Solent Library Food Delivery Application

<br><br>

## Project Description 

<br>

The Library Food Delivery App is a single web application created for Solent University. It aims to solve the problem that many students face - getting hungry or needing a coffee mid-way through a library study session and having to leave to purchase food/drinks, which leads to a disruption in their workflow and/or losing their seat. The web app allows students to select a restaurant from the list of restaurants on the explore page, view the individual restaurant and add food items to their cart. The quantity of these food items can be increased and descreased, and a library seat can be selected from the drop down list. The student can then place the order and a pop-up appears to confirm that their order has gone through.

The web app was developed using React JS and I chose to install styled-components to effectively style each component. I faced multiple challenges throughout this project, the main one being that the original design was far too complicated for my React JS capabilities. I ended up focusing on 4 of the most important requirements (delivery times, plenty of food choices, a good user experience and easy navigation) and so some of the design features needed to be simplified to ensure these requirements were implemented.

<br>

**My Hosted Website:** Website is hosted [here.](https://library-delivery-application.web.app/explore)  
**My GitHub Repo:** GitHub Repo can be found [here.](https://github.com/jasharwood/library-delivery-app)  

<br><br>

## How To Build My Website

<br>

1. Clone the repository   
```
$ git clone https://github.com/jasharwood/library-delivery-app.git
```
<br>

2. Open the resulting library-delivery-app in VS Code

<br>

3. Install the following dependencies;  

```
npm install
```
```
npm install --save styled-components
```
```
npm install react-router-dom
```

<br>

4. You can then start the application 
```
npm run start
```

<br><br>

## Future Implementations 
<br>

- Add search bar to seat selection drop down
- Add ability to view more details for each food item
- Add a button to remove items from the cart rather than reducing the quantity to 0
- Add payment functionality 
- Add order tracking
- Add filters (delivery time, allergens, price)
- Add offers e.g. meal deals
- Add text under each icon
- Add ability to favourite restaurants
- Finish the orders page
- Make the web app responsive