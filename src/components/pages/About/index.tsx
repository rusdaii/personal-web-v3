import Container from '@/components/elements/Container';
import AboutImageCard from '@/components/parts/About/AboutImageCard';
import AboutMe from '@/components/parts/About/AboutMe';
import AnimationCard from '@/components/parts/About/AnimationCard';
import ContactCard from '@/components/parts/About/ContactCard';
import LearningCard from '@/components/parts/About/LearningCard';
import PersonaCard from '@/components/parts/About/PersonaCard';
import TechStackCard from '@/components/parts/About/TechStackCard';
import { getSkills } from '@/repositories/skills';
import { getUser } from '@/repositories/user';

const About = async () => {
  const { data: skillsData } = await getSkills();

  const { data: userData } = await getUser();

  return (
    <div
      className="about lg:mb-0 lg:mt-0 lg:grid lg:place-content-center lg:fixed lg:inset-0
      bg-gradient-to-t from-secondary/15 to-primary/10"
    >
      <Container className="max-w-sm lg:max-w-5xl py-32 z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5">
          <div className="grid grid-cols-1">
            <AboutMe />
            <AboutImageCard user={userData} />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <LearningCard />
            <TechStackCard skills={skillsData} />
            <ContactCard email={userData.email} />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <PersonaCard />
            <AnimationCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
