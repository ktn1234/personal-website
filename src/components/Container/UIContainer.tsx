function UIContainer({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <main id="main" className="p-5 sm:px-20 sm:py-10">
      {children}
    </main>
  );
}

export default UIContainer;
