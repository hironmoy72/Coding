/// <reference types="cypress" />

const locator = {};

type locator = typeof locator;

export class BaseMethods {
  constructor(public readonly element: locator = locator) {}

  openURL(): void {
    cy.visit("https://cms.demo.katalon.com/");
  }
}
