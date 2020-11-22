@US03CreateNewPassword
  Feature: NewPassword
    Background:

   @Enterlowercse1
    Scenario: User Enter 1 lowercase letter of at least 4 characters
    Given User is on GMIBank Login pageGiven
    And user fills in the New Password textbox with valid "123k"
     And user fills in the New password confirmation textbox with valid "123k"
    And verify red messages under the box
    Then verify Password strength

  @Enteruppercase2
    Scenario: User Enter 1 uppercase letter of at least 4 characters
    Given User is on GMIBank Login pageGiven
    And user fills in the New Password textbox with valid "123G"
    And user fills in the New password confirmation textbox with valid "123G"
    And verify red messages under the box
    Then verify Password strength
    @Enterdigitletter3
    Scenario: User Enter  1 digit letter of at least 4 characters
      Given User is on GMIBank Login pageGiven
      And user fills in the New Password textbox with valid "1234"
      And user fills in the New password confirmation textbox with valid "134"
      And verify red messages under the box
      Then verify Password strength
    @Enterspecialchar4
    Scenario: User Enter  1 special char of at least 4 characters
        Given User is on GMIBank Login pageGiven
        And user fills in the New Password textbox with valid "123$"
        And user fills in the New password confirmation textbox with valid "123$"
        And verify red messages under the box
        Then verify Password strength
    @7chars5
    Scenario: User Enter  7 characters
          Given User is on GMIBank Login pageGiven
          And user fills in the New Password textbox with valid "123Ak$0"
          And user fills in the New password confirmation textbox with valid "123Ak$0"
          Then verify Password strength5

     @Submit
     Scenario: User Clik submit
       Given User is on GMIBank Login pageGiven
       Then Register button is submited by user