/// <reference types="cypress" />

const locator = {
  PRODUCT_THUMBNAIL:
    "img[class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail']",
  CART_PAGE_LINK: "a[href*='https://cms.demo.katalon.com/cart/']",
  ADD_TO_CART_BUTTON: "button[name='add-to-cart']",
  HOME_LINK: "a[href='https://cms.demo.katalon.com/']",
  CART_LINK: "a[href='https://cms.demo.katalon.com/checkout/]'",
  ITEMS_IN_CART: "tr[class='woocommerce-cart-form__cart-item cart_item']",
  ITEM_VALUE: "td[class='product-subtotal']",
  REMOVE_BUTTON: "a[class='remove']",
};

type locator = typeof locator;

export class CatalogPage {
  constructor(public readonly element: locator = locator) {}

  addItemsToCart(elementCount: number): void {
    let i = 0;
    for (i = 0; i < elementCount; i++) {
      cy.get(this.element.PRODUCT_THUMBNAIL).eq(i).click();
      cy.wait(1000);
      cy.get(this.element.ADD_TO_CART_BUTTON).click();
      cy.wait(1000);
      cy.get(this.element.HOME_LINK).click();
      cy.wait(1000);
    }
  }

  navigateToHomePage(): void {
    cy.get(this.element.HOME_LINK).click();
    cy.get("h1").contains("Shop");
  }

  navigateToCartPage(): void {
    cy.get(this.element.CART_LINK).click();
    cy.get("h1").contains("Cart");
  }

  validateTotalItemsInCart(itemCount: number): void {
    cy.get(this.element.ITEMS_IN_CART).should("have.length", itemCount);
  }

  searchAndDeleteLowestValue() {
    let lowestValue = Number.POSITIVE_INFINITY;
    let lowestElement: JQuery<HTMLElement>;

    cy.get('.product').each(($item) => {

      const itemName = $item.find('.product-name').text();
      const itemPrice = parseFloat($item.find(this.element.ITEM_VALUE).text().replace('$', ''));

      cy.log(`Product: ${itemName}, Price: $${itemPrice}`);

      if (itemPrice < lowestValue) {
        lowestValue = itemPrice;
        lowestElement = $item;
      }
    }).then(() => {

      if (lowestElement) {
        lowestElement.find(this.element.REMOVE_BUTTON).click(); // Modify this based on your application's UI
      }
}
