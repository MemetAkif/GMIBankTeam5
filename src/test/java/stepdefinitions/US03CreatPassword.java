package stepdefinitions;

import io.cucumber.java.AfterStep;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.GMICreatPassword;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.ReusableMethods;

import java.nio.channels.SelectableChannel;

public class US03CreatPassword {
    GMICreatPassword gmiCreatPassword=new GMICreatPassword();


    @Given("User is on GMIBank Login pageGiven")
    public void user_is_on_GMIBank_Login_pageGiven() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_account"));

    }

    @Given("user fills in the New Password textbox with valid {string}")
    public void user_fills_in_the_New_Password_textbox_with_valid(String string) {
    gmiCreatPassword.firstPassword.sendKeys(string);
    gmiCreatPassword.secondPassword.sendKeys(string);

    }



    @Then("Register button is submited by user")
    public void register_button_is_submited_by_user() {
        gmiCreatPassword.submit.click();
    }
    @Given("verify red messages under the box")
    public void verify_red_messages_under_the_box() {

        Assert.assertTrue(gmiCreatPassword.requiredAlert.isDisplayed());
        Driver.waitForVisibility((gmiCreatPassword.requiredAlert),5);
        //    Assert.assertFalse( Driver.waitForVisibility((gmiCreatPassword.requiredAlert),5));
        //    Driver.verifyElementNotDisplayed("Element should not be visible:"+(gmiCreatPassword.requiredAlert.isDisplayed()));
        // ReusableMethods.waitForVisibility(gmiCreatPassword.requiredAlert, 5);

        // ReusableMethods.waitForVisibility(gmiCreatPassword.requiredAlert, 5);

    }


    @Then("verify Password strength")
    public void verify_Password_strength() {
        boolean colour=gmiCreatPassword.color.isDisplayed();
        Assert.assertTrue(colour);

    }
    @Given("user fills in the New password confirmation textbox with valid {string}")
    public void user_fills_in_the_New_password_confirmation_textbox_with_valid(String string) {
       // gmiCreatPassword.secondPassword.sendKeys(string);
    }
    @Then("verify Password strength5")
    public void verify_Password_strength5() {
       Assert.assertTrue(gmiCreatPassword.passwordStrength5.isDisplayed());
    }

}
