interface IConfigureDarkLightThemeProps {}
const ConfigureDarkLightTheme: React.FC<
  IConfigureDarkLightThemeProps
> = ({}) => {
  /*
  how to change the theme in browser for testing
  stackoverflow
  https://stackoverflow.com/questions/57606960/how-can-i-emulate-prefers-color-scheme-media-query-in-chrome/67856736#67856736
  */
  /*
    in short ->
    open inspector
    options
    More tools
    Rendering
    Emulate CSS media feature prefers-color-scheme 
  */
  return (
    <div>
      <p className="text-[color:var(--primary)]">PagePractice</p>
    </div>
  );
};
export default ConfigureDarkLightTheme;
