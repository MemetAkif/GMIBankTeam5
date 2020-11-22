@US08ChPas
Feature: Chancepassword
  @US08TC01
  Scenario: user change owen password
    Given  Go to home page link
    And Enter the username with valid credentail "Team5User"
    And Enter the password with valid credentail "userTeam5"
    And Click to Sign in button
    And Click to User Account drop down menu and Click to Password
    And Enter the Current Password width credentail "userTeam5"
    And Enter the Current Password width credentail1 "userTeam5"
    And Enter the Current Password width credentail2 "userTeam5"
    And Click to Save in button
    Then conformed faild message
  @US08TC02
  Scenario: Change Password
    Given  Go to home page link

    And Enter the username with valid credentail "Team5User"
    And Enter the password with valid credentail "userTeam5"
    And Click to Sign in button
    And Click to User Account drop down menu and Click to Password
    And Enter the Current Password width credentail "userTeam5"
    And Enter the New Password "userTeam5"

    And Enter the New Password Confirmation "userTeam5"
    And Click to Save in button
    Then Confirmed password changed message
