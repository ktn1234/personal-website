function UIContainer({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="px-10 py-5 sm:px-20 sm:py-10 md:px-30 md:py-20">
      {children}
    </div>
  );
}

export default UIContainer;
