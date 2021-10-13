interface Props {
    title: string;
}

export const Navbar = ({ title }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </div>
    </nav>
  );
};
