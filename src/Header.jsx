import GlobalNav from './GlobalNav';

function Header({ setPage }) {
    return (
        <header className="header">

            <div className='header-container'>
                <GlobalNav className="header_nav" setPage={setPage} />
            </div>

        </header>

    );
}

export default Header;