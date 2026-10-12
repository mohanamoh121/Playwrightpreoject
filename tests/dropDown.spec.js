import{test} from '@playwright/test'
test('Handling Single Alert',async({page})=>{
await page.goto('https://letcode.in/dropdowns')
const singleDropdown = await(page.locator('//select[@id="fruits"]'))
await singleDropdown.selectOption ({index:1})
const selectElement = await singleDropdown.locator('option:checked').textContent()
console.log('The selected value in the Fruit Dropdown is:',selectElement)

})

test('Handling Multiple Alert',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    const multipleDropdown = await page.locator('//select[@id="superheros"]')
    await multipleDropdown.selectOption([
        {value:"ta"},
        {index:5},
        {label:'Spider-Man'}])
const selectedValues = await multipleDropdown.locator('option:checked').allTextContents
console.log('The selected values in the Multiple DropDown are:',selectedValues)


const selectLanguage = await page.locator('//select[@id="lang"]')
await selectLanguage.selectOption({index:1})
const selectJava = await selectLanguage.locator('option:checked').textContent();
console.log('The selected Language java :',selectJava)

const selectCountry = await page.locator('//select[@id="country"]')
await selectCountry.selectOption({index:6})
const selectIndia = await selectCountry.locator('option:checked').textContent();
console.log('The selected country is India:',selectIndia)

await page.waitForTimeout(5000)

})
