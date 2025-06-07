interface Props {
  children?: React.ReactNode;
}

const ContentLayout = ({
  children,
  className,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`${className} px-5`} {...rest}>
    {children}
  </div>
);

export default ContentLayout;
