import { FC, useEffect } from 'react';
import { useRegisterEvents, useSigma } from 'react-sigma-v2';

interface Props {
  setHoveredNode: (node: string | null) => void;
}

const GraphEventsController: FC<Props> = ({ setHoveredNode, children }) => {
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();

  // initialize settings that require to know the graph and/or the sigma instance
  useEffect(() => {
    // Register Sigma events
    registerEvents({
      enterNode: ({ node }) => setHoveredNode(node),
      leaveNode: () => setHoveredNode(null),
    });
  }, [sigma, registerEvents, setHoveredNode]);

  return <>{children}</>;
};

export default GraphEventsController;
