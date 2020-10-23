const Wrapper = ({ theme, children }) => (
  <div className={`${theme} relative antialiased font-sans text-text bg-background`}>
    {children}
  </div>
);

export default Wrapper;
