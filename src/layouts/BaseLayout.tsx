interface Props {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => (
  <div className="flex-grow mt-[64px]">{children}</div>
);

export default BaseLayout;
