import styled from "styled-components";

export const SBaseButton = styled.button`
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  border-radius: 1px;
  margin-right: 8px;
`;