Feature: Home Page - Check header

  As a user on the DADI.blog home page the header should display correctly

Scenario:
  Given I open the url "http://dave.mustdash.es/"
  Then I expect that the title is "Your site name"
