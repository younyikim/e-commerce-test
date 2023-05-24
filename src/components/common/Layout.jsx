import Header from './Header';

function Layout({ children, nav }) {
  return (
    <div>
      <Header />
      <main> {children} </main>
    </div>
  );
}

export default Layout;
