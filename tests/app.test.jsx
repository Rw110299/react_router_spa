import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../cod/App.jsx';

describe('App SPA React Router', () => {
  test('render home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Bem-vindo à Home/i)).toBeInTheDocument();
  });

  test('render about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Projeto SPA simples/i)).toBeInTheDocument();
  });

  test('render contact page', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/richard@example.com/i)).toBeInTheDocument();
  });
});
