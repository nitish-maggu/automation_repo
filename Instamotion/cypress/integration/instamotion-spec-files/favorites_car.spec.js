/// <reference types="cypress" />
import { go_to_find_car_page } from "../../page.objects/find_cars";
import * as favorites from "../../page.objects/favorites_car";

describe("add car to favorites", () =>  {
    before(() =>  
    {
        cy.viewport(1024, 768);
        cy.visit("/");
        cy.accept_cookies()
        go_to_find_car_page();
    });

    it("adds a car to favorites", () =>  {
      favorites.add_car_to_favorites();
    });

    it("verifies added car to exist in favorites", () =>  {
      favorites.validate_add_to_favorites();
    });  
});
