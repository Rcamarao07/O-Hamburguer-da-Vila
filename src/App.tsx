/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Route, Switch } from 'wouter';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-yellow selection:text-black">
        <Navigation />
        
        <main>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/ementa" component={Menu} />
          </Switch>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

