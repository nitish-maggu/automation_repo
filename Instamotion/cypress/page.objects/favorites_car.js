export const add_car_to_favorites = () =>  {
  //adding 1st car to favorites
  cy.xpath('//div[@class="sc-hycgNl hQbjOe"]').first().click();
};

export const validate_add_to_favorites = () =>  {
  //validating class change added when car is favoritized
  cy.get('svg[class="sc-kGXeez gxSXPe"]').should("have.class","sc-kGXeez gxSXPe");

  //validating favorites count in navigation bar
  cy.xpath('//a[@href="/favoriten"]').eq(1).contains("1");

  //validating class change added when car is unfavoritized
  cy.xpath('//div[@class="sc-hycgNl dyNszR"]').eq(0).click();
  cy.get('svg[class="sc-kGXeez gFhspG"]').should("have.class","sc-kGXeez gFhspG");
};
