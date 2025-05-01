const {test, except, expect} = require ('@playwright/test')

test('My first test', async ({page}) => {

    // Go to the website
    await page.goto('https://google.com')

    // Check if the title is correct
    await expect(page).toHaveTitle('Google')
})