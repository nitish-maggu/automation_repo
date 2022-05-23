/// <reference types="cypress" />
import { go_to_find_car_page } from "../../page.objects/find_cars";
import * as cars_sorting from "../../page.objects/sort_cars";

describe("sort cars with lowest price rate", () =>  {
    before(() =>  {
        cy.viewport(1024, 768);
        cy.visit("/");
        cy.accept_cookies()
        go_to_find_car_page();
    });

    it("sorts cars by price/rate - lowest to highest", () =>  {
      cars_sorting.sort_cars();
    });

    it("validates sort cars functionality by price - lowest to highest", () =>  {
      cars_sorting.validate_sorting();
    });
});
