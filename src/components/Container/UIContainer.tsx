function UIContainer({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="p-5 sm:px-20 sm:py-10">{children}</div>;
}

export default UIContainer;
