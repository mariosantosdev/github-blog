import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 1rem;
  width: 100vw;

  margin-top: 4.5rem;

  @media (max-width: 47rem) {
    margin-top: 2.5rem;
  }
`

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  max-width: 54rem;
  width: 100%;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  label {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    text-align: left;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-span']};
    text-align: right;
  }
`

export const SearchInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
