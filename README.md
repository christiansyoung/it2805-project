Our IT2805 project
==============

This is a webpage for a shoe shop called "Egge & Young Bootmakers Inc." for the IT2805 web techonology course at NTNU.

### Libraries and frameworks

For this project we have used the frontend framework Twitter Bootstrap mainly for its grid system to get a fluid layout, and for some of its components like the buttons we use.

To make the Javascript easier to deal with we have also included the jQuery library with its powerful selectors and helpful iterators.

For typography we have used "Raleway", a delicate open font which we source from Google's webfont page.

###CSS

Since we use the Bootstrap framework, a lot of scaffolding CSS can be omitted. Our CSS file mainly contains font scaling, margins, and some padding here and there.

###Javascript and XML

To have some dynamic content, we have incorporated Javascript two places. We have a dummy web shop which dynamically fetches the product you have chosen to order and displays the total cost. As we have no backend for this project, it does not work.

The other part is the contact form which actually sends some XML as an ajax request. When you submit the contact form, we will first validate it as described in Form Controls. If the form was valid, we manually extract the values from the input fields and make a string of valid XML which is then again sent to an endpoint with ajax technology.
Acording to some websites, the easiest way to ship XML from Javascript was to first serialize it to JSON and then use a lib called json2xml to serialize it to XML. As our form was rather short, we decided to just do it manually in a string, though this is not particulary clean.


### Form controls

Every field in the form is validated using Javascript before submitting the data. The email field is checked for an actual valid email adress.
