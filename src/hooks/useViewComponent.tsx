import { ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ComponentProps {
  children: ReactNode;
}

const ViewComponent: React.FC<ComponentProps> = ({ children }) => {
  const [showComponent, setShowComponent] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Define o quanto do componente deve estar visível antes de ser considerado "no viewport"
  });
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      setShowComponent(true);
    }
  }, [inView]);

  return <div ref={componentRef}>{showComponent && children}</div>;
};

export default ViewComponent;
