import filterItemPage from '../support/pages/amazon/searchItemPage';
import trendingPage from '../support/pages/youtube/trendingPage';

describe('Final Project', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it.skip('youtube search', () => {
        cy.visit(Cypress.env(`BASE_URL_YOUTUBE`));
        cy.wait(4000);
        trendingPage.goToTrending();
        trendingPage.listMenuTrendingMovies();
        cy.wait(4000);
        trendingPage.goToTrendingMovies();
        //trendingPage.assertionPage();
    });

    it.skip('Search Chair on Amazon.com', () => {
        cy.visit(Cypress.env('BASE_URL_AMAZON'));
        cy.wait(5000);
        filterItemPage.searchItems();
        cy.wait(5000);
        filterItemPage.sortFeatureItems();
        filterItemPage.assertionPage();
    });    

    it('Order Flight', () => {
        cy.visit(Cypress.env(`BASE_URL_AGODA`));

        // Click Flight Icon
        cy.xpath("//li[@id='tab-flight-tab']").click();
        cy.xpath("//input[@id='flight-origin-search-input']").type('Jakarta');
        cy.xpath("//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]").click();
        cy.xpath("//div[@class='AutocompleteSearch NewDesign'][2]").click();
        cy.xpath("//input[@id='flight-destination-search-input']").type('Singapore');
        cy.xpath("//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]").click();
        cy.xpath(`//div[@class="PriceSurgePicker-Day__circle PriceSurgePicker-Day__circle--wide"]//span[@data-selenium-date="2025-06-05"]`).click();
        cy.xpath(`//div[@class="ChipSetContainer"]//button[@data-component="flight-search-cabinClass-Economy"]`).click();
        cy.xpath(`//div[@id="flight-occupancy"]//div[@class="Box-sc-kv6pi1-0 hRUYUu IconBox__wrapper"]`).click();
        cy.xpath(`//button[@data-test="SearchButtonBox"]`).click();

        // Select Maskapai
        cy.xpath(`//div[@data-testid="filter-container"]//button[@type='button']`).click({multiple: true});
        cy.xpath(`//div[@data-component='flight-filter-item-airline']//label[@data-element-value='Malaysia Airlines']//input[@type='checkbox']`).click();

        // Sortir berdasarkan yang tercepat
        cy.xpath(`//div[@data-element-name='flight-sort']`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//li[@role="presentation"][4]`).click();
        cy.get('#sort-options-label').click();
       
        // Select flight from the list
        cy.xpath(`//div[@class="Grid__GridStyled-sc-30ivvs-0 bGtMAu"]//div[@data-component="flight-card"]//button[@aria-label="Buka detail penerbangan"]`).first().click();
        cy.xpath(`//button[@data-component="flight-card-bookButton"]`).should('exist');
        cy.xpath(`//button[@data-component="flight-card-bookButton"]`).click();

        // Input Data 1
        cy.xpath(`//input[@id="contact.contactFirstName"]`).type('Reza');
        cy.xpath(`//input[@id="contact.contactLastName"]`).type('Paramarta');
        cy.xpath(`//input[@id="contact.contactEmail"]`).type('reza.paramarta@gmail.com');
        cy.xpath(`//div[@data-testid="contact.contactCountryOfResidenceId"]//button[@type="button"]`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.get('[data-element-name="contact-calling-code-input"]').click();
        cy.xpath(`//span[@class="sc-hLseeU Typographystyled__TypographyStyled-sc-1uoovui-0 bKjorE lfSBCC"]//input[@placeholder="Cari"]`).type('Indonesia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.xpath(`//input[@id='contact.contactPhoneNumber']`).type('08123456788');

        // Pilih Gender
        cy.xpath(`//input[@aria-label="Pria"][@type='radio']`).click();
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerGender"]//label[@data-element-name='0']`).click();

        // Data diri
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerFirstName']`).type('Reza');
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerLastName']`).type('Paramarta');

        // Data tanggal lahir
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId']`).type('4');
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]`).click();
        cy.xpath(`(//input[contains(@name,'dropdown-list-item')])[6]`).click();
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId']`).type('1992');
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerNationality"]`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.xpath(`//input[@id="flight.forms.i0.units.i0.passportNumber"]`).type('123456789');
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passportCountryOfIssue"]//button[@type="button"]`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();

        // Tanggal dan Habis berlaku password
        cy.xpath(`//input[@datatestid="flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId"]`).type('4');
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId"]`).click();
        cy.xpath(`(//input[contains(@name,'dropdown-list-item')])[6]`).click();
        cy.xpath(`//input[@data-testid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]`).type('2028');

        // Button Add to continue adds-on
        cy.xpath(`//button[@data-component="flight-continue-to-addOns-button"]`).click();
        cy.wait(5000);
        cy.xpath(`//div[@data-testid="radio-button-option-no"]`).click();
        cy.wait(5000);
        cy.xpath(`//button[@data-testid="continue-to-payment-button"]`).click();
        cy.xpath(`//button[@aria-label="close"]`).click();

    });
});