class orderTicket{
    tablist() {
        cy.xpath("//li[@id='tab-flight-tab']").click();
    }

    formBooking() {
        cy.xpath("//input[@id='flight-origin-search-input']").type(Cypress.env('FLIGHT_ORIGIN'));
        cy.xpath("//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]").click();
        cy.xpath("//div[@class='AutocompleteSearch NewDesign'][2]").click();
        cy.xpath("//input[@id='flight-destination-search-input']").type(Cypress.env('FLIGHT_DESTINATION'));
        cy.xpath("//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]").click();
        cy.xpath(`//div[@class="PriceSurgePicker-Day__circle PriceSurgePicker-Day__circle--wide"]//span[@data-selenium-date="2025-06-07"]`).click();
        cy.xpath(`//div[@class="ChipSetContainer"]//button[@data-component="flight-search-cabinClass-Economy"]`).click();
        cy.xpath(`//div[@id="flight-occupancy"]//div[@class="Box-sc-kv6pi1-0 hRUYUu IconBox__wrapper"]`).click();
        cy.xpath(`//button[@data-test="SearchButtonBox"]`).click();
    }

    selectFlight() {
        cy.xpath(`//div[@data-testid="filter-container"]//button[@type='button']`).click({multiple: true});
        cy.xpath(`//div[@data-component='flight-filter-item-airline']//label[@data-element-value='Malaysia Airlines']//input[@type='checkbox']`).click();
    }

    sortByFasterPlan() {
        cy.xpath(`//div[@data-element-name='flight-sort']`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//li[@role="presentation"][4]`).click();
        cy.get('#sort-options-label').click();
    }

    selectPlan() {
        cy.xpath(`//div[@class="Grid__GridStyled-sc-30ivvs-0 bGtMAu"]//div[@data-component="flight-card"]//button[@aria-label="Buka detail penerbangan"]`).first().click();
        cy.xpath(`//button[@data-component="flight-card-bookButton"]`).should('exist');
        cy.xpath(`//button[@data-component="flight-card-bookButton"]`).click();
    }

    formDataInput() {
        cy.xpath(`//input[@id="contact.contactFirstName"]`).type(Cypress.env('CONTACT_FIRST_NAME'));
        cy.xpath(`//input[@id="contact.contactLastName"]`).type(Cypress.env('CONTACT_LAST_NAME'));
        cy.xpath(`//input[@id="contact.contactEmail"]`).type(Cypress.env('CONTACT_EMAIL'));
        cy.xpath(`//div[@data-testid="contact.contactCountryOfResidenceId"]//button[@type="button"]`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.get('[data-element-name="contact-calling-code-input"]').click();
        cy.xpath(`//span[@class="sc-hLseeU Typographystyled__TypographyStyled-sc-1uoovui-0 bKjorE lfSBCC"]//input[@placeholder="Cari"]`).type('Indonesia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.xpath(`//input[@id='contact.contactPhoneNumber']`).type(Cypress.env('CONTACT_PHONE_NUMBER'));
    }

    selectGender() {
        cy.xpath(`//input[@aria-label="Pria"][@type='radio']`).click();
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerGender"]//label[@data-element-name='0']`).click();
    }

    selfIdentity() {
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerFirstName']`).type(Cypress.env('PASSENGER_FIRST_NAME'));
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerLastName']`).type(Cypress.env('PASSENGER_LAST_NAME'));
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId']`).type(Cypress.env('PASSENGER_DATE'));
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]`).click();
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]//button[@type="button"]`).click();       
        cy.xpath(`//ul[@role="listbox"]//li[6]//input[@type="radio"][@name="dropdown-list-item"]`).click();
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId']`).type(Cypress.env('PASSENGER_YEAR'));
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerNationality"]`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.xpath(`//input[@id="flight.forms.i0.units.i0.passportNumber"]`).type(Cypress.env('PASSENGER_PASSPORT'));
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passportCountryOfIssue"]//button[@type="button"]`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
    }

     passportCredentials() {
         cy.xpath(`//input[@datatestid="flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId"]`).type(Cypress.env('PASSPORT_DATE'));
         cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId"]`).click();
         cy.xpath(`//ul[@role="listbox"]//li[6]//input[@type="radio"][@name="dropdown-list-item"]`).click();
         cy.xpath(`//input[@data-testid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]`).type(Cypress.env('PASSPORT_YEAR'));
     }

    createOrderTicket() {
        cy.xpath('//button[@data-component="flight-continue-to-addOns-button"]')
            .should('be.visible')  // Pastikan tombol terlihat sebelum mengklik
            .click({force: true});
        cy.wait(5000);
        cy.xpath(`//button[@type="submit"][@data-testid="continue-to-payment-button"]`)
            .should('be.visible')  // Pastikan tombol terlihat
            .click();  // Klik tombol untuk melanjutkan        
        //cy.xpath(`//button[@type="submit"][@data-testid="continue-to-payment-button"]`).click();
        //cy.xpath(//button[@data-action="CEG_UPSELL"][@type="button"]//span[@class="sc-hLseeU Typographystyled__TypographyStyled-sc-1uoovui-0 bKjorE haUxpM"]).click({multiple: true});
    }

    assertionCriteria() {
        cy.xpath(`//div[@data-component="name-container"]//div[@class="Box-sc-kv6pi1-0 fKqVJP"]`).should('be.visible').contains('Reza Paramarta');
        cy.xpath(`//div[@data-component="flight-booking-itineraryHeader"][@data-section="title-bar"]//h5[1]`).should('be.visible').contains('Jakarta')
        cy.xpath(`//div[@data-component='flight-booking-itineraryHeader']//h5[2]`).should('be.visible').contains('Singapura');
        cy.xpath(`//dd[@data-component='mob-flight-price-total-desc']//span`).should('be.visible');
    }
}

export default new orderTicket();