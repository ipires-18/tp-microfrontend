import { Orchestrator } from '@app/orchestrator';
import { render } from '@testing-library/react';
jest.mock('workpass_mf_client/main');

jest.mock('@routes/index', () => ({
  Router: () => <div>Mocked Router</div>,
}));

jest.mock('react-redux', () => ({
  Provider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('Orchestrator', () => {
  it('deve renderizar corretamente', () => {
    const { getByText } = render(<Orchestrator />);

    // Verifica se o conteúdo mockado do Router está presente
    expect(getByText('Mocked Router')).toBeInTheDocument();
  });
});
