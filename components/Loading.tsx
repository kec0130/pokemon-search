import styled from '@emotion/styled';
import Image from 'next/image';

const Loading = () => {
  return (
    <LoadingContainer>
      <Image src="/pokeball.png" alt="loading" width={200} height={200} />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  animation: shake 0.3s infinite;

  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
`;
