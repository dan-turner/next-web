import ReactMarkdown from "react-markdown";
import { NextAnchor } from "./next-anchor";

type Props = {
  children: string;
};

const Markdown = ({ children }: Props): JSX.Element => (
  <ReactMarkdown
    components={{
      a: NextAnchor,
    }}
  >
    {children}
  </ReactMarkdown>
);

export default Markdown;
