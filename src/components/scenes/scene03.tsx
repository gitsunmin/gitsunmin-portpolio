import { MotionValue, motion, useTransform } from 'framer-motion';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import ActivityList from '../section/experience/ActivityList';
import ProjectList from '../section/experience/ProjectList';
import { P, match } from 'ts-pattern';

type Props = React.PropsWithChildren<{
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}>;

export default (props: Props) => {
  const { scrollYProgress, start, end } = props;
  const opacity = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0, 1, 0]
  );

  return (
    <motion.section
      style={{ opacity }}
      className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full ${match(
        scrollYProgress
      )
        .with(P.number.gt(end), () => 'hidden')
        .with(P.number.lt(start), () => 'hidden')
        .otherwise(() => '')}`}
      aria-label="scene03, experience section"
    >
      <Section
        className="flex justify-center flex-wrap w-full"
        aria-label="experience section"
      >
        <SectionTitle className="w-full text-center">Experience</SectionTitle>
        <ProjectList />
        <ActivityList />
      </Section>
    </motion.section>
  );
};
