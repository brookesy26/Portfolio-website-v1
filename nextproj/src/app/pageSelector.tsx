import Introduction from "./home/page"
import Projects from "./projects/page"
import SkillsAndHobbies from "./skills/page"

type PageType = {
  page: 'home' | 'projects' | 'skills'
}

const PageSelector = (props: PageType) => {

  function handlePageSelecting(enteredPage: PageType) {
    switch (enteredPage.page) {
      case 'home':
        return <Introduction />

      case 'projects':
        return <Projects />

      case 'skills':
        return <SkillsAndHobbies />

      default:
        return <Introduction />
    }
  }

  return (
    <article>{handlePageSelecting(props)}</article>
  )
}

export default PageSelector