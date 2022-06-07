import CustomThemeProvider from './components/CustomThemeProvider';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <CustomThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </CustomThemeProvider>
  );
}

export default App;