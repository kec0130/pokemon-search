import styled from '@emotion/styled';

const Error = () => {
  return (
    <ErrorContainer>
      <h2>Pokemon not found!</h2>
      <p>Are you sure you got the right pokemon id?</p>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  color: #2e3057;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;
