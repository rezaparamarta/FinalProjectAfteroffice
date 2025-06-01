describe('Final Project', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Order Flight', () => {
        cy.visit('https://www.agoda.com/id-id/');

        // Click Flight Icon
        cy.xpath("//li[@id='tab-flight-tab']").click();
        cy.xpath("//input[@id='flight-origin-search-input']").type('Jakarta');
        cy.xpath("//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]").click();
        cy.xpath("//div[@class='AutocompleteSearch NewDesign'][2]").click();
        cy.xpath("//input[@id='flight-destination-search-input']").type('Singapore');
        cy.xpath("//div[@class='Popup__content']//li[@data-selenium='autosuggest-item'][1]").click();
        cy.xpath(`//div[@class='PriceSurgePicker-Day PriceSurgePicker-Day__Wide '][@aria-label='Mon Jun 02 2025 ']`).click();
        cy.xpath(`//button[@class='Buttonstyled__ButtonStyled-sc-5gjk6l-0 jyyvGo ChipItem Cabin ChipItem--selected'][@data-component='flight-search-cabinClass-Economy']`).click();
        cy.xpath(`//div[@id='flight-occupancy']`).click();
        cy.xpath(`//button[@data-selenium='searchButton']`).click();

        // Select Maskapai
        cy.xpath(`//div[@class='a5d86-box a5d86-fill-inherit a5d86-text-inherit a5d86-self-center a5d86-flex      ']//button[@type='button']`).click();
        cy.xpath(`//div[@data-component='flight-filter-item-airline']//label[@data-element-value='Malaysia Airlines']//input[@type='checkbox']`).click();

        // Sortir berdasarkan yang tercepat
        cy.xpath(`//div[@data-element-name='flight-sort']`).click();
        cy.xpath(`//div[@data-testid="floater-container"]//li[@role="presentation"][4]`).click();
        cy.xpath(`//button[@type="button"]//div[@class="a5d86-box a5d86-fill-inherit a5d86-text-inherit a5d86-pr-4      "]//p[@id="sort-options-label"]`).should('be.visible').click();
       
        // Select flight from the list
        cy.xpath(`//div[@class="sc-cjERFW fdGdnw"]//div[@class="sc-cCYyox iNqLle"][1]`).should('exist').click();
        cy.xpath(`//button[@data-component="flight-card-bookButton"]`).should('be.visible');

        // // Input Data
        // cy.xpath(`//input[@id='contact.contactFirstName']`).type('Reza');
    })
})