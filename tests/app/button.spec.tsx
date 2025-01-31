import { Button } from '@components/button';
import { render } from '@testing-library/react';

describe('Orchestrator', () => {
  it('Deve renderizar o Button fake', () => {
    const { getByText } = render(<Button name='Oláaa' />);
    expect(getByText('Oláaa')).toBeInTheDocument();
  });
});
