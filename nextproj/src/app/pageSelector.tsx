import Intro from "./home/intro"
import Projects from "./projects/projects"
import SkillsAndHobbies from "./skills/skillsandHobbies"


type PageType = {
  page: string;
}


const PageSelector = (props: PageType) => {

  function handlePageSelecting(enteredPage: PageType) {
    switch (enteredPage.page) {
      case 'home':
        return <Intro />

      case 'project':
        return <Projects />

      case 'skill':
        return <SkillsAndHobbies />

      default:
        return <Intro />
    }
  }

  return (handlePageSelecting(props))
}

export default PageSelector