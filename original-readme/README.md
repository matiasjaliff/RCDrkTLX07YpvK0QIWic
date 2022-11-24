# Buon APPetito

If there is a recurrent software product, an online shop is one of them!

The aim of this Challenge is to create an amazing app that allows your business to handle orders from users who are
starving of a perfect and yummy pizza! 🍕

Why is this app better than some actual ones? Clients do not need to register, they can order 4-halve pizzas (or
even more!), they can remove some toppings and... a final trick to avoid paying 🫣

![Brais Moure Challenge card](mouredev_buon_appetito.png)
> This is a challenge created by [MoureDev](https://www.twitch.tv/mouredev). He will review and give feedback to some
> proposed solutions from the community in one of his Twitch livestreams 😻

## How it works?

* When the user opens the app, the main list of pizzas shows up to allow them to pick one and start the order
* Each pizza can contain up to 5 toppings and a fixed price
* The user could add as many pizzas as they want to the shopping cart
* Through the main list, the user will see the detail page of the pizza to see their main ingredients, picture or
  description
* A pizza could be composed of 4 independent types! 🤯 So the user could do its own creation

### Main screen

* Shows all the available pizzas, with its name, picture, and price
* Users can add any of them to the shopping cart
* Users can access the detail page just by clicking on any item
* Users can go to their shopping cart to see which pizzas they have added

### Detail screen

* The app will show the picture, name, description price, and ingredients of the pizza
* The user would be able to add it to their shopping cart
* Through this screen, the user will be able to remove **up to 2 toppings**
* The user can create a 4-halves pizza. So the app will show the selection process up to 4 times, allowing to remove
  up to 2 ingredients on each half

### Shopping cart screen

* Shows the selected pizzas
* If the user has selected a by halves pizza, it has to be specified for each one
* If the user has removed some ingredient from the pizza, it has to be shown
* The user has some credits on the app, so they will be shown here. If the user has not have enough credits, they won't
  be
  able to end the purchase process
* In case the user has enough credits, the app allows the user to purchase the selected pizzas!

> But... what happens if you don't have enough credits on the app? 🥲
> For every 5 clicks in a row the user does in the Total amount of the shopping cart, the system will add $20 to their
> credits!

### Extra points (optional)

Here you rule! 😎

* You can add a screen to request the delivery info of the user
* How are you going to charge the total amount? You can research about PayPal, Stripe, or other payment methods

## Technical requirements

* Create a **clean**, **maintainable** and **well-designed** code. We expect to see a good and clear architecture that
  allows to add or modify the solution without so much troubles.
* **Test** your code until you are comfortable with it. We don't expect a 100% of Code Coverage but some tests that
  helps to have a more stable and confident base code.

To understand how you take decisions during the implementation, **please write a COMMENTS.md** file explaining some of
the most important parts of the application. You would also be able to defend your code through
[Rviewer](https://rviewer.io), once you submit your solution.

---

## How to submit your solution

* Push your code to the `devel` branch - we encourage you to commit regularly to show your thinking process was.
* **Create a new Pull Request** to `main` branch & **merge it**.

Once merged you **won't be able to change or add** anything to your solution, so double-check that everything is as you
expected!

Remember that **there is no countdown**, so take your time and implement a solution that you are proud!

--- 

<p align="center">
  If you have any feedback or problem, <a href="mailto:help@rviewer.io">let us know!</a> 🤘
  <br><br>
  Made with ❤️ by <a href="https://rviewer.io">Rviewer</a>
</p>
