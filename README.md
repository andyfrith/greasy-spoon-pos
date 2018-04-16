<img src="https://github.com/andyfrith/greasy-spoon-pos/blob/master/public/img/GreasySpoon1.png" alt="Greasy Spoon" align="center" />
<br />
<img src="https://github.com/andyfrith/greasy-spoon-pos/blob/master/public/img/GreasySpoon2.png" alt="Greasy Spoon" align="center" />

# greasy-spoon-pos

This demo is a React Redux application that provides minimal features of a very basic restaurant Point of Sale system.

## Implemented Business Requirements:

* Servers should be able to open a new check against a table (see POST /checks).
  * The restaurant has a fixed number of tables (see GET /tables). These tables never change.
  * Each check is associated with one and only one table.
  * Each table may have at most one open check associated with it at a time.
  * Each table may have any number of closed checks associated with it.
  * The restaurant may have multiple open checks at the same time, up to the number of tables.
* Servers should be able to add menu items to an open check (see POST /checks/:id/addItem).
  * The restaurant has a fixed set of menu items (see GET /items). These menu items never change.
  * A check may have any number of menu items associated with it.
  * The same menu item may appear any number of times on a check (a table may order 3 burgers and 2 sodas).
* Servers should be able to void an item on an open check (see POST /checks/:id/voidItem).
  * Voiding an item does not remove it from the check, but rather changes the “voided” property to true. That is an important distinction, and the UI should faithfully represent it.
  * You cannot void an item that does not appear on the check (if there is no burger on the check, I should not be able to void a burger on the check).
  * You cannot void an item more than once.
* Servers should be able to close a check (see POST /checks/:id/close)
  * Once a check is closed, it may no longer be edited in any way (items cannot be added or voided, it cannot be closed again, etc).
  * Once a check is closed, tax and tip will be calculated automatically on the server-side.
* Servers should be able to view all checks in the system, open and closed.
  * Typically, servers will be working on open checks. This is the primary use case. Think about how you will facilitate easily viewing and switching between open checks.
  * Sometimes servers will need to view closed checks - perhaps to confirm a charge or check a total. Think about how servers will navigate & distinguish between a potentially large number of closed checks.
* Servers should be able to view the details of a check
  * When viewing a check’s details, each charge should appear as a separate line item.
  * If a check is closed, tax and tip should be displayed as separate line items.
* All servers in the restaurant will be using the same UI. You may assume that only those servers will have access to this UI. You do not need to deal with identity management, authentication, authorization, login, etc. in any way.

## Why Did I Build This?

This app was built to demonstrate an understanding of best practices relating to:

* How to use React’s state and props
* The React Redux lifecycles
* ES6 Javascript
* Implementing Material-UI components
* The [react-router](https://reacttraining.com/react-router/) library
* Use of [Axios](https://github.com/axios/axios) HTTP client

## Environment

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

### Install

Follow the following steps to get development environment running.

* Clone _'greasy-spoon-pos'_ repository from GitHub

  ```bash
  git clone git@github.com:andyfrith/greasy-spoon-pos.git
  ```

* Install node modules

  ```bash
  cd greasy-spoon-pos
  yarn install
  ```

### Run

* Run start

  ```bash
  yarn start
  ```

## License

This project is licensed under the MIT license, Copyright (c) 2018 Andy Frith.
