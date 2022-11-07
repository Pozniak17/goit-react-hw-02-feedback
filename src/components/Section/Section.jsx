import { Title } from './Section.styles';
export const Section = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);
