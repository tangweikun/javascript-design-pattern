import { About, Careers, DarkTheme, LightTheme } from '../Sample-1'

test('Bridge', () => {
  const darkTheme = new DarkTheme()
  const lightTheme = new LightTheme()

  const about = new About(darkTheme)
  const careers = new Careers(lightTheme)
  expect(about.getContent()).toBe('About page in Dark Black')
  expect(careers.getContent()).toBe('Careers page in Off white')
})
