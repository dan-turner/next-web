type Props = {
  name: string;
};

export const Name = ({ name }: Props): JSX.Element => <p>Hi {name}</p>;
