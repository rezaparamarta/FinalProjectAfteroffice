import filterItemPage from '../support/pages/amazon/searchItemPage';
import trendingPage from '../support/pages/youtube/trendingPage';
import orderTicket from '../support/pages/agoda/orderTicketPage';

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
        cy.wait(5000);
        // Click Flight Icon
        orderTicket.tablist();
        // Setup form
        orderTicket.formBooking();
        // Select Maskapai
        orderTicket.selectFlight();
        // Sortir berdasarkan yang tercepat
        cy.wait(3000);
        orderTicket.sortByFasterPlan();
        // Select flight from the list
        orderTicket.selectPlan();
        // Input Data 1
        orderTicket.formDataInput();
        // Pilih Gender
        orderTicket.selectGender();
        // Data diri
        orderTicket.selfIdentity();
        // Tanggal dan Habis berlaku password
        // orderTicket.passportCredentials();
        // // Button Add to continue adds-on, confirmation payment, and close pop up adds-on
        // orderTicket.createOrderTicket();
        // // Assertion Passenger Details (Name, departume time and location then price)
        // orderTicket.assertionCriteria();
    });
});