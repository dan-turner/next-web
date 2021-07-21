import { INLINES, Document } from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  NodeRenderer,
  Options,
} from "@contentful/rich-text-react-renderer";
import { NextAnchor } from "./next-anchor";

export type Props = {
  document: Document;
};

const HyperLink: NodeRenderer = ({ data }, children) => {
  let href: string | undefined;
  if (data && data.uri && typeof data.uri === "string") {
    href = data.uri;
  }
  return <NextAnchor href={href}>{children}</NextAnchor>;
};

export const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: HyperLink,
  },
};

const RichText = ({ document }: Props): JSX.Element => (
  <>{documentToReactComponents(document, options)}</>
);

export default RichText;
