Feature: find_car

  Scenario: user goes to find car or Autos page
    Given the user is on the home page
    And screen width is 1024 or more
    And find car link is visible in the navigation menu in the header 
    When user clicks on find car
    Then user is redirected to autos page 

  Scenario: user validates autos page
    Given the user is on the autos page
    When user is on auto page
    Then instamotion.com/autos URL should exist
    And maximum car count should match
    But minimum car count should not be zero
    And sorting component should be visible

  Scenario: user filters cars based on brand, type, model and other available criteria
    Given the user is on the autos page
    When user is on auto page
    Then user should be able to see filter option
    When user select filters
    Then filter text should be visible
    And car brand should be visible post filter

  Scenario: user sorts cars by price/rate - lowest to highest
    Given the user is on the autos page
    When user is on auto page
    Then user should be able to see sorting option
    When user click on sort
    Then user is selecting lowest price/rate 
    And user should be able to see lowest price.rate option

  Scenario: user validates sort cars functionality by price - lowest to highest
    Given the user is on the autos page
    When user is on auto page
    Then user should be able to see sorting option
    When user select lowest price/rate option
    Then cars should be sorted from minimum to maximum price/rate 

  Scenario: user adds a car to favorites
    Given the user is on the autos page
    When user has selected first car for favorites
    Then car is added to favorites 

  Scenario: user verifies added car to exist in favorites
    Given the user is on the autos page
    When user has selected first car for favorites
    Then favorites count set to 1 in navigation bar
    When user unselects favorite car
    Then selected favorite car is removed from favorites





  
