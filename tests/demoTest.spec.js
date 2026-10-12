import{test,expect} from '@playwright/test'
test('Validating Demo Automation Register Page',async({page})=>{
   await page.goto('https://demo.automationtesting.in/Register.html#google_vignette')
    const firstName = await page.locator('//input[@placeholder="First Name"]')
    await firstName.fill('Mohana')
    const lastName = await page.locator('//input[@placeholder="Last Name"]')
    await lastName.fill('Mona')
    const addressName = await page.locator('//textarea[@ng-model="Adress"]')
    await addressName.fill('Kandhanchavadi,chennai-600096')
const emailAddress = await page.locator('//input[@type="email"]')
await emailAddress.fill('mohana123a2gmail.com')
const phoneNum = await page.locator('//input[@type="tel"]')
await phoneNum.fill('9875456456')
const clickFemale = await page.locator('(//input[@value="FeMale"])[1]')
await clickFemale.click();
await page.waitForTimeout(3000)
const hobbyMovies = await page.locator('//input[@id="checkbox2"]')
await hobbyMovies.click();
const selectLanguage = await page.locator('//div[@id="msdd"]')
await selectLanguage.click()
// const selectEnglish = await page.locator("//a[text()='English']")
// await selectEnglish.click();
// const selectHindi = await page.locator("//a[text()='Hindi']")
// await selectHindi.click();
// const selectFrench = await page.locator("//a[text()='French']")
// await selectFrench.click();

await page.getByText('English').click();
await page.getByText('French').click();
await page.getByText('Hindi').click();

const selectSkill = await page.locator('//select[@id="Skills"]')
await selectSkill.selectOption({index:4})
const selElement =await selectSkill.locator('option:checked').textContent()
console.log('The selected value in trhe Skill dd is:',selElement)

//await page.locator('//input[@class="select2-search__field"]').click();
const selCountry = await page.locator('//input["#country"]').click();
await page.locator('')
const selectIndia = await selCountry.locator('option:checked').allTextContents
console.log('The selected country id:',selectIndia)
})
  