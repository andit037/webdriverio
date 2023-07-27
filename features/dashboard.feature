Feature: The Ecommerce Payever

  Scenario Outline: As a user, I can validate dashboard page
    Given I am on the <category> registration page
    When I insert signup with <firstname> and <lastname> and <email> and <password> and <confirm_password>
    And I click submit button
    And I see register businees account page
    And I insertxxx businees account with <company_name> and <phone_number> and <industries> and <num_phone> and <vat_number> on <category> page
    And I click submit button
    Then I see <apps> on dasboard page

    Examples: 
      | category  | firstname | lastname | email | password    | confirm_password | company_name | phone_number | industries | num_phone  | vat_number | apps                                                 |
      | fashion   | test129   | ter      | serqe | fr#A2123342 | fr#A2123342      | Micro        |   4386438538 |            |            |            | Checkout,Connect,Products,Transactions,Shop,Settings |
      | santander | test12934 | xxc      | wesde | fr#B3123342 | fr#B3123342      | okas         |              | Robotics  | 4386438538 | 4386438538 | Checkout,Connect,Transactions,Settings,Point of Sale |
