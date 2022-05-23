export const sort_cars = () =>  {
  cy.get('input[value="Neueste Angebote zuerst"]')
    .eq(0)
    .should("be.visible")
    .click({ force: true });
  cy.xpath('//li[@id="downshift-0-item-0"]')
    .contains("Niedrigster Preis/Rate")
    .click({ force: true });
};

export const validate_sorting = () =>  {
  // formatting car price
  const getNumVal = (price) =>  {
    return parseInt(price.replace(" €", "").replace(".", ""));
  };

  cy.xpath('//div[@class="sc-dBaXSw jMrGKd"]').then(($els) =>  {
    // Getting all cars price
    const all_cars_price = Array.from($els, (el) =>  el.textContent).map(
      (price) =>  getNumVal(price)
    );

    //Getting min price of a car
    const lowest_price = Math.min(...all_cars_price);
    const first_car_price = all_cars_price[0];

    // Verifying first car price after sorting to be equal to lowest price calculated
    expect(first_car_price).to.eq(lowest_price);
  });
};
