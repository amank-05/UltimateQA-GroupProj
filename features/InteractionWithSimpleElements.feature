@sanity 
Feature: Interaction with Simple Elements

    @e2e @tc01
    Scenario: Verify “Thanks for contacting us” message when name and email are entered
    Given I am on UltimateQA automation landing page
    And I click on Interaction with simple elements link
    And I enter a name in name field
    And I enter an email in email field
    Then I click "Email me!" button
    And I verify "Thanks for contacting us" message is displayed

    @tab2Displayed @tc02
    Scenario: Verify “tab 2 content” is displayed
    Given I am on UltimateQA automation landing page
    And I click on Interaction with simple elements link
    Then I scroll to tab and click on Tab 2
    Then I verify "tab 2 content" is displayed

    @radiobtn @checkboxes @dropdown @tc03 
    Scenario: Verify Radio buttons, checkboxes and dropdown are enabled when not interacted with.
    Given I am on UltimateQA automation landing page
    And I click on Interaction with simple elements link
    Then I click "Other" from radio button
    And I verify "Other" is selected
    Then I select "I have a bike" checkbox
    And I verify "I have a bike" checkbox is selected
    Then I select "Saab" from the dropdown menu
    Then I verify "Saab" is selected from the dropdown menu
