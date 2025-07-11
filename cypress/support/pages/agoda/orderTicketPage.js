class orderTicket {
    tablist() {
        cy.xpath("//li[@id='tab-flight-tab']").click();
    }

    formBooking() {
        const flightOrigin = Cypress.env('FLIGHT_ORIGIN');
        const flightDestination = Cypress.env('FLIGHT_DESTINATION');
        
        // Log values to check if they are correctly picked from environment variables
        cy.log('Flight Origin:', flightOrigin);
        cy.log('Flight Destination:', flightDestination);

        cy.xpath("//input[@id='flight-origin-search-input']").type(flightOrigin);
        cy.xpath("//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]").click();
        cy.xpath("//div[@class='AutocompleteSearch NewDesign'][2]").click();
        cy.xpath("//input[@id='flight-destination-search-input']").type(flightDestination);
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
        const firstName = Cypress.env('CONTACT_FIRST_NAME');
        const lastName = Cypress.env('CONTACT_LAST_NAME');
        const email = Cypress.env('CONTACT_EMAIL');
        const phoneNumber = Cypress.env('CONTACT_PHONE_NUMBER');

        cy.xpath(`//input[@id="contact.contactFirstName"]`).type(firstName);
        cy.xpath(`//input[@id="contact.contactLastName"]`).type(lastName);
        cy.xpath(`//input[@id="contact.contactEmail"]`).type(email);
        cy.xpath(`//div[@data-testid="contact.contactCountryOfResidenceId"]//button[@type="button"]`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.get('[data-element-name="contact-calling-code-input"]').click();
        cy.xpath(`//span[@class="sc-hLseeU Typographystyled__TypographyStyled-sc-1uoovui-0 bKjorE lfSBCC"]//input[@placeholder="Cari"]`).type('Indonesia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.xpath(`//input[@id='contact.contactPhoneNumber']`).type(phoneNumber);
    }

    selectGender() {
        cy.xpath(`//input[@aria-label="Pria"][@type='radio']`).click();
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerGender"]//label[@data-element-name='0']`).click();
    }

    selfIdentity() {
        const passenggerFirstName = Cypress.env('PASSENGER_FIRST_NAME');
        const passengerLastName = Cypress.env('PASSENGER_LAST_NAME');
        const passengerDate = Cypress.env('PASSENGER_DATE');
        const passengerYear = Cypress.env('PASSENGER_YEAR');
        const passportNumber = Cypress.env('PASSENGER_PASSPORT');

        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerFirstName']`).type(passenggerFirstName);
        cy.xpath(`//input[@id='flight.forms.i0.units.i0.passengerLastName']`).type(passengerLastName);
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId']`).type(passengerDate);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]`).click();
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]//button[@type="button"]`).click();
        cy.xpath(`//ul[@role="listbox"]//li[6]//input[@type="radio"][@name="dropdown-list-item"]`).click();
        cy.xpath(`//input[@data-testid='flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId']`).type(passengerYear);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passengerNationality"]`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
        cy.xpath(`//input[@id="flight.forms.i0.units.i0.passportNumber"]`).type(passportNumber);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passportCountryOfIssue"]//button[@type="button"]`).click();
        cy.xpath(`//input[@placeholder="Cari"]`).type('Malaysia');
        cy.xpath(`//ul[@role="listbox"]//input[@type="radio"]`).click();
    }

    passportCredentials() {
        const passportDate = Cypress.env('PASSPORT_DATE');
        const passportYear = Cypress.env('PASSPORT_YEAR');

        cy.xpath(`//input[@datatestid="flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId"]`).type(passportDate);
        cy.xpath(`//div[@data-testid="flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId"]`).click();
        cy.xpath(`//ul[@role="listbox"]//li[6]//input[@type="radio"][@name="dropdown-list-item"]`).click();
        cy.xpath(`//input[@data-testid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]`).type(passportYear);
    }

    createOrderTicket() {
        cy.wait(5000);
        cy.xpath('//button[@data-component="flight-continue-to-addOns-button"]', {timeout: 30000})
            .should('be.visible')
            .and('not.be.disabled')
            .click({force: true});
        cy.wait(5000);
        cy.xpath(`//button[@type="submit"][@data-testid="continue-to-payment-button"]`)
            .should('be.visible')  // Pastikan tombol terlihat
            .click();  // Klik tombol untuk melanjutkan        
    }

    assertionCriteria() {
        cy.xpath(`//div[@data-component="name-container"]//div[@class="Box-sc-kv6pi1-0 fKqVJP"]`).should('be.visible').contains('Reza Paramarta');
        cy.xpath(`//div[@data-component="flight-booking-itineraryHeader"][@data-section="title-bar"]//h5[1]`).should('be.visible').contains('Jakarta')
        cy.xpath(`//div[@data-component='flight-booking-itineraryHeader']//h5[2]`).should('be.visible').contains('Singapura');
        cy.xpath(`//dd[@data-component='mob-flight-price-total-desc']//span`).should('be.visible');
    }
}

export default new orderTicket();
