describe("APP_CONFIG", function() {
    it("app config should be defined with values", function() {
        expect(window.APP_CONFIG).toBeDefined();
        expect(window.APP_CONFIG.title).toBe("Portfolio");
        expect(window.APP_CONFIG.author).toBe("Dwayne Tucker");
    });
});