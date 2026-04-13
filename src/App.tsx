/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { DestinationDetail } from './pages/DestinationDetail';
import { PackingList } from './pages/PackingList';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:id" element={<DestinationDetail />} />
          <Route path="packing" element={<PackingList />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
