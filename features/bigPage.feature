@Test
Feature: Big Page Testcases

@Test1
Scenario: Verify facebook page opens when you click on Facebook on Section of Social Media Follows
    Given I am on Big page
    When I scroll and click on the Facebook link
    Then I verify the website redirects to Facebook

@Test2
Scenario: Verify you get error when you don't fill out captcha on the first form of Section of Random Stuff
    Given I am on Big page
    When I scroll to Section of Random Stuff
    And I fill out the name, email and message
    And I click on submit
    Then I verify the Captcha error is displayed

@Test3
Scenario: Verify show/hide button on contents work on Section of Random Stuff
    Given I am on Big page
    When I scroll to Section of Random Stuff
    And I click on hide
    Then I verify all content is hidden
    When I click on show
    Then I verify all content is shown


