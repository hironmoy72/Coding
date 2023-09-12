// / <reference types="cypress" />

import {
  Before,
  Given,
  When,
  Then,
  And,
} from "cypress-cucumber-preprocessor/steps";
import { CatalogPage } from "../Pages/catalogPage";

const catalogPage = new CatalogPage();

Before(
  {
    tags: "@beforeTest",
  },
  () => {
    cy.visit("https://cms.demo.katalon.com/");
  }
);

Given("I add four random items to my cart", () => {
  catalogPage.addItemsToCart(4);
});

When("I view my cart", () => {
  catalogPage.navigateToCartPage();
});

Then("I find total four items listed in my cart", () => {
  catalogPage.validateTotalItemsInCart(4);
});

When("I search for lowest price", () => {});

And("I am able to remove the lowest price item from my cart", () => {
  catalogPage.searchAndDeleteLowestValue();
});

Then("I am able to verify three items in my cart", () => {
  catalogPage.validateTotalItemsInCart(3);
});
