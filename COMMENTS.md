# Buon APPetito

## Technology stack

I decided to build a **PWA** with [**Next.js**](https://nextjs.org/). I've been learning **Next.js**, so I wanted to try it in a real or a challenge app. And because Brais' content is more mobile and I don't have mobile native skills, I explored how to build a **PWA** and I've found it great.

This app doesn't have a database. There is a `data.json` file instead in the `db` directory, with the information of every pizza of the menu. And the image of every pizza is stored in the `public` directory. If anyone needs to add, remove or modify the menu, must edit that `data.json` file. I think in a real app there should be a backoffice or a headless CMS to manage this.

## UI

I didn't use any pre or post css processor or UI components. I made them all by myself because I found it simple and I was more interested in functionality. Nevertheless, I think the design is quite cool and simple.

I built a color palette with [**coolors**](https://coolors.co/), based in the colors of a typical pizza: red from the tomato sauce or pepperoni, yellow from the cheese and green from the basil. Then I made the logo with [**Canva**](https://www.canva.com/).

It's not fully responsive. It's customized to mobile phones in portrait mode. Maybe not so ok in old mobiles. It seems ok in tablets too. In PC screens it doesn't look bad, but feels too narrow.

## UX

I kept in line with the instructions of the challenge, adding some simple things:

- A badge over the cart icon to see how many pizzas we have in the current order.
- A logic to avoid pushing new items in the cart if that item have been added before. It just increases quantity.
- Super simple and clean slice-by-slice ingredient selection.
- Using Next.js' [static-site generation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) helps to improve speed and to obtain a smoother experience.

## Testing

I used [**Jest**](https://jestjs.io/) as the testing framework and [**React Testing Library**](https://testing-library.com/). I started testing components from the cart. It's incomplete.

## To improve

At the beginning I thought that I could manage props just passing them through components. Although I tried to keep it simple, I've found myself dealing with a prop drilling scenario. I know that next time I have to use **Context** or **Redux**, because it's not easy to understand and scale in this conditions.

## To do

- Make it fully responsive.
- Finish testing.
- Go for the extra points.
