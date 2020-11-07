const Wrapper = ({ theme, children }) => (
  <div
    className={`${theme} relative antialiased font-sans text-text bg-background min-h-screen overflow-hidden`}
  >
    {children}
  </div>
);

export default Wrapper;
