/// <reference types="cypress" />
import * as find_car from "../../page.objects/find_cars";
import * as car_filtering from "../../page.objects/filter_cars";
import * as cars_sorting from "../../page.objects/sort_cars";
import * as favorites from "../../page.objects/favorites_car";

describe("Go to Autos page via find car nav link", () =>  {
    beforeEach(() =>  
    {
        cy.viewport(1024, 768);
    });

    before(() =>  {
        cy.visit("/");
        cy.accept_cookies();
    });

    it("goes to find car or Autos page", () =>  {
        find_car.go_to_find_car_page();
    });

    it("validates autos page", () =>  {
        find_car.validate_autos_page();
    });

    it("filters cars based on brand, type, model and other available criteria", () =>  {
        car_filtering.filter_Car();
    });

    it("sorts cars by price/rate - lowest to highest", () =>  {
        cars_sorting.sort_cars();
    });

    it("validates sort cars functionality by price - lowest to highest", () =>  {
        cars_sorting.validate_sorting();
    });

    it("adds a car to favorites", () =>  {
        favorites.add_car_to_favorites();
    });

    it("verifies added car to exist in favorites", () =>  {
        favorites.validate_add_to_favorites();
    });
});
