function Header({ headerData }): JSX.Element {
  return (
    <div className="flex items-center justify-between top-0">
      <img src={headerData.logo.url} className="w-24 md:w-32" />
      <div className="flex gap-10 mr-5">
        {headerData.menuItems.map((item) => (
          <div className="text-white md:text-xl font-semibold hover:text-facebook hover:cursor-pointer">
            {item.name.toUpperCase()}{' '}
          </div>
        ))}
        <div className="text-white font-semibold md:text-xl hover:text-facebook hover:cursor-pointer">
          CONTACT
        </div>
      </div>
    </div>
  );
}
export default Header;
