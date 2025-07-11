class filterItemPage {
    searchItems() {
        cy.xpath(`//input[@id="twotabsearchtextbox"]`).type('chair');
        cy.xpath(`//div[@class="nav-right"]//input[@type="submit"]`).click();
    }

    sortFeatureItems() {
        cy.get('#a-autoid-0-announce').click();
        cy.xpath(`//div[@class="a-popover-inner"]//li[3]`).click();
        cy.xpath(`//div[@class="s-main-slot s-result-list s-search-results sg-row"]//div[@role="listitem"][@data-index="7"]`).click();
    }

    assertionPage() {
        cy.xpath(`//h1[@id="title"]//span[@id="productTitle"]`).should('be.visible');
        cy.xpath(`//div[@id="corePrice_feature_div"]//span[@class="a-price-whole"]`).should('be.visible');
    }
}

export default new filterItemPage();