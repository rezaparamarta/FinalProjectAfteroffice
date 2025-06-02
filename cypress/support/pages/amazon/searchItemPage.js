class filterItemPage {
    searchItems() {
        cy.xpath(`//input[@id="twotabsearchtextbox"]`).type('chair');
        cy.xpath(`//div[@class="nav-right"]//input[@type="submit"]`).click();
    }

    sortFeatureItems() {
        cy.get('#a-autoid-0-announce').click();
        cy.xpath(`//div[@class="a-popover-inner"]//li[3]`).click();
        cy.xpath(`//div[@data-asin="B0F2YLDXXW"]`).click();
    }

    assertionPage() {
        cy.xpath(`//h1[@id="title"]//span[@id="productTitle"]`).should('be.visible').should('have.text', '        Office Chair Recliner Leather Ergonomic Manager and Executive Office Chair(Black)       ');
        cy.xpath(`//div[@id="corePrice_feature_div"]//div[@data-csa-c-type="widget"]//span[@class="a-price-whole"]`).should('be.visible');
    }
}

export default new filterItemPage();