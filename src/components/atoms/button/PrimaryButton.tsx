import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, isDisabled = false, isLoading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isLoading={isLoading}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
